import CustomLineChart, { DataType } from "../components/customLineChart";

const LineChart = () => {
  const data: DataType = [
    {
      value: 0,
      date: "06/19/2023",
    },
    {
      value: 1000,
      date: "06/20/2023",
    },
    {
      value: 3500,
      date: "06/21/2023",
    },
    {
      value: 3000,
      date: "06/22/2023",
    },
    {
      value: 4000,
      date: "06/23/2023",
    },
    {
      value: 5000,
      date: "06/24/2023",
    },
    {
      value: 6000,
      date: "06/25/2023",
    },
  ];

  return (
    <div className='bg-white'>
      <p className='ml-4 mt-4'>Total Revenue</p>
      <CustomLineChart data={data} />
    </div>
  );
};

export default LineChart;
