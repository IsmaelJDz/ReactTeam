import React from "react";

const FormAddCourses = props => (
  <form onSubmit={props.onAddCourse}>
    <input
      type="text"
      className="input"
      placeholder="Nombre del curso"
      name="name"
      required
    />
    <input
      type="text"
      className="input"
      placeholder="Profesor"
      name="teacher"
      required
    />
    <input type="hidden" name="id" value={Math.floor(Math.random() * 100)} />
    <input type="submit" className="button is-primary" value="Guardar" />
  </form>
);

export default FormAddCourses;
