import React from "react";
import ListaCursos from "./listacursos";
import FormAddCourses from "./courseAddForm";
import { courses } from "../data/courses.json";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: []
      // { id: 1, name: "React desde 0", teacher: "Jonathen MirCha" },
      // { id: 2, name: "Drupal 8 desde 0", teacher: "Alberto Quiroga" }
    };

    this.handleOnAddCourse = this.handleOnAddCourse.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.resetData = this.resetData.bind(this);
  }

  handleOnAddCourse(e) {
    //alert("evento en React");
    e.preventDefault();

    let form = e.target,
      course = {
        id: form.id.value,
        name: form.name.value,
        teacher: form.teacher.value
      };

    if (this.validateData(course) === true)
      this.setState({
        courses: this.state.courses.concat([course])
      });

    //form.reset();
  }

  validateData(course) {
    if (course.name !== "" && course.teacher !== "") {
      return true;
    } else {
      const errorMsg = document.getElementById("message");
      errorMsg.innerHTML = "Los campos no pueden estar vacios!";
      setTimeout(() => {
        errorMsg.innerHTML = "";
      }, 4000);
    }
  }

  fetchData() {
    setTimeout(() => {
      this.setState({
        courses: courses
      });
    }, 2000);
  }

  resetData() {
    this.setState({
      courses: []
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    if (!this.state.courses.length) {
      return (
        <div>
          <p>No hay cursos :(</p>
          <button onClick={this.fetchData}>Cargar Cursos</button>
        </div>
      );
    } else {
      return (
        <div>
          <FormAddCourses onAddCourse={this.handleOnAddCourse} />
          <ListaCursos courses={this.state.courses} />
          <button onClick={this.resetData}>Borrar Cursos</button>
        </div>
      );
    }
  }
}

export default App;
