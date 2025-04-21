export type recipeCategory = {
    id: string;
    category: string;
    icon: string;
};

export type Recipe = {
    id: number;
    image: string;
    title: string;
    readyInMinutes: number;
    servings: number;
};

export type Recipes = {
    featuredRecipes: Recipe[];
    popularRecipes: Recipe[];
};

export type Ingredient = {
    id: number;
    name: string;
};
export type Equipment = {
    id: number;
    name: string;
};

export type Step = {
    number: number;
    step: string;
    ingredients: Ingredient[];
    equipment: Equipment[];
};

export type AnalyzedInstructions = {
    name: string;
    steps: Step[];
};

export type AnalyzedInstructionsArray = AnalyzedInstructions[];

export type ExtendedIngredients = {
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

type recipeDetails = {
    analyzedInstructions: AnalyzedInstructions[];
    extendedIngredients: ExtendedIngredients[];
};

export type RecipeDetails = Recipe & recipeDetails;
