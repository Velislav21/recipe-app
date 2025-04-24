import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchRecipesByCategory } from "../../utils/http";

export function useRecipesByCategory(category: string | undefined) {
    return useInfiniteQuery({
        queryKey: ["recipesByCategory", category],

        queryFn: async ({ pageParam = 0 }) => {
            if (!category) {
                return null;
            }
            return fetchRecipesByCategory(category, pageParam, 12);
        },

        initialPageParam: 0,

        getNextPageParam: (lastPage) => {
            if (!lastPage) return undefined;

            if (lastPage.offset + lastPage.number >= lastPage.totalResults) return undefined;

            return lastPage.offset + lastPage.number;
        },

        enabled: !!category,
    });
}
