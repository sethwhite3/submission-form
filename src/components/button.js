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
          class="btn btn-primary mt-1 btn-sm"
          type="submit"
          disabled
        >
          <span
            class="spinner-grow spinner-grow-sm"
            role="status"
            aria-hidden="true"
          ></span>
          Saving...
        </button>
      )}
    </>
  );
};
