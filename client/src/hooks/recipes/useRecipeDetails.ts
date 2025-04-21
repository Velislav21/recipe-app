import { useQuery } from "@tanstack/react-query";
import { fetchRecipeDetails } from "../../utils/http";

export function useRecipeDetails(recipeId: string | undefined) {
    
    const queryResult = useQuery({

      queryKey: ["details", recipeId],
      queryFn: () => {

        if (!recipeId) {
          return
        }
        return fetchRecipeDetails(recipeId);
      },
  
      enabled: !!recipeId,
  
    });
  
    return queryResult;
  }