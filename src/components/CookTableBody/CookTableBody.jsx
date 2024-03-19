function CookTableBody({ wantToCook, index, handleButton,type }) {
  const { calories, ingredients, preparing_time, recipe_name,taskName } = wantToCook;
  return (
    <tbody>
      <tr>
        <td className="pr-2 pt-4">{index?.toString().padStart(2, "0")}</td>
        <td className="p-1 w-1/3 pt-4">{recipe_name}</td>
        {/* Adjust the width here */}
        <td className="p-1 pt-4">{preparing_time}</td>
        <td className="p-1 pt-4">{calories}</td>
        {type==='preparing' && (
            <td className="p-1 pt-4">
              <button
                  className="btn bg-[#0BE58A]"
                  onClick={() => handleButton(wantToCook)}
              >
                Preparing
              </button>
            </td>
        )}

      </tr>
    </tbody>
  );
}

export default CookTableBody;
