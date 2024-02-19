const urls = ["https://boardgamegeek.com/boardgame/358981/air-land-sea-spies-lies-supplies", "https://boardgamegeek.com/boardgame/359871/arcs", "https://boardgamegeek.com/boardgame/240980/blood-clocktower", "https://boardgamegeek.com/boardgame/351605/bohnanza-25th-anniversary-edition", "https://boardgamegeek.com/boardgame/822/carcassonne", "https://boardgamegeek.com/boardgame/11971/cockroach-poker", "https://boardgamegeek.com/boardgame/297478/cortex-challenge", "https://boardgamegeek.com/boardgame/284083/crew-quest-planet-nine", "https://boardgamegeek.com/boardgame/158600/hanamikoji", "https://boardgamegeek.com/boardgame/366013/heat-pedal-metal", "https://boardgamegeek.com/boardgame/332686/john-company-second-edition", "https://boardgamegeek.com/boardgame/204583/kingdomino", "https://boardgamegeek.com/boardgame/245655/kings-dilemma", "https://boardgamegeek.com/boardgame/209778/magic-maze", "https://boardgamegeek.com/boardgame/287607/mind-extreme", "https://boardgamegeek.com/boardgame/349750/molly-house", "https://boardgamegeek.com/boardgame/329669/moving-pictures", "https://boardgamegeek.com/boardgame/291572/oath-chronicles-empire-exile", "https://boardgamegeek.com/boardgame/147949/one-night-ultimate-werewolf", "https://boardgamegeek.com/boardgame/276498/paris-la-cite-de-la-lumiere", "https://boardgamegeek.com/boardgame/256960/pax-pamir-second-edition", "https://boardgamegeek.com/boardgame/1115/poker", "https://boardgamegeek.com/boardgame/237182/root", "https://boardgamegeek.com/boardgame/11582/schnapsen", "https://boardgamegeek.com/boardgame/188834/secret-hitler", "https://boardgamegeek.com/boardgame/2511/sherlock-holmes-consulting-detective-thames-murder", "https://boardgamegeek.com/boardgame/92415/skull", "https://boardgamegeek.com/boardgame/257614/tussie-mussie", "https://boardgamegeek.com/boardgame/212404/vino-morte", "https://boardgamegeek.com/boardgame/262543/wavelength", ];const descs = ["Submit orders on three more fronts to outwit your opponent.", "Guide your faction through a fast-playing space opera.", "Deduce who the Demon is through logic and bluffing. Dead players still play.", "Celebrate a quarter century of planting beans.", "Shape the medieval landscape of France, claiming cities, monasteries and farms.", "It's a cockroach. It's a fly. Will you call the bluff or pass on a trick of your own?", "Cortex + Challenge tests up to 2-6  players memory, cognition, and sensory perception.", "Go on many planet-discovering space missions in this cooperative trick-taking game.", "Win the favor of the geishas through careful speculation and bold moves.", "Manage your race car's speed to keep from overheating.", "Promise and cajole your way to the top whilst running the East India Company.", "Build a kingdom with varied terrains on domino-shaped tiles in this fast family game.", "Leaders join in council to vote on the kingdom’s issues, but with hidden motives!", "Silently cooperate to rob a labyrinthine shopping mall before time runs out.", "Placing a twist on The Mind, cards are played both in ascending and descending order.", "Create joy in a queer community in 1720s London.", "Work with your partner to put each scene in order... without communicating!", "Change the course of history as empires rise and fall and your tale becomes legend.", "An app-driven Werewolf that lasts but a single night. Wolves and villagers beware!", "Players compete for their moment in the light by placing oddly shaped building tiles.", "Swing the tides of The Great Game as countries vie for control of Afghanistan.", "You've got to know when to hold 'em; know when to fold 'em.", "Decide the fate of the forest as woodland factions fight for contrasting goals.", "Score points by marrying off kings and queens, and by winning value cards in tricks.", "In pre-WW2 Germany, Liberals and Fascists square off in an intrigue-filled parliament", "The game is afoot as you and your irregular friends search Victorian London for clues", "Does the token hide a flower or skull? Bid, bluff and laugh with striking components.", "Victorians knew every flower has a meaning.  Which flowers will you choose?", "Drink or swap? A game of table-reading and imminent doom.", "Read your teammates’ minds in this pinpoint party game of infinite possibilities.", ];const titles = ["Air, Land, & Sea", "Arcs", "Blood on the Clocktower", "Bohnanza", "Carcassonne", "Cockroach Poker", "Cortex + Challenge", "The Crew", "Hanamikoji", "Heat", "John Company", "Kingdomino", "The King's Dilemma", "Magic Maze", "The Mind Extreme", "Molly House", "Moving Pictures", "Oath", "One Night Ultimate Werewolf", "Paris", "Pax Pamir", "Poker", "Root", "Schnapsen", "Secret Hitler", "Sherlock Holmes Consulting Detective", "Skull", "Tussie Mussie", "In Vino Morte", "Wavelength", ];const releases = ['air-land-sea-spies-lies-supplies', 'arcs', 'blood-clocktower', 'bohnanza-25th-anniversary-edition', 'carcassonne', 'cockroach-poker', 'cortex-challenge', 'crew-quest-planet-nine', 'hanamikoji', 'heat-pedal-metal', 'john-company-second-edition', 'kingdomino', 'kings-dilemma', 'magic-maze', 'mind-extreme', 'molly-house', 'moving-pictures', 'oath-chronicles-empire-exile', 'one-night-ultimate-werewolf', 'paris-la-cite-de-la-lumiere', 'pax-pamir-second-edition', 'poker', 'root', 'schnapsen', 'secret-hitler', 'sherlock-holmes-consulting-detective-thames-murder', 'skull', 'tussie-mussie', 'vino-morte', 'wavelength'];
const container = document.createElement('div');
container.classList.add('container');

for (let i = 0; i < releases.length; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    
    const link = document.createElement('a');
    link.setAttribute('href', urls[i]);
    link.classList.add('text-link'); // Add a class to the link elements


    const img = document.createElement('img');
    img.setAttribute('src', releases[i] + '/image.jpg');

    tile.appendChild(img);
    
    const middle = document.createElement('div');
    middle.classList.add('middle');

    const text = document.createElement('div');
    text.classList.add('text');
    text.innerText = descs[i];
    link.appendChild(text)

    middle.appendChild(link);
    tile.appendChild(middle);
    container.appendChild(tile);
}

document.body.appendChild(container);
