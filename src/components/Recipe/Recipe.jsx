import RecipesContainer from "../RecipesContainer/RecipesContainer";


function Recipe() {
    return (
        <div className="text-center mb-20">
            <h2 className="text-4xl mb-4">Our Recipes</h2>
            <p className="max-w-4xl mx-auto text-[#150B2B]/60 mb-8">
                In the kitchen, the aroma of savory, flavorful dishes fills the air,
                promising mouthwatering, delectable delights. With each bite, taste buds
                experience scrumptious, irresistible flavors, creating a culinary
                masterpiece
            </p>
            <RecipesContainer />
        </div>
    );
}

export default Recipe;