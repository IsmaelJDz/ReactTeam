import React from "react";
import uid from "uid";

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
    <input type="hidden" name="id" value={uid(10)} />
    <input type="submit" className="button is-primary" value="Guardar" />
    <div id="message" />
  </form>
);

export default FormAddCourses;
