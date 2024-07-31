import { Link, useNavigate } from "react-router-dom";
import { FormEvent, useRef, useState } from "react";
import { AuthFormProps } from "../../types/index";
import { Button, Logo } from "../../Common";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import React from "react";
import toast from "react-hot-toast";
import { BiLoaderCircle } from "react-icons/bi";
import { authFormSubmit } from "../../api/APIs";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import Input from "@/Common/Input";

const AuthForm = ({ variant, title, api }: AuthFormProps) => {
  const initialAuthFormState = {
    email: "",
    password: "",
    ...(variant === "SIGNUP" && { name: "" }),
  };
  const [isLoading, setIsLoading] = useState(false);
  const [merchantKey, setMerchantKey] = useState("");
  const [form, setForm] = useState<any>(initialAuthFormState);
  const [showPass, setShowPass] = useState(false);
  const [vat, setVat] = useState<any>("");
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [fileDisplayURL, setFileDisplayURL] = useState<string>("");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  console.log(hoveredIndex);
  const urlParams = new URLSearchParams(window.location.search);
  const isWorker = urlParams.get("isWorker") === "true" || false;
  const isEmployer = urlParams.get("isEmplyoer") === "true" || false;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const fileUrl = URL.createObjectURL(file);
      setFileDisplayURL(fileUrl);
      setFile(file);
    }
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    let modifyApi = api;
    if (isWorker) {
      modifyApi = "worker/register";
    }
    let updatedForm = { ...form };
    if (isEmployer) {
      updatedForm.Vat_no = vat;
      updatedForm.Photo = file;
      modifyApi = "employer/register";
    }
    if (merchantKey) {
      modifyApi = `login?merchantKey=${merchantKey}`;
    }

    try {
      const res = await authFormSubmit(modifyApi, updatedForm);
      toast.success(res.data.message || "Success");
      if (res.status === 200) {
        variant === "SIGNIN" ? navigate("/") : navigate("/login");
        if (variant === "SIGNIN") {
          localStorage.setItem("token", res.data.token);
        }
      }
    } catch (error: any) {
      toast.error(error?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPasswordClick = () => {
    navigate("/otp");
  };

  return (
    <div className="h-[100vh]  xl:overflow-y-hidden">
      <section className="w-full  min-h-screen flex ">
        <div className="basis-[50%] md:block  hidden ">
          <img
            src="/login.jpg"
            alt="assignment"
            className="h-full object-cover"
          />
        </div>
        <div className="md:basis-[50%]  flex flex-col items-center justify-center text-black-1 basis-full  xl:py-2">
          <div className="sm:mx-auto sm:w-full sm:max-w-md flex justify-center flex-col items-center">
            <Logo large />
            <h2 className="mt-4 text-center text-3xl font-bold">
              {isWorker && "Worker"}
              {isEmployer && "Employer"} {title}
            </h2>
          </div>
          <div className="mt-6  sm:mx-auto w-full sm:max-w-md">
            <div className="px-4 py-2 sm:rounded-lg sm:px-10">
              <form
                onSubmit={handleFormSubmit}
                className={`${
                  variant === "SIGNUP" ? "space-y-2" : "space-y-6 "
                }`}
              >
                {variant === "SIGNUP" && (
                  <>
                    <Input
                      id="name"
                      placeholder="Name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                    />
                  </>
                )}
                <Input
                  type="text"
                  placeholder="Merchant Key"
                  value={merchantKey}
                  onChange={(e) => setMerchantKey(e.target.value)}
                  required={false}
                />
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <div className="relative">
                  <Input
                    id="pass"
                    placeholder="Password"
                    type={showPass ? "text" : "password"}
                    required
                    value={form.password}
                    onChange={(e) =>
                      setForm({ ...form, password: e.target.value })
                    }
                  />
                  <div
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-2 bottom-4 cursor-pointer"
                  >
                    {showPass ? (
                      <FaRegEyeSlash size={20} className="text-gray-400" />
                    ) : (
                      <FaRegEye size={20} className="text-gray-400" />
                    )}
                  </div>
                </div>
                {isEmployer && (
                  <Input
                    id="vat"
                    placeholder="Vat Number"
                    type="number"
                    min={1}
                    required
                    value={vat}
                    onChange={(e) => setVat(parseInt(e.target.value))}
                  />
                )}

                {isEmployer && (
                  <div className="flex gap-2">
                    <div
                      className={`border border-dashed border-[#1475cf] min-h-[120px] min-w-[120px] flex items-center justify-center max-h-[120px] max-w-[120px] cursor-pointer`}
                      onClick={() => inputRef.current?.click()}
                    >
                      <input
                        type="file"
                        name="file"
                        id="file"
                        hidden
                        ref={inputRef}
                        accept="image/*"
                        onChange={handleFileChange}
                        required
                      />
                      <div
                        className={`flex flex-col justify-center items-center w-full h-full`}
                      >
                        <MdCloudUpload color="#1475cf" size={30} />
                        <p className="text-[12px] text-center">3MB</p>
                      </div>
                    </div>

                    {fileDisplayURL && (
                      <div
                        onMouseLeave={() => setHoveredIndex(null)}
                        className="relative flex items-center justify-center border-gray-200 border min-h-[120px] min-w-[120px] max-h-[120px] max-w-[120px] cursor-pointer"
                      >
                        <img
                          src={fileDisplayURL}
                          className="object-cover w-full h-full p-1"
                          alt={"image"}
                        />
                        <MdDelete
                          className="absolute cursor-pointer text-gray-800 hover:text-red-600 transition duration-300"
                          size={20}
                        />
                      </div>
                    )}
                  </div>
                )}

                {variant === "SIGNIN" && (
                  <div className="my-1">
                    <p
                      className="underline cursor-pointer text-sm"
                      onClick={handleForgotPasswordClick}
                    >
                      Forgot Password ?
                    </p>
                  </div>
                )}

                <Button
                  disabled={isLoading}
                  className="h-[2.7rem] bg-black-1 w-full flex justify-center items-center"
                >
                  {variant === "SIGNIN" ? (
                    isLoading ? (
                      <BiLoaderCircle
                        className="animate-spin"
                        color="#ffffff"
                        size={25}
                      />
                    ) : (
                      "Login"
                    )
                  ) : isLoading ? (
                    <BiLoaderCircle
                      className="animate-spin"
                      color="#ffffff"
                      size={25}
                    />
                  ) : (
                    "Signup"
                  )}
                </Button>

                <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
                  <h2>
                    {variant === "SIGNIN"
                      ? "New to Assignment ?"
                      : "Already have an account"}
                  </h2>
                  <Link
                    onClick={() => setForm(initialAuthFormState)}
                    to={variant === "SIGNIN" ? "/register" : "/login"}
                    className="underline cursor-pointer hover:bg-white-1"
                  >
                    {variant === "SIGNIN" ? "Create an account" : "Login"}
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuthForm;
