import DataBox from "../components/dataBox";
import {
  Dashboard,
  CheckCircle,
  Loop,
  Warning,
  People,
} from "@mui/icons-material";

const Data = () => {
  return (
    <div className='flex gap-8 [&>*]:flex-1'>
      <DataBox value='5' text='Total projects' Icon={Dashboard} />
      <DataBox value='1' text='Completed' Icon={CheckCircle} />
      <DataBox value='3' text='Ongoing' Icon={Loop} />
      <DataBox value='1' text='Delayed' Icon={Warning} warning={true} />
      <DataBox value='5' text='Employees' Icon={People} />
    </div>
  );
};

export default Data;
