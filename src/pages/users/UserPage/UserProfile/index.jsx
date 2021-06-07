import PropTypes from 'prop-types';
import { format } from 'date-fns';

import Avatar from '../../../../components/Avatar';
import CategoryBlock from '../CategoryBlock';
import CategoryItem from '../CategoryItem';

import styles from './styles.module.scss';

const UserProfile = ({ user }) => {
  const {
    avatar,
    userName,
    firstName,
    lastName,
    birthDate,
    email,
    address,
    company,
    fax,
    facebookLink,
    phoneNumbers,
    skills,
    myHobbies,
    githubLink,
    gender,
    mainLanguage,
  } = user;
  return (
    <div className={styles.wrapper}>
      <div>
        <Avatar image={avatar} />
      </div>
      <div className={styles.inner}>
        <CategoryBlock title="Account">
          <CategoryItem title="User name" value={userName} />
          <CategoryItem title="Password" value="" />
        </CategoryBlock>

        <CategoryBlock title="Personal">
          <CategoryItem title="First name" value={firstName} />
          <CategoryItem title="Last name" value={lastName} />
          <CategoryItem title="Birth date" value={format(birthDate, 'dd/MM/yyyy')} />
          <CategoryItem title="Email" value={email} />
          <CategoryItem title="Address" value={address} />
          <CategoryItem title="Gender" value={gender} />
        </CategoryBlock>

        <CategoryBlock title="Contacts">
          <CategoryItem title="Company" value={company} />
          <CategoryItem title="Github Link" value={githubLink} />
          <CategoryItem title="Facebook Link" value={facebookLink} />
          <CategoryItem title="Main Language" value={mainLanguage} />
          <CategoryItem title="Fax" value={fax} />
          {phoneNumbers.map((phone, index) => (
            <CategoryItem key={index.toString()} title={`Phone #${index + 1}`} value={phone} />
          ))}
        </CategoryBlock>

        <CategoryBlock title="Capabilities">
          <CategoryItem title="Skills" value={skills.join(', ')} />
          <CategoryItem title="Hobbies" value={myHobbies.join(', ')} />
        </CategoryBlock>
      </div>
    </div>
  );
};

UserProfile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    phoneNumbers: PropTypes.array,
    email: PropTypes.string.isRequired,
    birthDate: PropTypes.instanceOf(Date).isRequired,
    address: PropTypes.string.isRequired,
    fax: PropTypes.string.isRequired,
    facebookLink: PropTypes.string.isRequired,
    skills: PropTypes.array.isRequired,
    myHobbies: PropTypes.array,
    githubLink: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    mainLanguage: PropTypes.string.isRequired,
  }),
};

UserProfile.defaultProps = {
  user: {
    avatar: null,
    phoneNumbers: [],
    myHobbies: [],
  },
};

export default UserProfile;
