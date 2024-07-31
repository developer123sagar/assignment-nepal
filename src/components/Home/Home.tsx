import React from "react";
import Footer from "../Footer";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import { Header } from "../Header";
import { MainPage } from "../Homepage/Mainpage";
import { DecodedToken } from "../../types";
import { jwtDecode } from "jwt-decode";

export const Home = () => {
  // const [loginUser, setLoginUser] = useState(false);
  // const [isloading, setIsloading] = useState(false);

  const decodeToken = (token: string) => {
    try {
      const decodeToken: DecodedToken = jwtDecode(token);
      return decodeToken.role;
    } catch (error) {
      return null;
    }
  };

  const token = localStorage.getItem("token") || "";
  const role = decodeToken(token);
  console.log(role)

  // console.log(loginUser);
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       setIsloading(true);
  //       const res = await getLoginUserInfo();
  //       setLoginUser(res.data?.found);
  //     } catch (err) {
  //       console.log(err);
  //     } finally {
  //       setIsloading(false);
  //     }
  //   })();
  // }, []);

  return (
    <>
      {role ? (
        <MainPage />
      ) : (
        <div>
          <Header />
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Footer />
        </div>
      )}
    </>
  );
};
