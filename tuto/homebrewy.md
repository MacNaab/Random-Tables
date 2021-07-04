# Comment utiliser [homebrewery.naturalcrit](https://homebrewery.naturalcrit.com/)
Homebrewery naturalcrit est un éditeur de texte en ligne permettant de créer du contenu dans le style DnD 5e édition.
## Sommaire
- [Interface](#Interface)
  * [Editor](#Editor)
    + [Colomn break](#colomn-break)
    + [New page](#New-page)
    + [Vertical spacing](#Vertical-spacing)
    + [Wide block](#Wide-block)
    + [Image](#Image)
    + [Backgound image](#Backgound-image)
    + [Page number](#Page-number)
    + [Auto-incrementing page number](#Auto-incrementing-page-number)
    + [Link to page](#Link-to-page)
    + [Table of contents](#Table-of-contents)
  * [PHB](#PHB)
  * [Tables](#Tables)
  * [Print](#Print)
    + [A4 pagesize](#A4-pagesize)
    + [Ink friendly](#Ink-friendly)
- [Syntaxe de mise en forme](#syntaxe-de-mise-en-forme)
  * [Titres](#Titres)
  * [Style de police](#Style-de-police)
  * [Tableau](#Tableau)
  * [Lien](#Lien)
- [Syntaxe avancée](#syntaxe-avancée)
  * [HTML](#HTML)
  * [Style](#Style)
    + [position](#position)
    + [text-align](#text-align)
    + [width](#width)
    + [width](#width)
    + [columns](#columns)
  * [Template](#Template)
- [Exportation](#Exportation)

    
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
##### Spell list
Crée une mise en page d'une liste de sorts pour dnd 5e génération.
##### Class feature
Crée une mise en page des caractéristiques de classe pour dnd 5e génération.
##### Note
```
>
```
Crée une mise en page de note. Il est possible de mettre une note dans une note.
##### Descriptive text box
Crée une mise en page de description.
##### Monster stat block
Crée une mise en page de monstre pour dnd 5e génération.
##### Wide monster stat block
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
  .phb{background : white;}
  .phb img{display : none;}
  .phb hr+blockquote{background : white;}
</style>
```
Rends le document compatible avec l'impression:
- `.phb{background: white;}` et `.phb hr+blockquote{background: white;}` rendent le fond blanc
- `.phb img{display: none;}` retire l'affichage des images

### Syntaxe de mise en forme
La [documentation complète](https://docs.github.com/en/free-pro-team@latest/github/writing-on-github/basic-writing-and-formatting-syntax) est disponible en anglais. Je vais ici parler de celles que je juge le plus important.
#### Titres
Pour créer un titre, ajoutez un à six symboles `#` avant le texte de votre titre. Le nombre de # que vous utilisez déterminera la taille et le style du titre.
#### Style de police
Style | Syntaxe 
----- | -------
**Gras**  | `**texte**`
*Italique* | `*texte*`
**Gras et _italique imbriqué_** | `**texte _italique_ texte**`
***Gras et Italique*** | `***texte***`
<ins>Souligné</ins> | `<u>texte</u>`
~~Barré~~ | `~~texte~~`
#### Tableau
```
Titre 1 | Titre 2 |  Titre 3
:--- | :---: | ---:
Cellule 1 | Cellule 2 | Cellule 3
Première colonne | 2e Colonne | 3e Colonne
```
Vous pouvez utiliser les pré-construits de la rubrique [Tables](#Tables) ou crée votre tableau vous même comme ci dessus.
Pour choisir le type d'alignement d'une colonne, modifier la 2e ligne par les valeurs ci-dessous
A gauche | Centré |  A droite
:--- | :---: | ---:
`:---` | `:---:` | `---:`
#### Lien
```
[texte](lien)
```
Vous pouvez créer un lien intégré en enveloppant le texte du lien entre `[ ]`, puis en enveloppant l'URL entre `( )`.

### Syntaxe avancée
Vous pouvez faire ce que vous voulez en utiliser les bases de html et css. N'hésitez pas à regarder les tutoriels de [mozilla](https://developer.mozilla.org/fr/docs/Web/CSS).
Toutefois, si vous n'êtes pas web-developpeur je vais expliquer quelques bases de css pour améliorer votre mise en forme.
#### HTML
Pour moduler notre mise en page, on aura besoin d'un élément `<div>`, l'élément de division du contenu. Lorsque vous ouvrez une div, vous devez également la fermer avec `</div>`
``` HTML
<div>
 texte dans la div
</div>
```
A cette div, vous pouvez appliquer du style CSS (Feuilles de style en cascade) comprenant différentes valeurs que seront détaillé dans la section suivante. Pour appliquer du style il suffi de rajouter `style=" "` dans votre div.
``` HTML
<div style=" ">
 texte dans la div
</div>
```
Note: vous pouvez également mettre du style à tout autre élément HTML (comme `<img>` par exemple)
#### Style
##### position
La propriété position définit la façon dont un élément est positionné dans un document. Les propriétés top, right, bottom et left déterminent l'emplacement final de l'élément positionné.
> Source: [Mozilla](https://developer.mozilla.org/fr/docs/Web/CSS/position)

Ici seule la position absolue nous intéresse, celle-ci va permettre de déplacer librement notre div (ou tout autre élément HTML). On peut ainsi choisir à quelle distance du haut ou bas de page elle se situe tout comme à gauche ou à droite.

Position | Syntaxe
--- | --- 
Haut | `top: 5px;`
Bas | `bottom: 5px;`
Gauche | `left: 5px;`
Droite | `right: 5px;`

Par exemple je souhaite que mon image soit à 15 pixels du haut de la page et à 35 pixels sur la gauche:
``` HTML
<img style="position:absolute;top:15px;left:35px;" src='mon_image.png'>
```
##### text-align
La propriété text-align définit l'alignement horizontal d'un élément de bloc ou de la boîte d'une cellule de tableau. Cette propriété fonctionne donc de façon analogue à vertical-align mais dans le sens horizontal.
> Source: [Mozilla](https://developer.mozilla.org/fr/docs/Web/CSS/text-align)

Alignement | Syntaxe
--- | --- 
A gauche | `text-align: left;`
A droite | `text-align: right;`
Centré | `text-align: center;`
Justifier | `text-align: justify;`
``` HTML
<div style="text-align: justify;">
 Ce texte dans la div prendra l'alignement "justifier".
</div>
```
##### width
La propriété width permet de définir la largeur de la boîte du contenu d'un élément. Par défaut, sa valeur est auto, c'est à dire la largeur automatiquement calculée de son contenu. Si box-sizing vaut border-box, la valeur appliquée incluera les dimensions de la boîte d'encadrement (border) et de la boîte de remplissage (padding).
> Source: [Mozilla](https://developer.mozilla.org/fr/docs/Web/CSS/text-align)
##### columns
La propriété columns est une propriété raccourcie permettant de définir les deux propriétés column-width (qui définit la largeur des colonnes) et column-count (qui définit le nombre de colonnes) en même temps.  
> Source: [Mozilla](https://developer.mozilla.org/fr/docs/Web/CSS/columns)  
Cette propriété permet de modifier le nombre de colonnes d'une `<div>`.
``` HTML
<div style="columns: 3;">
 Cette div possède 3 colonnes.
</div>
```
Pour changer de colonnes, utilisez la fonction [Colomn break](#Colomn-break). A noter que de base, cette `<div>` est compris dans la demi-page. Pour avoir un nombre de colonne personnalisé prenant toute la largeur de la page vous pouvez utiliser cette technique:
``` HTML
<div class='wide' style="columns: 3;">
 Cette div possède 3 colonnes sur toute la largeur de la page.
</div>
```
#### Template
Un template de créature:
``` HTML
___
___
> ## Nom
>*Small cutie, chaotic gossipy*
> ___
> - **Menace** 14
> - **Récompense** 44(1d4 + 5)
> - **Armure** 50ft.
>___
> ### Caractéristiques
>|INT|DEX|DEX|COR|VIT|EMP|TEC|VOL|CHA
>|:---:|:---:|:---:|:---:|:---:|:---:|:--:|:--:|:--:
>|1|2|3|4|5|6|7|8|9|
>|**ETOU**|**COU**|**SAUT**|**END**|**ENC**|**REC**|**PS**|**VIG**
>|1|2|3|4|5|6|7|8|
>___
> ### Compétences
> - **Condition Immunities** groovy, groggy, weak-kneed
> - **Senses** passive Perception 17
> - **Languages** Common
> - **Challenge** 7 (5708 XP)
> ___
> ### Butins
> 
>
> ### Vulnérabilités
> ***Atomic Death Throw.*** *Melee Weapon Attack:* +4 to hit, reach 5ft., one target. *Hit* 5 (1d6 + 2) 
>
> ### Capacités
> ***Open Chin Choke.*** *Melee Weapon Attack:* +4 to hit, reach 5ft., one target. *Hit* 5 (1d6 + 2) 
>
> ***Dual Throw.*** *Melee Weapon Attack:* +4 to hit, reach 5ft., one target. *Hit* 5 (1d6 + 2) 
>
> ***Team Elbow.*** *Melee Weapon Attack:* +4 to hit, reach 5ft., one target. *Hit* 5 (1d6 + 2) 
>
> ***Abdominal Drop.*** *Melee Weapon Attack:* +4 to hit, reach 5ft., one target. *Hit* 5 (1d6 + 2) 
>
> ***Team Foot.*** *Melee Weapon Attack:* +4 to hit, reach 5ft., one target. *Hit* 5 (1d6 + 2) 
>
> ### ARMES
> | Nom | DEG | Effet | Att/tour
> |:----:|:--:|:--:|:--:
> | Nom  | 4 | - | 3
>
> ### Note
```

Template "Norn":
- 3 [templates](https://imgur.com/a/HsXRYwU):
 - https://i.imgur.com/GlPXW8L.png
 - https://i.imgur.com/cbsmlQm.png
 - https://i.imgur.com/7um6b1A.png

A placer dans le Brew Editor:
``` HTML
<div class="norn-bg">
 <img 
   src='https://s-media-cache-ak0.pinimg.com/736x/4a/81/79/4a8179462cfdf39054a418efd4cb743e.jpg' // votre image
 />
 <img 
   src='https://i.imgur.com/GlPXW8L.png' // votre template
 />	
</div>
```
A placer dans le Style Editor:
``` CSS
.norn-bg{
	width:100vw;
}
.norn-bg img{
	position: absolute;
	top:0;
	right:0;
}
.norn-bg img:nth-child(2){
 height:100%
}
```

Un template totalement volé:
``` HTML
<img 
  src='https://www.gmbinder.com/images/crqzfyp.png'
  style='position:absolute;top: -115px;right:-45px; height:70%; transform:scaleX(1)' />
<img 
  src='https://www.gmbinder.com/images/h5HdqeC.png' 
  style='position:absolute;top:470px;right:20px;width:130px;transform:rotate(90deg)' />  
<img 
  src='https://www.gmbinder.com/images/h5HdqeC.png' 
  style='position:absolute;top:475px;right:105px;width:140px;transform:rotate(10deg)' />  
<img 
  src='https://www.gmbinder.com/images/h5HdqeC.png' 
  style='position:absolute;top:-55px ;right:415px;width:190px;transform:rotate(-100deg)' />  
<img 
  src='https://www.gmbinder.com/images/h5HdqeC.png' 
  style='position:absolute;top:505px ;right:-30px;width:150px;transform:rotate(150deg)' />  
<img 
  src='https://www.gmbinder.com/images/h5HdqeC.png' 
  style='position:absolute;top:500px;right:20px; width:100px;height:100px;' /> 
<img 
  src='https://www.gmbinder.com/images/h5HdqeC.png' 
  style='position:absolute;top:-15px;right:410px; width:90px;height:170px;transform:rotate(0deg)' />
<img 
  src='https://www.gmbinder.com/images/h5HdqeC.png' 
  style='position:absolute;top:-25px;right:410px; width:85px;height:130px;' />  
<img 
  src='https://www.gmbinder.com/images/60YwJDt.png' 
  style='position:absolute;top:0px;left:0px;width:110%; height:129%' />
```
### Exportation
Avant d'exporter votre document en pdf, pensez à le mettre en [format A4](#A4-pagesize).
- Cliquez sur "GET PDF"
- Destination: Enregistrer au format pdf
  - Pensez à mettre votre papier en format A4 (Plus de paramètres, Taille du papier)  
A noter que dans certaines situation, vous aurez à modifier les marges (Plus de paramètres, Marges).
- Enregistrer
