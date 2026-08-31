import React from "react";

function MobileTesting() {
  const issues = [
    {
      number: "01",
      issue: "Navigation links are crowded on small screens.",
      fix: "Use a responsive mobile menu or hamburger menu so navigation links do not overlap.",
      icon: "📱",
    },
    {
      number: "02",
      issue: "Movie cards and action buttons can become too narrow on mobile screens.",
      fix: "Use responsive Tailwind classes such as grid-cols-1 and flex-col on small screens.",
      icon: "🎬",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-slate-950 px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mb-4 text-5xl">📱</div>

          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Mobile Testing
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
            Mobile usability testing results for the Movie Wishlist
            React application.
          </p>
        </div>

        {/* Testing Information */}
        <div className="mb-8 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-5">
          <h2 className="font-bold text-blue-400">
            🔍 Testing Method
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            The application was tested using Chrome DevTools Device
            Mode with different mobile screen sizes. The layout,
            navigation, movie cards, forms, buttons and search box
            were checked for usability.
          </p>
        </div>

        {/* Issues */}
        <div className="space-y-5">

          {issues.map((item) => (
            <div
              key={item.number}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl transition hover:border-blue-500/30"
            >
              <div className="flex flex-col gap-5 sm:flex-row">

                {/* Number */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold">
                  {item.number}
                </div>

                <div className="flex-1">

                  {/* Issue */}
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">
                      {item.icon}
                    </span>

                    <div>
                      <h2 className="text-lg font-bold text-white">
                        Issue Found
                      </h2>

                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        {item.issue}
                      </p>
                    </div>
                  </div>

                  {/* Fix */}
                  <div className="mt-5 rounded-xl border border-green-500/20 bg-green-500/10 p-4">
                    <h3 className="text-sm font-bold text-green-400">
                      ✅ Recommended Fix
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      {item.fix}
                    </p>
                  </div>

                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Testing Checklist */}
        <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl">

          <h2 className="text-xl font-bold text-blue-400">
            ✅ Mobile Testing Checklist
          </h2>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">

            <CheckItem text="Navigation works correctly" />
            <CheckItem text="Movie cards fit the screen" />
            <CheckItem text="Search box is usable" />
            <CheckItem text="Add Movie form is responsive" />
            <CheckItem text="Edit button is easy to tap" />
            <CheckItem text="Delete button is easy to tap" />
            <CheckItem text="Text does not overflow" />
            <CheckItem text="Images scale correctly" />

          </div>
        </section>

        {/* Result */}
        <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center shadow-xl">

          <div className="text-4xl">📊</div>

          <h2 className="mt-3 text-xl font-bold text-white">
            Testing Result
          </h2>

          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            After applying the recommended responsive fixes, the
            application should provide a better experience on mobile,
            tablet and desktop screen sizes.
          </p>

        </section>

      </div>
    </div>
  );
}

/* Checklist Item */
function CheckItem({ text }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950 p-4">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-500/10 text-sm text-green-400">
        ✓
      </span>

      <span className="text-sm text-slate-300">
        {text}
      </span>
    </div>
  );
}

export default MobileTesting;
