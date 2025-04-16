import CookingDetails from "./cooking-details/CookingDetails";
import RecipeDetailsHeader from "./details-header/RecipeDetailsHeader";
import IngredientList from "./ingredients/IngredientsList";
import { InstructionsList } from "./instructions/InstructionsList";

export default function RecipeDetails() {
    return (
        <>
            <RecipeDetailsHeader />
            <main>
                <CookingDetails />
                <IngredientList />
                <InstructionsList />
            </main>
        </>
    );
}
