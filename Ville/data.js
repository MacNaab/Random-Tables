var Data = {
  "version": 0.1,
  "environment": [
    {
      "name": "Capitale",
	  "ID": 0,
      "environmentType": "Capital",
      "allowedBuildings": [
        "Alchemist",
        "Armorer_standard",
        "Notice_board",
        "General_shop",
        "Bookshop",
        "Inn_straw_bedding",
        "Inn_stables",
        "Inn_high_class",
        "Inn_standard_quality",
        "Inn_medium_quality",
        "Inn_cheap_quality",
        "Inn_infamous_quality",
        "Haberdashery",
        "Tailoring"
      ]
    },
    {
      "name": "Cité",
	  "ID": 1,
      "environmentType": "City",
      "allowedBuildings": [
        "Alchemist",
        "Armorer_standard",
        "Notice_board",
        "General_shop",
        "Bookshop",
        "Inn_standard_quality",
        "Inn_medium_quality",
        "Inn_cheap_quality",
        "Inn_stables",
        "Inn_straw_bedding",
        "Haberdashery",
        "Tailoring"
      ]
    },
    {
      "name": "Village",
	  "ID": 2,
      "environmentType": "Village",
      "allowedBuildings": [
        "Alchemist",
        "Armorer_village",
        "Notice_board",
        "General_shop",
        "Inn_cheap_quality",
        "Inn_infamous_quality",
        "Inn_stables",
        "Inn_straw_bedding",
        "Haberdashery"
      ]
    },
    {
      "name": "Forteresse",
	  "ID": 3,
      "environmentType": "Fortress",
      "allowedBuildings": [
        "Alchemist",
        "Armorer_standard",
        "Notice_board",
        "General_shop",
        "Inn_cheap_quality",
        "Inn_stables"
      ]
    }
  ],
  "building": [
    {
      "name": "Alchimiste",
      "buildingType": "Alchemist",
      "maxObjectsDisplayedPerEnvironmentType": [
        30,
        20,
        10,
        5
      ],
	  "min":[
		10,5,1,1
	  ],
      "object": [
        {
          "name": "Bryone - Caelum",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Crocs de vampire - Caelum",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Extrait de venin - Caelum",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Langue de noyeur - Caelum",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Langue de guenaude sépulcrale - Caelum",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Moisissure verte - Caelum",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Excréments de fiellon - Caelum",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Venin d’arachas - Caelum",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Essence de fantôme - Ether",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Fruit de berbéris - Ether",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Perle - Ether",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Pétales d’ellébore- Ether",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Pétales de ginatia - Ether",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Racine de pimenta diocia - Ether",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Sclerodermie - Ether",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Solution de mercure - Ether",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Cœur de golem - Fulgur",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Embryon d’endriague - Fulgur",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Suif de chien - Fulgur",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Œuf d’arachas - Fulgur",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Oreille de guenaude sépulcrale - Fulgur",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Poussière de spectre - Fulgur",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Immortelle - Fulgur",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Œuf de wyvern - Fulgur",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Griffe de nekker - Hydragenum",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Cortinaire - Hydragenum",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Essence d’eau - Hydragenum",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Foie de troll - Hydragenum",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Poussière imprégnée - Hydragenum",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Salive de loup-garou - Hydragenum",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Gui - Hydragenum",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Eau ducale - Quebrith",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Chèvrefeuille - Quebrith",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Feuilles de balisse - Quebrith",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Moelle de goule - Quebrith",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Optima mater - Quebrith",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Petite cigüe - Quebrith",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Soufre - Quebrith",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Célandine - Rebis",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Cerveau de Noyeur - Rebis",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Cœur de Nekker - Rebis",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Dent de guenaude - Rebis",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Fibre de Han - Rebis",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Eclats de Lune - Rebis",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Pierre de Vin - Rebis",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Aloès de Loup - Sol",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Cordes vocales de Sirène - Sol",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Essence de lumière - Sol",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Œil de Wyvern - Sol",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Œil de fiellon - Sol",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Salive de vampire - Sol",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Verveine - Sol",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Aconit - Vermillon",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Chitine - Vermillon",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Phosphore - Vermillon",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Plume de Griffon - Vermillon",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Racine de Mandragore - Vermillon",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Mucus d’endriague - Vermillon",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Œuf de Griffon - Vermillon",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Griffe de Goule - Vitriol",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Calcium Equum - Vitriol",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Dent de Nekker - Vitriol",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Fruit de Balisse - Vitriol",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Vitriocybe - Vitriol",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Œil de Corbeau - Vitriol",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Ogre - Vitriol",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Peau de Troll - Vitriol",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Pétales de myrte blanc - Vitriol",
          "objectType": "Alchemical_substance"
        },
        {
          "name": "Hallucinogène - Produit alchimique",
          "objectType": "Alchemical_product"
        },
        {
          "name": "Ami de l’empoisonneur - Produit alchimique",
          "objectType": "Alchemical_product"
        },
        {
          "name": "Chloroforme - Produit alchimique",
          "objectType": "Alchemical_product"
        },
        {
          "name": "Adhésif Alchimique - Produit alchimique",
          "objectType": "Alchemical_product"
        },
        {
          "name": "Herbes engourdissantes - Produit alchimique",
          "objectType": "Alchemical_product"
        },
        {
          "name": "Elixir de Pantagram - Produit alchimique",
          "objectType": "Alchemical_product"
        },
        {
          "name": "Fisstech - Produit alchimique",
          "objectType": "Alchemical_product"
        },
        {
          "name": "Fluide Stérilisant - Produit alchimique",
          "objectType": "Alchemical_product"
        },
        {
          "name": "Feu rapide - Produit alchimique",
          "objectType": "Alchemical_product"
        },
        {
          "name": "Feu Zerrikanien - Produit alchimique",
          "objectType": "Alchemical_product"
        },
        {
          "name": "Fureur de Bredan - Produit alchimique",
          "objectType": "Alchemical_product"
        },
        {
          "name": "Encre Invisible - Produit alchimique",
          "objectType": "Alchemical_product"
        },
        {
          "name": "Larmes de Talgar - Produit alchimique",
          "objectType": "Alchemical_product"
        },
        {
          "name": "Poudre Basique - Produit alchimique",
          "objectType": "Alchemical_product"
        },
        {
          "name": "Poudre de Coagulation - Produit alchimique",
          "objectType": "Alchemical_product"
        },
        {
          "name": "Potion de Larmes d’épouse - Produit alchimique",
          "objectType": "Alchemical_product"
        },
        {
          "name": "Potion Parfumée - Produit alchimique",
          "objectType": "Alchemical_product"
        },
        {
          "name": "Souffle de Succube - Produit alchimique",
          "objectType": "Alchemical_product"
        },
        {
          "name": "Sel de Pâmoison - Produit alchimique",
          "objectType": "Alchemical_product"
        },
        {
          "name": "Solution Acide - Produit alchimique",
          "objectType": "Alchemical_product"
        },
        {
          "name": "Tombe d’Adda - Produit alchimique",
          "objectType": "Alchemical_product"
        },
        {
          "name": "Venin Noir- Produit alchimique",
          "objectType": "Alchemical_product"
        },
        {
          "name": "Hallucinogène - Formula",
          "objectType": "Alchemical_formula"
        },
        {
          "name": "Ami de l’empoisonneur - Formula",
          "objectType": "Alchemical_formula"
        },
        {
          "name": "Chloroforme - Formula",
          "objectType": "Alchemical_formula"
        },
        {
          "name": "Adhésif Alchimique - Formula",
          "objectType": "Alchemical_formula"
        },
        {
          "name": "Herbes engourdissantes - Formula",
          "objectType": "Alchemical_formula"
        },
        {
          "name": "Elixir de Pantagram - Formula",
          "objectType": "Alchemical_formula"
        },
        {
          "name": "Fisstech - Formula",
          "objectType": "Alchemical_formula"
        },
        {
          "name": "Fluide Stérilisant - Formula",
          "objectType": "Alchemical_formula"
        },
        {
          "name": "Feu rapide - Formula",
          "objectType": "Alchemical_formula"
        },
        {
          "name": "Feu Zerrikanien - Formula",
          "objectType": "Alchemical_formula"
        },
        {
          "name": "Fureur de Bredan - Formula",
          "objectType": "Alchemical_formula"
        },
        {
          "name": "Encre Invisible - Formula",
          "objectType": "Alchemical_formula"
        },
        {
          "name": "Larmes de Talgar - Formula",
          "objectType": "Alchemical_formula"
        },
        {
          "name": "Poudre Basique - Formula",
          "objectType": "Alchemical_formula"
        },
        {
          "name": "Poudre de Coagulation - Formula",
          "objectType": "Alchemical_formula"
        },
        {
          "name": "Potion de Larmes d’épouse - Formula",
          "objectType": "Alchemical_formula"
        },
        {
          "name": "Potion Parfumée - Formula",
          "objectType": "Alchemical_formula"
        },
        {
          "name": "Souffle de Succube - Formula",
          "objectType": "Alchemical_formula"
        },
        {
          "name": "Sel de Pâmoison - Formula",
          "objectType": "Alchemical_formula"
        },
        {
          "name": "Solution Acide - Formula",
          "objectType": "Alchemical_formula"
        },
        {
          "name": "Tombe d’Adda - Formula",
          "objectType": "Alchemical_formula"
        },
        {
          "name": "Venin Noir - Formula",
          "objectType": "Alchemical_formula"
        }
      ]
    },
    {
      "name": "Armurier",
      "buildingType": "Armorer_standard",
      "maxObjectsDisplayedPerEnvironmentType": [
        20,
        15,
        0,
        30
      ],
	  "min":[
		5,3,0,10
	  ],
      "object": [
        {
          "name": "Epée de Fer",
          "objectType": "Weapon"
        },
        {
          "name": "Epée de Chevalier",
          "objectType": "Weapon"
        },
        {
          "name": "Gleddyf",
          "objectType": "Weapon"
        },
        {
          "name": "Fauchon de chasseur",
          "objectType": "Weapon"
        },
        {
          "name": "Krigsverd",
          "objectType": "Weapon"
        },
        {
          "name": "Esboda",
          "objectType": "Weapon"
        },
        {
          "name": "Kord",
          "objectType": "Weapon"
        },
        {
          "name": "Lames Vicovarienne",
          "objectType": "Weapon"
        },
        {
          "name": "Torrwr",
          "objectType": "Weapon"
        },
        {
          "name": "Dague",
          "objectType": "Weapon"
        },
        {
          "name": "Stylet",
          "objectType": "Weapon"
        },
        {
          "name": "Poignard",
          "objectType": "Weapon"
        },
        {
          "name": "Jambiya",
          "objectType": "Weapon"
        },
        {
          "name": "Hachette",
          "objectType": "Weapon"
        },
        {
          "name": "Hache de Bataille",
          "objectType": "Weapon"
        },
        {
          "name": "Hache de Berserker",
          "objectType": "Weapon"
        },
        {
          "name": "Coup de Poing",
          "objectType": "Weapon"
        },
        {
          "name": "Masse d’arme",
          "objectType": "Weapon"
        },
        {
          "name": "Maillet Kaedwenien",
          "objectType": "Weapon"
        },
        {
          "name": "Lance",
          "objectType": "Weapon"
        },
        {
          "name": "Hache de Lancer",
          "objectType": "Weapon"
        },
        {
          "name": "Hallebarde Rédanienne",
          "objectType": "Weapon"
        },
        {
          "name": "Baton",
          "objectType": "Weapon"
        },
        {
          "name": "Houlette",
          "objectType": "Weapon"
        },
        {
          "name": "Baton de Fer",
          "objectType": "Weapon"
        },
        {
          "name": "Baton de Cristal",
          "objectType": "Weapon"
        },
        {
          "name": "Couteau de Lancer",
          "objectType": "Weapon"
        },
        {
          "name": "Hache de Lancer",
          "objectType": "Weapon"
        },
        {
          "name": "Orion",
          "objectType": "Weapon"
        },
        {
          "name": "Arc Court",
          "objectType": "Weapon"
        },
        {
          "name": "Arc Long",
          "objectType": "Weapon"
        },
        {
          "name": "Arc de Guerre",
          "objectType": "Weapon"
        },
        {
          "name": "Arbalète de Poing",
          "objectType": "Weapon"
        },
        {
          "name": "Arbalète",
          "objectType": "Weapon"
        },
        {
          "name": "Arbalète de Chasseur de Monstres",
          "objectType": "Weapon"
        },
        {
          "name": "Capuche d’archer verdenien",
          "objectType": "Armor"
        },
        {
          "name": "Capuche à tissage renforcé",
          "objectType": "Armor"
        },
        {
          "name": "Casque de Skellige",
          "objectType": "Armor"
        },
        {
          "name": "Armet Témérien",
          "objectType": "Armor"
        },
        {
          "name": "Camail",
          "objectType": "Armor"
        },
        {
          "name": "Capuche renforcée",
          "objectType": "Armor"
        },
        {
          "name": "Heaume",
          "objectType": "Armor"
        },
        {
          "name": "Casque de Skellige",
          "objectType": "Armor"
        },
        {
          "name": "Casque Nilfgaardien",
          "objectType": "Armor"
        },
        {
          "name": "Gambinaison",
          "objectType": "Armor"
        },
        {
          "name": "Gambinaison Aerdinien",
          "objectType": "Armor"
        },
        {
          "name": "Gambinaison à tissage renforcé",
          "objectType": "Armor"
        },
        {
          "name": "Brigandine",
          "objectType": "Armor"
        },
        {
          "name": "Armure d’hallebardier rédanien",
          "objectType": "Armor"
        },
        {
          "name": "Veste en Cuir Lyrien",
          "objectType": "Armor"
        },
        {
          "name": "Armure de Plates",
          "objectType": "Armor"
        },
        {
          "name": "Armure de Plates d’Hindarsfjall",
          "objectType": "Armor"
        },
        {
          "name": "Armure de Plates Nilfgaardienne",
          "objectType": "Armor"
        },
        {
          "name": "Pantalon de cavalier",
          "objectType": "Armor"
        },
        {
          "name": "Pantalon matelassé",
          "objectType": "Armor"
        },
        {
          "name": "Pantalon à tissage renforcé",
          "objectType": "Armor"
        },
        {
          "name": "Pantalon renforcé",
          "objectType": "Armor"
        },
        {
          "name": "Jambière Rédaniennes",
          "objectType": "Armor"
        },
        {
          "name": "Pantallon en cuir Lyrien",
          "objectType": "Armor"
        },
        {
          "name": "Jambières de plates",
          "objectType": "Armor"
        },
        {
          "name": "Chausses lourdes d’Hindarsfjall",
          "objectType": "Armor"
        },
        {
          "name": "Jambières Nilgaardiennes",
          "objectType": "Armor"
        },
        {
          "name": "Bouclier de Peau",
          "objectType": "Armor"
        },
        {
          "name": "Bouclier d’acier",
          "objectType": "Armor"
        },
        {
          "name": "Bouclier Témérien",
          "objectType": "Armor"
        },
        {
          "name": "Bouclier de pillard de Skellige",
          "objectType": "Armor"
        },
        {
          "name": "Bouclier kaedwenien",
          "objectType": "Armor"
        },
        {
          "name": "Ecu",
          "objectType": "Armor"
        },
        {
          "name": "Pavois",
          "objectType": "Armor"
        },
        {
          "name": "Pavois Nilfgaardien",
          "objectType": "Armor"
        },
        {
          "name": "Projectiles Standards x10",
          "objectType": "Munition"
        },
        {
          "name": "Projectiles Contondants x10",
          "objectType": "Munition"
        },
        {
          "name": "Projectiles à Pointes Larges x10",
          "objectType": "Munition"
        },
        {
          "name": "Projectiles de Précision x10",
          "objectType": "Munition"
        },
        {
          "name": "Acier - Amélioration d’armure",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Cotte de Maille s- Amélioration d’armure",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Cuir Durci - Amélioration d’armure",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Hachette - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Arc Court - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Hache de Lancer x3 - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Couteau de Lancer x3 - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Fauchon de chasseur - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Gleddyf - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Lance - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Projectiles Standards - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Projectiles Contondants- Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Orion x3 - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Dague - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Epée de Chevalier - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Epée de Fer - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Coup de Poing - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Arc Long - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Hache de Bataille - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Hache de Lancer - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Arbalète - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Arbalète de Poing - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Baton - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Houlette - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Poignard - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Esboda - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Krigsverd - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Masse d’arme - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Projectiles à Pointes Large x10 - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Projectiles de Précision x10 - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Stylet - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Hallebarde Rédanienne - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Arc de Guerre - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Hache de Berserker - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Arbalète de Chasseur de Monstres - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Baton de Cristal - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Baton de Fer - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Jambiya - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Kord - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Lames Vicovarienne - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Maillet Kaedwenien - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Torrwr - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Pantalon à tissage renforcé - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Pantalon de cavalier - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Pantalon matelassé - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Bouclier d’acier - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Capuche à tissage renforcé - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Capuche d’archer verdenien - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Casque de Skellige - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Gambinaison - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Gambinaison à tissage renforcé - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Gambinaison Aerdinien - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Bouclier de Peau - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Bouclier Témérien - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Armure d’Hallebardien Rédannie - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Pantalon renforcé - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Veste en Cuir Lyrien - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Brigandine - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Camail - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Capuche renforcée - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Pantalon en Cuir Lyrien- Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Jambière Rédaniennes - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Bouclier kaedwenien - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Armet Témérien - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Ecu - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Scudo da Razziatore Skellige - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Armure de Plates - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Armure de Plates Nilfgaardienne - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Armure de Plates d’Hindarsfjall - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Casque de Skellige - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Casque Nilfgaardien - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Chausses lourdes d’Hindarsfjall - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Heaume - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Pavois - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Pavois Nilfgaardien - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Jambières de plates - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Jambières Nilgaardiennes - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Cuir Clouté - Amélioration d’armure",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Fibre - Amélioration d’armure",
          "objectType": "Equipment_scheme"
        }
      ]
    },
    {
      "name": "Armurier",
      "buildingType": "Armorer_village",
      "maxObjectsDisplayedPerEnvironmentType": [
        0,
        0,
        10,
        0
      ],
	  "min":[
		0,0,1,0
	  ],
      "object": [
        {
          "name": "Epée de Fer",
          "objectType": "Weapon"
        },
        {
          "name": "Dague",
          "objectType": "Weapon"
        },
        {
          "name": "Hachette",
          "objectType": "Weapon"
        },
        {
          "name": "Coup de Poing",
          "objectType": "Weapon"
        },
        {
          "name": "Masse d’arme",
          "objectType": "Weapon"
        },
        {
          "name": "Baton",
          "objectType": "Weapon"
        },
        {
          "name": "Houlette",
          "objectType": "Weapon"
        },
        {
          "name": "Couteau de Lancer",
          "objectType": "Weapon"
        },
        {
          "name": "Arc Court",
          "objectType": "Weapon"
        },
        {
          "name": "Arbalète de Poing",
          "objectType": "Weapon"
        },
        {
          "name": "Capuche d’archer Verdenien",
          "objectType": "Armor"
        },
        {
          "name": "Gambinaison",
          "objectType": "Armor"
        },
        {
          "name": "Pantalon de cavalier",
          "objectType": "Armor"
        },
        {
          "name": "Bouclier de Peau",
          "objectType": "Armor"
        },
        {
          "name": "Projectiles Standards x10",
          "objectType": "Munition"
        },
        {
          "name": "Acier - Amélioration d’armure",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Cotte de Maille s- Amélioration d’armure",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Cuir Durci - Amélioration d’armure",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Epée de Fer - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Dague - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Hachette - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Coup de Poing - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Masse d’arme - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Baton - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Houlette - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Couteau de Lancer - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Arc Court - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Arbalète de Poing - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Capuche d’archer Verdenien - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Gambinaison - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Pantalon de cavalier - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Bouclier de Peau - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Projectiles Standards x10 - Schema",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Cuir Clouté - Amélioration d’armure",
          "objectType": "Equipment_scheme"
        },
        {
          "name": "Fibre - Amélioration d’armure",
          "objectType": "Equipment_scheme"
        }
      ]
    },
    {
      "name": "Magasin",
      "buildingType": "General_shop",
      "maxObjectsDisplayedPerEnvironmentType": [
        30,
        20,
        10,
        5
      ],
	  "min":[
		10,5,1,1
	  ],
      "object": [
        {
          "name": "Amulette avec Gemme",
          "objectType": "Tool"
        },
        {
          "name": "Amulette simple",
          "objectType": "Tool"
        },
        {
          "name": "Outils de Voleur",
          "objectType": "Tool"
        },
        {
          "name": "Ensemble d’Alchimie",
          "objectType": "Tool"
        },
        {
          "name": "Equipement de Pèche",
          "objectType": "Tool"
        },
        {
          "name": "Forge Portable",
          "objectType": "Tool"
        },
        {
          "name": "Matériel de Contrefçon",
          "objectType": "Tool"
        },
        {
          "name": "Nécessaire de déguisement",
          "objectType": "Tool"
        },
        {
          "name": "Trousse de Maquillage",
          "objectType": "Tool"
        },
        {
          "name": "Nécessaire d’écriture",
          "objectType": "Tool"
        },
        {
          "name": "Instruments Chirugicaux",
          "objectType": "Tool"
        },
        {
          "name": "Accessoire artistiques",
          "objectType": "Tool"
        },
        {
          "name": "Télécommunicateur",
          "objectType": "Tool"
        },
        {
          "name": "Outils d’artisan",
          "objectType": "Tool"
        },
        {
          "name": "Ustenciles de Cuisine",
          "objectType": "Tool"
        },
        {
          "name": "Outils de Marchants",
          "objectType": "Tool"
        },
        {
          "name": "Selle",
          "objectType": "Tool"
        },
        {
          "name": "Selle de Cavalerie",
          "objectType": "Tool"
        },
        {
          "name": "Selle de Course",
          "objectType": "Tool"
        },
        {
          "name": "Oeillères",
          "objectType": "Tool"
        },
        {
          "name": "Oeillères de Course",
          "objectType": "Tool"
        },
        {
          "name": "Sacoche de Selle",
          "objectType": "Tool"
        },
        {
          "name": "Sacoche de Selle Militaires",
          "objectType": "Tool"
        },
        {
          "name": "Bardage de Cuir",
          "objectType": "Tool"
        },
        {
          "name": "Bardage en Mailles de Fer",
          "objectType": "Tool"
        },
        {
          "name": "20m de Corde",
          "objectType": "Tool"
        },
        {
          "name": "Pierre à Briquet",
          "objectType": "Tool"
        },
        {
          "name": "Prothèse basique",
          "objectType": "Tool"
        },
        {
          "name": "Prothèse de qualité",
          "objectType": "Tool"
        },
        {
          "name": "Bougies (x5)",
          "objectType": "Tool"
        },
        {
          "name": "Entraves",
          "objectType": "Tool"
        },
        {
          "name": "Sablier heures",
          "objectType": "Tool"
        },
        {
          "name": "Sablier minutes",
          "objectType": "Tool"
        },
        {
          "name": "Dés pipés",
          "objectType": "Tool"
        },
        {
          "name": "Journal/Livre",
          "objectType": "Tool"
        },
        {
          "name": "Craie",
          "objectType": "Tool"
        },
        {
          "name": "Sac de Couchage",
          "objectType": "Tool"
        },
        {
          "name": "Bâche",
          "objectType": "Tool"
        },
        {
          "name": "Lanterne",
          "objectType": "Tool"
        },
        {
          "name": "Lanterne Sourde",
          "objectType": "Tool"
        },
        {
          "name": "Cadenas",
          "objectType": "Tool"
        },
        {
          "name": "Cadenas Résistant",
          "objectType": "Tool"
        },
        {
          "name": "Fers (menottes)",
          "objectType": "Tool"
        },
        {
          "name": "Carte du Monde",
          "objectType": "Tool"
        },
        {
          "name": "Jeux de Gwynt",
          "objectType": "Tool"
        },
        {
          "name": "Pitons (x5)",
          "objectType": "Tool"
        },
        {
          "name": "Pipe",
          "objectType": "Tool"
        },
        {
          "name": "Piste à Dés",
          "objectType": "Tool"
        },
        {
          "name": "Parfum / Eau de Cologne",
          "objectType": "Tool"
        },
        {
          "name": "Grappin",
          "objectType": "Tool"
        },
        {
          "name": "Savon",
          "objectType": "Tool"
        },
        {
          "name": "Symbole Sacré",
          "objectType": "Tool"
        },
        {
          "name": "Mirroir de Poche",
          "objectType": "Tool"
        },
        {
          "name": "Strumento Musicale",
          "objectType": "Tool"
        },
        {
          "name": "Tabac",
          "objectType": "Tool"
        },
        {
          "name": "Tente",
          "objectType": "Tool"
        },
        {
          "name": "Tente Grande",
          "objectType": "Tool"
        },
        {
          "name": "Bandoulière",
          "objectType": "Tool"
        },
        {
          "name": "Bourse",
          "objectType": "Tool"
        },
        {
          "name": "Panier",
          "objectType": "Tool"
        },
        {
          "name": "Coffre en Bois",
          "objectType": "Tool"
        },
        {
          "name": "Sac",
          "objectType": "Tool"
        },
        {
          "name": "Sacoche",
          "objectType": "Tool"
        },
        {
          "name": "Coffre en Bois Grand",
          "objectType": "Tool"
        },
        {
          "name": "Poche secrète",
          "objectType": "Tool"
        },
        {
          "name": "Fourreau pour Arc",
          "objectType": "Tool"
        },
        {
          "name": "Fourreau Jarretière",
          "objectType": "Tool"
        },
        {
          "name": "Fourreau Manche",
          "objectType": "Tool"
        },
        {
          "name": "Torche",
          "objectType": "Tool"
        },
        {
          "name": "Flasque",
          "objectType": "Tool"
        }
      ],
      "standardObjects": [
        {},
        {},
        {},
        {
          "object": [
            {
              "name": "Carte du Monde",
              "objectType": "Tool"
            }
          ]
        }
      ]
    },
    {
      "name": "Librairie",
      "buildingType": "Bookshop",
      "maxObjectsDisplayedPerEnvironmentType": [
        30,
        20,
        0,
        0
      ],
	  "min":[
		10,5,0,0
	  ],
      "object": [
        {
          "name": "Compas Magique - Eléments Mixtes",
          "objectType": "(Grimoire)"        },
        {
          "name": "Cenlly Graig - Elément Terre",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Air Frais - Elément Air",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Aenye - Elément Feu",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Averse - Elément Eau",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Dissipation - Eléments Mixtes",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Codi Bywyd- Elément Terre",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Adenydd - Elément Air",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Aine Verseos - Elément Feu",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Averse - Elément Eau",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Invocation de Bâton - Eléments Mixtes",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Soins MAgiques - Elément Terre",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Rafale de Bronwyn - Elément Air",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Attiser les Flammes - Elément Feu",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Grêle de Cary - Elément Eau",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Glamour - Eléments Mixtes",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Diagnostic - Elément Terre",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Abbri d’Urien - Elément Air",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Vague de Feu - Elément Feu",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Aire de Glace - Elément Eau",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Manipulation Mentale - Eléments Mixtes",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Plume de Luthien- Elément Terre",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Poche d’air - Elément Air",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Eclat Magique - Elément Feu",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Malediction de Sedna - Elément Eau",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Poussière Aveuglante - Eléments Mixtes",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Prison de Talfryn - Elément Terre",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Télékinésie - Elément Air",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Marque incandescente - Elément Feu",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Brouillard de Dormyn - Elément Eau",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Mirroir d’Afan - Eléments Mixtes",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Souffle de Korath- Elément Terre",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Tempète Statique - Elément Air",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Poigne de Cadfan - Elément Feu",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Puro Dwr - Elément Eau",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Télépatie - Eléments Mixtes",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Pic terrestre - Elément Terre",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Zéphyr - Elément Air",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Tanio Ilchar - Elément Feu",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Rhewi - Elément Eau",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Ami des espèces sauvages - Invocation",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Don de la Nature - Invocation",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Malédiction - Invocation",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Sang Bouillonnant - Invocation",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Emblème de l’invisible - Invocation",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Vision Naturelle - Invocation",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Eaux Purificatrices - Invocation",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Bénédiction d’affection - Invocation",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Bénédiction de la bonne fortune - Invocation",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Crypte de la connaissance - Invocation",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Lumière sacrée - Invocation",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Toile de mensonges - Invocation",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Hydromancie - Rituel",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Message Magique - Rituel",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Pyromancie - Rituel",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Rituel de Magie - Rituel",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Rituel de vie- Rituel",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Rituel de Purification - Rituel",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Séance de Spiristisme - Rituel",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Télécommunicaton - Rituel",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Jarre ensorcelée - Rituel",
          "objectType": "(Grimoire)"
        },
        {
          "name": "L’envoutement des Ombres - Envoutement",
          "objectType": "(Grimoire)"
        },
        {
          "name": "La démangeaison éternelle - Envoutement",
          "objectType": "(Grimoire)"
        },
        {
          "name": "La chance démoniaque - Envoutement",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Le cauchemard - Envoutement",
          "objectType": "(Grimoire)"
        },
        {
          "name": "Le baiser de Pesta - Envoutement",
          "objectType": "(Grimoire)"
        },
        {
          "name": "L’envoutement de la bête - Envoutement",
          "objectType": "(Grimoire)"
        },
        {
          "name": "La Prophétie d'Ithlinne",
          "objectType": "(Livre)"
        },
        {
          "name": "Le royaume de Temeria",
          "objectType": "(Livre)"
        },
        {
          "name": "Le cadeau de Lara",
          "objectType": "(Livre)"
        },
        {
          "name": "Le dernier voeux",
          "objectType": "(Livre)"
        },
        {
          "name": "Monstres, un portrait des Sorceleurs",
          "objectType": "(Livre)"
        },
        {
          "name": "Ornithosaure",
          "objectType": "(Livre)"
        },
        {
          "name": "Physiologie",
          "objectType": "(Livre)"
        },
        {
          "name": "Les plantes des terres arides",
          "objectType": "(Livre)"
        },
        {
          "name": "Histoire récente",
          "objectType": "(Livre)"
        },
        {
          "name": "Les plantes des Rituels",
          "objectType": "(Livre)"
        },
        {
          "name": "Le Royaume de Rivie",
          "objectType": "(Livre)"
        },
        {
          "name": "Le chemin de non-retour",
          "objectType": "(Livre)"
        },
        {
          "name": "Le peuple de l'ombre, ou l'histoire des services secrets de Sa Majesté",
          "objectType": "(Livre)"
        },
        {
          "name": "Manuel sur les minéraux",
          "objectType": "(Livre)"
        },
        {
          "name": "Magiciens et sorciers",
          "objectType": "(Livre)"
        },
        {
          "name": "Spectres, Fantômes & Damnés",
          "objectType": "(Livre)"
        },
        {
          "name": "L'histoire de Lara Dorren et Cragen de Lod",
          "objectType": "(Livre)"
        },
        {
          "name": "Installations souterraines",
          "objectType": "(Livre)"
        },
        {
          "name": "Monstres des marais",
          "objectType": "(Livre)"
        },
        {
          "name": "Plantes des marais",
          "objectType": "(Livre)"
        },
        {
          "name": "Tome de la peur et de l'horreur, Volume I",
          "objectType": "(Livre)"
        },
        {
          "name": "Tome de la peur et de l'horreur, Volume II",
          "objectType": "(Livre)"
        },
        {
          "name": "Mutations et Métamorphoses",
          "objectType": "(Livre)"
        },
        {
          "name": "Vampires: Faits et légendes",
          "objectType": "(Livre)"
        },
        {
          "name": "Le monde merveilleux des insectoïdes",
          "objectType": "(Livre)"
        },
        {
          "name": "Insectes de Zerrikania et autres nuisibles",
          "objectType": "(Livre)"
        },
        {
          "name": "Ain Soph Aur",
          "objectType": "(Livre)"
        },
        {
          "name": "Les portes secrètes",
          "objectType": "(Livre)"
        },
        {
          "name": "Harpies, les filles du vent",
          "objectType": "(Livre)"
        },
        {
          "name": "L’art de la Magie",
          "objectType": "(Livre)"
        },
        {
          "name": "Bruxa, le panégyrique de la mort",
          "objectType": "(Livre)"
        },
        {
          "name": "La chasse sauvage",
          "objectType": "(Livre)"
        },
        {
          "name": "Le chant de la chasse",
          "objectType": "(Livre)"
        },
        {
          "name": "Le coup d'État de Thanedd",
          "objectType": "(Livre)"
        },
        {
          "name": "Comment tuer un bullvore?",
          "objectType": "(Livre)"
        },
        {
          "name": "Conclave des sorciers",
          "objectType": "(Livre)"
        },
        {
          "name": "La conjonction des sphères",
          "objectType": "(Livre)"
        },
        {
          "name": "Tiré des annales de l'histoire de Mahakamien",
          "objectType": "(Livre)"
        },
        {
          "name": "Dynastie royale de Témérie",
          "objectType": "(Livre)"
        },
        {
          "name": "Les catastrophes de la guerre: des démons pourris",
          "objectType": "(Livre)"
        },
        {
          "name": "Fonctions et objectifs de la Loge",
          "objectType": "(Livre)"
        },
        {
          "name": "Drogues et poisons",
          "objectType": "(Livre)"
        },
        {
          "name": "Noyeur, un texte pour les initiés de l'Ordre de la Rose",
          "objectType": "(Livre)"
        },
        {
          "name": "Flamber",
          "objectType": "(Livre)"
        },
        {
          "name": "L'appât de la tentation",
          "objectType": "(Livre)"
        },
        {
          "name": "Êtres de l'élément du feu",
          "objectType": "(Livre)"
        },
        {
          "name": "Êtres de l'élément de terre",
          "objectType": "(Livre)"
        },
        {
          "name": "Flamme Blanche",
          "objectType": "(Livre)"
        },
        {
          "name": "Force Spéciales Témériennes",
          "objectType": "(Livre)"
        },
        {
          "name": "Gargouille, gouttières et auvents : dysfonctionnements et stockage",
          "objectType": "(Livre)"
        },
        {
          "name": "La grande Trinité",
          "objectType": "(Livre)"
        },
        {
          "name": "Guerres pour l'Aedirn supérieur",
          "objectType": "(Livre)"
        },
        {
          "name": "Kayran, une monographie",
          "objectType": "(Livre)"
        },
        {
          "name": "Magie et pouvoir",
          "objectType": "(Livre)"
        },
        {
          "name": "La malédiction de la légende",
          "objectType": "(Livre)"
        },
        {
          "name": "Maréchal Milan Raupenneck",
          "objectType": "(Livre)"
        },
        {
          "name": "Nekker dans le brouillard",
          "objectType": "(Livre)"
        },
        {
          "name": "Province nilfgaardiane",
          "objectType": "(Livre)"
        },
        {
          "name": "Les Royaumes du Nord",
          "objectType": "(Livre)"
        },
        {
          "name": "La révolte de Vizima",
          "objectType": "(Livre)"
        },
        {
          "name": "Rudiments de pathomorphologie",
          "objectType": "(Livre)"
        },
        {
          "name": "Les runes du pouvoir I",
          "objectType": "(Livre)"
        },
        {
          "name": "Les runes du pouvoir II",
          "objectType": "(Livre)"
        },
        {
          "name": "Les runes du pouvoir III",
          "objectType": "(Livre)"
        },
        {
          "name": "Les runes du pouvoir IV",
          "objectType": "(Livre)"
        },
        {
          "name": "L'herbe toujours vivante, ou naine",
          "objectType": "(Livre)"
        },
        {
          "name": "La société féodale et ses ennemis",
          "objectType": "(Livre)"
        },
        {
          "name": "Stenterdo Grigio",
          "objectType": "(Livre)"
        },
        {
          "name": "Histoire du Conseil des magiciens",
          "objectType": "(Livre)"
        },
        {
          "name": "Étude des arachides",
          "objectType": "(Livre)"
        },
        {
          "name": "Trois ans parmi les endriagas",
          "objectType": "(Livre)"
        },
        {
          "name": "Troll de Pierre",
          "objectType": "(Livre)"
        },
        {
          "name": "Tout sur les dragons",
          "objectType": "(Livre)"
        },
        {
          "name": "La vallée des fleurs",
          "objectType": "(Livre)"
        },
        {
          "name": "La vallée du Pontar",
          "objectType": "(Livre)"
        },
        {
          "name": "Végépatie",
          "objectType": "(Livre)"
        },
        {
          "name": "La victime de la malédiction",
          "objectType": "(Livre)"
        },
        {
          "name": "La vie et la mort de la Rose blanche",
          "objectType": "(Livre)"
        },
        {
          "name": "Fantôme, peur et terreur",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal de Jaskier",
          "objectType": "(Livre)"
        },
        {
          "name": "L'élevage humain",
          "objectType": "(Livre)"
        },
        {
          "name": "Alp, le dangereux cousin de la bruxa",
          "objectType": "(Livre)"
        },
        {
          "name": "Les animaux héraldiques",
          "objectType": "(Livre)"
        },
        {
          "name": "Notes (Troubleu)",
          "objectType": "(Livre)"
        },
        {
          "name": "Notes bien conservées de Hieronymus sur le sorcier Elgar",
          "objectType": "(Livre)"
        },
        {
          "name": "Notes de la tête d'une hanse",
          "objectType": "(Livre)"
        },
        {
          "name": "Notes du professeur Sigismund Gloger",
          "objectType": "(Livre)"
        },
        {
          "name": "Notes de l'assistant Philipp Borutt",
          "objectType": "(Livre)"
        },
        {
          "name": "Notes d'espionnage",
          "objectType": "(Livre)"
        },
        {
          "name": "Notes du scribe du tournoi",
          "objectType": "(Livre)"
        },
        {
          "name": "Notes d’Aeramas",
          "objectType": "(Livre)"
        },
        {
          "name": "Notes d’Alexander",
          "objectType": "(Livre)"
        },
        {
          "name": "Notes d’Anna",
          "objectType": "(Livre)"
        },
        {
          "name": "Notes d’Antoine \"Starling\" Straggen",
          "objectType": "(Livre)"
        },
        {
          "name": "Notes de Berengar",
          "objectType": "(Livre)"
        },
        {
          "name": "Notes de Druzus l'eremita",
          "objectType": "(Livre)"
        },
        {
          "name": "Notes de Fette de' Amin",
          "objectType": "(Livre)"
        },
        {
          "name": "Notes d’Hendrik",
          "objectType": "(Livre)"
        },
        {
          "name": "Notes d’Hieronymus",
          "objectType": "(Livre)"
        },
        {
          "name": "Notes de Merten.",
          "objectType": "(Livre)"
        },
        {
          "name": "Notes d’Ole Lukoje",
          "objectType": "(Livre)"
        },
        {
          "name": "Notes de Samuel Eide",
          "objectType": "(Livre)"
        },
        {
          "name": "Notes de Smigole Serkis",
          "objectType": "(Livre)"
        },
        {
          "name": "Notes de Vivienne",
          "objectType": "(Livre)"
        },
        {
          "name": "Notes du laboratoire de Nicolas Vogel",
          "objectType": "(Livre)"
        },
        {
          "name": "Notes delavoro",
          "objectType": "(Livre)"
        },
        {
          "name": "Notes de Magicien",
          "objectType": "(Livre)"
        },
        {
          "name": "Notes de recherche",
          "objectType": "(Livre)"
        },
        {
          "name": "Notes d’un alchimiste",
          "objectType": "(Livre)"
        },
        {
          "name": "Notes de un bandito",
          "objectType": "(Livre)"
        },
        {
          "name": "Notes d'un brigand de hanse de Filibert",
          "objectType": "(Livre)"
        },
        {
          "name": "Notes d’un capitaine Pirate",
          "objectType": "(Livre)"
        },
        {
          "name": "Notes d'un prisonnier",
          "objectType": "(Livre)"
        },
        {
          "name": "Notes d’un condamné à mort",
          "objectType": "(Livre)"
        },
        {
          "name": "Notes d'un contrebandier",
          "objectType": "(Livre)"
        },
        {
          "name": "Notes d’un Guerrier frustré",
          "objectType": "(Livre)"
        },
        {
          "name": "Notes d’un magicien",
          "objectType": "(Livre)"
        },
        {
          "name": "Notes d’un marchand",
          "objectType": "(Livre)"
        },
        {
          "name": "Notes d'un maçon",
          "objectType": "(Livre)"
        },
        {
          "name": "Notes d’un nilfgaardien",
          "objectType": "(Livre)"
        },
        {
          "name": "Notes d'un aubergiste",
          "objectType": "(Livre)"
        },
        {
          "name": "Notes d’un pirate",
          "objectType": "(Livre)"
        },
        {
          "name": "Notes d'un prisonnier de Tesham Mutna",
          "objectType": "(Livre)"
        },
        {
          "name": "Les notes des pilleurs",
          "objectType": "(Livre)"
        },
        {
          "name": "Note d’un essai",
          "objectType": "(Livre)"
        },
        {
          "name": "Notes d’un vendeur",
          "objectType": "(Livre)"
        },
        {
          "name": "Notes d'un voyageur",
          "objectType": "(Livre)"
        },
        {
          "name": "Notes d’un espion",
          "objectType": "(Livre)"
        },
        {
          "name": "Notes légèrement déchirées de Hieronymus sur le sorcier Elgar",
          "objectType": "(Livre)"
        },
        {
          "name": "Les notes de Hieronymus sur le sorcier Elgar, abîmées et décolorées",
          "objectType": "(Livre)"
        },
        {
          "name": "Notes très fanées de Hieronymus sur le sorcier Elgar",
          "objectType": "(Livre)"
        },
        {
          "name": "Notes sur parchemin de Hieronymus sur le sorcier Elgar",
          "objectType": "(Livre)"
        },
        {
          "name": "Notes au dos d'un diagramme",
          "objectType": "(Livre)"
        },
        {
          "name": "Notes sur un trésor",
          "objectType": "(Livre)"
        },
        {
          "name": "Arachnides : faits et mythes",
          "objectType": "(Livre)"
        },
        {
          "name": "Un tueur né. Une étude sur le garkain",
          "objectType": "(Livre)"
        },
        {
          "name": "Attention au Troll !",
          "objectType": "(Livre)"
        },
        {
          "name": "Attestation du contribuable complet",
          "objectType": "(Livre)"
        },
        {
          "name": "Attention à ton épée, soldat !",
          "objectType": "(Livre)"
        },
        {
          "name": "Ballade de Torgeir le Rouge",
          "objectType": "(Livre)"
        },
        {
          "name": "Ballade",
          "objectType": "(Livre)"
        },
        {
          "name": "Ballades et hymnes",
          "objectType": "(Livre)"
        },
        {
          "name": "Bestiaire du frère Adalbert",
          "objectType": "(Livre)"
        },
        {
          "name": "Les bêtes des collines de Tukaj",
          "objectType": "(Livre)"
        },
        {
          "name": "Billet sur la cuillère à clé",
          "objectType": "(Livre)"
        },
        {
          "name": "Biographie du vampire Regis, écrite par Jaskier",
          "objectType": "(Livre)"
        },
        {
          "name": "Courte Lettre",
          "objectType": "(Livre)"
        },
        {
          "name": "Brève histoire de Pomino",
          "objectType": "(Livre)"
        },
        {
          "name": "Brève histoire de gwent",
          "objectType": "(Livre)"
        },
        {
          "name": "Calendrier des travaux du vignoble de Tufo",
          "objectType": "(Livre)"
        },
        {
          "name": "Changez votre vie ! Un manuel",
          "objectType": "(Livre)"
        },
        {
          "name": "Champion de Tesham Mutna",
          "objectType": "(Livre)"
        },
        {
          "name": "Affaire : Adalard le manchot",
          "objectType": "(Livre)"
        },
        {
          "name": "Des coffres-forts pour Cyanfanelli",
          "objectType": "(Livre)"
        },
        {
          "name": "Les célèbres dynasties de Reduan",
          "objectType": "(Livre)"
        },
        {
          "name": "Code Loth Hanse demi-sang",
          "objectType": "(Livre)"
        },
        {
          "name": "Celle qui sait",
          "objectType": "(Livre)"
        },
        {
          "name": "Comment Luis Alberni est devenu Golyat",
          "objectType": "(Livre)"
        },
        {
          "name": "Comment éviter les gros navires",
          "objectType": "(Livre)"
        },
        {
          "name": "Copie de l'émission d'Irina",
          "objectType": "(Livre)"
        },
        {
          "name": "Correspondance de Ermine",
          "objectType": "(Livre)"
        },
        {
          "name": "Que sera la Témérie ?",
          "objectType": "(Livre)"
        },
        {
          "name": "Croyances de Skellige : Freya",
          "objectType": "(Livre)"
        },
        {
          "name": "Croyances de Skellige : les druides",
          "objectType": "(Livre)"
        },
        {
          "name": "Chronique ducale, première édition",
          "objectType": "(Livre)"
        },
        {
          "name": "Chronique Ducale, deuxième édition corrigée",
          "objectType": "(Livre)"
        },
        {
          "name": "Chroniques du clan Torgeir",
          "objectType": "(Livre)"
        },
        {
          "name": "Chroniques de Rédanie",
          "objectType": "(Livre)"
        },
        {
          "name": "A propos du feu et de la pierre",
          "objectType": "(Livre)"
        },
        {
          "name": "La chasse au basilic : un compendium",
          "objectType": "(Livre)"
        },
        {
          "name": "Ondes sonores : chauves-souris et shaelmaar",
          "objectType": "(Livre)"
        },
        {
          "name": "la sueur et le sang",
          "objectType": "(Livre)"
        },
        {
          "name": "Un journal intime couvert de poussière",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal dédié à la plus belle femme du monde",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal des bandits",
          "objectType": "(Livre)"
        },
        {
          "name": "Le journal du comte Romilly, partie 1",
          "objectType": "(Livre)"
        },
        {
          "name": "Le journal du comte Romilly, partie 2",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal du grand mendiant",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal du prince Adrien",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal de bord d'un navire",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal du chroniqueur de la ville",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal du distillateur",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal du jardinier Quayle",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal du laboratoire de Sykula",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal d'un voleur",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal du magicien Alexandre, partie 1",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal du magicien Alexandre, partie 2",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal du professeur Moreau",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal du professeur Noel Ivor",
          "objectType": "(Livre)"
        },
        {
          "name": "Le journal du professeur Shakeslock",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal du Sorceleur George",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal d'Adona de Carreas",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal d’Alistair Carnarvon",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal d’Amaverick de Sorano",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal d’Arnold aep Bluhm",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal d’Augustine Cooper",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal de Charité Gontran de Tufo",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal de Charlotte",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal de Dolores Reardon",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal d’Ernest le Scribbe",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal d’Ervyl",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal d’Eugene le rapide",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal de Giséle Duret",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal d’Igor de Sade",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal d’Isabelle Duchamp",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal de Julia Kenyon",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal de Junod de Belhaven",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal de Knut Kreutzman",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal de Lexandre",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal de Loth",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal de Maximus Nonius Macrinus",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal de Moreau",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal de Morkvarg",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal de Padre Glaedfried",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal de Peter",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal de Sir Christophe Dugarry",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal de Thierry Pires",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal de Tuono",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal de Varin",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal de Yennefer",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal de bord",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal de recherche sur les archéospores",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal d’un administrateur",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal d'un artiste de l'évasion",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal d’un bandit",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal d'un voleur, partie II",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal d'un cracheur de feu",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal d’un prisonnier",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal d'un homme désespéré",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal de bord d'un voyage autour du monde",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal d'un écrivain amoureux",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal d'un spéléologue",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal jaune",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal tacheté",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal taché de sang",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal de bord",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal parfumé",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal couvert en cuir",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal recouvert de cuir battu",
          "objectType": "(Livre)"
        },
        {
          "name": "Journal écrit sur la peau de vache tannée",
          "objectType": "(Livre)"
        },
        {
          "name": "Derrière le grand voile",
          "objectType": "(Livre)"
        },
        {
          "name": "Après le gel blanc",
          "objectType": "(Livre)"
        },
        {
          "name": "Liste des débiteurs",
          "objectType": "(Livre)"
        },
        {
          "name": "Emhyr var Emreis : une biographie",
          "objectType": "(Livre)"
        },
        {
          "name": "Encyclopédie illustrée des insectoïdes",
          "objectType": "(Livre)"
        },
        {
          "name": "Héros de Skellige : Broddr",
          "objectType": "(Livre)"
        },
        {
          "name": "Héros de Skellige : Grymmdjarr",
          "objectType": "(Livre)"
        },
        {
          "name": "Héros de Skellige : Modolf",
          "objectType": "(Livre)"
        },
        {
          "name": "Héros de Skellige : Otkell",
          "objectType": "(Livre)"
        },
        {
          "name": "Héros de Skellige : Sove",
          "objectType": "(Livre)"
        },
        {
          "name": "Héros de Skellige : Tyr",
          "objectType": "(Livre)"
        },
        {
          "name": "Expériences sur les Sorceleurs - mises à jour",
          "objectType": "(Livre)"
        },
        {
          "name": "Faites-le vous-même",
          "objectType": "(Livre)"
        },
        {
          "name": "Envoutement pour un golem",
          "objectType": "(Livre)"
        },
        {
          "name": "Faune des royaumes du Nord, Volume 1",
          "objectType": "(Livre)"
        },
        {
          "name": "Faune des royaumes du Nord, Volume 2",
          "objectType": "(Livre)"
        },
        {
          "name": "Fable et légendes",
          "objectType": "(Livre)"
        },
        {
          "name": "Feuille gribouillée par Guillaume",
          "objectType": "(Livre)"
        },
        {
          "name": "Formule de la potion régénératrice",
          "objectType": "(Livre)"
        },
        {
          "name": "Fragment de pièce de théâtre",
          "objectType": "(Livre)"
        },
        {
          "name": "Ghoule et Alghoule",
          "objectType": "(Livre)"
        },
        {
          "name": "Serment",
          "objectType": "(Livre)"
        },
        {
          "name": "L'Aen Seidhe et l'Aen Elle",
          "objectType": "(Livre)"
        },
        {
          "name": "Les astuces des gnomes",
          "objectType": "(Livre)"
        },
        {
          "name": "Les humains élevés en cage et sur le sol",
          "objectType": "(Livre)"
        },
        {
          "name": "Gottfried et le chevalier d'échecs",
          "objectType": "(Livre)"
        },
        {
          "name": "Grand tournoi de gwent de Beauclair",
          "objectType": "(Livre)"
        },
        {
          "name": "Le vautour fauve dans la nature",
          "objectType": "(Livre)"
        },
        {
          "name": "Grimorio Tout-Puissant de Gottfried",
          "objectType": "(Livre)"
        },
        {
          "name": "Guide du vignoble de Toussaint, volume I : la vallée de Sansretour",
          "objectType": "(Livre)"
        },
        {
          "name": "Guide du vignoble de Toussaint, Volume II : La vallée de la Blessure",
          "objectType": "(Livre)"
        },
        {
          "name": "Guide des miracles à parcourir",
          "objectType": "(Livre)"
        },
        {
          "name": "Les signes des Sorceleurs",
          "objectType": "(Livre)"
        },
        {
          "name": "Mes pensées avant de dormir",
          "objectType": "(Livre)"
        },
        {
          "name": "Les Sages Elfes",
          "objectType": "(Livre)"
        },
        {
          "name": "Le givre blanc",
          "objectType": "(Livre)"
        },
        {
          "name": "Le massacre de Cintra",
          "objectType": "(Livre)"
        },
        {
          "name": "Le livre saint du feu éternel",
          "objectType": "(Livre)"
        },
        {
          "name": "Le sang ancestral",
          "objectType": "(Livre)"
        },
        {
          "name": "Le cadavre de Novigrad",
          "objectType": "(Livre)"
        },
        {
          "name": "Le code du duel",
          "objectType": "(Livre)"
        },
        {
          "name": "Le fermier qui a confondu son seigneur",
          "objectType": "(Livre)"
        },
        {
          "name": "Le culte de Freya",
          "objectType": "(Livre)"
        },
        {
          "name": "Le golem, ou le plus fidèle serviteur de l'homme...",
          "objectType": "(Livre)"
        },
        {
          "name": "Le monde magique des insectoïdes",
          "objectType": "(Livre)"
        },
        {
          "name": "Mon manifeste - La vie de Jacques de Aldersberg",
          "objectType": "(Livre)"
        },
        {
          "name": "Le monde sous-marin",
          "objectType": "(Livre)"
        },
        {
          "name": "Sauver le métamorphe",
          "objectType": "(Livre)"
        },
        {
          "name": "Introduction à la magie appliquée",
          "objectType": "(Livre)"
        },
        {
          "name": "Moi et la panthère, de Abigail Lette",
          "objectType": "(Livre)"
        },
        {
          "name": "Katakan : une monographie",
          "objectType": "(Livre)"
        },
        {
          "name": "Kikimore : vérités et légendes sur ces dangereux insectoïdes",
          "objectType": "(Livre)"
        },
        {
          "name": "Kovir et Poviss",
          "objectType": "(Livre)"
        },
        {
          "name": "L'empire des éléments",
          "objectType": "(Livre)"
        },
        {
          "name": "L'incroyable remède de Van Grott contre le fléau",
          "objectType": "(Livre)"
        },
        {
          "name": "L'opposition à Nilfgaard",
          "objectType": "(Livre)"
        },
        {
          "name": "La dernière entrée dans le Journal du magicien Aeramas",
          "objectType": "(Livre)"
        },
        {
          "name": "Le dernier basilic de son espèce : une étude de l'écologie, de Borhis de Salvaress",
          "objectType": "(Livre)"
        },
        {
          "name": "L'homme qui siffle les chevaux",
          "objectType": "(Livre)"
        },
        {
          "name": "La conjonction des Sphères",
          "objectType": "(Livre)"
        },
        {
          "name": "La loge des magiciens",
          "objectType": "(Livre)"
        },
        {
          "name": "La ballade du sorceleur Geralt",
          "objectType": "(Livre)"
        },
        {
          "name": "La chute d'Hubert Balaste",
          "objectType": "(Livre)"
        },
        {
          "name": "La tonalité mineure de Gillian Alboco",
          "objectType": "(Livre)"
        },
        {
          "name": "Le traitement des furoncles par cautérisation : étude",
          "objectType": "(Livre)"
        },
        {
          "name": "La curieuse histoire de Vegga la Virtuosa",
          "objectType": "(Livre)"
        },
        {
          "name": "La source empoisonnée",
          "objectType": "(Livre)"
        },
        {
          "name": "La guerre civile à Toussaint",
          "objectType": "(Livre)"
        },
        {
          "name": "Le guide pour les voyageurs solitaires d'An Skellig",
          "objectType": "(Livre)"
        },
        {
          "name": "Le guide pour les voyageurs solitaires d'Ard Skellig",
          "objectType": "(Livre)"
        },
        {
          "name": "Le guide du voyageur solitaire de Féroé",
          "objectType": "(Livre)"
        },
        {
          "name": "Le guide du voyageur solitaire d’Hindarsfjall",
          "objectType": "(Livre)"
        },
        {
          "name": "Le guide du voyageur solitaire de Spikeroog",
          "objectType": "(Livre)"
        },
        {
          "name": "Le guide du voyageur solitaire d’Undvik",
          "objectType": "(Livre)"
        },
        {
          "name": "Le guide du voyageur solitaire",
          "objectType": "(Livre)"
        },
        {
          "name": "La merveilleuse histoire des Insectoïdes : un complément",
          "objectType": "(Livre)"
        },
        {
          "name": "L'obscurité naturelle des malédictions",
          "objectType": "(Livre)"
        },
        {
          "name": "La polimorfie",
          "objectType": "(Livre)"
        },
        {
          "name": "Le salut du métamorphe",
          "objectType": "(Livre)"
        },
        {
          "name": "Histoire de l'Est Est",
          "objectType": "(Livre)"
        },
        {
          "name": "L'histoire de Barrengarth",
          "objectType": "(Livre)"
        },
        {
          "name": "L’histoire de Corvo Bianco",
          "objectType": "(Livre)"
        },
        {
          "name": "Lara Dorren et Cregennan de Lod",
          "objectType": "(Livre)"
        },
        {
          "name": "Les dames des bois",
          "objectType": "(Livre)"
        },
        {
          "name": "Les joyeuses aventures de Muriel, la charmante prostituée. Avec des illustrations hilarantes",
          "objectType": "(Livre)"
        },
        {
          "name": "Les aventures de Spikey et Franconi la créature",
          "objectType": "(Livre)"
        },
        {
          "name": "Les dragolucertoles dans l'histoire",
          "objectType": "(Livre)"
        },
        {
          "name": "Les familles nobles de Toussaint : volume LVII",
          "objectType": "(Livre)"
        },
        {
          "name": "Les guerres dans le Nord, Volume I",
          "objectType": "(Livre)"
        },
        {
          "name": "Les guerres dans le Nord, Volume II",
          "objectType": "(Livre)"
        },
        {
          "name": "Les merveilles de Zerrikania",
          "objectType": "(Livre)"
        },
        {
          "name": "Mutations du sorcier : introduction à la recherche",
          "objectType": "(Livre)"
        },
        {
          "name": "Les landes sauvages et sombres de Caed Myrkvid",
          "objectType": "(Livre)"
        },
        {
          "name": "Lettre à un shaman",
          "objectType": "(Livre)"
        },
        {
          "name": "Lettre à Alexandre",
          "objectType": "(Livre)"
        },
        {
          "name": "Lettre au beau-frère",
          "objectType": "(Livre)"
        },
        {
          "name": "Lettre à un Négociant",
          "objectType": "(Livre)"
        },
        {
          "name": "Lettre d’un père",
          "objectType": "(Livre)"
        },
        {
          "name": "Lettre pour une mère",
          "objectType": "(Livre)"
        },
        {
          "name": "Lettre avec le sceau de Castel Ravello",
          "objectType": "(Livre)"
        },
        {
          "name": "Lettre d'amour",
          "objectType": "(Livre)"
        },
        {
          "name": "Lettre d'amour de Bella de Gunness",
          "objectType": "(Livre)"
        },
        {
          "name": "Lettre d'amour signée par Bella de Gunness",
          "objectType": "(Livre)"
        },
        {
          "name": "Lettre des opposants à la nouvelle faction de gwent",
          "objectType": "(Livre)"
        },
        {
          "name": "Lettre du Chevalier Chalimir",
          "objectType": "(Livre)"
        },
        {
          "name": "Lettre du frère du comte Monnier",
          "objectType": "(Livre)"
        },
        {
          "name": "Lettre du sorceleur Kolgrim de l'école des vipères",
          "objectType": "(Livre)"
        },
        {
          "name": "Lettre de maestro Matthew",
          "objectType": "(Livre)"
        },
        {
          "name": "Lettre de l'épouse d’un Nilfgaardien",
          "objectType": "(Livre)"
        },
        {
          "name": "Lettre d'excuses",
          "objectType": "(Livre)"
        },
        {
          "name": "Lettre d’un alchimiste",
          "objectType": "(Livre)"
        },
        {
          "name": "Lettre d’un druide",
          "objectType": "(Livre)"
        },
        {
          "name": "Lettre d'un viticulteur",
          "objectType": "(Livre)"
        },
        {
          "name": "Lettre d’un marchand ofieriano",
          "objectType": "(Livre)"
        },
        {
          "name": "Lettre d’un soldat mort",
          "objectType": "(Livre)"
        },
        {
          "name": "Lettre d'un bûcheron à sa femme",
          "objectType": "(Livre)"
        },
        {
          "name": "Lettre d'un admirateur",
          "objectType": "(Livre)"
        },
        {
          "name": "Lettre d’un mère",
          "objectType": "(Livre)"
        },
        {
          "name": "Lettre écrite avec du sang",
          "objectType": "(Livre)"
        },
        {
          "name": "Lettre écrite dans une langue ancienne",
          "objectType": "(Livre)"
        },
        {
          "name": "Livre d'Ivonis",
          "objectType": "(Livre)"
        },
        {
          "name": "Livre de recettes de Louis Serkis Smigole",
          "objectType": "(Livre)"
        },
        {
          "name": "Liste avec le sceau de Belgaard",
          "objectType": "(Livre)"
        },
        {
          "name": "Liste avec le sceau de Liam Coronata",
          "objectType": "(Livre)"
        },
        {
          "name": "Liste avec sceau noble",
          "objectType": "(Livre)"
        },
        {
          "name": "Liste de chansons",
          "objectType": "(Livre)"
        },
        {
          "name": "L'esprit des steppes",
          "objectType": "(Livre)"
        },
        {
          "name": "Manifeste du signataire",
          "objectType": "(Livre)"
        },
        {
          "name": "Carte du comte de Beledal",
          "objectType": "(Livre)"
        },
        {
          "name": "Carte de Jean-Louis Ludovic",
          "objectType": "(Livre)"
        },
        {
          "name": "Mémoires d'un bibliothécaire",
          "objectType": "(Livre)"
        },
        {
          "name": "Le mystère des mystères",
          "objectType": "(Livre)"
        },
        {
          "name": "La monumentale liqueur Elfique",
          "objectType": "(Livre)"
        },
        {
          "name": "Moribundia : le dernier aspect du vampire",
          "objectType": "(Livre)"
        },
        {
          "name": "Mostrum, ou portrait des sorceleurs. Volume 1",
          "objectType": "(Livre)"
        },
        {
          "name": "Mostrum, ou portrait des sorceleurs. Volume 2",
          "objectType": "(Livre)"
        },
        {
          "name": "Naransen, fils de Gunnestad",
          "objectType": "(Livre)"
        },
        {
          "name": "Necronomicon",
          "objectType": "(Livre)"
        },
        {
          "name": "Nécromancie, ou magie interdite",
          "objectType": "(Livre)"
        },
        {
          "name": "Comme la bête",
          "objectType": "(Livre)"
        },
        {
          "name": "Alondra le noble",
          "objectType": "(Livre)"
        },
        {
          "name": "Ode au Gwent",
          "objectType": "(Livre)"
        },
        {
          "name": "Offre pour l’invisibles",
          "objectType": "(Livre)"
        },
        {
          "name": "Commentaires sur l'administration de Yarrow",
          "objectType": "(Livre)"
        },
        {
          "name": "Les pactes de sang, c'est-à-dire les présences étrangères",
          "objectType": "(Livre)"
        },
        {
          "name": "Parchemin de Crevan Carn",
          "objectType": "(Livre)"
        },
        {
          "name": "Perle du Nord - Novigrad",
          "objectType": "(Livre)"
        },
        {
          "name": "Perle du Nord - Oxenfurt",
          "objectType": "(Livre)"
        },
        {
          "name": "Poème",
          "objectType": "(Livre)"
        },
        {
          "name": "Poèmes de Gonzal de Verceo",
          "objectType": "(Livre)"
        },
        {
          "name": "Prière du disciple de Lebioda",
          "objectType": "(Livre)"
        }
      ]
    },
    {
      "name": "Paillasse au sol",
      "buildingType": "Inn_straw_bedding",
      "maxObjectsDisplayedPerEnvironmentType": [
        0,
        0,
        0,
        0
      ],
	  "min":[
		0,0,0,0
	  ]
    },
    {
      "name": "Écurie",
      "buildingType": "Inn_stables",
      "maxObjectsDisplayedPerEnvironmentType": [
        5,
        3,
        1,
        3
      ],
	  "min":[
		1,1,1,1
	  ]
    },
    {
      "name": "Auberge de Luxe",
      "buildingType": "Inn_high_class",
      "buildingRandomNames": [
        "Vins et Violons",
        "Le Troisième Oeil",
        "Le Septième Corbeau",
        "La Perle",
        "Ruban Rose",
        "Le Tyrant Insomnie",
        "La Dune Blanche",
        "Le Géant Bas",
        "Le Baron rampant",
        "La taverne des âmes errantes",
        "Ter Mosif",
        "La Flûte d'Or",
        "Le Nembus confortable",
        "Corbeau noir",
        "Croissant de lune",
        "Lumière du ciel",
        "Miroir",
        "Dragon noir",
        "Cracken",
        "Coda de Lince",
        "Monocle d'argent",
        "Bruxa incallita",
        "Kentia",
        "Mast er cief",
        "Jardin sur la terrasse",
        "La Palme d'Or",
        "Licorne hypnotique",
        "Poisson DiVin",
        "cchâteau errant",
        "Chez le Mongolo",
        "Le requin du roi"
      ],
      "maxObjectsDisplayedPerEnvironmentType": [
        0,
        0,
        0,
        0
      ],
	  "min":[
		0,0,0,0
	  ],
      "standardObjects": [
        {
          "object": [
            {
              "name": "Bon Repas",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Festin",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Bonbons",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Spiritueux",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Bière",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Vin",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Alcahest",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Repas Simple",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Viande Crue",
              "objectType": "(Nourriture)"
            }
          ]
        },
        {
          "object": [
            {
              "name": "Bon Repas",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Festin",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Bonbons",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Spiritueux",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Bière",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Vin",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Alcahest",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Repas Simple",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Viande Crue",
              "objectType": "(Nourriture)"
            }
          ]
        },
        {
          "object": [
            {
              "name": "Bon Repas",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Festin",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Bonbons",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Spiritueux",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Bière",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Vin",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Alcahest",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Repas Simple",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Viande Crue",
              "objectType": "(Nourriture)"
            }
          ]
        },
        {
          "object": [
            {
              "name": "Bon Repas",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Festin",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Bonbons",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Spiritueux",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Bière",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Vin",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Alcahest",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Repas Simple",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Viande Crue",
              "objectType": "(Nourriture)"
            }
          ]
        }
      ]
    },
    {
      "name": "Auberge de Qualité",
      "buildingType": "Inn_standard_quality",
      "buildingRandomNames": [
        "La Lacrima dell'Orso",
        "Ragoût et Bière dans la grotte",
        "Il Tesoro de Brennen",
		"Guide Spiritueux",
        "Vallée enchantée",
        "Cheval blanc",
        "Il Pozzo",
        "Cal Darrost",
        "Riposo de Harven",
        "The Magic Pen",
        "Université de Bière",
        "Château endormi",
        "Cornes origineles",
        "Oasis du Goût",
        "Au romarin",
		"Lady glou glou",
        "Les frères Airik",
        "À la mouette",
        "Villa dei Melograni",
        "Les braises",
        "Énigmes",
        "Bouquet de roses",
        "Coussin de plumes",
        "Trophée de la saison",
        "Chevalier discret",
        "Baguette magique",
        "Voyageur sans sommeil",
        "Les Trois Dryades",
        "Wyvern fumant",
        "Loi  Arcanes",
        "Griffon doré",
        "Refuge du pèlerin",
        "Sainte Vespa",
        "Albâtre doré",
        "Jument qui rit",
        "Cheval noir",
        "Tortue rugissante",
        "Femme rumma",
        "Eau de rose"
      ],
      "maxObjectsDisplayedPerEnvironmentType": [
        0,
        0,
        0,
        0
      ],
	  "min":[
		0,0,0,0
	  ],
      "standardObjects": [
        {
          "object": [
            {
              "name": "Bon Repas",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Bonbons",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Spiritueux",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Bière",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Alcahest",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Repas Simple",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Viande Crue",
              "objectType": "(Nourriture)"
            }
          ]
        },
        {
          "object": [
            {
              "name": "Bon Repas",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Bonbons",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Spiritueux",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Bière",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Alcahest",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Repas Simple",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Viande Crue",
              "objectType": "(Nourriture)"
            }
          ]
        },
        {
          "object": [
            {
              "name": "Bon Repas",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Bonbons",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Spiritueux",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Bière",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Alcahest",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Repas Simple",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Viande Crue",
              "objectType": "(Nourriture)"
            }
          ]
        },
        {
          "object": [
            {
              "name": "Bon Repas",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Bonbons",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Spiritueux",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Bière",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Alcahest",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Repas Simple",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Viande Crue",
              "objectType": "(Nourriture)"
            }
          ]
        }
      ]
    },
    {
      "name": "Auberge Correcte",
      "buildingType": "Inn_medium_quality",
      "buildingRandomNames": [
        "Vieilles épées",
        "rivière de Bière",
		"Cri vain",
		"Céphalique",
        "La tour du magicien",
        "méduses souriantes",
        "mers et montagnes",
        "la grande tortue",
        "médaille rouillée",
        "la tasse dans la mer",
        "vis et veau",
        "le caravansérail d'Aylet",
        "l'épée d'argent",
        "tempête de sable",
        "La caravan de Elinor",
        "À la marina",
        "Du calmar sauteur",
        "Chèvre ivre",
        "Le paradis sur terre",
        "Set de table",
        "Faucon sanglant",
        "Bateau gâté",
        "Poulain endormi",
        "Pinte volante",
        "Divine Daiana",
        "Tigre de l'Est",
        "Portes du Prince",
        "Selle Storta",
        "Fortuna  du Voyageur",
        "Lanceur de sorts ivre",
        "Paysan chanceux",
        "Chat argenté",
        "Oie spéciale",
        "Vache grasse",
        "Le Nekker pendant",
        "Ruines des anciens",
        "Locanda del Ponte",
        "Lune noire",
        "Moulin blanc",
        "Colombe blanche",
        "Le phénix zerrikanien",
        "Baam Bola",
        "Poulain sevré",
        "Alcool et autres poisons",
        "L'Étoile enchaînée",
        "Lit tordu",
        "Green Valley",
        "Arguta Maiden",
        "Fenêtre ouverte",
        "Pied droit",
        "Patte de bois",
        "Poignard brisé",
        "Vampire Ship",
        "Eagle's Beak",
        "Hypnotic Bull",
        "Cavalier Pesca",
        "Champs de Champagne",
        "Torre de Miele",
        "Tree House",
        "Albâtre",
        "Vierge des Roches",
        "Charrue dansante",
        "Sinus mammaire",
        "Cabane de l'oncle Tom",
        "Plante herbivore",
        "Fantôme presque mort",
        "Refuge du marchand",
        "Table carrée",
        "Souris perdue",
        "Canard",
		"Sac à gnôle",
		"Chameau assoiffé",
		"La barrique",
		"Trou sans fond",
		"Wine Not",
      ],
      "maxObjectsDisplayedPerEnvironmentType": [
        0,
        0,
        0,
        0
      ],
	  "min":[
		0,0,0,0
	  ],
      "standardObjects": [
        {
          "object": [
            {
              "name": "Spiritueux",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Bière",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Alcahest",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Repas Simple",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Viande Crue",
              "objectType": "(Nourriture)"
            }
          ]
        },
        {
          "object": [
            {
              "name": "Spiritueux",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Bière",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Alcahest",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Repas Simple",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Viande Crue",
              "objectType": "(Nourriture)"
            }
          ]
        },
        {
          "object": [
            {
              "name": "Spiritueux",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Bière",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Alcahest",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Repas Simple",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Viande Crue",
              "objectType": "(Nourriture)"
            }
          ]
        },
        {
          "object": [
            {
              "name": "Spiritueux",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Bière",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Alcahest",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Repas Simple",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Viande Crue",
              "objectType": "(Nourriture)"
            }
          ]
        }
      ]
    },
    {
      "name": "Auberge de Bon marché",
      "buildingType": "Inn_cheap_quality",
      "buildingRandomNames": [
        "Taverna  du chasseur",
		"Lait de vache",
		"Pichet rien",
        "Burp libre",
        "Lanterne éteinte",
        "Bouclier de chêne",
        "Éternuement",
        "Arc tendu",
        "Flacon de Guthren",
        "L'Arche flatulente",
        "Grosse fourmi",
        "Veuve rose",
        "Mouche blanche",
        "Poux visqueux",
        "Cendres du chevalier",
        "Lapin mort",
        "Jeune araignée",
        "Chapeau  Pauvre",
        "Auberge malchanceuse",
        "Marionnette",
        "Grenouille bondissante",
        "Libellule mourante",
        "Écureuil sobre",
        "Chat somnolant",
        "Lézard lézard",
        "Nuage vert",
        "Jugement final",
        "Boîte à aboiements",
        "Lion en bois",
        "Lame rouillée",
        "Feu de la jeunesse",
        "Bœuf enterré",
        "Eau verte",
        "Escargot  Brun",
        "Fourrure dorée",
        "Blaireau rouge",
        "Vin Vito",
        "Loup puant",
        "Forêt triste",
        "Savoir vert",
        "Truie hurlante",
        "Roc la graisse",
        "Pelé",
        "La pierre roulante",
        "Roi de non",
        "Balcon sur rien",
        "Vieux moulin",
        "Nuage désespéré",
        "Pigeon chaud",
        "Le casque désespéré",
        "clair de lune",
        "luth oublié",
        "vieille cabane",
        "vierge  Fer",
        "Flacon vide",
        "Sorcière endormie",
        "Tête de cuivre",
        "Regard aveugle",
        "Cheval cabré",
        "Rose des vents",
        "Taureau assis",
        "Étalon ordinaire",
        "Ver violet",
        "Doigt de moyeu",
        "Faucon sauteur",
        "Hibou Freya",
        "Happy Island",
        "Brigand lâche",
        "Hermine volante",
        "Chapeau suspendu",
        "Arbre des vierges",
        "Tortue à l'envers",
        "Chevalier hallebarde",
        "Nourriture et compagnie",
        "Bandoulière dévissée",
        "Chausson volant",
        "Rideau cassé",
        "Palvese volant",
        "Tête de cerf",
        "Pipe de Halfling",
        "Lanterne verte",
        "Moineau solitaire",
        "La porte  Oreiller déséquilibré",
        "oreiller de la belle-mère",
        "sel et poivre",
        "cuit deux fois",
        "soupe chauffée",
        "soupe à la fenêtre",
        "image parlante",
        "douce amphore",
        "Mandralisca",
		"Le poney fringuant"
      ],
      "maxObjectsDisplayedPerEnvironmentType": [
        0,
        0,
        0,
        0
      ],
	  "min":[
		0,0,0,0
	  ],
      "standardObjects": [
        {
          "object": [
            {
              "name": "Bière",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Alcahest",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Repas Simple",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Viande Crue",
              "objectType": "(Nourriture)"
            }
          ]
        },
        {
          "object": [
            {
              "name": "Bière",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Alcahest",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Repas Simple",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Viande Crue",
              "objectType": "(Nourriture)"
            }
          ]
        },
        {
          "object": [
            {
              "name": "Bière",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Alcahest",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Repas Simple",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Viande Crue",
              "objectType": "(Nourriture)"
            }
          ]
        },
        {
          "object": [
            {
              "name": "Bière",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Alcahest",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Repas Simple",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Viande Crue",
              "objectType": "(Nourriture)"
            }
          ]
        }
      ]
    },
    {
      "name": "Auberge Douteuse",
      "buildingType": "Inn_infamous_quality",
      "buildingRandomNames": [
        "Broche sirène",
		"Téteur de goulot",
		"Gosier à pinard",
		"Tonneau à piquette",
		"Mojitocratie",
		"Bibinocratie",
        "Oreille de Brigand",
        "Nino le danseur",
        "Grosse tête",
        "Dent de canard",
        "Sacoche perforée",
        "Baril ivre",
        "Brosse cassée",
        "Brise-pied",
        "Diviseur d'os",
        "Pied de corbeau",
        "Douleur",
		"Gueule de bois",
        "Strophe  Cinétique",
        "Feu allumé",
        "Chaise bancale",
        "Table pour deux",
        "Chaussure cassée",
        "Cœur de sorcière",
        "Dame en jaune",
        "Brosse envoûtée",
        "Bouteille d'eau",
        "Poêle éteinte",
        "Vent du nord",
        "Veste perforée",
        "Moustache épaisse",
        "Voiles piquées",
        "Vieux baril",
        "Abri du Tricheur",
        "Page ridée",
        "Pal Abras",
        "Épaule luxée",
        "Salamandre sorcière",
        "Élingues",
        "Aisselle poilue",
        "Cheminée souriante",
        "Pou de marche",
        "Romarin flétri",
		"Soif",
		"Le poney qui tousse",
		"Le poney lubrique",
		"Chopine tiède",
		"Rat d'égoûts",
		"Corbeau ravagé"
      ],
      "maxObjectsDisplayedPerEnvironmentType": [
        0,
        0,
        0,
        0
      ],
	  "min":[
		0,0,0,0
	  ],
      "standardObjects": [
        {
          "object": [
            {
              "name": "Bière",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Alcahest",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Repas Simple",
              "objectType": "(Nourriture)"
            }
          ]
        },
        {
          "object": [
            {
              "name": "Bière",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Alcahest",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Repas Simple",
              "objectType": "(Nourriture)"
            }
          ]
        },
        {
          "object": [
            {
              "name": "Bière",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Alcahest",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Repas Simple",
              "objectType": "(Nourriture)"
            }
          ]
        },
        {
          "object": [
            {
              "name": "Bière",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Alcahest",
              "objectType": "(Nourriture)"
            },
            {
              "name": "Repas Simple",
              "objectType": "(Nourriture)"
            }
          ]
        }
      ]
    },
    {
      "name": "Mercerie",
      "buildingType": "Haberdashery",
      "maxObjectsDisplayedPerEnvironmentType": [
        30,
        20,
        10,
        0
      ],
	  "min":[
		10,5,3,0
	  ],
      "object": [
        {
          "name": "Carbone - Materiel pour les envoutements",
          "objectType": "Material"
        },
        {
          "name": "Cendres - Materiel pour les envoutements",
          "objectType": "Material"
        },
        {
          "name": "Cire - Materiel pour les envoutements",
          "objectType": "Material"
        },
        {
          "name": "Coton - Materiel pour les envoutements",
          "objectType": "Material"
        },
        {
          "name": "Fil - Materiel pour les envoutements",
          "objectType": "Material"
        },
        {
          "name": "Bois - Materiel pour les envoutements",
          "objectType": "Material"
        },
        {
          "name": "Bois durci - Materiel pour les envoutements",
          "objectType": "Material"
        },
        {
          "name": "Lin - Materiel pour les envoutements",
          "objectType": "Material"
        },
        {
          "name": "Toile de Lin - Materiel pour les envoutements",
          "objectType": "Material"
        },
        {
          "name": "Huile - Materiel pour les envoutements",
          "objectType": "Material"
        },
        {
          "name": "Résine - Materiel pour les envoutements",
          "objectType": "Material"
        },
        {
          "name": "Soie - Materiel pour les envoutements",
          "objectType": "Material"
        },
        {
          "name": "Verre - Materiel pour les envoutements",
          "objectType": "Material"
        },
        {
          "name": "Cuir - Peaux et parties d’animaux",
          "objectType": "Material"
        },
        {
          "name": "Cuir Durci - Peaux et parties d’animaux",
          "objectType": "Material"
        },
        {
          "name": "Cuir Lyrien - Peaux et parties d’animaux",
          "objectType": "Material"
        },
        {
          "name": "Ossa de Bestia - Peaux et parties d’animaux",
          "objectType": "Material"
        },
        {
          "name": "Cuir de Draconide - Peaux et parties d’animaux",
          "objectType": "Material"
        },
        {
          "name": "Peau de Loup - Peaux et parties d’animaux",
          "objectType": "Material"
        },
        {
          "name": "Cuir de vache - Peaux et parties d’animaux",
          "objectType": "Material"
        },
        {
          "name": "Plumes - Peaux et parties d’animaux",
          "objectType": "Material"
        },
        {
          "name": "Ecailles de draconide - Peaux et parties d’animaux",
          "objectType": "Material"
        },
        {
          "name": "Eau Forte - Traitements Alchimiques",
          "objectType": "Material"
        },
        {
          "name": "Cire d’ogre - Traitements Alchimiques",
          "objectType": "Material"
        },
        {
          "name": "Pierre à aiguiser - Traitements Alchimiques",
          "objectType": "Material"
        },
        {
          "name": "Herbe à tanner- Traitements Alchimiques",
          "objectType": "Material"
        },
        {
          "name": "Graisse ester - Traitements Alchimiques",
          "objectType": "Material"
        },
        {
          "name": "Huile de demoptère - Traitements Alchimiques",
          "objectType": "Material"
        },
        {
          "name": "Huile assombrissante - Traitements Alchimiques",
          "objectType": "Material"
        },
        {
          "name": "Cinquième essence - Traitements Alchimiques",
          "objectType": "Material"
        },
        {
          "name": "Acier - Lingots et minéraux",
          "objectType": "Material"
        },
        {
          "name": "Acier Mahakamien - Lingots et minéraux",
          "objectType": "Material"
        },
        {
          "name": "Acier Noir - Lingots et minéraux",
          "objectType": "Material"
        },
        {
          "name": "Acier Tretogor - Lingots et minéraux",
          "objectType": "Material"
        },
        {
          "name": "Argent - Lingots et minéraux",
          "objectType": "Material"
        },
        {
          "name": "Argile alluviale - Lingots et minéraux",
          "objectType": "Material"
        },
        {
          "name": "Dimeritium - Lingots et minéraux",
          "objectType": "Material"
        },
        {
          "name": "Dimeritium Mahakamien - Lingots et minéraux",
          "objectType": "Material"
        },
        {
          "name": "Fer - Lingots et minéraux",
          "objectType": "Material"
        },
        {
          "name": "Fer Noir - Lingots et minéraux",
          "objectType": "Material"
        },
        {
          "name": "Gemme - Lingots et minéraux",
          "objectType": "Material"
        },
        {
          "name": "Minerai Luisant - Lingots et minéraux",
          "objectType": "Material"
        },
        {
          "name": "Minerai de Météorite - Lingots et minéraux",
          "objectType": "Material"
        },
        {
          "name": "Or - Lingots et minéraux",
          "objectType": "Material"
        },
        {
          "name": "Poudre Zerrikanienne - Lingots et minéraux",
          "objectType": "Material"
        },
        {
          "name": "Pierre - Lingots et minéraux",
          "objectType": "Material"
        },
        {
          "name": "Acier - Schema",
          "objectType": "Material_scheme"
        },
        {
          "name": "Acier Mahakamien - Schema",
          "objectType": "Material_scheme"
        },
        {
          "name": "Acier Noir - Schema",
          "objectType": "Material_scheme"
        },
        {
          "name": "Acier Tretogor - Schema",
          "objectType": "Material_scheme"
        },
        {
          "name": "Cuir - Schema",
          "objectType": "Material_scheme"
        },
        {
          "name": "Cuir de Draconide- Schema",
          "objectType": "Material_scheme"
        },
        {
          "name": "Cuir Durci - Schema",
          "objectType": "Material_scheme"
        },
        {
          "name": "Cuir Lyrien- Schema",
          "objectType": "Material_scheme"
        },
        {
          "name": "Dimeritium - Schema",
          "objectType": "Material_scheme"
        },
        {
          "name": "Dimeritium Mahakamien - Schema",
          "objectType": "Material_scheme"
        },
        {
          "name": "Fil - Schema",
          "objectType": "Material_scheme"
        },
        {
          "name": "Bois Durci - Schema",
          "objectType": "Material_scheme"
        },
        {
          "name": "Lin - Schema",
          "objectType": "Material_scheme"
        },
        {
          "name": "Toile de Lin - Schema",
          "objectType": "Material_scheme"
        }
      ]
    },
    {
      "name": "Tailleur",
      "buildingType": "Tailoring",
      "maxObjectsDisplayedPerEnvironmentType": [
        10,
        5,
        0,
        0
      ],
	  "min":[
		3,1,0,0
	  ],
      "object": [
        {
          "name": "Vêtements basiques",
          "objectType": "Clothing"
        },
        {
          "name": "Vêtements de voleur",
          "objectType": "Clothing"
        },
        {
          "name": "Vêtements élégants",
          "objectType": "Clothing"
        },
        {
          "name": "Vêtements à la mode",
          "objectType": "Clothing"
        },
        {
          "name": "Bijoux",
          "objectType": "Clothing"
        }
      ],
      "standardObjects": [
        {},
        {},
        {
          "object": [
            {
              "name": "Vêtements basiques",
              "objectType": "Clothing"
            }
          ]
        },
        {}
      ]
    },
    {
      "name": "Tableau d’affichage",
      "buildingType": "Notice_board",
      "maxObjectsDisplayedPerEnvironmentType": [
        1,
        1,
        1,
        1
      ],
	  "min":[
		1,1,1,1
	  ],
      "object": [
        {
          "name": "Contrat sur des bandits",
          "objectType": ""        },
        {
          "name": "Contrat sur un Mage",
          "objectType": ""        },
        {
          "name": "Contrat sur des Scoia'taels",
          "objectType": ""        },
        {
          "name": "Contrat sur un Nécrophage",
          "objectType": ""        },
        {
          "name": "Contrat sur un Spectre",
          "objectType": ""        },
        {
          "name": "Contrat sur une Bête",
          "objectType": ""        },
        {
          "name": "Contrat sur une Créature Maudite",
          "objectType": ""        },
        {
          "name": "Contrat sur un Hybride",
          "objectType": ""        },
        {
          "name": "Contrat sur Insectoïde",
          "objectType": ""        },
        {
          "name": "Contrat sur un Élémentaire",
          "objectType": ""        },
        {
          "name": "Contrat sur un Vestige",
          "objectType": ""        },
        {
          "name": "Contrat sur un Draconide",
          "objectType": ""        },
        {
          "name": "Contrat sur un Vampire",
          "objectType": ""        }
	  ]
    }
  ]
}