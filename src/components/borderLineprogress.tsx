type BorderLinearProgressProps = {
  color: React.CSSProperties["color"];
  value: number;
};

const BorderLinearProgress = (props: BorderLinearProgressProps) => {
  const { color, value } = props;

  return (
    <div
      className='w-full rounded-full h-3 overflow-hidden'
      style={{
        backgroundColor: `color-mix(in srgb, ${color} 20%, transparent)`,
      }}
    >
      <div
        className='transition-all h-3'
        style={{
          width: `${value}%`,
          backgroundColor: color,
        }}
      ></div>
    </div>
  );
};

export default BorderLinearProgress;
