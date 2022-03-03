import "./App.css";
import { useState } from "react";
import { Form } from "./components/form";
import { List } from "./components/list";

function App() {
  const [showList, setShowList] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  return (
    <div className="App d-flex flex-column justify-content-center mt-5">
      <Form
        isSaving={isSaving}
        setIsSaving={setIsSaving}
        showList={showList}
        setShowList={setShowList}
      />
      {showList && <List isSaving={isSaving} />}
    </div>
  );
}

export default App;
