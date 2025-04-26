import { useParams } from "react-router";
import { useRecipeDetails } from "../../hooks/recipes/useRecipeDetails";
import CookingDetails from "./cooking-details/CookingDetails";
import RecipeDetailsHeader from "./details-header/RecipeDetailsHeader";
import IngredientList from "./ingredients/IngredientsList";
import { InstructionsList } from "./instructions/InstructionsList";
import SkeletonLoader from "../loader/SkeletonLoader";
import ErrorMessage from "../errors/ErrorMessage";

export default function RecipeDetails() {
    const { recipeId } = useParams();
    const { data, error, isLoading, isError } = useRecipeDetails(recipeId);
    return (
        <>
            <main>
                {isLoading ? (
                    <SkeletonLoader />
                ) : isError ? (
                    <ErrorMessage>
                        Error loading recipe: {error.message}
                    </ErrorMessage>
                ) : data ? (
                    <>
                        <RecipeDetailsHeader
                            image={data.image}
                            title={data.title}
                        />
                        <CookingDetails
                            readyInMinutes={data.readyInMinutes}
                            servings={data.servings}
                        />
                        <IngredientList
                            ingredients={data.extendedIngredients}
                        />
                        <InstructionsList
                            instructions={data.analyzedInstructions}
                        />
                    </>
                ) : null}
            </main>
        </>
    );
}
