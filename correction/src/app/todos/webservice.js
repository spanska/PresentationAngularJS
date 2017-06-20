const url = 'http://127.0.0.1:5000';
const user = 'jb';

export class WebService {

  constructor($http, $log) {
    this.$http = $http;
    this.$log = $log;
  }

  getTodos() {
    const parentThis = this;
    const successFunc = function (response) {
      parentThis.$log.log('succès de l\'appel au webservice de récupération des Todos');
      const result = response.data;
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

      parentThis.$log.log(output);
      return output;
    };

    const errorFunc = function (response) {
      parentThis.$log.error('échec de l\'appel au webservice de récupération des Todos');
      parentThis.$log.log(response);
    };

    this.$http.get(url + '/api/' + user + '/todos').then(successFunc, errorFunc);
//    return output;
  }

  insertTodo(value, done) {
    this.$log.log('Appel au webservice d\'insertion d\'un nouveau Todo');
    const valueParam = value;
    const doneParam = done;

    this.$http.post(url + '/api/' + user + '/todo', {
      value: valueParam,
      done: doneParam
    });
  }

  deleteTodo(id) {
    this.$log.log('Appel au webservice de suppression d\'un Todo');
    this.$http.delete(url + '/api/' + user + '/todo?id=' + id);
  }

}
