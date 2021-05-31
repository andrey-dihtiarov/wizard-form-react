import { Field } from 'formik';

import SkillsMultiselectInput from '../../inputs/SkillsMultiselectInput';
import TextAreaInput from '../../inputs/TextAreaInput';
import HobbiesInput from '../../inputs/HobbiesInput';

import styles from './styles.module.scss';

const CapabilitiesForm = () => (
  <div className={styles.form}>
    <div className={styles.fieldsWrapper}>
      <Field name="skills" label="Skills" component={SkillsMultiselectInput} />
      <Field name="additionalInfo" label="Additional Info" component={TextAreaInput} />
    </div>
    <div className={styles.fieldsWrapper}>
      <Field name="myHobbies" label="My Hobbies" component={HobbiesInput} />
    </div>
  </div>
);

export default CapabilitiesForm;
