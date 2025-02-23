import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

type DataBoxProps = {
  text: string;
  value: string;
  Icon: OverridableComponent<SvgIconTypeMap<object, "svg">> & {
    muiName: string;
  };
  warning?: boolean;
};

const DataBox = (props: DataBoxProps) => {
  const { text, value, Icon, warning = false } = props;

  return (
    <div
      className='bg-white shadow-lg relative h-36 rounded'
      style={{
        backgroundColor: warning ? "var(--pink)" : "white",
      }}
    >
      <Icon
        className='absolute top-2 left-2'
        style={{
          color: warning ? "var(--red)" : "var(--primary-color)",
        }}
      />
      <div
        className='absolute top-1/2 left-0 right-0 flex flex-col items-center gap-2'
        style={{
          transform: "translateY(-16px)",
        }}
      >
        <h2
          className='text-2xl font-black'
          style={{
            color: warning ? "white" : "var(--text-color)",
          }}
        >
          {value}
        </h2>
        <p
          className='text-sm'
          style={{
            color: warning ? "white" : "var(--secondary-text-color)",
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default DataBox;
