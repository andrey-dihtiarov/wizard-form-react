import { Field } from 'formik';

import DateInput from '../../inputs/DateInput';
import RadioGroupInput from '../../inputs/RadioGroupInput';
import AddressInput from '../../inputs/AddressInput';
import { GENDER_INPUT_VALUES } from '../../../constants';

const ProfileForm = () => (
  <div>
    <Field name="birthDate" label="Birth date" component={DateInput} />
    <RadioGroupInput values={GENDER_INPUT_VALUES} name="gender" />
    <Field name="address" label="Address" component={AddressInput} />
  </div>
);

export default ProfileForm;
