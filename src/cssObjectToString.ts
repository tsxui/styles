import { camelToKebabCase, keys } from "@tsxui/utils";
import { CSSProperties } from "react";

export function cssObjectToString(css: CSSProperties) {
  return keys(css)
    .reduce(
      (prev, rule) => css[rule] !== undefined ? `${prev}${camelToKebabCase(rule)}:${css[rule]};` : prev,
      ""
    )
    .trim();
}
