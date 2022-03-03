export const Table = ({ data }) => {
  return (
    <table className="table table-sm table-bordered">
      <thead className="table-light">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ id, name, email }, index) => (
          <tr key={id}>
            <th scope="row">{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
