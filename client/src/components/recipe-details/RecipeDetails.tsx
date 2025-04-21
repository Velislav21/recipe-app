import { useParams } from "react-router";
import { useRecipeDetails } from "../../hooks/recipes/useRecipeDetails";
import CookingDetails from "./cooking-details/CookingDetails";
import RecipeDetailsHeader from "./details-header/RecipeDetailsHeader";
import IngredientList from "./ingredients/IngredientsList";
import { InstructionsList } from "./instructions/InstructionsList";

export default function RecipeDetails() {
    const { recipeId } = useParams();
    const { data, error, isLoading, isError } = useRecipeDetails(recipeId);
    return (
        <>
            {isLoading ? (
                <div>Loading...</div>
            ) : isError ? (
                <div>Error loading recipes: {error.message}</div>
            ) : data ? (
                <>
                    <RecipeDetailsHeader
                        image={data.image}
                        title={data.title}
                    />
                    <main>
                        <CookingDetails />
                        <IngredientList ingredients={data.extendedIngredients} />
                        <InstructionsList instructions={data.analyzedInstructions}/>
                    </main>
                </>
            ) : null}
        </>
    );
}
