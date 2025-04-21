import { SyntheticEvent } from "react";
import fallbackImage from "../assets/fallback-image.png"

export function fallbackRecipeImage(event: SyntheticEvent<HTMLImageElement>) {
    event.currentTarget.src = fallbackImage;
    event.currentTarget.onerror = null;
}