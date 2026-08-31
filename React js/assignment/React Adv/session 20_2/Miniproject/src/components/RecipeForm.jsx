import React, { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";

import { db } from "../Firebase/firebase";

function RecipeForm({
  editingRecipe,
  onCancel,
  onRecipeSaved,
}) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  // ==========================================
  // LOAD EDITING DATA INTO FORM
  // ==========================================

  useEffect(() => {
    if (editingRecipe) {
      setTitle(editingRecipe.title || "");
      setCategory(editingRecipe.category || "");
      setIngredients(editingRecipe.ingredients || "");
      setInstructions(editingRecipe.instructions || "");
    } else {
      setTitle("");
      setCategory("");
      setIngredients("");
      setInstructions("");
    }
  }, [editingRecipe]);

  // ==========================================
  // SUBMIT
  // ==========================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !title.trim() ||
      !category.trim() ||
      !ingredients.trim() ||
      !instructions.trim()
    ) {
      alert("Please fill all fields.");
      return;
    }

    try {
      if (editingRecipe) {

        // UPDATE
        const recipeRef = doc(
          db,
          "recipes",
          editingRecipe.id
        );

        await updateDoc(recipeRef, {
          title,
          category,
          ingredients,
          instructions,
        });

        alert("Recipe updated successfully!");

      } else {

        // CREATE
        await addDoc(
          collection(db, "recipes"),
          {
            title,
            category,
            ingredients,
            instructions,
            createdAt: new Date(),
          }
        );

        alert("Recipe added successfully!");
      }

      setTitle("");
      setCategory("");
      setIngredients("");
      setInstructions("");

      if (onRecipeSaved) {
        onRecipeSaved();
      }

    } catch (error) {
      console.error("Firebase error:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-2xl space-y-5 rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl sm:p-8"
    >

      {/* Header */}

      <div>
        <h2 className="text-2xl font-bold text-white">
          {editingRecipe
            ? "✏️ Edit Recipe"
            : "🍳 Add New Recipe"}
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          {editingRecipe
            ? "Update your recipe details."
            : "Share your favorite recipe with others."}
        </p>
      </div>

      {/* Title */}

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-300">
          Recipe Title
        </label>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. Paneer Butter Masala"
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
        />
      </div>

      {/* Category */}

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-300">
          Category
        </label>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-orange-500"
        >
          <option value="">
            Select Category
          </option>

          <option value="Indian">
            Indian
          </option>

          <option value="Italian">
            Italian
          </option>

          <option value="Chinese">
            Chinese
          </option>

          <option value="Dessert">
            Dessert
          </option>

          <option value="Fast Food">
            Fast Food
          </option>
        </select>
      </div>

      {/* Ingredients */}

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-300">
          Ingredients
        </label>

        <textarea
          value={ingredients}
          onChange={(e) =>
            setIngredients(e.target.value)
          }
          rows="4"
          placeholder="Enter ingredients..."
          className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
        />
      </div>

      {/* Instructions */}

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-300">
          Instructions
        </label>

        <textarea
          value={instructions}
          onChange={(e) =>
            setInstructions(e.target.value)
          }
          rows="5"
          placeholder="Enter cooking instructions..."
          className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
        />
      </div>

      {/* Buttons */}

      <div className="flex flex-col gap-3 sm:flex-row">

        <button
          type="submit"
          className="flex-1 rounded-xl bg-orange-600 px-5 py-3 font-bold text-white transition hover:bg-orange-500"
        >
          {editingRecipe
            ? "Update Recipe"
            : "Add Recipe"}
        </button>

        {editingRecipe && (
          <button
            type="button"
            onClick={onCancel}
            className="rounded-xl bg-slate-700 px-6 py-3 font-semibold text-white transition hover:bg-slate-600"
          >
            Cancel
          </button>
        )}

      </div>

    </form>
  );
}

export default RecipeForm;
