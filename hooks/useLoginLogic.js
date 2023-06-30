import * as Yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";
import { useRouter } from "next/router";

import { loginApi } from "@/apis/auth.api";
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
    setIsLoading(true);

    try {
      const res = await loginApi(phoneNumber, password);

      const token = res?.data?.accessToken;

      localStorage.setItem("token", token);

      ShowToast("Đăng nhập thành công", "success");

      router.push("/");
    } catch (error) {
      const errorMessage = "Invalid phone number or password";

      formik.setErrors({
        phoneNumber: errorMessage,
        password: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, formik };
}
