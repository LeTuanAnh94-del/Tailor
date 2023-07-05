import Image from "next/image";

import Logo from "../../public/images/LogoTailor.png";
import BaseInput, { inputType } from "@/src/components/baseInput/BaseInput";
import ButtonBase from "@/src/components/buttonBase/ButtonBase";
import { IconLoading } from "@/src/constant/icon";
import useLoginLogic from "@/src/hooks/useLoginLogic";
// import BaseInput from "@/components/baseInput";
// import ButtonBase from "@/components/buttonBase/ButtonBase";
// import { IconLoading } from "@/src/constant/icon";
// import useLoginLogic from "@/src/hooks/useLoginLogic";
// import { inputType } from "@/components/baseInput/BaseInput";

export default function Login() {
  const { isLoading, formik } = useLoginLogic();

  return (
    <section className="bg-red-950 ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-[100vh]">
        <div className="w-full bg-white shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="flex justify-center">
              <Image src={Logo} alt="Logo" width={200} />
            </div>
            <h1 className="text-xl text-center leading-tight tracking-tight text-header md:text-2xl uppercase">
              Sign in to your account
            </h1>
            <form className="space-y-8" onSubmit={formik.handleSubmit}>
              <div>
                <label className="block mb-2 text-sm font-medium not-italic text-text">
                  Phone Number
                </label>
                <BaseInput
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={formik.values.phoneNumber}
                  placeholder="Your Phone Number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  types={inputType.form}
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                  <p className="absolute text-xs text-red-500 mt-2">
                    {formik.errors.phoneNumber}
                  </p>
                ) : null}
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-text">
                  Password
                </label>
                <BaseInput
                  type="password"
                  name="password"
                  id="password"
                  value={formik.values.password}
                  placeholder="Your Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  types={inputType.form}
                />
                {formik.touched.password && formik.errors.password ? (
                  <p className="absolute text-xs text-red-500 mt-2">
                    {formik.errors.password}
                  </p>
                ) : null}
              </div>
              <div className="flex justify-center">
                <ButtonBase disabled={isLoading}>
                  Sign in
                  {isLoading && <IconLoading />}
                </ButtonBase>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
