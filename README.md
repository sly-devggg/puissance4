# Puissance 4 - Projet Final

## Description
- Puissance 4 est un jeu de stratégie classique pour deux joueurs. L'objectif est d'aligner quatre jetons de sa couleur horizontalement, verticalement ou en diagonale avant son adversaire.

- Cette implémentation web a été développée en utilisant les technologies fondamentales du développement front-end : HTML, CSS et JavaScript. Le projet met en application les concepts clés appris durant la formation, notamment les tableaux 2D, les boucles, les structures conditionnelles et la gestion d'état.

## Fonctionnalités

- Grille interactive : 7 colonnes × 6 lignes générée dynamiquement

- Joueurs alternés : Deux joueurs humains avec alternance automatique des tours

- Détection de victoire : Algorithmes complets pour détecter les alignements :

- Horizontal (4 jetons consécutifs)

- Vertical (4 jetons consécutifs)

- Diagonales (montante et descendante)

- Interface intuitive :

- Affichage du joueur courant

- Indication visuelle des tours

- Notification en cas de match nul

## Nouvelle partie : Bouton pour réinitialiser le jeu instantanément

- Effets visuels : Animations simples pour le placement des jetons et les séquences victorieuses

### Structure du projet  
puissance4/  
├── index.html          # Structure principale de l'application   
├── style.css           # Styles CSS pour l'interface et les animations   
├── main.js             # Logique métier du jeu (moteur de jeu)    
├── README.md           # Documentation du projet   
 
### Technologies utilisées
- HTML5 : Structure sémantique et accessibilité

- CSS3 : Mise en forme responsive, flexbox/grid, animations

- JavaScript vanilla : Logique applicative sans frameworks

- Git/GitHub : Gestion de version et collaboration

## Installation et utilisation
###  Méthode 1 : Téléchargement direct
- Téléchargez les fichiers du projet

- Ouvrez index.html dans votre navigateur web

### Méthode 2 : Clonage Git

- git clone https://github.com/sly-devggg/puissance4.git  
- cd puissance4  
- Ouvrir index.html dans le navigateur  
- Comment jouer  
- Le joueur 1 (rouge) commence toujours  

- Cliquez en haut de la colonne où vous souhaitez déposer votre jeton

- Le jeton tombe automatiquement à la position la plus basse disponible

- Les joueurs alternent jusqu'à ce qu'un alignement de 4 jetons soit détecté

- Utilisez le bouton "Nouvelle partie" pour recommencer

## Démonstration
- Une vidéo de démonstration est disponible pour illustrer le fonctionnement complet du jeu.

## Développement
### Ce projet a été conçu dans une optique de code propre et maintenable :

- Séparation claire entre structure, style et logique

- Commentaires explicites dans le code

- Gestion d'erreur basique

- Interface utilisateur intuitive