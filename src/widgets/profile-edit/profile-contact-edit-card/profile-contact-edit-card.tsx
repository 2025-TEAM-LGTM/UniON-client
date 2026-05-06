import TextField from '@shared/ui/components/field/textfield/textfield';
import ProfileSection from '@widgets/profile/profile-section/profile-section';

interface ProfileContactEditCardProps {
  email: string;
  onEmailChange: (email: string) => void;
}

const ProfileContactEditCard = ({
  email,
  onEmailChange,
}: ProfileContactEditCardProps) => {
  return (
    <ProfileSection title='연락처'>
      <TextField
        value={email}
        onChange={(e) => onEmailChange(e.target.value)}
        placeholder='이메일을 입력하세요'
      />
    </ProfileSection>
  );
};

export default ProfileContactEditCard;
