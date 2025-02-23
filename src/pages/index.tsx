import TeamMood from "../containers/teamMood";
import LineChart from "../containers/lineChart";

import CircleChart from "../containers/circleChart";
import Data from "../containers/data";
import BudgetStatus from "./budgetStatus";

const Home = () => {
  return (
    <div className='p-8 mx-auto w-fit'>
      <div className='flex items-stretch gap-6'>
        <div className='flex-grow '>
          <Data />

          <div className='mt-8 flex items-center gap-6'>
            <LineChart />
            <CircleChart />
          </div>
        </div>

        <TeamMood />
      </div>

      <div className='mt-8'>
        <BudgetStatus />
      </div>
    </div>
  );
};

export default Home;
