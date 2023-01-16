function InputLogin({ label, type }) {
  return (
    <div className="container-input">
      <label htmlFor={label}>{label}</label>
      <input type={type} name={label} className="input-user" />
    </div>
  );
}

export default InputLogin;
