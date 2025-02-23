import { NotificationsNone, Circle } from "@mui/icons-material";

const Notification = () => {
  return (
    <div className='relative'>
      <NotificationsNone />

      <Circle
        style={{ color: "var(--red)", fontSize: "8px" }}
        className='absolute top-0 right-0'
      />
    </div>
  );
};

export default Notification;
