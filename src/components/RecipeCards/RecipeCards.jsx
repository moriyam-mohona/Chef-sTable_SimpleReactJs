import { useEffect, useState } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";

function RecipeCards({ recipes, handleWantToCooks }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 gap-y-6">
      {recipes.map((recipe) => (
        <div className="col-span-6" key={recipe.recipe_id}>
          <RecipeCard recipe={recipe} handleWantToCooks={handleWantToCooks} />
        </div>
      ))}
    </div>
  );
}

export default RecipeCards;
