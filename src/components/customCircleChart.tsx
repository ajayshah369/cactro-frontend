import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend,
  ResponsiveContainer,
  PieLabelRenderProps,
} from "recharts";

export type DataType = {
  name: string;
  value: number;
  color: string;
}[];

const CustomCircleChart = ({ data }: { data: DataType }) => {
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }: PieLabelRenderProps) => {
    if (
      !cx ||
      !cy ||
      !midAngle ||
      !innerRadius ||
      !outerRadius ||
      percent === undefined
    )
      return null;

    const RADIAN = Math.PI / 180;
    const radius = +innerRadius + (+outerRadius - +innerRadius) / 2; // Position inside slice
    const x = +cx + radius * Math.cos(-midAngle * RADIAN);
    const y = +cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill='white'
        textAnchor='middle'
        dominantBaseline='central'
        fontSize={12}
        fontWeight='normal'
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };

  return (
    <div className='max-w-full overflow-auto'>
      <ResponsiveContainer
        width='100%'
        minWidth={400}
        height={400}
        className='bg-white rounded overflow-x-auto'
      >
        <PieChart>
          <Pie
            innerRadius={60}
            data={data}
            cx='50%'
            cy='50%'
            outerRadius={100}
            dataKey='value'
            label={renderCustomizedLabel} // Custom label inside the slices
            labelLine={false} // Hide label lines
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            formatter={(value: string) => (
              <span style={{ marginRight: "12px" }}>{value.toTitleCase()}</span>
            )} // Title case and spacing
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomCircleChart;
