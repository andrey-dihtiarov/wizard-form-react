import { Field } from 'formik';

import DateInput from '../../inputs/DateInput';
import RadioGroup from '../../RadioGroup';

const GenderRadioGroupValues = ['Male', 'Female'];

const ProfileForm = () => (
  <div>
    <Field name="birthDate" label="Birth date" component={DateInput} />
    <RadioGroup values={GenderRadioGroupValues} name="gender" />
  </div>
);

export default ProfileForm;
