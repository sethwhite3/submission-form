export const Button = (props) => {
  const { type, value, isSaving } = props;

  return (
    <>
      {!isSaving && (
        <input
          className="btn btn-primary mt-1 btn-sm"
          type="submit"
          value="submit"
        />
      )}
      {isSaving && (
        <button
          value="submit"
          className="btn btn-primary mt-1 btn-sm"
          type="submit"
          disabled
        >
          <span
            className="spinner-grow spinner-grow-sm"
            role="status"
            aria-hidden="true"
          ></span>
          Saving...
        </button>
      )}
    </>
  );
};
