import { useQuery } from "@tanstack/react-query";
import { fetchHomeRecipes } from "../../utils/http";

export function useHomeRecipes() {
    return useQuery({
        queryKey: ["recipes"],
        queryFn: fetchHomeRecipes,
    })
} 