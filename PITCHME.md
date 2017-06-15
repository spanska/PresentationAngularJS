![LOGO](http://www.pole-emploi.fr/image/mmlelement/pj/7f/bb/a5/12/logo-pe49424.png)

#### Un exemple avec Yeoman et AngularJS

---
<!-- .slide: data-autoslide="2000" -->

### C'est quoi Yeoman?
### <span class="fragment" data-fragment-index="1" data-autoslide="2000">C'est quoi Angular?</span>

---

### De quoi va t'on avoir besoin?

* NodeJS: serveur d'application JavaScript
* npm: Manageur de paquets JS
* Git (à défaut de RTC)

---

Installation de Yeoman

```bash
$ npm install --global yo
```

Vérifier l'installation

```bash
$ yo --version
```

---

### Installation du generateur AngularJS (mais pas que...)

Ca gère ausssi les Modules, les preprocesseurs JS et les preprocesseurs CSS

```bash
$ npm install --global generator-fountain-webapp
```

---

### Création du projet

```bash
$ mkdir todo && cd todo
$ yo
```

---

Sélection du générateur et lancement

![selection_1](http://yeoman.io/static/03_yo_interactive.45bae71d55.png)

---

![selection_2](http://yeoman.io/static/03_yo_select.6d93fec77e.png)

---

![selection_3](http://yeoman.io/static/03_yo_end.8e1fafb036.png)

---

### Lancer notre projet

```bash
$ npm run serve
```

puis

http://localhost:3002

---

###Et dans la vraie vie?

---

On build le code avec la commande suivante

```bash
$ npm run build
```

<br/>
Et on consomme souvent les resources d'un webservice...

---

### Spécs de notre webservice (1/2)

enregistrer un todo

```javascript
>> POST /api/<user>/todo
{
    "value": "aller chercher les enfants ce soir",
    "status": "to_do"
}

<< HTTP/1.0 204 CREATED 
```

---

### Spécs de notre webservice (2/2)

récupérer les todos enregistrés

```javascript
>> GET /api/<user>/todos

<< {
    "1" : {"value": "faire les courses", "status": "done"},
    "2" : {"value": "acheter un cadeau pour la fête des pères", "status": "to_do"},
    "3" : {"value": "rendez_vous à la banque", "status": "done"}
}
HTTP/1.0 200 OK 
```
