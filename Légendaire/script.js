function gen(e){
  if(e==1){
    var Espèce = ["<b>Dragon vert</b><br>L’attaque de morsure du dragon vert gagne l’effet Poison (100 %) chaque fois qu’elle inflige des dégâts. Une créature empoisonnée subit 5 points de dégâts par round, qui ne sont pas absorbés par l’armure, et un malus de –3 sur toutes ses actions tant que dure l’empoisonnement. La potion de Loriot doré est sans effet contre le venin du dragon vert. Pour chasser les toxines, il faut accomplir un Rituel de purification ou réussir un jet de Résilience (SD 25).","<b>Dragon rouge</b><br>Le souffle enflammé d’un dragon rouge inflige 10d6 dégâts au lieu de 7d6. Quand l’attaque inflige des dégâts, l’armure de la cible subit un montant de dégâts d’ablation égal à la moitié des dégâts infligés par le souffle enflammé. Si la cible bloque avec son bouclier, celui-ci subit un montant de dégâts équivalent.","<b>Dragon noir</b></br>Un dragon noir possède des écailles impénétrables qui lui confèrent une résistance au perforant, au tranchant, au contondant, à l’étourdissement et au feu. Les armes qui possèdent perforation ou perforation améliorée sont sans effet contre son armure et ses résistances, et les dégâts d’ablation sont divisés par deux (minimum 1).","<b>Dragon brun</b><br>Le dragon brun peut s’enfouir dans le sable, le sol meuble, la terre compacte et la roche en se déplaçant à la même vitesse qu’avec une action de mouvement normale. Quand il est sous terre, le dragon brun peut se secouer pour obliger toutes les créatures dans un rayon de 30 mètres à faire un jet d’Athlétisme ou de Physique (SD 25). En cas d’échec, les cibles se retrouvent au sol et doivent faire un jet de sauvegarde d’étourdissement avec un malus de –3. Enfin, le dragon peut utiliser son round complet pour jaillir du sol, forçant les personnages à 10 mètres de lui à effectuer un jet de défense (SD 25). En cas d’échec, la cible est projetée 6 mètres plus loin et subit 6d6 dégâts au torse.","<b>Dragon blanc</b><br>Au lieu d’infliger des dégâts de feu et d’enflammer ses victimes, le souffle d’un dragon blanc inflige 7d6 dégâts de glace et emprisonne les cibles qui ratent leur action de défense dans une gangue de glace. Les victimes immobilisées ne peuvent plus tenter d’action. Pour briser la glace, il faut réussir un jet de Physique (SD 25). Sinon, un personnage peut libérer la cible en infligeant 10 points de dégâts à la glace, ou 5 points de dégâts de feu. Les dégâts excédentaires, qui dépassent les 10 ou 5 points requis, sont reportés sur une partie du corps de la cible choisie au hasard."];
    var Age = ["<b>Jeune</b><br>Ce dragon âgé de quelques décennies a vécu 1 événement majeur. Il reçoit 5 points de compétences acquises à dépenser. Son trésor vaut 5 000 couronnes.","<b>Jeune adulte</b><br>Ce dragon âgé de quelques siècles a vécu 2 événements majeurs. Il reçoit 10 points de compétences acquises à dépenser. Son trésor vaut 10 000 couronnes.","<b>Adulte</b><br>Ce dragon âgé de quelques millénaires a vécu 3 événements majeurs. Il reçoit 15 points de compétences acquises à dépenser. Son trésor vaut 15 000 couronnes.","<b>Ancien</b><br>Ce dragon âgé de plus de 100 000 ans a vécu 4 événements majeurs. Il reçoit 20 points de compétences acquises à dépenser. Son trésor vaut 25 000 couronnes."];
    var Jeunesse = ["Ce dragon s’est battu avec ses frères et soeurs et avec d’autres dragons durant son enfance. Il arbore les cicatrices des morsures et des coups de griffes comme autant de trophées.","Ce dragon affrontait des humains et s’attaquait à leurs villes. La surface irrégulière de son corps ressemble à une carte constellée de cicatrices et d’armes brisées.","Ce dragon a grandi dans les profondeurs de sa tanière, où il s’occupe d’accroître sa fortune et de polir ses écailles et ses griffes.","Ce dragon a grandi dans la solitude des montagnes et n’a que rarement croisé ses semblables, ce qui l’a rendu méfiant.","Ce dragon a été élevé dans l’affection et a joui d’une enfance paisible, ce que reflètent ses écailles lisses.","Ce dragon a été traumatisé durant son enfance et ne s’est jamais remis de cet épisode. Il est toujours sur la défensive.","Le dragon a voyagé aux quatre coins du Continent et au-delà, collectionnant au fil de son périple les babioles exotiques qu’il porte."];
    var Caractère = ["Discret","Rebelle","Violent","Idéaliste","Contemplatif","Froid","Roublard","Chaleureux","Arrogant","Nerveux"];
    var Fierté = ["Son style très personnel","Sa force physique","Sa tanière","Sa lignée","Ses connaissances","Ses exploits","Son charisme","Ses biens matériels","Sa force morale","Ses talents"];
    var Haine = ["L’arrogance","Être en société","Les proies rebelles","Les proies indignes","Les humains","La magie","Les intrusions dans sa tanière","Une race ancienne","Être blessé ou méprisé","Un type de monstre"];
    var Trésor = ["Or et joyaux","Armes et armures","Or et joyaux","Fourrures et trophées de chasse","Or et joyaux","Reliques magiques","Or et joyaux","Manuscrits et chroniques","Or et joyaux","Meubles et chefs d’œuvres artistiques"];
    var Evénements = ["Célébrité</b><br>Les prouesses ou les crimes de ce dragon ont fait le tour du Continent. Il est venu en aide à une armée assiégée ou a réduit une ville en cendres. Il gagne +5 en Réputation.","<b>Découverte de ruines antiques</b><br>Ce dragon a construit son nid au milieu de ruines anciennes. Son repaire est constitué d’un réseau de tunnels gardé par un golem que le monstre a appris à commander.","<b>Fondateur d’une secte</b><br>Le dragon a rassemblé une poignée de fidèles loyaux, persuadés que la bête va leur accorder des pouvoirs. Les zélotes, au nombre de 20 (des humanoïdes de votre choix), suivent ses ordres à la lettre et risqueraient leur vie pour leur maître.","<b>Découverte d’une relique</b><br>Au cours de ses voyages, le dragon a exhumé une relique qu’il a ajoutée à son trésor. Même s’il y tient beaucoup, il peut la prêter à ses alliés ou à ses protecteurs.","<b>Ennemi mortel d’une lignée d’aristocrates</b><br>À une époque, les relations entre ce dragon et une famille noble se sont envenimées. Depuis, ils se livrent une guerre sans merci qui dure depuis plusieurs générations. D’ailleurs, les aristocrates s’acharnent toujours sur le dragon.","<b>Cambriolé</b><br>Quelqu’un a dérobé le trésor du dragon, qui est encore à sa recherche. Le coupable pourrait être un autre dragon, une bande de mercenaires… Les possibilités sont multiples. En tout cas, le dragon n’a toujours pas retrouvé sa fortune disparue.","Coexistence pacifique</b><brLe dragon cohabite avec les habitants d’une communauté ou d’un village voisins, qui en retour respectent le reptile et apprécient sa présence. Ils sont toujours prêts à lui rendre service et ont peut-être tissé une relation fusionnelle.","<b>Migration</b><br>Autrefois, le dragon vivait ailleurs. Un événement l’a obligé à migrer vers sa nouvelle tanière, mais l’ancienne est toujours prête à l’accueillir, dissimulée au coeur de la nature.","<b>Pillage d’une ville importante</b><br>Ce dragon a attaqué une localité majeure du Continent et emporté un butin d’une valeur de plusieurs milliers de couronnes. Il a laissé son empreinte dans les récits historiques, qui le dépeignent comme un monstre terrifiant. Il gagne +8 en Réputation.","<b>Naissance d’un enfant</b><br>Ce dragon a élevé un petit avec lequel il est resté en contact, ou bien sa progéniture n’a pas encore quitté le nid"];
    var Intérêt = ["<b>Animaux de compagnie</b><br>Ce dragon adore avoir de la compagnie. Sa tanière abrite un petit groupe (1d6) d’animaux qui obéissent à ses ordres.","<b>Regarder les gens</b><br>Ce dragon aime observer les allées et venues dans les villages voisins. Il a deux amis qui vivent dans les parages.","<b>Linguistique</b><br>Ce dragon adore étudier la linguistique et apprendre de nouvelles langues. Il gagne +3 dans toutes les langues.","<b>Histoire militaire</b><br>Ce dragon adore étudier l’histoire militaire et assister à de gigantesques batailles. Il gagne +4 en Tactique.","<b>Banque</b><br>Ce dragon s’implique dans les affaires des banques locales. Il a de nombreux débiteurs qui sont prêts à tout pour le rembourser.","<b>Voyages</b><br>Ce dragon aux élans aventuriers s’est rendu aux quatre coins du monde. Il gagne +6 en Grand voyageur.","<b>Numismatique</b><br>Lintars, orins, ducats… Ce dragon collectionne les devises originaires de toutes les régions du monde.","<b>Étude de la magie</b><br>Ce dragon aime se plonger dans l’étude des théories magiques et des sites d’énergie. Il gagne +6 en Exercice de la magie.","<b>Chasse</b><br>Ce dragon adore chasser pour le plaisir dans les régions sauvages qui bordent sa tanière. Il gagne +6 en Paranoïa exercée.","<b>Débattre avec les voyageurs</b><br>Ce dragon se plaît à débattre avec les gens de passage et à transmettre ses connaissances aux explorateurs. Il gagne +4 en Résistance à la contrainte."];
    var Style = ["<b>Le feu du ciel</b><br>Ce dragon préfère rester loin ou dans les airs et tuer ses agresseurs avec son souffle enflammé.","<b>Attaques aériennes</b><br>Ce dragon aime rester dans les hauteurs et fondre sur ses victimes avant de regagner le ciel.","<b>Combattant évasif</b><br>Ce dragon déteste s’engager dans un combat et prendre des coups. Quand il est grièvement blessé, il reste loin de ses adversaires.","<b>Dommages collatéraux</b><br>Ce dragon adore détruire l’environnement. Il fait s’effondrer les bâtiments sur ses ennemis et rend le terrain impraticable.","<b>Griffes et crocs</b><br>Ce dragon aime se jeter dans la mêlée pour faire pleuvoir un déluge de crocs et de griffes."];
        
        function event(f){
          var résultat = "";
          for (let i = 0; i < f; i++) {
            var rand = Math.floor(Math.random() * Math.floor(Evénements.length));
            résultat += Evénements[rand]+"<br>";
          }
          return résultat;
        };
                 var rand1 = Math.floor(Math.random() * Math.floor(10));
                 var rand2 = Math.floor(Math.random() * Math.floor(10));
                 var rand3 = Math.floor(Math.random() * Math.floor(10));
                 var rand4 = Math.floor(Math.random() * Math.floor(Caractère.length));
                 var rand5 = Math.floor(Math.random() * Math.floor(Fierté.length));
                 var rand6 = Math.floor(Math.random() * Math.floor(Haine.length));
                 var rand7 = Math.floor(Math.random() * Math.floor(Trésor.length));
                 var rand8 = Math.floor(Math.random() * Math.floor(Intérêt.length));
                 var rand9 = Math.floor(Math.random() * Math.floor(Style.length));
      if(rand1<3){
        var Es = Espèce[0];
      }else if(rand1<5){
        var Es = Espèce[1];
      }else if(rand1<7){
        var Es = Espèce[2];
      }else if(rand1<9){
        var Es = Espèce[3];
      }else{
        var Es = Espèce[4];
      }
      if(rand2==0){
        var Ag = Age[0];
        var Ev = event(1);
      }else if(rand2<3){
        var Ag = Age[1];
        var Ev = event(2);
      }else if(rand2<5){
        var Ag = Age[2];
        var Ev = event(3);
      }else{
        var Ag = Age[3];
        var Ev = event(4);
      }
      if(rand3<4){
        var Je = Jeunesse[rand3];
      }else if(rand3<7){
        var Je = Jeunesse[3];
      }else if(rand3<8){
        var Je = Jeunesse[4];
      }else if(rand3<9){
        var Je = Jeunesse[5];
      }else{
        var Je = Jeunesse[6];
      }
    var R = "<h3>Vrai dragon</h3>Espèce: "+Es+"<br>Age: "+Ag+"<br>Jeunesse: "+Je+"<br>Caractère: "+Caractère[rand4]+"<br>Objet de fierté: "+Fierté[rand5]+"Objet de haine: "+Haine[rand6]+"<br>Trésor: "+Trésor[rand7]+"<br>Centres d’intérêt: "+Intérêt[rand8]+"<br>Style de combat: "+Style[rand9]+"<br>Événements:<br>"+Ev;
    $("#aff").html(R);
              
  }else{
    var Capacité = ["<b>Commandement des vampires</b><br>Le vampire peut utiliser une action pour donner des ordres à 10 vampires situés à 20 mètres de lui. Ces derniers s’efforcent de suivre ses ordres à la lettre du mieux qu’ils peuvent. Si jamais leur obéissance les met en danger de mort, ils peuvent faire un jet de Résistance à la magie (SD 25). En cas d’échec, ils exécutent l’ordre quoi qu’il advienne.","<b>Talent magique</b><br>Le vampire sait lancer un sort. Il gagne Incantation (base 16), un seuil de Vigueur de 15 et un sort de compagnon. Il ne peut pas apprendre de sorts supplémentaires.","<b>Tisseur de cauchemars</b><br>Le vampire utilise cette action pour causer des cauchemars terribles à une cible à 10 mètres située dans son champ de vision. La victime doit réussir un jet de Résistance à la magie (SD 25) pour contrer les effets de la capacité. Les cauchemars ont l’air parfaitement réels. En outre, le vampire a tout contrôle sur eux et voit tout ce que la victime imagine. Le lendemain matin, la cible ne regagne aucun point d’Endurance, et seulement la moitié des points de santé qu’elle aurait dû récupérer en temps normal.","<b>Drain de force vitale</b><br>Le vampire utilise cette action pour aspirer l’énergie vitale d’une cible préalablement agrippée. Il effectue un jet de base 20 contre un jet de Résistance à la magie de sa victime. Si celle-ci échoue, le vampire lui draine 3d10 points d’Endurance et en regagne autant.","<b>Invocation de corbeaux</b><br>Le vampire utilise cette action pour invoquer 2d6 corbeaux qui se battront pour lui jusqu’à la mort et agissent pendant son tour. Utilisez les caractéristiques des oiseaux, page 311 du livre de base de The Witcher.","<b>Choc psychique</b><br>Utilisant son tour complet, le vampire émet une onde de choc psychique. Les personnages situés à moins de 6 mètres de lui doivent faire un jet de Résistance à la magie (SD 25). En cas d’échec, pendant 2d6 rounds, ils sont stupéfaits et subissent un malus de –2 en Vigilance, provoqué par des troubles de la vision. Une victime qui a déjà été stupéfaite par le Choc psychique du vampire et qui rate son action de défense est étourdie.","<b>Rage sanguinaire</b><br>Le vampire entre dans un état de rage sanguinaire, sans dépenser d’action. Tant qu’il est dans cet état, il est immunisé aux charmes et résiste à l’étourdissement, mais doit attaquer la cible la plus proche. La frénésie cesse quand le vampire décide d’en sortir, il doit alors patienter un tour complet avant de se calmer.","<b>Invocation de brouillard</b><br>Le vampire utilise cette action pour invoquer une nappe de brume impénétrable de 30 mètres de rayon centrée sur lui, où le champ de vision des autres créatures est réduit à 4 mètres. Le vampire peut dépenser une action pour déplacer la brume de 10 mètres. Le brouillard reste 24 heures ou jusqu’à ce que le vampire le dissipe avec une action. Un mage peut le balayer avec une action en dépensant 10 END et en faisant un jet d’Incantation (SD 25).","<b>Imitation de voix</b><br>Le vampire peut imiter une voix qu’il a entendue dans les dernières 24 heures. Il est capable de reproduire toutes les intonations d’une personne à partir du moment où il l’entend prononcer une phrase complète. Le vampire peut dire tout ce qu’il veut. En outre, les personnages qui l’écoutent doivent réussir un jet de Résistance à la contrainte (SD 25) pour percer à jour le subterfuge. Quand un personnage ne connaît pas la voix de la personne imitée par le vampire, il ne peut pas faire le jet de Résistance à la contrainte.","<b>Illusions chimériques</b><br>Le vampire utilise cette action pour créer une illusion à 30 mètres de lui. Ce mirage d’une richesse incroyable montre ce que le vampire désire dépeindre. Quoi qu’il en soit, le leurre n’interagit pas avec les créatures présentes dans son voisinage. De plus, il est inodore, n’émet pas de son et ne provoque pas de sensation. Lorsqu’une créature perçoit l’illusion, elle peut faire un jet de Vigilance (SD 25) pour s’apercevoir du subterfuge."];
    var Age = ["<b>Jeune</b><br>Ce vampire âgé de quelques décennies a vécu 1 événement majeur. Il reçoit 5 points de compétences acquises à dépenser.","<b>Jeune adulte</b><br>Ce vampire âgé de quelques siècles a vécu 3 événements majeurs. Il reçoit 15 points de compétences acquises à dépenser.","<b>Adulte</b><br>Ce vampire qui a vu défiler les siècles a vécu 5 événements majeurs. Il reçoit 25 points de compétences acquises à dépenser."];
    var Jeunesse = ["Ce vampire a grandi loin de la société des hommes, au milieu des races anciennes. Sa forme « humaine » se rapproche plus de la silhouette des elfes qu’il a côtoyés.","Ce vampire a grandi en chassant les nonvampires et n’a pas fait d’effort pour se fondre dans la population, au point que son aura prédatrice est devenue presque tangible. Il a du mal à considérer les autres espèces autrement que comme de simples proies.","Ayant grandi dans une communauté humaine, ce vampire respecte leurs us et coutumes. Il s’est pleinement intégré à la société et mène une existence banale aux côtés des autres citoyens.","Ce vampire a grandi parmi ses congénères et n’a presque pas fréquenté de non-vampires, avec lesquels il se montre distant. Il est plus préoccupé par les affaires de la société vampiriques que par les malheurs des hommes.","Le vampire est un paria, il a été banni de la société vampirique et des territoires revendiqués par les tribus de vampires supérieurs. Son apparence pouilleuse s’explique par sa vie d’errance.","Le vampire a grandi parmi des souverains de la société vampirique, humaine ou autre. Friand de joyaux et d’ornements raffinés, il porte des tenues somptueuses."];
    var Caractère = ["Discret","Rebelle","Violent","Idéaliste","Contemplatif","Froid","Roublard","Chaleureux","Arrogant","Nerveux"];
    var Fierté = ["Son style très personnel","Sa force physique","Sa demeure","Sa lignée","Ses connaissances","Ses exploits","Son charisme","Ses biens matériels","Sa force morale","Ses talents"];
    var Haine = ["L’arrogance","Être en société","Les proies rebelles","Les proies indignes","Les humains","La magie","Les intrusions dans sa tanière","Une race ancienne","Être blessé ou méprisé","Un type de monstre"];
    var Sang = ["Pratique l’abstinence","Boit lorsque ses congénères insistent","Boit une ou deux fois par semaine","Buveur mondain","Buveur mondain","Buveur mondain","Buveur mondain","Se saoule lors des fêtes","Boit toutes les nuits","Buveur invétéré"];
    var Evénements = ["<b>Adoption d’un enfant</b><br>Il y a peu, ce vampire a adopté un enfant qu’il continue d’élever. Il éprouve une affection sincère et ferait n’importe quoi pour le protéger. Il est même prêt à risquer sa vie pour l’enfant.","<b>Idylle inter espèce</b><br>Ce vampire est tombé amoureux d’une personne issue d’une autre espèce, pour laquelle il est prêt à se sacrifier. Il est en contact régulier avec elle et lui rend souvent visite.","<b>Ennemi mortel dans la société vampirique</b><br>Ce vampire s’est attiré les foudres d’un autre vampire supérieur. Les règles de la société vampirique ont empêché le conflit de dégénérer, mais rien n’est gagné.","<b>Combat contre un sorceleur</b><br>Depuis qu’il a affronté un sorceleur, ce vampire connaît leurs techniques. Après plusieurs années d’expérimentations, il a réussi à immuniser son organisme aux effets de la potion de Sang noir.","<b>Dressage d’un monstre</b><br>En guise d’animal de compagnie, ce vampire possède un monstre sauvage (menace normale) ou trois monstres sauvages (menace faible). Il les a dressés pour qu’ils suivent ses ordres à la lettre. Toutefois, les monstres ne donneront pas leur vie pour le vampire.","<b>Mort</b><br>Ce vampire a été démembré ou brûlé sur un bûcher. Plongé dans les ténèbres silencieuses, il lui a fallu plusieurs années pour se rétablir et depuis, il fuit le danger. Il se régénère deux fois plus vite dès qu’il descend en dessous de 0 point de santé.<b>Beuverie</b><br>Ce vampire a cédé à la soif de sang et a pris une cuite, il a vidé de leur sang des dizaines de civils et a massacré la population entière d’un village. Depuis, les vampires supérieurs le surveillent de près, il a donc –3 en Réputation quand il interagit avec eux.","<b>Célébrité</b><br>Les prouesses ou les crimes de ce vampire ont fait le tour du Continent. Il est devenu un vampire renommé, ou alors les gens qui ont entendu parler de ses exploits le prennent pour un humain ou un elfe. Il gagne +5 en Réputation.","Chef d’une cabale</b><br>Ce vampire a rallié un petit groupe de non-vampires à sa cause (à vous d’imaginer laquelle). Ses fidèles (30 humanoïdes) sont peut-être au courant de sa vraie nature.","<b>Adoubé</b><br>Sous son identité humaine, ce vampire a reçu les honneurs d’un chef local après avoir accompli un exploit. Il gagne +5 en Réputation et est considéré comme un chevalier du royaume là où il vit."];
    var Intérêt = ["<b>Commerce</b><br>Ce vampire tient une boutique et se plaît à contribuer au commerce local. Il gagne 200 couronnes par semaine.","<b>Alchimie</b><br>Ce vampire a des connaissances en alchimie. Son laboratoire est équipé de 5 formules qui lui offrent un bonus de +3 sur ses jets d’Alchimie.","<b>Art</b><br>Ce vampire est un artiste accompli qui adore exposer ses oeuvres dans des galeries. Son atelier lui procure un bonus de +3 en Beaux-arts.","<b>Enquêtes</b><br>Ce vampire adore les énigmes et résout régulièrement des mystères. Il peut compter sur ses trois amis proches de la milice locale.","<b>« Élevage »</b><br>Ce vampire pratique l’art antique de l’élevage. Dans sa ferme dissimulée, il se nourrit de son troupeau composé de trente humains.","<b>Jeux de hasard</b><br>Ce vampire ressent des frissons chaque fois que les dés roulent sur la piste. Il a de nombreux débiteurs qui lui doivent une faveur.","<b>Navigation</b><br>Ce vampire aime naviguer sur les mers ou les rivières du Continent. Il possède un navire avec son propre équipage.","<b>Équitation</b><br>Ce vampire pratique l’équitation à ses heures perdues, il est devenu un excellent cavalier. Il possède un cheval équipé d’une selle de course.","Viticulture</b><br>Ce vampire possède un vignoble dont la production lui rapporte 600 couronnes par mois.","<b>Sport</b><br>Ce vampire est particulièrement attentif à sa forme physique, aussi s’adonne-t-il à des entraînements intensifs. Il gagne +10 points de santé."];
    var Style = ["<b>Chasseur</b><br>Ce vampire préfère pister ses proies pour les abattre avec une arme de tir. Le combat est pour lui une sorte d’exutoire.","<b>Spectaculaire</b><br>Ce vampire adore faire des effets de style lorsqu’il se bat. Il réalise toujours des manoeuvres inhabituelles comme des désarmements, des prises de lutte, des plongeons.","<b>Agressif</b><br>Ce vampire sanguinaire se jette sur sa cible pour la réduire en lambeaux à l’aide de ses griffes.","<b>Fourbe</b><br>Ce vampire préfère empoisonner sa victime, prendre ses amis en otage ou faire pression pour obtenir ce qu’il veut.","<b>Assassin</b><br>Ce vampire préfère assassiner ses cibles en attendant le moment idéal pour frapper, tapi dans l’ombre.","<b>Assoiffé de sang</b><br>Ce vampire ressent le besoin irrépressible de boire du sang quand il voit sa victime saigner. Il attaque principalement avec ses crocs."];

        function event(f){
          var résultat = "";
          for (let i = 0; i < f; i++) {
            var rand = Math.floor(Math.random() * Math.floor(Evénements.length));
            résultat += Evénements[rand]+"<br>";
          }
          return résultat;
        };
    
      if(rand2<2){
        var Ag = Age[0];var Ev = event(1);
      }else if(rand2<5){
        var Ag = Age[1];var Ev = event(3);
      }else{
        var Ag = Age[2];var Ev = event(5);
      }
      if(rand3<3){
        var Je = Jeunesse[rand3];
      }else if(rand3<5){
        var Je = Jeunesse[2];
      }else if(rand3<8){
        var Je = Jeunesse[3];
      }else if(rand3<9){
        var Je = Jeunesse[4];
      }else{
        var Je = Jeunesse[5];
      }    
                 var rand1 = Math.floor(Math.random() * Math.floor(Capacité.length));
                 var rand2 = Math.floor(Math.random() * Math.floor(10));
                 var rand3 = Math.floor(Math.random() * Math.floor(Jeunesse.length));
                 var rand4 = Math.floor(Math.random() * Math.floor(Caractère.length));
                 var rand5 = Math.floor(Math.random() * Math.floor(Fierté.length));
                 var rand6 = Math.floor(Math.random() * Math.floor(Haine.length));
                 var rand7 = Math.floor(Math.random() * Math.floor(Sang.length));
                 var rand8 = Math.floor(Math.random() * Math.floor(Intérêt.length));
                 var rand9 = Math.floor(Math.random() * Math.floor(Style.length));    
    var R = "<h3>Vampire supérieur</h3>Capacité: "+Capacité[rand1]+"<br>Age: "+Ag+"<br>Jeunesse: "+Je+"<br>Caractère: "+Caractère[rand4]+"<br>Objet de fierté: "+Fierté[rand5]+"Objet de haine: "+Haine[rand6]+"<br>Consommation de sang: "+Sang[rand7]+"<br>Centres d’intérêt: "+Intérêt[rand8]+"<br>Style de combat: "+Style[rand9]+"<br>Événements:<br>"+Ev;
    $("#aff").html(R);  
  }
}
