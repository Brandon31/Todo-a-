import React from "react";
import Todos from "./Todos";
import Header from "./layout/Header";
class TodoApp extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Scheduled an interview with BankOnIT",
        completed: true
      },
      {
        id: 2,
        title: "Wow them with my Node.js, MySQL, and React skills",
        completed: false
      },
      {
        id: 3,
        title: "Begin a fulfilling career with a great company",
        completed: false
      }
    ]
  };
  handleChange = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };
  render() {
    return (
      <div className="container">
        <Header />
        <Todos todos={this.state.todos} handleChange={this.handleChange} />
      </div>
    );
  }
}
export default TodoApp;
