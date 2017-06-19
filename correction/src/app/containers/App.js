import {SHOW_ALL} from '../constants/TodoFilters';
import {initialTodo} from '../todos/todos';

class AppController {

  /** @ngInject */
  constructor($http) {
    this.todos = initialTodo($http);
    this.filter = SHOW_ALL;
  }
}

export const App = {
  template: require('./App.html'),
  controller: AppController
};
