#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from flask import request, abort, make_response
from flask_api import FlaskAPI, status
from flask_sqlalchemy import SQLAlchemy

app = FlaskAPI(__name__)
app.config.from_pyfile('app_config.py')
db = SQLAlchemy(app)


class Todo(db.Model):
    __tablename__ = 'todos'

    id = db.Column('id', db.Integer, primary_key=True, autoincrement=True)
    user = db.Column(db.String)
    value = db.Column(db.String)
    status = db.Column(db.String)

    def __init__(self, user, value, status_param):
        self.user = user
        self.value = value
        self.status = status_param


@app.route("/api/<string:user>/todos", methods=['GET'])
def get_todos(user):
    """
    <pre>
    récupération des todos pour un utilisateur

    exemple de retour:

    {
        "1" : {"value": "faire les courses", "status": "done"},
        "2" : {"value": "acheter un cadeau pour la fête des pères", "status": "to_do"},
        "3" : {"value": "rendez_vous à la banque", "status": "done"}
    }
    </pre>
    """

    print("récupération des TODOs pour le user %s" % user)

    for item in Todo.query.filter_by(user=user).all():
        print(item)

    response = {
        item.id: {
            'value': item.value,
            'status': item.status
        } for item in Todo.query.filter_by(user=user).all()}

    return response, status.HTTP_200_OK


@app.route("/api/<string:user>/todo", methods=['POST', 'GET'])
def insert_todo(user):
    """
    <pre>
    insertion d'un todo dans la liste d'un utilisateur

    exemple de requête à envoyer:

    {
        "value": "aller chercher les enfants ce soir",
        "status": "to_do"
    }
    </pre>
    """

    if request.method == 'POST':

        data = request.data
        value = data.get('value')
        status_param = data.get('status', 'unknown')

        print('insertion d\'un TODO {"value": "%s", "status": "%s"} pour le user %s' % (value, status_param, user))

        if not value or status_param not in ['done', 'to_do']:
            abort(make_response("Il n'y pas de champ value ou le champs status n'est pas à 'done' ou 'to_do'", 400))

        else:
            todo = Todo(user, value, status_param)
            db.session.add(todo)
            db.session.commit()
            return '', status.HTTP_201_CREATED

    else:
        return '', status.HTTP_200_OK


if __name__ == "__main__":
    db.create_all()
    app.run(host='127.0.0.1', port=5000, debug=True)
