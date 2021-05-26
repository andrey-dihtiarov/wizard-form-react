const RadioInput = ({ field: { name, value }, label, className, checked, ...rest }) => (
  <div>
    <input name={name} id={value} type="radio" value={value} {...rest} />
    <label htmlFor={value}>{label}</label>
  </div>
);

export default RadioInput;
