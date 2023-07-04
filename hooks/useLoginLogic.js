import * as Yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";
import { useRouter } from "next/router";

import { getInfoUser, loginApi } from "@/apis/auth.api";
import { ShowToast } from "@/utils/ShowToast";

export default function useLoginLogic() {
  const router = useRouter();

  const validationLogin = Yup.object().shape({
    phoneNumber: Yup.string().required("Please enter your phone number"),
    password: Yup.string().required("Please enter your password"),
  });

  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
      password: "",
    },
    validationSchema: validationLogin,
    onSubmit: async (values) => {
      handleLogin(values.phoneNumber, values.password);
    },
  });

  const handleLogin = async (phoneNumber, password) => {
    let res = null;

    setIsLoading(true);

    try {
      res = await loginApi(phoneNumber, password);
    } catch (error) {
      const errorMessage = "Invalid phone number or password";

      formik.setErrors({
        phoneNumber: errorMessage,
        password: errorMessage,
      });
    }

    const token = res?.data?.accessToken;

    localStorage.setItem("token", token);

    let activeToken = localStorage.getItem("token");

    if (activeToken) {
      try {
        const resData = await getInfoUser(activeToken);

        resData.data.role === "TAILOR"
          ? router.push("/tailor")
          : router.push("/user");

        ShowToast("Congratulation", "success");
      } catch (error) {
        console.log(" error:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return { isLoading, formik };
}
