import { useQuery } from "@tanstack/react-query";
import { fetchRecipesByCategory } from "../../utils/http";

export function useRecipesByCategory(category: string | undefined) {
    return useQuery({
        queryKey: ["details", category],
        queryFn: () => {
            if (!category) {
                return;
            }
            return fetchRecipesByCategory(category);
        },

        enabled: !!category,
    });
} 