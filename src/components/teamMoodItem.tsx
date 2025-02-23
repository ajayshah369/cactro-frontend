import { Avatar } from "@mui/material";

// eslint-disable-next-line react-refresh/only-export-components
export enum Mood {
  happy = 100,
  neutral = 75,
  sad = 50,
  verySad = 25,
  angry = 0,
}

const TeamMoodEmoji = {
  [Mood.happy]: "😀",
  [Mood.neutral]: "🙂",
  [Mood.sad]: "😐",
  [Mood.verySad]: "😟",
  [Mood.angry]: "😡",
};

type TeamMoodItemProps = {
  image: string;
  name: string;
  designation: string;
  teamMood: Mood;
};

const TeamMoodItem = (props: TeamMoodItemProps) => {
  const { image, name, designation, teamMood } = props;

  return (
    <div className='border-b pb-4 border-gray-300 mt-6'>
      <div className='flex items-center gap-2'>
        <Avatar alt='Profile Image' src={image} />
        <div>
          <p
            className='text-sm font-medium'
            style={{
              color: "var(--secondary-text-color)",
            }}
          >
            {name}
          </p>
          <p
            className='text-xs'
            style={{
              color: "var(--tertiary-text-color)",
            }}
          >
            {designation}
          </p>
        </div>
      </div>

      <div className='relative h-0.5 w-full bg-gray-300 mt-4'>
        <p
          className='absolute top-1/2 -translate-x-1/2 -translate-y-1/2'
          style={{
            left: `${teamMood}%`,
          }}
        >
          {TeamMoodEmoji[teamMood]}
        </p>
      </div>
    </div>
  );
};

export default TeamMoodItem;
