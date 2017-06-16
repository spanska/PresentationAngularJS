const url = 'http://127.0.0.1:5000';
const user = 'jb';

export class WebService {

  constructor(http) {
    this.http = http
  }

  this.getTodos () {
    return this.http.get(this.urlBase + '/api/' + this.user + '/todos');
  }

  this.insertTodo(value, done) {
    return this.http.post(this.urlBase + '/api/' + this.user + '/todo', {
      "value": value,
      "done": done
    });
  }

  this.deleteTodo(id) {
    return this.http.delete(this.urlBase + '/api/' + this.user + '/todo?id=' + id);
  }

}
