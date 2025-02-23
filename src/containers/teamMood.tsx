import profileImage from "../assets/profile.jpg";
import TeamMoodItem, { Mood } from "../components/teamMoodItem";

const TeamMood = () => {
  return (
    <div className='bg-white shadow-lg p-4 rounded'>
      <p
        className='font-medium text-sm w-36 flex flex-col items-stretch'
        style={{
          color: "var(--secondary-text-color)",
        }}
      >
        Team Mood
      </p>

      <div>
        <TeamMoodItem
          image={profileImage}
          name='John Doe'
          designation='CEO'
          teamMood={Mood.happy}
        />

        <TeamMoodItem
          image={profileImage}
          name='Xyz'
          designation='Ui/Ux'
          teamMood={Mood.neutral}
        />

        <TeamMoodItem
          image={profileImage}
          name='Ajay'
          designation='Full Stack Developer'
          teamMood={Mood.sad}
        />

        <TeamMoodItem
          image={profileImage}
          name='Ashish'
          designation='Frontend Developer'
          teamMood={Mood.verySad}
        />

        <TeamMoodItem
          image={profileImage}
          name='Manish'
          designation='Slaes Executive'
          teamMood={Mood.angry}
        />
      </div>
    </div>
  );
};

export default TeamMood;
