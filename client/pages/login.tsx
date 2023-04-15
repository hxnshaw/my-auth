/* eslint-disable react/no-unescaped-entities */
import * as Yup from "yup";
import { useState } from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { BaseButtonWithColor } from "@/components/UI/Buttons";
import Link from "next/link";
import Logo from "@/components/UI/Logo";
import classNames from "classnames";
import Eye from "public/svgs/eye.svg";
import EyeSlash from "public/svgs/eye-slash.svg";

type Values = {
  email: string;
  password: string;
};

export default function Index() {
  const [fieldType, setFieldType] = useState<"password" | "text">("password");
  const signupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Enter a valid email"),
    password: Yup.string()
      .required("Enter a valid password")
      .min(8, "Password must be 8 characters long")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[A-Z]/, "Password requires an uppercase letter")
      .matches(/[^\w]/, "Password requires a symbol"),
  });

  return (
    <div className="flex h-screen">
      <div className="w-full relative z-10 md:w-1/2 md:static md:z-0 bg-white opacity-90 px-4 py-8 sm:p-16 lg:px-28 xl:px-36 flex flex-col overflow-y-auto">
        <Formik
          initialValues={{
            password: "",
            email: "",
          }}
          validationSchema={signupSchema}
          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="">
              <Logo />
              <h2 className="mt-8 text-[#375CA9] text-3xl">Log In</h2>
              <p className="text-gray-700 mt-2">
                Lock down great travel deals and pay in convenient installments
              </p>

              <fieldset className="relative flex flex-col">
                <label htmlFor="email" className="mt-6 mb-3">
                  Email*
                </label>
                <Field
                  id="email"
                  name="email"
                  placeholder="mail@travellog.com"
                  type="email"
                  className={classNames(
                    "w-full h-14 p-4 border border-[#77777B] rounded-md",
                    { "!border-red-500": errors.email }
                  )}
                />
                {errors.email && touched.email && (
                  <p
                    className="absolute right-0 top-[7.5rem] text-[.9rem] text-red-500
                "
                  >
                    {errors.email}
                  </p>
                )}
              </fieldset>

              <fieldset className="relative flex flex-col">
                <label htmlFor="password" className="mt-6 mb-3">
                  Password*
                </label>
                <div className="relative">
                  <Field
                    id="password"
                    name="password"
                    placeholder="Min 8 characters"
                    type={fieldType}
                    className={classNames(
                      "w-full h-14 p-4 border border-[#77777B] rounded-md",
                      { "!border-red-500": errors.password }
                    )}
                  />
                  {fieldType === "password" && (
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 mx-4 flex items-center justify-center cursor-pointer w-8 h-8 rounded-full hover:bg-[#D9E2FF] transition-all">
                      <Eye
                        onClick={() => setFieldType("text")}
                        className="h-4 w-4 shrink-0 stroke-[#002D6F] cursor-pointer"
                      />
                    </div>
                  )}
                  {fieldType === "text" && (
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 mx-4 flex items-center justify-center cursor-pointer w-8 h-8 rounded-full hover:bg-[#D9E2FF] transition-all">
                      <EyeSlash
                        onClick={() => setFieldType("password")}
                        className="h-4 w-4 stroke-[#002D6F] cursor-pointer"
                      />
                    </div>
                  )}
                </div>
                {errors.password && touched.password && (
                  <p
                    className="absolute right-0 top-[7.5rem] text-[.9rem] text-red-500
                "
                  >
                    {errors.password}
                  </p>
                )}
              </fieldset>

              <BaseButtonWithColor
                text="Log In"
                loading={isSubmitting}
                className="mt-12"
              />
            </Form>
          )}
        </Formik>
        <p className="mt-4">
          Don't have an account yet?{" "}
          <Link className="text-[#375CA9] font-bold" href="/signup">
            Create an Account
          </Link>
        </p>
      </div>
      <div className="fixed w-full h-full md:static md:w-1/2 bg-[url('../public/images/login-bg-image.jpeg')] bg-cover bg-center" />
    </div>
  );
}
