import CustomCircleChart, { DataType } from "../components/customCircleChart";

const CircleChart = () => {
  const data: DataType = [
    {
      value: 1,
      name: "completed",
      color: "#00ddc6",
    },
    {
      value: 3,
      name: "ongoing",
      color: "#788CD5",
    },
    {
      value: 1,
      name: "delayed",
      color: "#e50000",
    },
  ];

  return (
    <div className='bg-white'>
      <p className='ml-4 mt-4'>Budget</p>
      <CustomCircleChart data={data} />
    </div>
  );
};

export default CircleChart;
