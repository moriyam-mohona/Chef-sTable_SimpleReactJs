import {useState} from "react";

import CookTableHead from "../CookTableHead/CookTableHead.jsx";

function Cooking({wantToCooks, setWantToCooks}) {
    const [toPrepares, setToPrepares] = useState([]);
    const handleToPrepares = (wantToCook) => {
        setWantToCooks(wantToCooks.filter(toCook => toCook.recipe_id !== wantToCook.recipe_id))
        setToPrepares([...toPrepares, wantToCook])
    };

    const calories = toPrepares.map(toPrepare => {
        return Number(toPrepare.calories.split(' calories').join(''))
    })

    const totalCalories = calories.reduce((acc, calory) => {
        return calory + acc
    }, 0)

    const cookingTimes = toPrepares.map(toPrepare => {
        return Number(toPrepare.preparing_time.split(' min').join(''))
    })
    const totalCookingTime = cookingTimes.reduce((acc, cookingTime) => {
        return cookingTime + acc
    }, 0)


    const handleCooking = (toPrepare) => {
        setToPrepares(toPrepares.filter(toCook => toCook.recipe_id !== toPrepare.recipe_id))

    }
    return (
        <div className=" rounded-3xl w-full p-4 border ">

            <h3 className="font-bold">
                Want to cook: {wantToCooks.length.toString().padStart(2, "0")}
            </h3>


            <CookTableHead
                wantToCooks={wantToCooks}
                handleButton={handleToPrepares}
                type='preparing'
            />


            <h3 className="font-bold mt-8">
                Currently Cooking: {toPrepares.length.toString().padStart(2, "0")}
            </h3>


            <CookTableHead
                wantToCooks={toPrepares}
                handleButton={handleCooking} type='cooking'
                totalCalories={totalCalories}
                totalCookingTime={totalCookingTime}/>


        </div>
    );
}

export default Cooking;
