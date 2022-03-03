import { useState } from "react";
import { Field } from "./field";
import { Button } from "./button";
import { createUser } from "../firebase/fb.api";
import { send } from "emailjs-com";
import swal from "sweetalert";

export const Form = ({ showList, setShowList, isSaving, setIsSaving }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSaving(true);
    const user = {
      name: name,
      email: email,
    };
    createUser(user);
    sendEmail(user);
  };

  function sendEmail(user) {
    send("service_yjns0tt", "template_a3alt0x", user, "zNtsXZk6TjiwM61ch")
      .then((response) => {
        swal({
          title: "Success!",
          text: "Details saved for: " + user.name,
          icon: "success",
          button: "Aww yiss!",
        });

        setName("");
        setEmail("");
        setIsSaving(false);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  }

  return (
    <div className="App d-flex flex-column m-auto mt-5 col-12 col-sm-4 col-lg-3">
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column shadow-sm p-4 w-100 rounded"
      >
        <span className="text-center mb-3 fs-5">Contact Form</span>
        <Field
          label={"name"}
          type={"text"}
          required={true}
          stateChanger={setName}
          value={name}
        />
        <Field
          label={"email"}
          type={"email"}
          required={true}
          stateChanger={setEmail}
          value={email}
        />
        <Button isSaving={isSaving} value={"submit"} type={"submit"} />
      </form>
      <div className="text-center mt-2">
        <span className="show-button" onClick={() => setShowList(!showList)}>
          Show Saved Users
        </span>
      </div>
    </div>
  );
};
