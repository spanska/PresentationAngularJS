class HeaderController {
  /** @ngInject */
  constructor(todoService) {
    this.todoService = todoService;
  }

  handleSave(text) {
    if (text.length !== 0) {
      const parentThis = this;
      const promise = this.todoService.addTodo(text, this.todos);
      const successFunc = function (response) {
        parentThis.todos = response;
      };
      promise.then(successFunc);
    }
  }
}

export const Header = {
  template: require('./Header.html'),
  controller: HeaderController,
  bindings: {
    todos: '='
  }
};
