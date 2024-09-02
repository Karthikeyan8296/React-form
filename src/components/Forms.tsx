import { useRef } from "react";

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = { name: "", age: 0 };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (nameRef.current !== null) person.name = nameRef.current.value;
        if (ageRef.current !== null) person.age = parseInt(ageRef.current.value); //parseInt - convert string into number
        console.log(person);
      }}
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-lable">
          Name uh sollu
        </label>
        <input ref={nameRef} id="name" type="text" className="form-control" />
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-lable">
          Age enna?
        </label>
        <input ref={ageRef} id="age" type="number" className="form-control" />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
