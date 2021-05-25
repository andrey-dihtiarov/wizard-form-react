import { Field } from 'formik';

import DateInput from '../../inputs/DateInput';

// import styles from '../AccountForm/styles.module.scss';

const ProfileForm = () => (
  <div>
    <Field name="birthDate" label="Birth date" component={DateInput} />
  </div>
);

export default ProfileForm;
