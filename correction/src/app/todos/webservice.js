const url = 'http://127.0.0.1:5000';
const user = 'jb';

export class WebService {

  constructor(http) {
    this.http = http;
  }

  getTodos() {
    return this.http.get(url + '/api/' + user + '/todos');
  }

  insertTodo(value, done) {
    const valueParam = value;
    const doneParam = done;

    return this.http.post(url + '/api/' + user + '/todo', {
      value: valueParam,
      done: doneParam
    });
  }

  deleteTodo(id) {
    return this.http.delete(url + '/api/' + user + '/todo?id=' + id);
  }

}
