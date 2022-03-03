import "./App.css";
import { useState } from "react";
import { Form } from "./components/form";
import { List } from "./components/list";

function App() {
  const [showList, setShowList] = useState(false);

  return (
    <div className="App d-flex flex-column justify-content-center mt-5">
      <Form showList={showList} setShowList={setShowList} />
      {showList && <List />}
    </div>
  );
}

export default App;
