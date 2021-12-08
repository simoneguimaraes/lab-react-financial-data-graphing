import { useState } from "react";

function FilterDate(props) {

  const [formData, setFormData] = useState({
    from: "",
    to: "",
  });

  function handleChange(event) {
    let value = event.target.value;
    setFormData({ ...formData, [event.target.name]: value });
  };

  function handleSubmit(event) {
    event.preventDefault();
    props.setData(formData);
  };

  return (
    <div className="d-flex w-50 m-3">
      <form onSubmit={handleSubmit}>
        <label>
          From:{" "}
          <input
            name="from"
            onChange={handleChange}
            id="inicial"
            className="form-control me-3"
            type="date"
            placeholder="Data Inicial"
          />
        </label>

        <label>
          To:{" "}
          <input
            name="to"
            onChange={handleChange}
            id="final"
            className="form-control"
            type="date"
            placeholder="Data Final"
          />
        </label>

        <button type="submit" className="btn btn-light">Filter</button>
      </form>
    </div>
  );
}

export default FilterDate;