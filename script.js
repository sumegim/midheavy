const urls = ["https://boardgamegeek.com/boardgame/358981/air-land-sea-spies-lies-supplies", "https://boardgamegeek.com/boardgame/359871/arcs", "https://boardgamegeek.com/boardgame/240980/blood-clocktower", "https://boardgamegeek.com/boardgame/351605/bohnanza-25th-anniversary-edition", "https://boardgamegeek.com/boardgame/822/carcassonne", "https://boardgamegeek.com/boardgame/11971/cockroach-poker", "https://boardgamegeek.com/boardgame/297478/cortex-challenge", "https://boardgamegeek.com/boardgame/284083/crew-quest-planet-nine", "https://boardgamegeek.com/boardgame/158600/hanamikoji", "https://boardgamegeek.com/boardgame/366013/heat-pedal-metal", "https://boardgamegeek.com/boardgame/332686/john-company-second-edition", "https://boardgamegeek.com/boardgame/204583/kingdomino", "https://boardgamegeek.com/boardgame/245655/kings-dilemma", "https://boardgamegeek.com/boardgame/209778/magic-maze", "https://boardgamegeek.com/boardgame/287607/mind-extreme", "https://boardgamegeek.com/boardgame/349750/molly-house", "https://boardgamegeek.com/boardgame/329669/moving-pictures", "https://boardgamegeek.com/boardgame/291572/oath-chronicles-empire-exile", "https://boardgamegeek.com/boardgame/147949/one-night-ultimate-werewolf", "https://boardgamegeek.com/boardgame/276498/paris-la-cite-de-la-lumiere", "https://boardgamegeek.com/boardgame/256960/pax-pamir-second-edition", "https://boardgamegeek.com/boardgame/1115/poker", "https://boardgamegeek.com/boardgame/237182/root", "https://boardgamegeek.com/boardgame/11582/schnapsen", "https://boardgamegeek.com/boardgame/188834/secret-hitler", "https://boardgamegeek.com/boardgame/2511/sherlock-holmes-consulting-detective-thames-murder", "https://boardgamegeek.com/boardgame/92415/skull", "https://boardgamegeek.com/boardgame/257614/tussie-mussie", "https://boardgamegeek.com/boardgame/212404/vino-morte", "https://boardgamegeek.com/boardgame/262543/wavelength", ];const titles = ["Air, Land, & Sea", "Arcs", "Blood on the Clocktower", "Bohnanza", "Carcassonne", "Cockroach Poker", "Cortex + Challenge", "The Crew", "Hanamikoji", "Heat", "John Company", "Kingdomino", "The King's Dilemma", "Magic Maze", "The Mind Extreme", "Molly House", "Moving Pictures", "Oath", "One Night Ultimate Werewolf", "Paris", "Pax Pamir", "Poker", "Root", "Schnapsen", "Secret Hitler", "Sherlock Holmes Consulting Detective", "Skull", "Tussie Mussie", "In Vino Morte", "Wavelength", ];const releases = ['air-land-sea-spies-lies-supplies', 'arcs', 'blood-clocktower', 'bohnanza-25th-anniversary-edition', 'carcassonne', 'cockroach-poker', 'cortex-challenge', 'crew-quest-planet-nine', 'hanamikoji', 'heat-pedal-metal', 'john-company-second-edition', 'kingdomino', 'kings-dilemma', 'magic-maze', 'mind-extreme', 'molly-house', 'moving-pictures', 'oath-chronicles-empire-exile', 'one-night-ultimate-werewolf', 'paris-la-cite-de-la-lumiere', 'pax-pamir-second-edition', 'poker', 'root', 'schnapsen', 'secret-hitler', 'sherlock-holmes-consulting-detective-thames-murder', 'skull', 'tussie-mussie', 'vino-morte', 'wavelength'];
const container = document.createElement('div');
container.classList.add('container');

for (let i = 0; i < releases.length; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    
    const link = document.createElement('a');
    link.setAttribute('href', urls[i]);

    const img = document.createElement('img');
    img.setAttribute('src', releases[i] + '/image.jpg');

    link.appendChild(img);
    tile.appendChild(link);
    
    const middle = document.createElement('div');
    middle.classList.add('middle');

    const text = document.createElement('div');
    text.classList.add('text');
    text.innerText = titles[i];

    middle.appendChild(text);
    tile.appendChild(middle);
    container.appendChild(tile);
}

document.body.appendChild(container);
