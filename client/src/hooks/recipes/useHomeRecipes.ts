import { useQuery } from "@tanstack/react-query";
import { fetchHomeRecipes } from "../../utils/http";

export function useHomeRecipes(searchTerm = "") {
    return useQuery({
        queryKey: ["recipes", searchTerm],
        queryFn: () => fetchHomeRecipes(searchTerm),
    })
} 