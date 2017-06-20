![LOGO](http://www.pole-emploi.fr/image/mmlelement/pj/7f/bb/a5/12/logo-pe49424.png)

#### Un exemple avec Yeoman et AngularJS

---

### Un peu d'histoire...

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

![did_it](assets/did_it.gif)

---

###Et dans la vraie vie?

---

On build le code avec la commande suivante

```bash
$ npm run build
```

---

#### Architecture d'Angular

* On marche avec le patron de conception MVC
* on utilise autant de controleurs que nécessaires

![schema](https://sdz-upload.s3.amazonaws.com/prod/upload/mvc-angular.png)

---

##Et contraitement?

---

### Le code de l'application

```html
<!doctype html>
<html>
    <head>
        <title></title>
    </head>
    <body>
        <section ng-controller="headerCtrl">
            <h1>HEADER</h1>
        </section>
        <section ng-controller="menuCtrl">
            <h1>MENU</h1>
        </section>
        <section ng-controller="contentCtrl">
            <h1>CONTENT</h1>
        </section>
        <section ng-controller="footerCtrl">
            <h1>FOOTER</h1>
        </section>
    </body>
</html>
```

---

### Le contrôleur

```javascript
var app = angular.module("app", []);

app.controller("headerCtrl", function($scope){
    //...    
});

app.controller("footerCtrl", function($scope){
    //...    
});

app.controller("menuCtrl", function($scope){
    //...    
});

app.controller("contentCtrl", function($scope){
    //...    
});
```

---

### Qu'est ce qu'on fait de tout ça?

```html
<div ng-app="app">
    <div ng-controller="exempleCtrl">
       HELLO {{name}}!
    </div>
</div>
```

```javascript
var app = angular.module("app", []);

app.controller("exempleCtrl", function($scope) {
    $scope.name = "World"
});
```

---

###Et dans la vraie vie véritable des gens de tous les jours?

---

### Spécs de notre webservice (1/3)

enregistrer un todo

```javascript
>> POST /api/<user>/todo
{
    "value": "aller chercher les enfants ce soir",
    "done": false
}

<< HTTP/1.0 204 CREATED 
```

---

### Spécs de notre webservice (2/3)

récupérer les todos enregistrés

```javascript
>> GET /api/<user>/todos

<< {
    "1" : {"value": "faire les courses", "done": true},
    "2" : {"value": "acheter un cadeau pour la fête des pères", "done": false},
    "3" : {"value": "rendez_vous à la banque", "done": true}
}
HTTP/1.0 200 OK 
```

---

### Spécs de notre webservice (3/3)

effacer un todo enregistré

```javascript
>> DELETE /api/<user>/todo?id=84

<< HTTP/1.0 204 NO_CONTENT
```

---

##Mais pourquoi on ne l'utilise plus alors?

---

### Le Futur

![did_it](assets/bttf.webp)

---

* Angular 2.X et 4.X (Non compatible avec Angular 1)
* ReactJS (Facebook)
* VueJS (Alibaba)

---