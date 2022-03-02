export const Field = (props) => {
  const { label, type, required } = props;

  return (
    <label className="d-flex flex-column mb-3">
      <span className="text-secondary fs-6 fw-light text-capitalize">
        {label}:
      </span>
      <input
        className="form-control form-control-sm"
        id={label}
        required={required}
        type={type}
        name={label}
      />
    </label>
  );
};
