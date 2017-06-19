import {WebService} from './webservice';

const initFunction = function () {
  const webservice = new WebService();
  return webservice.getTodos();
};

export const initialTodo = initFunction();

export class TodoService {

  constructor() {
    this.webservice = new WebService();
  }

  addTodo(text) {
    this.webservice.insertTodo(text, false);
    return this.webservice.getTodos();
  }

  completeTodo(id, todos) {
    return todos.map(todo => {
      return todo.id === id ?
        Object.assign({}, todo, {completed: !todo.completed}) :
        todo;
    });
  }

  deleteTodo(id) {
    this.webservice.deleteTodo(id);
    return this.webservice.getTodos();
  }

  editTodo(id, text, todos) {
    return todos.map(todo => {
      return todo.id === id ?
        Object.assign({}, todo, {text}) :
        todo;
    });
  }

  completeAll(todos) {
    const areAllMarked = todos.every(todo => todo.completed);
    return todos.map(todo => Object.assign({}, todo, {completed: !areAllMarked}));
  }

  clearCompleted(todos) {
    return todos.filter(todo => {
      return todo.completed === false;
    });
  }
}

