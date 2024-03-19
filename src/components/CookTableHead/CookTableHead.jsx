import CookTableBody from "../CookTableBody/CookTableBody.jsx";

function CookTableHead({wantToCooks, handleButton, type,totalCookingTime,totalCalories}) {
    return (
        <div className="p-2">
            <table className="table-auto text-left w-full text-sm">
                <thead className='border-b'>
                <tr className=''>
                    <th className="pr-2 pb-4"></th>
                    <th className="p-1 pb-4">
                        Name
                    </th>
                    {/* Adjust the width here */}
                    <th className="p-1 pb-4">Time</th>
                    <th className="p-1 pb-4">Calories</th>
                    {type === 'preparing' && (
                        <th className="p-1 pb-4"></th>
                    )}

                </tr>
                </thead>
                {wantToCooks.map((wantToCook, i) => (
                    <CookTableBody
                        key={i}
                        wantToCook={wantToCook}
                        index={i + 1}
                        handleButton={handleButton}
                        type={type}
                    />
                ))}
                {type==='cooking' && (
                    <tfoot>
                    <tr>
                        <th className="pr-2 pt-3"></th>
                        <th className="p-1 pt-3">
                            Total
                        </th>
                        {/* Adjust the width here */}
                        <th className="p-1 pt-3">{totalCookingTime} minutes</th>
                        <th className="p-1 pt-3">{totalCalories} Calories</th>
                        {type === 'preparing' && (
                            <th className="p-1 pt-3"></th>
                        )}

                    </tr>
                    </tfoot>
                )}


            </table>
        </div>
    );
}

export default CookTableHead;
