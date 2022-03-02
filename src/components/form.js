import { Field } from "./field";
import { Button } from "./button";

export const Form = () => (
  <div className="App d-flex justify-content-center mt-5">
    <form className="d-flex flex-column shadow-sm p-4 rounded">
      <span className="text-center mb-3 fs-5">Submission Form</span>
      <Field label={"name"} type={"text"} required={true} />
      <Field label={"email"} type={"email"} required={true} />
      <Button value={"submit"} type={"submit"} />
    </form>
  </div>
);
