![LOGO](http://www.pole-emploi.fr/image/mmlelement/pj/7f/bb/a5/12/logo-pe49424.png)

#### AngularJS + YeoMan

---

* C'est quoi Yeoman?
* C'est quoi Angular?

---

###De quoi va t'on avoir besoin?

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

Installation du generateur AngularJS (mais pas que...)

Ca gère ausssi les Modules, les preprocesseurs JS et les preprocesseurs CSS

```bash
$ npm install --global generator-fountain-webapp
```

---

Création du projet

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

Ce qu'on vient de générer

![generation](http://yeoman.io/static/04_tree_view.da1c9c3ef4.png)

---

Lancer notre projet

```bash
$ npm run serve
```

puis

http://localhost:3000
