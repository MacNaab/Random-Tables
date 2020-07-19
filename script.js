	function InnGen(){
    	var langue = document.getElementById('langue_choisi').value;
        if(langue == "1"){
          var Establishment = ['Hostel','Inn','Tavern','Brothel','Boarding House','Casino','Hotel','Guest Room'];
          var Comfort = ['Squalid (1 SP)','Poor (2 SP)','Modest (5 SP)','Respectable (1 GP)','Comfortable (2 GP)','Wealthy (4 GP)','Lavish (6 GP)','Royal (10 GP)'];
          var Innkeeper = ['Dwarf','Human/Half-Elf','Tiefling','Gnome','Half-Orc','Dragonborn','Elf','Halfling'];
          var Personality = ['Old, cranky, and not fond of visitors','Nervous, as if they’re hiding something','Loud and boisterous: the life of every party','Obsessed with cleanliness and hates even the sight of mud','Just trying to get to the end of their shift','Always drunk, regardless of the time of day','Knows Common perfectly well, but refuses to speak it','Exceedingly competent and professional'];
          var Feature = ["A massive portrait of the innkeeper’s father hangs behind the front desk. The eyes follow you wherever you go.","There’s an entrance to an underground cavern system hidden in the basement.","There are messages in Thief’s Cant written under some of the beds directing the reader to nearby dead-drops for loot.","A ghost wanders the halls at night, and occasionally during the day as well.","One of the rooms is always locked. The actual owner is kept tied up inside at all times.","A local crime boss has made this establishment their base of operations against the wishes of the owner and the staff.","There’s a mimic loose somewhere in the establishment, but the owner isn’t quite sure where.","Meals are disproportionately cheap, but the meat doesn’t taste like anything the party has ever eaten before."];
		  var Comfort2 = ["You’re sleeping on a pile of hay in the stables, and your bathroom is a bucket, but at least you’re out of the rain.","Just because you can run an inn doesn’t mean that you should. These places always have something about them that makes the experience unpleasant, like overflowing chamber pots or a rat infestation. You do technically have a bed, but you may be sharing it with one or more people.","The accommodation level for the average village inn. Well-kept, but unfussy. The mattresses are still stuffed with straw, and the blankets are scratchy, but everything is clean, and you don’t have to worry about vermin.","","Once you get into slightly larger towns, you’ll start to find places that cater to the traveling merchant class. There are occasional feather beds, softer pillows, and meals that can be brought to your room. It isn’t exactly fancy, but it’s certainly a step above average.","This is when you get your own private bathroom. These are often the nicest accommodations that you can find in small cities. They can feel a little bit pretentious and stuffy at times, but it doesn’t make the mattresses any less comfortable.","The favorite accommodation level of rich merchants and petty aristocrats. It’s roughly equivalent to the level of most boutique luxury hotels. The thread counts are high, everything is stuffed with goose down, and service is always quick. Forget a private bathroom; in places like this, you have your own bath tub.","Equivalent to the presidential suite at a five-star hotel. There are multiple rooms, dedicated serving staff, and as much alcohol as you can drink. This level of accommodation can only be found in large cities, and cater to an elite clientele. If your party isn’t well-dressed, they may not be allowed inside no matter how much money they can wave around."];
        }
        else{
          var Establishment = ['Auberge de jeunesse', 'Auberge', 'Taverne', 'Bordel', 'Pension de famille', 'Casino', 'Hôtel', "Chambre d'hôtes"];
          var Comfort = ['Misérable (1 SP)','Pauvre (2 SP)','Modeste (5 SP)','Respectable (1 GP)','Confortable (2 GP)','Riche (4 GP)','Somptueux (6 GP)','Royal (10 GP)'];
          var Innkeeper = ['Nain','Human/Demi-Elf','Tieflin','Gnome','Demi-Orc','Dragonborn','Elfe','Halflin'];
          var Personality = ["Vieux, grincheux et n'aimant pas les visiteurs", "Nerveux, comme s'ils cachaient quelque chose", "Bruyant et agité: la vie de chaque fête", "Obsédé par la propreté et déteste même la vue de la boue", "Essaie juste de finir sa journée de travail", "Toujours ivre, quelle que soit l'heure de la journée","Connaît parfaitement le commun, mais refuse de le parler","Extrêmement compétent et professionnel"];
          var Feature = ["Un portrait massif du père de l'aubergiste est accroché derrière la réception. Les yeux vous suivent partout où vous allez.", "Il y a une entrée dans un système de cavernes souterraines caché dans le sous-sol.", "Il y a des messages écrits en argot de voleur sous certains des lits qui dirige le lecteur vers des tombes mortes à proximité pour récupérer le butin. "," Un fantôme se promène dans les couloirs la nuit, et parfois aussi pendant la journée. "," Une des chambres est toujours fermée. Le propriétaire actuel est attaché à l'intérieur. "," Un patron du crime local a fait de cet établissement leur base d'opérations contre la volonté du propriétaire et du personnel. "," Il y a un mimétisme quelque part dans l'établissement, mais le propriétaire n'est pas tout à fait sûr où. "," Les repas sont disproportionnellement bon marché, mais la viande n'a pas le même goût de tout ce que le groupe a jamais mangé auparavant. "];
		  var Comfort2 = ["Vous dormez sur un tas de foin dans les étables, et votre salle de bain est un seau, mais au moins vous êtes à l'abri de la pluie.", "Ce n'est pas parce que vous pouvez gérer une auberge que vous devriez. Ces endroits ont toujours quelque chose à leur sujet qui rend l'expérience désagréable, comme des pots de chambre débordants ou une infestation de rats. Vous avez techniquement un lit, mais vous pouvez le partager avec une ou plusieurs personnes. "," La qualité de l'herbergement pour cette auberge de village est moyenne. Bien entretenu, mais sans prétention. Les matelas sont encore bourrés de paille et les couvertures sont éraflées, mais tout est propre et vous n'avez pas à vous soucier de la vermine. "," "," Une fois que vous arrivez dans des villes un peu plus grandes, vous commencez à trouver des endroits adaptés à la classe des marchands ambulants. Il y a parfois des lits en plumes, des oreillers plus moelleux et des repas qui peuvent être apportés dans votre chambre. c'est certainement un cran au-dessus de la moyenne. "," C'est alors que vous avez votre propre salle de bain privée. Ce sont souvent les plus beaux hébergements que vous pouvez trouver dans les petites villes. Ils peuvent parfois se sentir un peu prétentieux et étouffants, mais cela ne rend pas les matelas moins confortables. "," Le niveau d'hébergement préféré des riches marchands et des petits aristocrates. Il est à peu près équivalent au niveau de la plupart des hôtels de luxe de charme. Le nombre de fils est élevé, tout est bourré de duvet d'oie et le service est toujours rapide. Oubliez une salle de bain privée; dans des endroits comme celui-ci, vous avez votre propre baignoire. "," Equivalent à la suite présidentielle d'un hôtel cinq étoiles. Il y a plusieurs salles, un personnel de service dévoué et autant d'alcool que vous pouvez en boire. Ce niveau d'hébergement ne peut être trouvé que dans les grandes villes et s'adresse à une clientèle d'élite. Si votre groupe n'est pas bien habillé, il se peut qu'ils ne soient pas autorisés à l'intérieur, peu importe le montant d'argent qu'ils peuvent faire circuler. "];
        }
        var Rand1 = Math.floor(Math.random() * Math.floor(8));
        var Rand2 = Math.floor(Math.random() * Math.floor(8));
        var Rand3 = Math.floor(Math.random() * Math.floor(8));
        var Rand4 = Math.floor(Math.random() * Math.floor(8));
        var Rand5 = Math.floor(Math.random() * Math.floor(8));
        var El1 = Establishment[Rand1];
        var El2 = Comfort[Rand2];var El2_2 = Comfort2[Rand2];
        var El3 = Innkeeper[Rand3];
        var El4 = Personality[Rand4];
        var El5 = Feature[Rand5];
		
		
        if(langue == "1"){       
			document.getElementById('résultat_aff').innerHTML = "Establishment: "+El1+"<br>Comfort: "+El2+". "+El2_2+"<br>Innkeeper: "+El3+". "+El4+".<br>Feature: "+El5;
		}
		else{
			document.getElementById('résultat_aff').innerHTML = "Etablissement: "+El1+"<br>Confort: "+El2+". "+El2_2+"<br>Barman: "+El3+". "+El4+".<br>Particularité: "+El5;
		}
    }
	
