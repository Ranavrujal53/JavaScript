import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

function LoginForm() {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Email is required"),

    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl p-8 text-slate-100">

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Welcome Back
          </h2>

          <p className="text-sm text-slate-400 mt-2">
            Please enter your details to sign in
          </p>
        </div>

        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
            alert("Login Successful");
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
          }) => (
            <>
              <Form className="space-y-5">

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />

                  {touched.email && errors.email && (
                    <p className="text-red-400 text-sm mt-2">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Password
                  </label>

                  <input
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />

                  {touched.password && errors.password && (
                    <p className="text-red-400 text-sm mt-2">
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-medium rounded-xl"
                >
                  Sign In
                </button>

              </Form>

              {/* Live Values */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Live Form State (Values)
                </h3>

                <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 space-y-2 text-sm">
                  <p>
                    <strong>Email:</strong> {values.email || "empty"}
                  </p>

                  <p>
                    <strong>Password:</strong>{" "}
                    {values.password ? "••••••••" : "empty"}
                  </p>
                </div>
              </div>
            </>
          )}
        </Formik>

      </div>
    </div>
  );
}

export default LoginForm;
