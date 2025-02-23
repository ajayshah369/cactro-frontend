import { Avatar } from "@mui/material";
import BorderLinearProgress from "./borderLineprogress";
import { CheckCircle, Warning } from "@mui/icons-material";

type BudgetStatusItemProps = {
  image: string;
  projectName: string;
  location: string;
  totalBudget: number;
  profit: number;
  actualHours: number;
  solidHours: number;
};

const calculateProgress = (total: number, value: number) => {
  const percentage = Math.floor((value / total) * 100);

  if (percentage > 100) return 100;
  return percentage;
};

enum Status {
  Loss = "Loss",
  TimeOverDue = "TimeOverDue",
  Default = "Default",
  Done = "Done",
}

const colors = {
  [Status.Loss]: "var(--red)",
  [Status.TimeOverDue]: "var(--yellow)",
  [Status.Default]: "var(--green)",
  [Status.Done]: "var(--green)",
};

const BudgetStatusItem = (props: BudgetStatusItemProps) => {
  const {
    image,
    projectName,
    location,
    totalBudget,
    profit,
    actualHours,
    solidHours,
  } = props;

  let status = Status.Default;

  if (actualHours > solidHours) status = Status.TimeOverDue;
  if (actualHours < solidHours) status = Status.Default;
  if (actualHours === solidHours) status = Status.Done;
  if (profit < 0) status = Status.Loss;

  return (
    <div className='rounded p-4 bg-white shadow min-w-80'>
      <div className='flex items-center justify-between'>
        <div>
          <h2
            className='text-xl font-medium'
            style={{ color: "var(--text-color)" }}
          >
            {projectName}
          </h2>
          <p
            className='text-sm'
            style={{
              color: "var(--secondary-text-color)",
            }}
          >
            {location}
          </p>
        </div>

        <Avatar alt='Image' src={image} />
      </div>

      <div className='my-4 text-xs'>
        <p>
          <span
            style={{
              color: "var(--tertiary-text-color)",
            }}
          >
            Total Budget:
          </span>{" "}
          <span
            className='font-medium'
            style={{
              color: "var(--secondary-text-color)",
            }}
          >
            {totalBudget}€
          </span>
        </p>
        <p className='mt-2'>
          <span
            style={{
              color: "var(--tertiary-text-color)",
            }}
          >
            Profit:
          </span>{" "}
          <span
            className='font-medium'
            style={{
              color: profit < 0 ? "var(--red)" : "var(--secondary-text-color)",
            }}
          >
            {profit}€
          </span>
        </p>
      </div>

      <div className='relative'>
        {status === Status.Loss && (
          <Warning
            className='absolute right-0 top-0'
            style={{
              color: colors[status],
              transform: "translateY(-120%)",
            }}
          />
        )}

        {status === Status.Done && (
          <CheckCircle
            className='absolute right-0 top-0'
            style={{
              color: colors[status],
              transform: "translateY(-120%)",
            }}
          />
        )}

        <BorderLinearProgress
          value={calculateProgress(solidHours, actualHours)}
          color={colors[status]}
        />

        <div className='flex items-center justify-between mt-2'>
          <p
            className='text-xs'
            style={{
              color: "var(--secondary-text-color)",
            }}
          >
            Actual Hours {actualHours}
          </p>

          <p
            className='text-xs'
            style={{
              color: "var(--secondary-text-color)",
            }}
          >
            {solidHours} Solid Hours
          </p>
        </div>
      </div>
    </div>
  );
};

export default BudgetStatusItem;
