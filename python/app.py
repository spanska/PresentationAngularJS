#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from flask import request, abort, make_response
from flask_api import FlaskAPI, status
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = FlaskAPI(__name__)
CORS(app)
app.config.from_pyfile('app_config.py')
db = SQLAlchemy(app)


class Todo(db.Model):
    __tablename__ = 'todos'

    id = db.Column('id', db.Integer, primary_key=True, autoincrement=True)
    user = db.Column(db.String)
    value = db.Column(db.String)
    done = db.Column(db.Boolean)

    def __init__(self, user, value, done):
        self.user = user
        self.value = value
        self.done = done


@app.route("/api/<string:user>/todos", methods=['GET'])
def get_todos(user):
    """
    <pre>
    récupération des todos pour un utilisateur

    exemple de retour:

    {
        "1" : {"value": "faire les courses", "done": true},
        "2" : {"value": "acheter un cadeau pour la fête des pères", "done": false},
        "3" : {"value": "rendez_vous à la banque", "done": true}
    }
    </pre>
    """

    print("récupération des TODOs pour le user %s" % user)

    response = {
        item.id: {
            'value': item.value,
            'done': item.done
        } for item in Todo.query.filter_by(user=user).all()}

    return response, status.HTTP_200_OK


@app.route("/api/<string:user>/todo", methods=['POST', 'GET', 'DELETE'])
def insert_todo(user):
    """
    <pre>
    insertion d'un todo dans la liste d'un utilisateur

    exemple de requête à envoyer:

    {
        "value": "aller chercher les enfants ce soir",
        "done": false
    }

    suppression d'un todo dans la liste d'un utilisateur

    exemple de requête à envoyer:

    /api/<string:user>/todo?id=1984

    </pre>
    """

    if request.method == 'POST':

        data = request.data
        value = data.get('value')
        done = data.get('done')

        print('insertion d\'un TODO {"value": "%s", "status": "%s"} pour le user %s' % (value, done, user))

        if not value or done not in [True, False]:
            abort(make_response("Il n'y pas de champ value ou le champs status n'est pas à 'false' ou 'true'", 400))

        else:
            todo = Todo(user, value, done)
            db.session.add(todo)
            db.session.commit()
            return {"id": todo.id}, status.HTTP_201_CREATED

    elif request.method == 'DELETE':

        todo_id = request.args.get('id')

        print('suppression d\'un TODO {"id": "%s"}' % todo_id)
        item = Todo.query.filter_by(id=todo_id).first()

        if item:
            db.session.delete(item)
            db.session.commit()
            return '', status.HTTP_204_NO_CONTENT

        else:
            return '', status.HTTP_404_NOT_FOUND


    else:
        return '', status.HTTP_200_OK


if __name__ == "__main__":
    db.create_all()
    app.run(host='127.0.0.1', port=5000, debug=True)
