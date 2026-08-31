import React, { useEffect, useState } from "react";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";

import { db } from "../Firebase/firebase";

import RecipeCard from "../components/RecipeCard";
import RecipeForm from "../components/RecipeForm";
import SearchBox from "../components/SearchBox";

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [editingRecipe, setEditingRecipe] = useState(null);

  // ==========================================
  // GET RECIPES
  // ==========================================

  const fetchRecipes = async () => {
    try {
      setLoading(true);

      const snapshot = await getDocs(
        collection(db, "recipes")
      );

      const recipeData = snapshot.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      }));

      setRecipes(recipeData);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  // ==========================================
  // SEARCH
  // ==========================================

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  // ==========================================
  // DELETE
  // ==========================================

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this recipe?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await deleteDoc(doc(db, "recipes", id));

      setRecipes((previous) =>
        previous.filter((recipe) => recipe.id !== id)
      );

      alert("Recipe deleted successfully!");
    } catch (error) {
      console.error("Delete error:", error);
      alert("Unable to delete recipe.");
    }
  };

  // ==========================================
  // EDIT
  // ==========================================

  const handleEdit = (recipe) => {
    setEditingRecipe(recipe);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ==========================================
  // CANCEL EDIT
  // ==========================================

  const handleCancel = () => {
    setEditingRecipe(null);
  };

  // ==========================================
  // AFTER SAVE
  // ==========================================

  const handleRecipeSaved = () => {
    setEditingRecipe(null);
    fetchRecipes();
  };

  // ==========================================
  // FILTER
  // ==========================================

  const filteredRecipes = recipes.filter((recipe) => {
    const search = searchTerm.toLowerCase();

    const title =
      recipe.title?.toLowerCase() || "";

    const category =
      recipe.category?.toLowerCase() || "";

    return (
      title.includes(search) ||
      category.includes(search)
    );
  });

  return (
    <div className="min-h-screen w-full bg-slate-950 px-4 py-10 text-white sm:px-6 lg:px-8">

      <div className="mx-auto max-w-7xl">

        {/* ==========================================
            HEADER
        ========================================== */}

        <div className="mb-10 text-center">

          <div className="mb-4 text-5xl">
            🍳
          </div>

          <h1 className="text-4xl font-extrabold">
            Recipe Sharing
          </h1>

          <p className="mt-3 text-slate-400">
            Create, manage and discover your favorite recipes.
          </p>

        </div>

        {/* ==========================================
            RECIPE FORM
        ========================================== */}

        <section className="mb-12">

          <RecipeForm
            editingRecipe={editingRecipe}
            onCancel={handleCancel}
            onRecipeSaved={handleRecipeSaved}
          />

        </section>

        {/* ==========================================
            SEARCH
        ========================================== */}

        <section className="mb-8">

          <SearchBox
            onSearch={handleSearch}
          />

        </section>

        {/* ==========================================
            TITLE
        ========================================== */}

        <div className="mb-6 flex items-center justify-between">

          <div>
            <h2 className="text-2xl font-bold">
              All Recipes
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {filteredRecipes.length} recipes found
            </p>
          </div>

        </div>

        {/* ==========================================
            LOADING
        ========================================== */}

        {loading && (
          <div className="py-16 text-center">

            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-700 border-t-orange-500" />

            <p className="mt-4 text-slate-500">
              Loading recipes...
            </p>

          </div>
        )}

        {/* ==========================================
            NO RECIPES
        ========================================== */}

        {!loading && recipes.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900 p-12 text-center">

            <div className="text-5xl">
              🍽️
            </div>

            <h2 className="mt-4 text-xl font-bold">
              No Recipes Yet
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Add your first recipe using the form above.
            </p>

          </div>
        )}

        {/* ==========================================
            SEARCH RESULT EMPTY
        ========================================== */}

        {!loading &&
          recipes.length > 0 &&
          filteredRecipes.length === 0 && (
            <div className="rounded-2xl bg-slate-900 p-12 text-center">

              <div className="text-5xl">
                🔍
              </div>

              <h2 className="mt-4 text-xl font-bold">
                No Recipes Found
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Try searching for another recipe.
              </p>

            </div>
          )}

        {/* ==========================================
            RECIPE CARDS
        ========================================== */}

        {!loading && filteredRecipes.length > 0 && (

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {filteredRecipes.map((recipe) => (

              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />

            ))}

          </div>

        )}

      </div>

    </div>
  );
}

export default Recipes;
