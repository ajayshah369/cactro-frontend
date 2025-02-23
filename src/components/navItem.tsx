import { NavLink } from "react-router-dom";

type NavItemProps = {
  to: string;
  text: string;
};

const NavItem = (props: NavItemProps) => {
  const { to, text } = props;

  return (
    <NavLink
      to={to}
      className='text-sm font-medium transition-all underline-offset-4'
      style={({ isActive }) => ({
        textDecoration: isActive ? "underline" : "none",
        textDecorationColor: "var(--primary-color)",
      })}
    >
      {text}
    </NavLink>
  );
};

export default NavItem;
