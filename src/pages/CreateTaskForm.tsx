import React, { useEffect, useRef, useState } from "react";
import MainHeader from "../components/MainHeader";
import toast from "react-hot-toast";
import { BiLoaderCircle } from "react-icons/bi";
import { taskCreate, validateQRCode } from "../api/APIs";
import TextEditor from "./TextEditor";
import MultipleInput from "../Common/MultipleInput";
import { MdCloudUpload } from "react-icons/md";
import QRCode from "qrcode";
import { AiFillDelete, AiOutlinePlus } from "react-icons/ai";
import { Button } from "@/components/ui/button";

const initialState = {
  taskDescription: "",
  taskName: "",
  projectAmount: "",
  deadline: "",
  skills: [],
  documentation: "Everyone Experience.pdf",
  fieldType: "mobileApplication",
  remarks1: "",
  remarks2: "",
  OneTimePayment: true,
  projectpaymentway: [{ name: "", amount: "", description: "" }],
};

const CreateTaskForm = () => {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [validateQRLoading, setValidateQRLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [fileDisplayURL, setFileDisplayURL] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [qrCodeData, setQrCodeData] = useState("");
  const [qrSrc, setQrSrc] = useState("");
  const [taskId, setTaskId] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  console.log(validateQRLoading);
  console.log(hoveredIndex);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const fileUrl = URL.createObjectURL(file);
      setFileDisplayURL(fileUrl);
      setFile(file);
    }
  };

  const handleMilestoneChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const newMilestones: any = [...form.projectpaymentway];
    newMilestones[index][field] = value;
    setForm({ ...form, projectpaymentway: newMilestones });
  };

  const addMilestone = () => {
    setForm({
      ...form,
      projectpaymentway: [
        ...form.projectpaymentway,
        {
          name: "",
          amount: "",
          description: "",
        },
      ],
    });
  };

  const removeMilestone = (index: number) => {
    const newMilestones = form.projectpaymentway.filter((_, i) => i !== index);
    setForm({ ...form, projectpaymentway: newMilestones });
  };

  const handlePaymentOptionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    if (selectedValue === "onetime") {
      setForm({
        ...form,
        OneTimePayment: true,
        projectpaymentway: [{ name: "", amount: "", description: "" }],
      });
    } else {
      setForm({ ...form, OneTimePayment: false });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("taskName", form.taskName);
    formData.append("taskDescription", form.taskDescription);
    formData.append("projectAmount", form.projectAmount);
    formData.append("deadline", form.deadline);
    formData.append("fieldType", form.fieldType);
    formData.append("remarks1", form.remarks1);
    formData.append("remarks2", form.remarks2);
    formData.append("OneTimePayment", form.OneTimePayment.toString());
    form.skills.forEach((skill) => formData.append("skills", skill));
    if (file) {
      formData.append("documentation", file);
    }

    if (!form.OneTimePayment) {
      form.projectpaymentway.forEach((milestone, index) => {
        formData.append(`projectpaymentway[${index}][name]`, milestone.name);
        formData.append(
          `projectpaymentway[${index}][amount]`,
          milestone.amount
        );
        formData.append(
          `projectpaymentway[${index}][description]`,
          milestone.description
        );
      });
    }

    try {
      const res = await taskCreate(formData);
      console.log(res.data);
      setQrCodeData(res.data.data);
      setTaskId(res.data._id);
      setShowModal(true);
      toast.success(res.data.message || "Success");
    } catch (error: any) {
      console.log(error);
      toast.error(error.message || error.error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (showModal && qrCodeData) {
      QRCode.toDataURL(qrCodeData).then(setQrSrc);
    }
  }, [showModal, qrCodeData]);

  const handleValidateQRCode = async () => {
    setValidateQRLoading(true);
    try {
      const res = await validateQRCode({ task_id: taskId });
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setValidateQRLoading(false);
    }
  };

  return (
    <>
      <MainHeader />
      <div className="bg-white-1 shadow-md px-36 pt-28 pb-8 mb-4">
        <form className="">
          <div className="flex flex-wrap gap-10 w-full">
            <div className="mb-4 basis-[48%]">
              <label
                htmlFor="taskName"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Task Name
              </label>
              <input
                type="text"
                id="taskName"
                value={form.taskName}
                onChange={(e) => setForm({ ...form, taskName: e.target.value })}
                className="flex h-11 w-full border border-gray-300 bg-white-1 text-gray-950  px-3 py-2 focus:outline-none text-sm placeholder:text-neutral-400 group-hover/input:shadow-none transition duration-400"
              />
            </div>
            <div className="basis-[48%]">
              <label
                htmlFor="documentation"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Documentation
              </label>
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
                    accept="application/pdf"
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
                    className="relative flex items-center justify-center border-gray-200  cursor-pointer"
                  >
                    <h1 className="text-sm">{file?.name}</h1>
                  </div>
                )}
              </div>
            </div>

            <div className="mb-4 basis-[48%]">
              <label
                htmlFor="projectAmount"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Project Amount
              </label>

              <input
                type="number"
                id="projectAmount"
                value={form.projectAmount}
                onChange={(e) =>
                  setForm({ ...form, projectAmount: e.target.value })
                }
                className="flex h-11 w-full border border-gray-300 bg-white-1 text-gray-950 px-3 py-2 focus:outline-none text-sm placeholder:text-neutral-400 group-hover/input:shadow-none transition duration-400"
              />
            </div>
            <div className="basis-[48%]">
              <label
                htmlFor="Deadline"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Deadline
              </label>
              <input
                type="date"
                id="deadline"
                value={form.deadline}
                onChange={(e) => setForm({ ...form, deadline: e.target.value })}
                className="flex h-11 w-full border border-gray-300 mb-10 bg-white-1 text-gray-950 px-3 py-2 focus:outline-none text-sm placeholder:text-neutral-400 group-hover/input:shadow-none transition duration-400"
              />
            </div>
          </div>

          <div className="mb-4 basis-[48%]">
            <label
              htmlFor="taskDescription"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Task Description
            </label>
            <TextEditor setForm={setForm} fieldName={"taskDescription"} />
          </div>

          <div className="mt-10 mb-4 w-full">
            <label className="block text-gray-700 text-lg font-semibold mb-2">
              Select Payment Method
            </label>
            <div className="flex items-center mb-4">
              <input
                type="radio"
                name="payment"
                id="onetime"
                value="onetime"
                checked={selectedOption === "onetime"}
                onChange={handlePaymentOptionChange}
                className="mr-2"
              />
              <label
                htmlFor="onetime"
                className="text-gray-700 text-lg cursor-pointer"
              >
                Onetime
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="payment"
                id="milestone"
                value="milestone"
                checked={selectedOption === "milestone"}
                onChange={handlePaymentOptionChange}
                className="mr-2"
              />
              <label
                htmlFor="milestone"
                className="text-gray-700 text-lg cursor-pointer"
              >
                Milestone
              </label>
            </div>
          </div>

          {selectedOption === "milestone" && (
            <>
              <h1 className="text-sm text-gray-500">
                Add project milestones and pay in installments as each milestone
                is completed to your satisfaction
              </h1>
              <div className="mt-6 mb-6 w-full">
                {form?.projectpaymentway?.map((milestone, index) => (
                  <div
                    key={index}
                    className="mb-4 w-full justify-between items-center flex flex-wrap gap-4 relative"
                  >
                    <div className="basis-[30%]">
                      <label
                        htmlFor={`milestoneName-${index}`}
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Milestone Name
                      </label>
                      <input
                        type="text"
                        id={`milestoneName-${index}`}
                        value={milestone.name}
                        onChange={(e) =>
                          handleMilestoneChange(index, "name", e.target.value)
                        }
                        className="flex h-11 w-full border border-gray-300 bg-white-1 text-gray-950  px-3 py-2 focus:outline-none text-sm placeholder:text-neutral-400 group-hover/input:shadow-none transition duration-400"
                      />
                    </div>
                    <div className="basis-[40%]">
                      <label
                        htmlFor={`milestoneDescription-${index}`}
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Description
                      </label>
                      <input
                        type="text"
                        id={`milestoneDescription-${index}`}
                        value={milestone.description}
                        onChange={(e) =>
                          handleMilestoneChange(
                            index,
                            "description",
                            e.target.value
                          )
                        }
                        className="flex h-11 w-full border border-gray-300 bg-white-1 text-gray-950  px-3 py-2 focus:outline-none text-sm placeholder:text-neutral-400 group-hover/input:shadow-none transition duration-400"
                      />
                    </div>
                    <div className="basis-[20%]">
                      <label
                        htmlFor={`milestoneAmount-${index}`}
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Amount
                      </label>
                      <input
                        type="number"
                        id={`milestoneAmount-${index}`}
                        value={milestone.amount}
                        onChange={(e) =>
                          handleMilestoneChange(index, "amount", e.target.value)
                        }
                        className="flex h-11 w-full border border-gray-300 bg-white-1 text-gray-950  px-3 py-2 focus:outline-none text-sm placeholder:text-neutral-400 group-hover/input:shadow-none transition duration-400"
                      />
                    </div>
                    {index > 0 && (
                      <button
                        type="button"
                        onClick={() => removeMilestone(index)}
                        className="absolute -right-16 top-8 text-white-1 font-semibold"
                      >
                        <AiFillDelete className="text-red-500" size={23} />
                      </button>
                    )}
                  </div>
                ))}

                <button
                  type="button"
                  onClick={addMilestone}
                  className="text-green-600 font-medium text-sm py-2 flex gap-2 items-center"
                >
                  <AiOutlinePlus className="text-green-600" size={16} />
                  Add Milestone
                </button>
              </div>
            </>
          )}

          <div className="w-full items-center flex gap-10 mt-6">
            <div className="basis-[48%]">
              <label className="text-sm font-semibold text-black-1">Skills</label>
              <MultipleInput
                initialTags={form.skills}
                placeholder="Skills"
                setTags={(newTags) => setForm({ ...form, skills: newTags })}
              />
            </div>
            <div className="basis-[48%]">
              <label className="text-sm font-semibold text-black-1">
                Field Type
              </label>

              <select
                name="fieldType"
                className={`form-control text-sm w-full py-3 pl-1 rounded placeholder:text-gray-500 border border-gray-200 my-1`}
                id="fieldType"
                onChange={(e) =>
                  setForm({ ...form, fieldType: e.target.value })
                }
              >
                <label htmlFor="fieldType">Field Type</label>
                <option value="mobileApplication">Mobile Application</option>
                <option value="frontend development">
                  Frontend Development
                </option>
                <option value="backend development">Backend Development</option>
                <option value="website">Website</option>
                <option value="full-development">Full Development</option>
              </select>
            </div>
          </div>
          <div className="w-full flex gap-10 mt-5">
            <div className="basis-[48%]">
              <label
                htmlFor="remarks"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Remarks 1
              </label>

              <input
                type="text"
                id="remarks1"
                value={form.remarks1}
                onChange={(e) => setForm({ ...form, remarks1: e.target.value })}
                className="flex h-11 w-full border border-gray-300 bg-white-1 text-gray-950 px-3 py-2 focus:outline-none text-sm placeholder:text-neutral-400 group-hover/input:shadow-none transition duration-400"
              />
            </div>

            <div className="basis-[48%]">
              <label
                htmlFor="remarks"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Remarks 2
              </label>

              <input
                type="text"
                id="remarks2"
                value={form.remarks2}
                onChange={(e) => setForm({ ...form, remarks2: e.target.value })}
                className="flex h-11 w-full border border-gray-300 bg-white-1 text-gray-950 px-3 py-2 focus:outline-none text-sm placeholder:text-neutral-400 group-hover/input:shadow-none transition duration-400"
              />
            </div>
          </div>
        </form>
        <div className="flex items-center justify-between mt-5">
          <Button
            disabled={loading}
            type="button"
            onClick={handleSubmit}
            className="bg-black-1 text-white-1 py-3 px-4 w-[120px] h-12 focus:outline-none focus:shadow-outline flex items-center justify-center"
          >
            {loading ? (
              <BiLoaderCircle className="animate-spin" color="#ffff" />
            ) : (
              "Create Task"
            )}
          </Button>
        </div>
      </div>
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          <div className="relative bg-white-1 rounded-lg w-1/3 p-6">
            <h1 className="text-2xl font-bold mb-1">Scan the QR code</h1>
            <p className="mb-4 font-semibold text-lg">
              Pay the amount to create task
            </p>

            <img src={qrSrc} alt="assignment" />

            <div className="flex justify-end">
              <button
                onClick={handleValidateQRCode}
                disabled={loading}
                className="bg-red-700 text-white-1 font-semibold px-4 py-2 hover:bg-red-500 "
              >
                {loading ? (
                  <BiLoaderCircle className="animate-spin" size={20} />
                ) : (
                  "Ok"
                )}
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="ml-4 bg-gray-300 font-semibold text-gray-700 px-4 py-2 hover:bg-gray-400 "
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateTaskForm;
