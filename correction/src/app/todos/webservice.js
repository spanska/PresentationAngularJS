const url = 'http://127.0.0.1:5000';
const user = 'jb';

export class WebService {

  /** @ngInject */
  constructor($http) {
    this.$http = $http;
  }

  getTodos() {
    const result = this.$http.get(url + '/api/' + user + '/todos');
    const output = [];
    for (const val in result) {
      if (val in result) {
        const item = {};
        item.id = val;
        item.text = result[val].value;
        item.completed = result[val].done;
        output.push(item);
      }
    }
    return output;
  }

  insertTodo(value, done) {
    const valueParam = value;
    const doneParam = done;

    return this.$http.post(url + '/api/' + user + '/todo', {
      value: valueParam,
      done: doneParam
    });
  }

  deleteTodo(id) {
    return this.$http.delete(url + '/api/' + user + '/todo?id=' + id);
  }

}
