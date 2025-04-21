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
    featuredRecipes: Recipe[],
    popularRecipes: Recipe[],
}