function LootGen(){
	var langue = document.getElementById('langue_choisi').value;
    var Nbre = Math.floor(Math.random() * Math.floor(10))+1;
	if(langue == "1"){
		var Loot = ["Partially used journal | Strange statuette | Black magic doll","Wrapped turkey leg  | Fingernail shavings | Strange mask","Locket | Pot of ashes | Strange circlet","Hand mirror | Choke collar | Elf ear","Instrument | Taxidermied mouse | Wooden stake with runes","Guild badge | Lock of hair | Book bound in skin","Thieves tools | Strange letter | Monster part (GM’s choice)","Pelt of some kind | Instructions for a trade | Unit of glowing ore","Random book | Fragment of stone | Hallucinogenic fungus","Waterskin | Pocket full of gravel | Preserved organ in a jar","Silver ring | Scribbled fortunes | Vial of blood","Manacles | Ball of clay | Records of black magic","Bedroll | Folk remedy for something | Bloody hand","Dice | Mechanical piece | Bag of teeth","Business ledger | Scrimshawed bone | Monster skull","Cheap wine | Ladies’ underwear | Notes about the players","Map of the area | Strange dried meat | Map to an unknown place","Flask of spirits | Blackmail material | Dead bird","Lucky charm of some form | Marital aids | Feverish sketches","Gwent deck | Odd dream journal | Insane notes","Tent | Fish bones | Illegible scroll","Sketch of a person | Note with one number | Symbol written in blood","Soap | Tooth | Strange jade statuette","Holy symbol | Worn out shoe | A lock of blonde hair","Flint & steel | Reins | A strange, empty lamp","Whistle | List of people | Scrimshawed human bone","Sun stone | Five iron nails | Iron shoes","Shopping list | Strange sea shells | Human skull","1 Unit of feathers | Strange poetry | Censer full of caked blood","Dried meat or salted fish | Extremely mouldy bread | Tattooed skin","Pouch of spices | Unknown key | Ritual dagger","Empty vial | Paper with lipstick marks | Black magic ring","Chalk | Arrowhead | Severed tongue"];
	}else{
		var Loot = ["Journal partiellement utilisé | Statuette étrange | Poupée magique noire", "Cuisse de dinde enveloppée | Copeaux d'ongle | Masque étrange", "Médaillon | Pot de cendres | Cercle étrange", "Miroir à main | Collier étrangleur | Oreille d'elfe" , "Instrument | Souris taxidermée | Pieu en bois avec runes", "Badge de guilde | Mèche de cheveux | Livre lié dans la peau", "Outils de voleurs | Lettre étrange | Partie de monstre (au choix du MJ)", "Peau d'animal | Instructions pour un métier | Unité de minerai rougeoyant "," Livre aléatoire | Fragment de pierre | Champignon hallucinogène "," Gourde | Poche pleine de gravier | Organe conservé dans un bocal "," Bague en argent | Fortunes griffonnées | Fiole de sang "," Menottes | Boule d'argile | Registres de magie noire "," Rouleau de lit | Remède populaire pour quelque chose | Main sanglante "," Dés | Pièce mécanique | Sac de dents "," Grand livre commercial | Os gratté | Crâne de monstre "," Vin pas cher | Sous-vêtements féminins | Notes sur les joueurs "," Carte de la région | Étrange viande séchée | Carte d'un endroit inconnu "," Flacon de spiritueux | Matériel de chantage | Oiseau mort " , "Porte-bonheur d'une certaine forme | Aides conjugales | Croquis fébriles "," Deck Gwent | Journal de rêve étrange | Notes insensés "," Tente | Arêtes de poisson | Parchemin illisible "," Esquisse d'une personne | Remarque avec un chiffre | Symbole écrit dans le sang "," Savon | Dent | Étrange statuette de jade "," Symbole sacré | Chaussure usée | Une mèche de cheveux blonds "," Allume feu | Rênes | Une étrange lampe vide "," Sifflet | Liste de personnes | Os humain écorcé "," Pierre du soleil | Cinq clous de fer | Chaussures de fer "," Liste de courses | Coquilles de mer étranges | Crâne humain "," 1 unité de plumes | Poésie étrange | Encensoir plein de sang séché "," Viande séchée ou poisson salé | Pain extrêmement moisi | Peau tatouée "," Poche d'épices | Clé inconnue | Dague rituelle "," Flacon vide | Papier avec des marques de rouge à lèvres | Anneau de magie noire "," Craie | Pointe de flèche | Langue coupée "];
	}
	var Item = "";
	for (let i = 0; i < Nbre; i++) {
		var Rand = Math.floor(Math.random() * Math.floor(33));
		var Item = Item+Loot[Rand]+"<br>";
	}
	document.getElementById('résultat_aff2').innerHTML = "Item: "+Nbre+"<br><div style='margin-left:50px;'>"+Item+"</div>";		
}

