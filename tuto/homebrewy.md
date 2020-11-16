# Comment utiliser homebrewery.naturalcrit
Homebrewery naturalcrit est un editeur de texte en ligne permettant de créer du contenu dans le style dnd 5e édition.
## Sommaire
- [Interface](#Interface)
  * [Editor](#Editor)
  * [PHB](#PHB)
  * [Tables](#Tables)
  * [Print](#Print)

- [Fiche](#Fiche)
  * [template_min.json](#template_minjson)
    + [Nom](#Nom)
    
### Interface
#### Editor
##### Colomn break
Permet de forcer le changement de colonne. Par défaut, la page est divisée en deux colonnes.
##### New page
``` HTML
\page
```
Permet de crée une nouvelle page. Attention, sans cette fonction, tout le contenu est situé dans la page antérieure.
##### Vertical spacing
``` HTML
<div style='margin-top:140px'></div>
```
Permet de crée un espacement vertical (de 140 pixels dans l'exemple ci-dessus). Vous pouvez changer la valeur de cet écart est modifiable. 
##### Wide block
``` HTML
<div class='wide'>
  Texte
</div>
```
Le contenu à l'intérieur de cette div prendra toute la largeur de la page. 
##### Image
``` HTML
<img 
  src='https://s-media-cache-ak0.pinimg.com/736x/4a/81/79/4a8179462cfdf39054a418efd4cb743e.jpg' 
  style='width:325px' />
```
Permet de rajouter une image. Changer la valeur du `src` par le lien de votre image. Vous pouvez également modifier la valeur `width` pour changer la taille de celle-ci.
##### Backgound image
``` HTML
<img 
 src='http://i.imgur.com/hMna6G0.png' 
  style='position:absolute; top:50px; right:30px; width:280px' />
```
Permet de rajouter une image en arrière-plan. Il s'agit du même élément `<img>` auquel on a rajouté la propriété `position:absolute;`. Pour changer la position dans la page moduler les valeurs `top` et `right`.
##### Page number
``` HTML
<div class='pageNumber'>1</div>
<div class='footnote'>PART 1 | FANCINESS</div>
```
Permet de rajouter un numéro et une description en bas de page.
##### Auto-incrementing page number
``` HTML
<div class='pageNumber auto'></div>
```
Permet de rajouter la valeur du numéro de page de manière automatique. Attention il faut le faire à chaque page.
##### Link to page
``` HTML
[Click here](#p3) to go to page 3
```
Permet de renvoyer vers une page (la page 3 dans l'exemple). L'élément entre `[]` sera le déclancheur, changer la valeur entre `()` pour renvoyer à une autre page.
##### Table of contents
``` HTML
<div class='toc'>
##### Table Of Contents
</div>
```
Permet de crée automatiquement une table des matières renvoyant aux différents titres crées.

#### PHB
##### Spell
Crée une mise en page de sort pour dnd 5e génération.
##### Table
Crée une mise en page d'une liste de sorts pour dnd 5e génération.
##### Table
Crée une mise en page des caractéristiques de classe pour dnd 5e génération.
##### Note
Crée une mise en page de note.
##### Descriptive text box
Crée une mise en page de description.
##### Note
Crée une mise en page de monstre pour dnd 5e génération.
##### Note
Crée une mise en page des statistiques de monstre pour dnd 5e génération.
##### Cover page
Crée une page de couverture.

#### Tables
##### Class table
Crée un tableau de classe pour dnd 5e génération.
##### Half class Table
Crée un tableau de demi-classe pour dnd 5e génération.
##### Table
``` HTML
##### Cookie Tastiness
| Tastiness | Cookie Type |
|:----:|:-------------|
| -5  | Raisin |
| 8th  | Chocolate Chip |
| 11th | 2 or lower |
| 14th | 3 or lower |
| 17th | 4 or lower |
```
Crée un tableau simple.
##### Wide Table
``` HTML
<div class='wide'>
##### Cookie Tastiness
| Tastiness | Cookie Type |
|:----:|:-------------|
| -5  | Raisin |
| 8th  | Chocolate Chip |
| 11th | 2 or lower |
| 14th | 3 or lower |
| 17th | 4 or lower |
</div>
```
Crée un tableau simple prenant toute la largeur.
##### Split Table
``` HTML
<div style='column-count:2'>
| d10 | Damage Type |
|:---:|:------------|
|  1  | Acid        |
|  2  | Cold        |
|  3  | Fire        |
|  4  | Force       |
|  5  | Lightning   |
 ```
 ```
| d10 | Damage Type |
|:---:|:------------|
|  6  | Necrotic    |
|  7  | Poison      |
|  8  | Psychic     |
|  9  | Radiant     |
|  10 | Thunder     |
</div>
```
Crée un tableau double sur une colonne.

#### Print
##### A4 pagesize
``` HTML
<style>
  .phb{
    width : 210mm;
    height : 296.8mm;
  }
</style>
```
Permet de rendre les pages en format A4. Je recommande de l'utiliser au début du document.
##### Ink friendly
``` HTML
<style>
  .phb{ background : white;}
  .phb img{ display : none;}
  .phb hr+blockquote{background : white;}
</style>
```
Rends le document compatible avec l'impression. (retire les images et les couleurs)
