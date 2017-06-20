import {SHOW_ALL} from '../constants/TodoFilters';
import {initialTodo} from '../todos/todos';

class AppController {

  /** @ngInject */
  constructor($http, $log) {
    const parentThis = this;
    const promise = initialTodo($http, $log);
    const successFunc = function (response) {
      parentThis.todos = response;
    };
    promise.then(successFunc);
    this.filter = SHOW_ALL;
  }
}

export const App = {
  template: require('./App.html'),
  controller: AppController
};
