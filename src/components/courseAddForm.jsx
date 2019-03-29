import React from "react";

const FormAddCourses = props => (
  <form onSubmit={props.onAddCourse}>
    <input
      type="text"
      className="input"
      placeholder="Nombre del curso"
      name="name"
    />
    <input
      type="text"
      className="input"
      placeholder="Profesor"
      name="teacher"
    />
    <input type="hidden" name="id" value={Math.floor(Math.random() * 100)} />
    <input type="submit" className="button is-primary" value="Guardar" />
    <div id="message" />
  </form>
);

export default FormAddCourses;
