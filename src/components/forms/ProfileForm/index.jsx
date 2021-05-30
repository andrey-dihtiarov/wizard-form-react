import { Field } from 'formik';

import { GENDER_INPUT_VALUES } from '../../../constants';

import DateInput from '../../inputs/DateInput';
import RadioGroupInput from '../../inputs/RadioGroupInput';
import AddressInput from '../../inputs/AddressInput';
import TextInput from '../../inputs/TextInput';

import styles from './styles.module.scss';

const ProfileForm = () => (
  <div className={styles.form}>
    <div className={styles.fieldsWrapper}>
      <Field name="firstName" label="First Name" component={TextInput} />
      <Field name="lastName" label="Last Name" component={TextInput} />
      <Field name="birthDate" label="Birth date" component={DateInput} />
    </div>
    <div className={styles.fieldsWrapper}>
      <Field name="email" label="Email" component={TextInput} />
      <Field name="address" label="Address" component={AddressInput} />
      <RadioGroupInput name="gender" values={GENDER_INPUT_VALUES} />
    </div>
  </div>
);

export default ProfileForm;
