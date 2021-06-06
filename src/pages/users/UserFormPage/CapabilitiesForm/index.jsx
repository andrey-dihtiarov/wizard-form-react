import PropTypes from 'prop-types';
import { Field, Form, Formik } from 'formik';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';

import { SKILLS } from '../../../../constants';

import SelectboxInput from '../../../../components/inputs/SelectboxInput';
import TextAreaInput from '../../../../components/inputs/TextAreaInput';
import HobbiesInput from '../../../../components/inputs/HobbiesInput';
import NavButtons from '../../../../components/StepWizard/NavButtons';

import styles from './styles.module.scss';

const selectboxValues = SKILLS.map((item) => ({
  value: item,
  label: item,
}));

const validationSchema = Yup.object().shape({
  skills: Yup.array().min(3, 'Min skills count should be 3'),
  additionalInfo: Yup.string().max(300, 'Max length is 300'),
});

const CapabilitiesForm = ({ onBack, onNext, isFirst, isLast }) => {
  const { skills, additionalInfo, myHobbies } = useSelector((state) => state.form);
  const onSubmit = (values) => onNext(values);
  return (
    <Formik
      initialValues={{ skills, additionalInfo, myHobbies }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className={styles.form}>
        <div className={styles.formInner}>
          <div className={styles.fieldsWrapper}>
            <Field
              name="skills"
              label="Skills"
              valuesList={selectboxValues}
              isMulti
              component={SelectboxInput}
            />
            <Field name="additionalInfo" label="Additional Info" component={TextAreaInput} />
          </div>
          <div className={styles.fieldsWrapper}>
            <div className={styles.hobbiesWrapper}>
              <Field name="myHobbies" label="My Hobbies" component={HobbiesInput} />
            </div>
          </div>
        </div>
        <NavButtons isFirst={isFirst} isLast={isLast} onBack={onBack} />
      </Form>
    </Formik>
  );
};

CapabilitiesForm.propTypes = {
  onBack: PropTypes.func,
  onNext: PropTypes.func.isRequired,
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
};

CapabilitiesForm.defaultProps = {
  onBack: () => {},
};

export default CapabilitiesForm;
