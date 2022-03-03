import { useState, useEffect } from "react";
import { getUsers } from "../firebase/fb.api";
import { Table } from "./table";

export const List = () => {
  const [data, setData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getUsers().then((response) => {
      setData(response);
      setDataLoaded(true);
    });
  }, []);
  return (
    <div className="col-12 col-sm-4 col-lg-3 m-auto mt-3">
      {!dataLoaded && (
        <div
          className="spinner-border text-primary d-flex m-auto"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      {dataLoaded && data.length >= 1 && <Table data={data} />}
      {data.length == 0 && (
        <div className="text-center">
          <span>No saved data...</span>
        </div>
      )}
    </div>
  );
};
