# Comment utiliser [DMmaps](https://github.com/Bonkahe/DMmaps)
DMmaps est un projet conçu pour permettre aux MJ de créer et gérer de grands mondes ouverts. 
Il allie l'utilisation d'une base de données visuelle et textuellle afin de permettre de créer des documents liés entre eux et sur une carte.
À cela s'ajoute une suite d'outils pour aider à la création de personnages et pour suivre les emplacements et les régions sur la carte.  
Toutes les vidéos présentes dans ce guide sont issues du [Github des développeurs](https://github.com/Bonkahe/DMmaps).
## Sommaire
- [Télécharger](#Télécharger)
- [Documentation](#Documentation)
- [Interface](#Interface)
  * [Barre de navigation supérieure](#Barre-de-navigation-supérieure)
    + [Options](#Options)
    + [Créateur de personnages](créateur-de-personnages-f5)
  * [Principal](#Principal)
    + [Gauche](#Gauche)
    + [Centre](#Centre)
      - [Modes](#Modes)
        - [Sélection](#Sélection)
        - [Mesure](#Mesure)
        - [Détourage](#Détourage)
    + [Droite](#Droite)
- [Commencer sa campagne](#Commencer)
  * [Carte](#Carte)
    + [Importer sa carte](#importer-sa-carte)
    - [Contrôles](#Contrôles)
  * [Raccourcis](#Raccourcis)
## Télécharger
Allez sur la page de téléchargement et choisissez la [Latest release](https://github.com/Bonkahe/DMmaps/releases/). Dans l'onglet "Assets", télécharger `dmmaps-Setup-[version].exe` et installer le logiciel.  
Vous n'aurez plus besoin de le télécharger de cette manière, le logiciel se mettra a jour automatiquement.

## Documentation
Vous pouvez retrouver la [documentation des développeurs](https://github.com/Bonkahe/DMmaps/blob/master/README.md), celle-ci est en anglais mais comprends quelques vidéos et les raccourcis.

## Interface
### Barre de navigation supérieure
#### Fichier
Permet de sauvegarder et charger votre projet.
#### Fenêtre
##### Options (Ctrl+W ou F3)
###### Thèmes
Permet de personnaliser les couleurs, teintes des jetons et boutons.
###### Gestion de fichiers
Permet de compresser ou non les images et de gérer les liens brisés/rompus
###### Outils de mesure
Permet de d'étalonner une distance entre deux points en `Miles`, `Kilomètres` ou `Mètres` afin d'utiliser l'[outil de mesure](#Mesure).  
![](https://raw.githubusercontent.com/Bonkahe/DMmaps/master/gifs/MeasurementTools.gif)
##### Créateur de personnages (F5)
Ouvre une fênetre avec un générateur de personnage pour DnD 5. On peut noter la grande possibilité de nom.  
A noter que lorsque vous l'utilisez, le résultat est automatiquement copier dans le presse-papier, vous n'avez plus qu'à le coller dans un document. 
![](https://raw.githubusercontent.com/Bonkahe/DMmaps/master/gifs/DocumentControls.gif)
#### Aide
##### Recherche des mises à jours
Permet de rechercher de nouvelles mises à jour.
#### Faire un don
Permet de faire un don aux développeurs via Paypal.
### Principal
#### Gauche
Correspond à l'éditeur de hiérarchie.  
Permet de créer de nouveaux documents (noeud) ou d'en supprimer. Possède également une fonction de recherche dans les documents (soit dans les titres, soit dans le contenu).
![](https://raw.githubusercontent.com/Bonkahe/DMmaps/master/gifs/ChargenControls.gif)
#### Central
Contient la carte et les jetons.
##### Modes
Afin d'accéder aux modes, clic droit de la souris.
![](https://raw.githubusercontent.com/Bonkahe/DMmaps/master/gifs/SelectionModes.gif)
###### Sélection
Ce mode permet de sélectionner des noeuds sur la carte.
###### Mesure
Ce mode permet de mesurer une distance entre plusieurs points sur la carte. 
Vous pouvez cliquer et faire glisser pour mesurer la distance d'un emplacement à un autre.  
Afin de mesurer la distance entre plusieurs emplacement, maintenez la touche MAJ tout en faisant glisser et cliquez pour placer un emplacement. Double-cliquez pour quitter la mesure.
###### Détourage
Ce mode est uniquement disponible lorsqu'un document a été sélectionné, il permet de créer un détourage sur la carte.
#### Droite
Correspond à l'éditeur de document ou la boîte à outil.  
Permet de modifier le titre d'un document et son contenu. Possède également l'option "boite à outils".
##### Boîte à outils
![](https://raw.githubusercontent.com/Bonkahe/DMmaps/master/src/images/ToolBox.png)
Ouvre un menu de gestion des noeuds. Celui-ci permet de gérer la taille du jeton ou le détourage.
![](https://raw.githubusercontent.com/Bonkahe/DMmaps/master/gifs/ToolboxControls.gif)
A noter qu'en appuyant sur le symbole "document", vous pouvez retourner à l'éditeur de document.
![](https://github.com/Bonkahe/DMmaps/blob/master/src/images/Documents.png?raw=true)
## Commencer
### Carte
#### Importer sa carte  
Deux possibilitées:
- Charger l'image d'arrière-plan
- Clic droit > Charger l'image d'arrière plan (Load Background Image)
![](https://raw.githubusercontent.com/Bonkahe/DMmaps/master/gifs/MapControls.gif)
A noter qu'une seule carte peut être active à la fois.
#### Contrôles
Le bouton central de la souris permet de faire un panoramique. La molette permet d'effectuer un zoom avant et arrière.  
Vous pouvez cliquer avec le bouton droit de la souris et sélectionner "Réinitialiser la carte" (Reset Map) pour retourner au point d'origine.
![](https://raw.githubusercontent.com/Bonkahe/DMmaps/master/gifs/NodeControls.gif)
## Raccourcis
- Ctrl + S: Enregistrer
- Ctrl + Maj + S: Enregistrer sous
- F1 ou Ctrl + B: Ouvrir l'éditeur de hiérarchie
- F2 ou Ctrl + E: Ouvrir l'éditeur de document
- F3: Ouvrir la boîte à outil
- F5: Ouvrir le générateur de personnage
- Ctrl + D: Désélectionner le document actuel
