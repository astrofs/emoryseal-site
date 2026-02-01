import { pagesConfig } from "../pages.config.js";

export const createPageUrl = (pageName) => {
  if (!pageName) return "/";

  const mainPage = pagesConfig?.mainPage ?? Object.keys(pagesConfig?.Pages ?? {})[0];
  if (pageName === mainPage) return "/";

  if (typeof pageName === "string" && pageName.startsWith("/")) {
    return pageName;
  }

  return `/${pageName}`;
};
