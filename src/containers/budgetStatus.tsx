import { Add, Download, Sort } from "@mui/icons-material";
import { Button } from "@mui/material";
import BudgetStatusItem from "../components/budgetStatusItem";

import image from "../assets/profile.jpg";

const BudgetStatus = () => {
  return (
    <div>
      <div className='flex items-center gap-4'>
        <h2
          className='text-2xl font-medium'
          style={{
            color: "var(--text-color)",
          }}
        >
          Budget Status
        </h2>

        <Button
          variant='contained'
          startIcon={<Add />}
          size='small'
          style={{
            backgroundColor: "var(--green)",
          }}
        >
          Add New Project
        </Button>

        <Button
          variant='outlined'
          startIcon={<Download />}
          size='small'
          style={{
            color: "var(--green)",
            borderColor: "var(--green)",
          }}
        >
          Download Report
        </Button>

        <Button
          variant='outlined'
          startIcon={<Sort />}
          size='small'
          style={{
            color: "var(--green)",
            borderColor: "var(--green)",
          }}
        >
          Filter
        </Button>
      </div>

      <div className='mt-6 flex items-center gap-6'>
        <BudgetStatusItem
          image={image}
          projectName='Insurance App'
          location='Verti'
          totalBudget={70000}
          profit={-5000}
          actualHours={1100}
          solidHours={1000}
        />

        <BudgetStatusItem
          image={image}
          projectName='Neo'
          location='Bankia'
          totalBudget={70000}
          profit={4000}
          actualHours={1100}
          solidHours={1000}
        />

        <BudgetStatusItem
          image={image}
          projectName='VR Website'
          location='Barca'
          totalBudget={70000}
          profit={4000}
          actualHours={1100}
          solidHours={2000}
        />

        <BudgetStatusItem
          image={image}
          projectName='VR Website'
          location='Barca'
          totalBudget={70000}
          profit={4000}
          actualHours={1100}
          solidHours={1100}
        />
      </div>
    </div>
  );
};

export default BudgetStatus;
