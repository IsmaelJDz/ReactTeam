import React from "react";
import ListaCursos from "./listacursos";
import FormAddCourses from "./courseAddForm";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: [
        { id: 1, name: "React desde 0", teacher: "Jonathen MirCha" },
        { id: 2, name: "Drupal 8 desde 0", teacher: "Alberto Quiroga" }
      ]
    };

    this.handleOnAddCourse = this.handleOnAddCourse.bind(this);
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

    this.setState({
      courses: this.state.courses.concat([course])
    });
  }

  render() {
    return (
      <div>
        <FormAddCourses onAddCourse={this.handleOnAddCourse} />
        <ListaCursos courses={this.state.courses} />
      </div>
    );
  }
}

export default App;
