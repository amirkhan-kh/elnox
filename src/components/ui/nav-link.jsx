import { NavLink as RouterLink } from "react-router-dom";

export default function NavLink({ href, label }) {
  return (
    <RouterLink
      to={href}
      className={({ isActive }) =>
        `text-[14px] sm:text-[16px] font-medium p-1.5  ${
          isActive ? "text-[#314656]" : "text-[#547792] hover:text-[#314656]"
        }`
      }
    >
      {label}
    </RouterLink>
  );
}
