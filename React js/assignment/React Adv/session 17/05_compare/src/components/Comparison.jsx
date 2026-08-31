import React from "react";

function Comparison() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-950 via-slate-900 to-black flex items-center justify-center p-6">

      <div className="w-full max-w-5xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-8 text-white">

        {/* Header */}
        <div className="text-center mb-8">

          <h1 className="text-3xl font-extrabold text-green-400">
            Formik + Yup vs Manual Form
          </h1>

          <p className="text-slate-400 mt-2">
            Comparison of form management and validation
          </p>

        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">

          <table className="w-full border-collapse">

            <thead>
              <tr className="bg-slate-800">

                <th className="border border-slate-700 p-4 text-left text-green-400">
                  #
                </th>

                <th className="border border-slate-700 p-4 text-left text-green-400">
                  Formik + Yup
                </th>

                <th className="border border-slate-700 p-4 text-left text-red-400">
                  Manual useState
                </th>

              </tr>
            </thead>

            <tbody>

              {/* Point 1 */}
              <tr>

                <td className="border border-slate-700 p-4 font-bold">
                  1
                </td>

                <td className="border border-slate-700 p-4">
                  <strong className="text-green-400">
                    Less State Management
                  </strong>

                  <p className="text-slate-400 text-sm mt-2">
                    Formik automatically manages form values,
                    changes, touched fields, errors, and form
                    submission.
                  </p>
                </td>

                <td className="border border-slate-700 p-4">
                  <strong className="text-red-400">
                    More useState Code
                  </strong>

                  <p className="text-slate-400 text-sm mt-2">
                    We need to create and manage separate state
                    variables and event handlers manually.
                  </p>
                </td>

              </tr>

              {/* Point 2 */}
              <tr className="bg-slate-800/40">

                <td className="border border-slate-700 p-4 font-bold">
                  2
                </td>

                <td className="border border-slate-700 p-4">
                  <strong className="text-green-400">
                    Easy Validation
                  </strong>

                  <p className="text-slate-400 text-sm mt-2">
                    Yup provides a centralized validation schema
                    where all validation rules are defined in
                    one place.
                  </p>
                </td>

                <td className="border border-slate-700 p-4">
                  <strong className="text-red-400">
                    Custom Validation
                  </strong>

                  <p className="text-slate-400 text-sm mt-2">
                    We have to write if conditions and custom
                    validation functions for each field.
                  </p>
                </td>

              </tr>

              {/* Point 3 */}
              <tr>

                <td className="border border-slate-700 p-4 font-bold">
                  3
                </td>

                <td className="border border-slate-700 p-4">
                  <strong className="text-green-400">
                    Easier Maintenance
                  </strong>

                  <p className="text-slate-400 text-sm mt-2">
                    Formik and Yup keep form state and validation
                    organized, making large forms easier to update.
                  </p>
                </td>

                <td className="border border-slate-700 p-4">
                  <strong className="text-red-400">
                    More Code to Maintain
                  </strong>

                  <p className="text-slate-400 text-sm mt-2">
                    As the number of fields increases, manually
                    managing state, errors, and validation can
                    make the code longer and harder to maintain.
                  </p>
                </td>

              </tr>

            </tbody>

          </table>

        </div>

        {/* Summary */}
        <div className="mt-8 bg-green-950/40 border border-green-800 rounded-xl p-5">

          <h2 className="text-lg font-bold text-green-400 mb-3">
            Conclusion
          </h2>

          <p className="text-slate-300 leading-7">
            Formik + Yup makes form development cleaner because
            Formik handles form state and submission while Yup
            handles validation. This reduces repetitive code and
            makes validation rules easier to read, update, and
            maintain compared with manually using useState and
            custom validation.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Comparison;

