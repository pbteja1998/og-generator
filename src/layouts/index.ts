import { ILayout, ILayoutConfig } from "../types";
import { docsLayout } from "./docsLayout";
import { patternLayout } from "./patternLayout";
import { railwayLayout } from "./railwayLayout";
import { simpleLayout } from "./simpleLayout";
import { starterLayout } from "./starterLayout";
import { blogLayout } from "./blogLayout";
import { featherBlogLayout } from "./featherBlogLayout";
import { featherAuthorLayout } from "./featherAuthorLayout";
import { featherTagLayout } from "./featherTagLayout";

/**
 * All layouts that are available in the UI
 */
export const layouts: ILayout[] = [
  simpleLayout,
  starterLayout,
  railwayLayout,
  blogLayout,
  featherBlogLayout,
  featherAuthorLayout,
  featherTagLayout,
  docsLayout,
  patternLayout,
];

export const getDefaultLayout = (layout: ILayout): ILayoutConfig => {
  const config: ILayoutConfig = {};

  for (const p of layout.properties) {
    if (p.default != null) {
      config[p.name] = p.default?.toString();
    }
  }

  return config;
};

export const getLayoutConfigFromQuery = (
  layoutName: string,
  query: Record<string, string | string[]>,
): ILayoutConfig => {
  const layout = layouts.find(l => l.name === layoutName);

  if (layout == null) {
    return {};
  }

  const config: ILayoutConfig = getDefaultLayout(layout);
  for (const p of layout.properties) {
    if (query[p.name] != null) {
      config[p.name] = query[p.name].toString();
    }
  }

  return config;
};
