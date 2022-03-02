export const Button = (props) => {
  const { type, value } = props;

  return (
    <input
      className="btn btn-primary mt-1 btn-sm"
      type="submit"
      value="submit"
    />
  );
};
