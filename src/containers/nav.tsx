import NavItem from "../components/navItem";

const Nav = () => {
  return (
    <nav className='flex items-center gap-4'>
      <NavItem to='/' text='Dashboard' />

      <NavItem to='/projects' text='Projects' />

      <NavItem to='/team' text='Team' />

      <NavItem to='/clients' text='Clients' />

      <NavItem to='/time' text='Report' />

      <NavItem to='/report' text='Report' />
    </nav>
  );
};

export default Nav;
