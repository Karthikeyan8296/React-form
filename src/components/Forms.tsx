
const Form = () => {
  return (
    <form action="">
      <div className="mb-3">
        <label htmlFor="name" className="form-lable">Name uh sollu</label>
        <input id="name" type="text" className="form-control" />
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-lable">Age enna?</label>
        <input id="age" type="number" className="form-control" />
      </div>

      <button type="button" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;
