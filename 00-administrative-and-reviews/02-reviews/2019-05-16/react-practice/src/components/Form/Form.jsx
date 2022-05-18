import React from 'react';

function Form(props) {
  return (
    <form className="Form" onSubmit={props.handleSubmit}>
      <input onChange={props.handleChange("name")} value={props.name} />
      <input onChange={props.handleChange("age")} type="number" value={props.age} />
      <button type="submit">Save!</button>
    </form>
  );
}

export default Form;
