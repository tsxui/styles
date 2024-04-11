import { CSSProperties } from "react";
import { cssObjectToString } from "./cssObjectToString";

export interface StylesMediaQuery {
  query: string;
  styles: CSSProperties;
}

export interface StylesToStringInput {
  selector: string;
  styles?: CSSProperties;
  media?: StylesMediaQuery[];
}

export function stylesToString(input: StylesToStringInput) {
  const { selector, styles, media } = input;

  const baseStyles = styles ? cssObjectToString(styles) : "";
  const mediaQueryStyles = media?.map((item) => `@media${item.query}${selector}${cssObjectToString(item.styles)}`) ?? [];

  return `${baseStyles ? `${selector}{${baseStyles}}` : ""}${mediaQueryStyles.join("")}`.trim();
}