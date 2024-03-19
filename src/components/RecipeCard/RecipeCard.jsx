import { CiClock2 } from "react-icons/ci";
import { RiFireLine } from "react-icons/ri";

function RecipeCard({ recipe, handleWantToCooks }) {
  const {
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
    recipe_image,
  } = recipe;
  return (
    <div className=" text-left p-4 border rounded-3xl ">
      <img className="rounded-3xl  h-48 w-full" src={recipe_image} alt="" />
      <h3 className="font-bold mt-4">{recipe_name}</h3>
      <p className="text-[#878787] mt-3">{short_description}</p>
      <p className="font-semibold mt-8">Ingredients: {ingredients.length}</p>
      <ul className="list-disc text-[#878787] ml-8 ">
        {ingredients.map((ingredient, i) => (
          <li key={i} className="mt-2">
            {ingredient}
          </li>
        ))}
      </ul>
      <div className="border-b-2 my-6"></div>
      <div className="flex gap-4">
        <div className="flex items-center gap-2">
          <CiClock2 className="text-[#282828]" />
          <p className="text-[#282828]/60">{preparing_time}</p>
        </div>
        <div className="flex items-center gap-2">
          <RiFireLine className="text-[#282828]/60" />
          <p className="text-[#282828]/60">{calories}</p>
        </div>
      </div>
      <button
        className="btn bg-[#0BE58A] rounded-3xl mt-4"
        onClick={() => handleWantToCooks(recipe)}
      >
        Want to Cook
      </button>
    </div>
  );
}

export default RecipeCard;
