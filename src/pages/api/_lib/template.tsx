import { layouts } from "../../../layouts";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { IConfig, ILayoutConfig, LayoutComponent } from "../../../types";
import { sanitizeHtml } from "./sanitizer";

const getCommonCSS = () => {
  return `

`;
};

const NotImplemented: LayoutComponent = ({ config }) => (
  <h1 style={{ fontSize: 100 }}>{config.layoutName} not implemented</h1>
);

export const getHtml = (config: IConfig & ILayoutConfig) => {
  const layout = layouts.find(l => l.name === config.layoutName);

  const rendered = ReactDOMServer.renderToString(
    layout?.Component != null ? (
      <layout.Component config={config} />
    ) : (
      <NotImplemented config={config} />
    ),
  );

  return `<!DOCTYPE html>
<html>
    <meta charset="utf-8">
    <title>Generated Image</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        ${getCommonCSS()}
        ${layout?.getCSS != null ? layout.getCSS(config) : ""}
    </style>
    <body class="relative min-h-screen overflow-x-hidden font-sans antialiased text-gray-900 bg-gray-50">
      ${rendered}
    </body>
</html>`;
};
