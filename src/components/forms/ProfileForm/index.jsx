import { Field } from 'formik';
import { subYears } from 'date-fns';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import { GENDER_INPUT_VALUES } from '../../../constants';

import DateInput from '../../inputs/DateInput';
import RadioGroupInput from '../../inputs/RadioGroupInput';
import AddressInput from '../../inputs/AddressInput';
import TextInput from '../../inputs/TextInput';
import FormikForm from '../../FormikForm';

import styles from './styles.module.scss';

const validationSchema = Yup.object().shape({
  // TODO custom validation
  firstName: Yup.string()
    .min(2, 'User Name is too short')
    .max(70, 'User Name is too long')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'User Name Too Short')
    .max(70, 'User Name Too Long')
    .required('Required'),
  email: Yup.string().email('Incorrect email format').required('Required'),
  // TODO Support timezones
  birthDate: Yup.date().max(subYears(Date.now(), 18), 'User must be older 18').required('Required'),
  gender: Yup.string().oneOf(GENDER_INPUT_VALUES).required('Required'),
});

const ProfileForm = ({ children, onSubmit }) => {
  const { birthDate, gender, address } = useSelector((state) => state.user);
  const initValues = { birthDate, gender, address };
  return (
    <FormikForm initialValues={initValues} validationSchema={validationSchema} submit={onSubmit}>
      <div className={styles.form}>
        <div className={styles.formInner}>
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
      </div>
      {children}
    </FormikForm>
  );
};

ProfileForm.propTypes = {
  children: PropTypes.node,
};

ProfileForm.defaultProp = {
  children: null,
};

export default ProfileForm;
