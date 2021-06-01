import PropTypes from 'prop-types';

const CapabilitiesForm = ({ children }) => <div>{children}</div>;

CapabilitiesForm.propTypes = {
  children: PropTypes.node,
};

CapabilitiesForm.defaultProp = {
  children: null,
};

export default CapabilitiesForm;
