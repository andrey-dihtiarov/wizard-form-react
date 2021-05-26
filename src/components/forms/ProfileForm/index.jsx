import { Field } from 'formik';

import DateInput from '../../inputs/DateInput';
import RadioGroup from '../../RadioGroup';
import AddressInput from '../../inputs/AddressInput';

const GenderRadioGroupValues = ['Male', 'Female'];

const ProfileForm = () => (
  <div>
    <Field name="birthDate" label="Birth date" component={DateInput} />
    <RadioGroup values={GenderRadioGroupValues} name="gender" />
    <Field name="address" label="Address" component={AddressInput} />
  </div>
);

export default ProfileForm;
