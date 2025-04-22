type Recipe = {
    id: number;
    image: string;
    title: string;
    readyInMinutes: number;
    servings: number;
};
export type Recipes = {
    recipes: Recipe[];
};
type Step = {
    step: string;
};
type AnalyzedInstructions = {
    steps: Step[];
};
type ExtendedIngredients = {
    id: number;
    name: string;
    measures: {
        metric: {
            amount: number;
            unitShort: string;
            unitLong: string;
        };
    };
};
export type RecipeDetails = {
    id: number;
    image: string;
    title: string;
    readyInMinutes: number;
    servings: number;
    analyzedInstructions: AnalyzedInstructions[];
    extendedIngredients: ExtendedIngredients[];
};