function ContractGen(){
	var langue = document.getElementById('langue_choisi').value;
	var Monster = ['Specter','Cursed One','Hybrid','Insectoid','Elementa','Relict','Ogroid','Draconid','Necrophage','Vampire'];
	var MDifficulty = ['Easy','Medium','Hard'];
	var MComplexity = ['Simple','Difficult','Complex'];
	if(langue == "1"){
		var Location = ['A Forest','A building','An Abandoned Building','A Coast','The Mountains','The City','A Graveyard','A Hamlet','Along the River','A Cave'];
		var Twisted = ["The Monster Is Fake","It Is All A Curse","The Monster Is Already Dead","It Isn’t What You Think","EmployerWants It Caught","The Employer Is To Blame For It All","The Monster Is Harmless","It Is A Trap For You","It Was More Than You Were Told","A Mage Is Behind It All"];
		var Employer = ["A Peasant or Ealdorman","A Guard or Witch Hunter","A Merchant","A Scholar or Noble","A Mage","A King, Queen, Duke or Duchess"];
		var Pay = ["The Employer is unable to, or tries not to Pay","The Employer Offers a Trade","The Employer Pays less than Agreed","The Employer pays Exactly as Agreed","The Employer Pays More than Agreed","The Employer tries to have you killed","The Employer is nowhere to be found"];
		var Complication = ["Bandits are hunting the monster","A Witcher is already hunting it","It can't be killed normally","The Employer has died","Monster has trapped hostages","Extra Twist. Roll on Twist Table"];

		var Twist = ['There is a twist: ','No twist.'];
	}else{
		var Location = ['une forêt','un batiment','un batiment abandonné','la côte','les montagnes','en ville','un cimetierre','un hameau','le long de la rivière','une grotte'];
		var Twisted = ["Le monstre est faux", "C'est une malédiction", "Le monstre est déjà mort", "Ce n'est pas ce que vous pensez", "L'employeur veut qu'il soit attrapé", "L'employeur est à blâmer pour tout cela","Le monstre est inoffensif","C'est un piège","C'était plus que ce qu'on vous aviez dit","Un mage est derrière tout cela"];
		var Employer = ["Un paysan ou un Ealdorman", "Un garde ou un chasseur de sorcières", "Un marchand", "Un érudit ou un noble", "Un mage", "Un roi, une reine, un duc ou une duchesse"];
		var Pay = ["L'Employeur ne peut pas ou essaie de ne pas payer", "L'Employeur propose un échange", "L'Employeur paie moins que convenu", "L'Employeur paie exactement comme convenu", "L'Employeur paie plus que convenu "," L'Employeur essaie de vous faire tuer "," L'Employeur est introuvable "];
		var Complication = ["Des bandits chassent le monstre", "Un sorceleur le chasse déjà", "Il ne peut pas être tué normalement", "L'Employeur est mort", "Le monstre a piégé des otages", "Extra Twist. sur Twist Table "];
		var Twist = ["Il y a un retournement de situation: ","Il n'y a pas de retournement de situation."];
	}
	var Rand1 = Math.floor(Math.random() * Math.floor(10));
	var Rand2 = Math.floor(Math.random() * Math.floor(10));
	var Rand3 = Math.floor(Math.random() * Math.floor(10));
	var Rand4 = Math.floor(Math.random() * Math.floor(10));
	var Rand5 = Math.floor(Math.random() * Math.floor(10));
	var Rand6 = Math.floor(Math.random() * Math.floor(10));
	var Rand7 = Math.floor(Math.random() * Math.floor(6));
	var Rand8 = Math.floor(Math.random() * Math.floor(10));
	var Rand9 = Math.floor(Math.random() * Math.floor(8));
	
	var El1 = Monster[Rand1];
	if(Rand2 < 4){var El2 = MDifficulty[0];}else if(Rand2 > 7){var El2 = MDifficulty[2];}else{var El2 = MDifficulty[1];}
	if(Rand3 < 4){var El3 = MComplexity[0];}else if(Rand3 > 7){var El3 = MComplexity[2];}else{var El3 = MComplexity[1];}
	var El4 = Location[Rand4];
	if(Rand5 < 4){var El5 = Twist[0]+Twisted[Rand6];}else{var El5 = Twist[1];}
	var El7 = Employer[Rand7];
	var El8 = Pay[Rand8];
	if(Rand8 < 7 && Rand8 > 2){var El8 = Pay[3];}if(Rand8 == 7){var El8 = Pay[4];}if(Rand8 == 8){var El8 = Pay[5];}if(Rand8 == 9){var El8 = Pay[6];}
	if(Rand9 < 2){var El9 = Complication[0];}if(Rand9 < 4){var El9 = Complication[1];}if(Rand9 == 4){var El9 = Complication[2];}if(Rand9 == 5){var El9 = Complication[3];}if(Rand9 > 5){var El9 = Complication[4];}

	
    if(langue == "1"){       
		document.getElementById('résultat_aff3').innerHTML = "Monster: "+El1+" ["+El2+" - "+El3+"]<br>Location: "+El4+"<br>"+El5+"<br>Employer: "+El7+". "+El8+".<br>Complication (Optionally): "+El9;
	}else{
		document.getElementById('résultat_aff3').innerHTML = "Monstre: "+El1+" ["+El2+" - "+El3+"]<br>Localisation: "+El4+"<br>"+El5+"<br>Employeur: "+El7+". "+El8+".<br>Complication (Optionnel): "+El9;
	}
	
}
