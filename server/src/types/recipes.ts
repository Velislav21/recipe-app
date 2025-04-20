export type Recipes = {
    recipes: [
        {
            id: number;
            image: string;
            title: string;
            readyInMinutes: number;
            servings: number;
            analyzedInstructions: [
                {
                    name: string;
                    steps: [
                        {
                            number: number;
                            step: string;
                            ingredients: [
                                id: number,
                                name: string,
                                localizedName: string,
                                image: string
                            ];
                        }
                    ];
                }
            ];
        }
    ];
};
