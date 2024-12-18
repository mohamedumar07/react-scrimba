export default function Main()
{
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    const ingredientsList = ingredients.map((ingredient) => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(event)
    {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        console.log(ingredientsList)
        ingredients.push(newIngredient)
        console.log(ingredientsList)
    }

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <input 
                aria-label="Add Ingredient" 
                placeholder="e.g. oregano"
                type="text" 
                name="ingredient"
                />
                <button>+Add Ingredient</button>
            </form>
            <ul>
                {ingredientsList}
            </ul>
        </main>
    )
}