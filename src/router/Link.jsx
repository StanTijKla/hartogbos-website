import { routeById } from "../data/routes";
import { useRouter } from "./useRouter";

// Echte <a>-link (goed voor Google en toegankelijkheid) die binnen de site zonder herladen navigeert.
export function Link({ to, onClick, children, ...rest }) {
  const { navigate } = useRouter();
  const href = routeById(to)?.path ?? "/";
  const handleClick = (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    onClick?.(e);
    navigate(to);
  };
  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
