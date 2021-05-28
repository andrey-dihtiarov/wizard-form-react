import PropTypes from 'prop-types';
// import FormikForm from '../../FormikForm';

const CapabilitiesForm = ({ children }) => <div>{children}</div>;

CapabilitiesForm.propTypes = {
  children: PropTypes.node,
};

CapabilitiesForm.defaultProp = {
  children: null,
};

export default CapabilitiesForm;
