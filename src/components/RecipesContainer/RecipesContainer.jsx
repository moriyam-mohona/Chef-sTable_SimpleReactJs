import { useEffect, useState } from "react";
import Cooking from "../Cooking/Cooking";
import RecipeCards from "../RecipeCards/RecipeCards";
import toast from 'react-hot-toast';

function RecipesContainer() {
  const [wantToCooks, setWantToCooks] = useState([]);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("recipe.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const handleWantToCooks = (recipe) => {
      if(wantToCooks.includes(recipe)){
        toast.error('Already added to Want to Cook List')
      }else{
        setWantToCooks([...wantToCooks, recipe]);
      }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 gap-y-6">
      <div className="md:col-span-7">
        <RecipeCards recipes={recipes} handleWantToCooks={handleWantToCooks} />
      </div>
      <div className="md:col-span-5">
        <Cooking wantToCooks={wantToCooks} setWantToCooks={setWantToCooks}/>
      </div>
    </div>
  );
}

export default RecipesContainer;
