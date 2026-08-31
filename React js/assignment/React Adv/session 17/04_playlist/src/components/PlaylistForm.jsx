import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

function PlaylistForm() {
  // ==============================
  // Yup Validation Schema
  // ==============================
  const validationSchema = Yup.object({
    playlistName: Yup.string()
      .required("Playlist name is required")
      .max(50, "Playlist name must be 50 characters or less"),

    description: Yup.string()
      .max(200, "Description must be 200 characters or less"),

    genre: Yup.string()
      .required("Please select a genre"),
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-950 via-slate-900 to-black flex items-center justify-center p-4">

      {/* ==============================
          Main Card
      ============================== */}
      <div className="w-full max-w-lg bg-slate-900/95 border border-slate-700 rounded-2xl shadow-2xl p-8 text-white">

        {/* ==============================
            Header
        ============================== */}
        <div className="text-center mb-8">

          <div className="text-5xl mb-4">
            🎵
          </div>

          <h1 className="text-3xl font-extrabold text-green-400">
            Create Playlist
          </h1>

          <p className="text-slate-400 text-sm mt-2">
            Build your own Spotify-style playlist
          </p>

        </div>

        {/* ==============================
            Formik
        ============================== */}
        <Formik
          initialValues={{
            playlistName: "",
            description: "",
            genre: "",
          }}

          validationSchema={validationSchema}

          onSubmit={(values) => {
            console.log("Submitted Playlist Data:", values);

            alert("Playlist Created Successfully!");

            // IMPORTANT:
            // Do NOT use resetForm()
            // because we want the data to remain visible.
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

              {/* ==============================
                  Form
              ============================== */}
              <Form className="space-y-6">

                {/* ==============================
                    Playlist Name
                ============================== */}
                <div>

                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Playlist Name
                  </label>

                  <input
                    type="text"
                    name="playlistName"
                    value={values.playlistName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="e.g. Summer Vibes"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-800 border text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition ${
                      touched.playlistName && errors.playlistName
                        ? "border-red-500 focus:ring-red-500"
                        : "border-slate-700 focus:ring-green-500"
                    }`}
                  />

                  {/* Validation Error */}
                  {touched.playlistName && errors.playlistName && (
                    <p className="text-red-400 text-sm mt-2">
                      {errors.playlistName}
                    </p>
                  )}

                  {/* Character Count */}
                  <div className="text-right text-xs text-slate-500 mt-1">
                    {values.playlistName.length}/50
                  </div>

                </div>

                {/* ==============================
                    Description
                ============================== */}
                <div>

                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Description
                    <span className="text-slate-500 font-normal ml-1">
                      (Optional)
                    </span>
                  </label>

                  <textarea
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows="4"
                    placeholder="Add a description for your playlist..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-800 border text-white placeholder-slate-500 resize-none focus:outline-none focus:ring-2 transition ${
                      touched.description && errors.description
                        ? "border-red-500 focus:ring-red-500"
                        : "border-slate-700 focus:ring-green-500"
                    }`}
                  />

                  {/* Validation Error */}
                  {touched.description && errors.description && (
                    <p className="text-red-400 text-sm mt-2">
                      {errors.description}
                    </p>
                  )}

                  {/* Character Count */}
                  <div className="text-right text-xs text-slate-500 mt-1">
                    {values.description.length}/200
                  </div>

                </div>

                {/* ==============================
                    Genre
                ============================== */}
                <div>

                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Genre
                  </label>

                  <select
                    name="genre"
                    value={values.genre}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-800 border text-white focus:outline-none focus:ring-2 transition cursor-pointer ${
                      touched.genre && errors.genre
                        ? "border-red-500 focus:ring-red-500"
                        : "border-slate-700 focus:ring-green-500"
                    }`}
                  >

                    <option value="">
                      Select a genre
                    </option>

                    <option value="Pop">
                      Pop
                    </option>

                    <option value="Rock">
                      Rock
                    </option>

                    <option value="Hip Hop">
                      Hip Hop
                    </option>

                    <option value="Jazz">
                      Jazz
                    </option>

                    <option value="Classical">
                      Classical
                    </option>

                    <option value="Bollywood">
                      Bollywood
                    </option>

                    <option value="Electronic">
                      Electronic
                    </option>

                  </select>

                  {/* Validation Error */}
                  {touched.genre && errors.genre && (
                    <p className="text-red-400 text-sm mt-2">
                      {errors.genre}
                    </p>
                  )}

                </div>

                {/* ==============================
                    Submit Button
                ============================== */}
                <button
                  type="submit"
                  className="w-full py-3.5 bg-green-500 hover:bg-green-400 text-slate-950 font-bold rounded-xl shadow-lg shadow-green-500/20 transition duration-200"
                >
                  Create Playlist
                </button>

              </Form>

              {/* ==============================
                  Live Playlist Preview
              ============================== */}
              <div className="mt-8 pt-6 border-t border-slate-700">

                <h2 className="text-sm font-bold text-green-400 uppercase tracking-wider mb-4">
                  Live Playlist Preview
                </h2>

                {/* Preview Card */}
                <div className="bg-gradient-to-br from-green-900/60 to-slate-800 border border-green-500/20 rounded-2xl p-5 shadow-lg">

                  {/* Playlist Header */}
                  <div className="flex items-center gap-4">

                    {/* Music Icon */}
                    <div className="w-20 h-20 shrink-0 rounded-xl bg-gradient-to-br from-green-400 to-green-700 flex items-center justify-center text-3xl shadow-lg">
                      🎵
                    </div>

                    {/* Playlist Information */}
                    <div className="min-w-0 flex-1">

                      <h3 className="text-xl font-bold text-white truncate">
                        {values.playlistName
                          ? values.playlistName
                          : "My Playlist"}
                      </h3>

                      <p className="text-green-400 text-sm mt-1">
                        {values.genre
                          ? values.genre
                          : "Genre not selected"}
                      </p>

                    </div>

                  </div>

                  {/* Description */}
                  <div className="mt-5">

                    <p className="text-xs uppercase tracking-wider text-slate-500 mb-2">
                      Description
                    </p>

                    <div className="bg-slate-900/60 rounded-lg p-3 border border-slate-800">

                      <p className="text-slate-300 text-sm break-words whitespace-pre-wrap">
                        {values.description
                          ? values.description
                          : "Your playlist description will appear here..."}
                      </p>

                    </div>

                  </div>

                  {/* Preview Status */}
                  <div className="mt-4 flex justify-between items-center text-xs">

                    <span className="text-slate-500">
                      Playlist
                    </span>

                    <span className="text-green-400 font-medium">
                      {values.playlistName && values.genre
                        ? "Ready to create ✓"
                        : "Complete the form"}
                    </span>

                  </div>

                </div>

              </div>

            </>
          )}
        </Formik>

      </div>

    </div>
  );
}

export default PlaylistForm;
