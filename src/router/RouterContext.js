import { createContext } from "react";

export const RouterContext = createContext({ page: "home", navigate: () => {} });
