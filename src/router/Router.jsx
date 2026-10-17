import { useCallback, useEffect, useState } from "react";
import { RouterContext } from "./RouterContext";
import { routeById, routeByPath } from "../data/routes";

// Eenvoudige router met echte URL's (/diensten, /contact, ...).
// Terugknop en direct linken werken; Netlify stuurt alle paden naar index.html (zie public/_redirects).
export function Router({ children }) {
  const [route, setRoute] = useState(() => routeByPath(window.location.pathname));

  useEffect(() => {
    document.title = route.title;
  }, [route]);

  useEffect(() => {
    const onPop = () => setRoute(routeByPath(window.location.pathname));
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const navigate = useCallback((id) => {
    const target = routeById(id);
    if (!target) return;
    if (window.location.pathname !== target.path) {
      window.history.pushState({}, "", target.path);
    }
    setRoute(target);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <RouterContext.Provider value={{ page: route.id, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}
