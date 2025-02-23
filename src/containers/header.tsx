import Logo from "../components/logo";
import Notification from "../components/notification";
import Nav from "./nav";
import { Avatar } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

import profileImage from "../assets/profile.jpg";

const Header = () => {
  return (
    <header
      className='fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-2 h-16'
      style={{
        backgroundColor: "var(--header-bg-color)",
        color: "var(--header-text-color)",
      }}
    >
      <Logo />

      <Nav />

      <div className='flex items-center gap-6'>
        <Notification />

        <div className='flex items-center gap-2'>
          <Avatar
            alt='Profile Image'
            src={profileImage}
            sx={{ width: 32, height: 32 }}
          />
          <p>John Doe</p>

          <ExpandMore />
        </div>
      </div>
    </header>
  );
};

export default Header;
