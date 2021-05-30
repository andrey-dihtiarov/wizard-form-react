import { Field } from 'formik';

import DateInput from '../../inputs/DateInput';
import RadioGroupInput from '../../inputs/RadioGroupInput';
import AddressInput from '../../inputs/AddressInput';

const ProfileForm = () => (
  <div>
    <Field name="birthDate" label="Birth date" component={DateInput} />
    <RadioGroupInput values={['Male', 'Female']} name="gender" />
    <Field name="address" label="Address" component={AddressInput} />
  </div>
);

export default ProfileForm;
