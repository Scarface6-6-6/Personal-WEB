import concertBabymetalArenaLasers from "../assets/gallery/concert-babymetal-arena-lasers.jpg";
import concertBabymetalDarkRed from "../assets/gallery/concert-babymetal-dark-red.jpg";
import concertBabymetalLightBeam from "../assets/gallery/concert-babymetal-light-beam.jpg";
import concertBabymetalRedArena from "../assets/gallery/concert-babymetal-red-arena.jpg";
import concertEpicaBlueArena from "../assets/gallery/concert-epica-blue-arena.jpg";
import concertEpicaPurpleStage from "../assets/gallery/concert-epica-purple-stage.jpg";
import concertEpicaRedSmoke from "../assets/gallery/concert-epica-red-smoke.jpg";
import concertEpicaRedWide from "../assets/gallery/concert-epica-red-wide.jpg";
import concertEpicaSymphonicWide from "../assets/gallery/concert-epica-symphonic-wide.jpg";
import concertMegadethLightsWide from "../assets/gallery/concert-megadeth-lights-wide.jpg";
import concertMegadethRedWide from "../assets/gallery/concert-megadeth-red-wide.jpg";
import concertMetallicaCrowdRig from "../assets/gallery/concert-metallica-crowd-rig.jpg";
import concertMetallicaPoster from "../assets/gallery/concert-metallica-poster.jpg";
import concertMetallicaRedStage from "../assets/gallery/concert-metallica-red-stage.jpg";
import concertMetallicaStadiumOpen from "../assets/gallery/concert-metallica-stadium-open.jpg";
import concertMetallicaTower from "../assets/gallery/concert-metallica-tower.jpg";
import concertSlipknotBlueMask from "../assets/gallery/concert-slipknot-blue-mask.jpg";
import concertSlipknotBlueWide from "../assets/gallery/concert-slipknot-blue-wide.jpg";
import concertSlipknotRedStage from "../assets/gallery/concert-slipknot-red-stage.jpg";
import concertSlipknotRedWall from "../assets/gallery/concert-slipknot-red-wall.jpg";
import ibizaBebeHiddenRoad from "../assets/gallery/ibiza-bebe-hidden-road.jpg";
import ibizaManiacaLowAngle from "../assets/gallery/ibiza-maniaca-low-angle.jpg";
import personalRedCar from "../assets/gallery/personal-red-car.jpg";
import placesAgave from "../assets/gallery/places-agave.jpg";
import placesCathedral from "../assets/gallery/places-cathedral.jpg";
import placesForest from "../assets/gallery/places-forest.jpg";
import placesReflectionPond from "../assets/gallery/places-reflection-pond.jpg";
import placesTequila from "../assets/gallery/places-tequila.jpg";
import placesTequilaSign from "../assets/gallery/places-tequila-sign.jpg";
import placesTorii from "../assets/gallery/places-torii.jpg";
import natureAloe from "../assets/gallery/nature-aloe.jpg";
import natureRedFlower from "../assets/gallery/nature-red-flower.jpg";
import natureRedTree from "../assets/gallery/nature-red-tree.jpg";
import sunsetCloudRibbon from "../assets/gallery/sunset-cloud-ribbon.jpg";
import sunsetEmber from "../assets/gallery/sunset-ember.jpg";
import sunsetOrangeWindow from "../assets/gallery/sunset-orange-window.jpg";
import sunsetReforma from "../assets/gallery/sunset-reforma.jpg";
import sunsetRooftop from "../assets/gallery/sunset-rooftop.jpg";
import sunsetStormSun from "../assets/gallery/sunset-storm-sun.jpg";
import { getSupportedLanguage } from "./language";

export type GalleryCategory = "ibiza" | "places" | "sunsets" | "nature" | "concerts";

export type GalleryItem = {
  id: string;
  src: string;
  title: string;
  date: string;
  month: string;
  year: string;
  category: GalleryCategory;
  location: string;
  mood: string;
  artist?: string;
  description: string;
};

type GalleryPageContent = {
  command: string;
  title: string;
  subtitle: string;
  collectionLabel: string;
  momentLabel: string;
  selectedLabel: string;
  bestMomentsLabel: string;
  modalClose: string;
  metadataTitle: string;
  categories: Record<GalleryCategory, string>;
  items: GalleryItem[];
};

const galleryItemsEn: GalleryItem[] = [
  {
    id: "IMG_001",
    src: personalRedCar,
    title: "Maniaca after rain",
    date: "2026-07-20",
    month: "July",
    year: "2026",
    category: "ibiza",
    location: "Forest road",
    mood: "controlled intensity",
    description: "The red Ibiza taking the full frame: wet asphalt, deep greens and that little troublemaker energy from Maniaca, Lilith, bebe."
  },
  {
    id: "IMG_002",
    src: sunsetReforma,
    title: "Reforma after rain",
    date: "2026-07-20",
    month: "July",
    year: "2026",
    category: "sunsets",
    location: "Mexico City",
    mood: "cinematic dusk",
    description: "Street lights, wet pavement and a purple skyline. It feels like the city is compiling slowly."
  },
  {
    id: "IMG_003",
    src: ibizaManiacaLowAngle,
    title: "Lilith low angle",
    date: "2026-07-20",
    month: "July",
    year: "2026",
    category: "ibiza",
    location: "Forest road",
    mood: "front-end aggression",
    description: "A low-angle portrait of the Ibiza with the badge, reflections and road texture doing the whole character build."
  },
  {
    id: "IMG_004",
    src: placesForest,
    title: "Green signal",
    date: "2026-07-20",
    month: "July",
    year: "2026",
    category: "places",
    location: "Mountain path",
    mood: "quiet exploration",
    description: "Dense forest texture, strong depth and a calm route marker for the travel layer."
  },
  {
    id: "IMG_005",
    src: placesTequila,
    title: "Tequila checkpoint",
    date: "2026-07-20",
    month: "July",
    year: "2026",
    category: "places",
    location: "Tequila",
    mood: "roadtrip archive",
    description: "A direct travel marker: color, sun and the kind of stop that belongs in the route log."
  },
  {
    id: "IMG_007",
    src: placesAgave,
    title: "Agave field",
    date: "2026-07-20",
    month: "July",
    year: "2026",
    category: "places",
    location: "Agave route",
    mood: "wide air",
    description: "Open horizon, blue sky and texture lines that make the frame breathe."
  },
  {
    id: "IMG_008",
    src: sunsetRooftop,
    title: "Rooftop sunbreak",
    date: "2026-07-20",
    month: "July",
    year: "2026",
    category: "sunsets",
    location: "City rooftop",
    mood: "low battery, good signal",
    description: "A moody skyline where the sunset sits low and the silhouettes do the heavy lifting."
  },
  {
    id: "IMG_010",
    src: ibizaBebeHiddenRoad,
    title: "Hidden road layer",
    date: "2026-07-20",
    month: "July",
    year: "2026",
    category: "ibiza",
    location: "Forest road",
    mood: "stealth mode",
    description: "Foreground leaves, wet road and the red body partially hidden: bebe behaving like a secret mission."
  },
  {
    id: "IMG_012",
    src: placesTequilaSign,
    title: "Tequila letters",
    date: "2026-07-20",
    month: "July",
    year: "2026",
    category: "places",
    location: "Tequila",
    mood: "checkpoint loaded",
    description: "A brighter travel card that gives the gallery a clear visited-place marker."
  },
  {
    id: "IMG_013",
    src: placesCathedral,
    title: "Stone and sun",
    date: "2026-07-20",
    month: "July",
    year: "2026",
    category: "places",
    location: "Historic center",
    mood: "quiet architecture",
    description: "A simple architectural frame with enough contrast to break the road and sunset rhythm."
  },
  {
    id: "IMG_014",
    src: placesReflectionPond,
    title: "Garden reflection",
    date: "2018-08-03",
    month: "August",
    year: "2018",
    category: "places",
    location: "Garden route",
    mood: "legacy impact",
    description: "An older pond scene kept for composition: bridge, reflection and a calmer visual pace."
  },
  {
    id: "IMG_015",
    src: placesTorii,
    title: "Red gate reflection",
    date: "2018-08-03",
    month: "August",
    year: "2018",
    category: "places",
    location: "Garden route",
    mood: "legacy impact",
    description: "An older shot kept because the red gate and water reflection still hit with character."
  },
  {
    id: "IMG_016",
    src: natureRedTree,
    title: "Red tree layer",
    date: "2018-04-21",
    month: "April",
    year: "2018",
    category: "nature",
    location: "Garden route",
    mood: "quiet color",
    description: "A tree frame with red accents that connects naturally with the Ibiza palette."
  },
  {
    id: "IMG_017",
    src: natureAloe,
    title: "Aloe geometry",
    date: "2026-07-20",
    month: "July",
    year: "2026",
    category: "nature",
    location: "Agave route",
    mood: "sharp pattern",
    description: "Spiky symmetry and earthy contrast; a clean texture card for the archive."
  },
  {
    id: "IMG_018",
    src: natureRedFlower,
    title: "Red flower ping",
    date: "2019-02-15",
    month: "February",
    year: "2019",
    category: "nature",
    location: "Garden route",
    mood: "small signal",
    description: "A compact red accent that works like a visual notification inside the gallery."
  },
  {
    id: "IMG_019",
    src: sunsetCloudRibbon,
    title: "Cloud ribbon",
    date: "2018-10-31",
    month: "October",
    year: "2018",
    category: "sunsets",
    location: "City skyline",
    mood: "pink static",
    description: "A dramatic cloud strip with enough color to feel old-school and electric."
  },
  {
    id: "IMG_020",
    src: sunsetStormSun,
    title: "Storm sun",
    date: "2018-11-24",
    month: "November",
    year: "2018",
    category: "sunsets",
    location: "City skyline",
    mood: "heavy weather",
    description: "Dark clouds, low sun and a high-contrast frame that adds weight to the sunset set."
  },
  {
    id: "IMG_021",
    src: sunsetOrangeWindow,
    title: "Orange window",
    date: "2019-01-07",
    month: "January",
    year: "2019",
    category: "sunsets",
    location: "Neighborhood skyline",
    mood: "archived fire",
    description: "A clean orange block of sky kept for color and mood, not for nostalgia alone."
  },
  {
    id: "IMG_022",
    src: sunsetEmber,
    title: "Ember sky",
    date: "2019-01-07",
    month: "January",
    year: "2019",
    category: "sunsets",
    location: "Neighborhood skyline",
    mood: "quiet burn",
    description: "A past sunset with strong color contrast; old, but useful as a visual memory."
  },
  {
    id: "CON_001",
    src: concertMetallicaStadiumOpen,
    title: "Stadium opening frame",
    date: "2026-07-20",
    month: "July",
    year: "2026",
    category: "concerts",
    artist: "Metallica",
    location: "Stadium floor",
    mood: "pre-show scale",
    description: "A wide Metallica frame with the towers, sky and venue scale setting the whole concert module online."
  },
  {
    id: "CON_002",
    src: concertMetallicaCrowdRig,
    title: "Rig under storm light",
    date: "2026-07-20",
    month: "July",
    year: "2026",
    category: "concerts",
    artist: "Metallica",
    location: "Stadium floor",
    mood: "heavy weather",
    description: "Dark structure, crowd density and overhead screens; it feels like the soundcheck before thunder."
  },
  {
    id: "CON_003",
    src: concertMetallicaRedStage,
    title: "Red stage pressure",
    date: "2026-07-20",
    month: "July",
    year: "2026",
    category: "concerts",
    artist: "Metallica",
    location: "Stadium stage",
    mood: "distortion glow",
    description: "A tighter stage frame with red light, smoke and enough grain to feel alive."
  },
  {
    id: "CON_004",
    src: concertMetallicaTower,
    title: "M tower signal",
    date: "2026-07-20",
    month: "July",
    year: "2026",
    category: "concerts",
    artist: "Metallica",
    location: "Stadium stage",
    mood: "icon mode",
    description: "The tower screen works like a vertical poster inside the gallery."
  },
  {
    id: "CON_005",
    src: concertMetallicaPoster,
    title: "Poster artifact",
    date: "2026-07-20",
    month: "July",
    year: "2026",
    category: "concerts",
    artist: "Metallica",
    location: "Archive item",
    mood: "souvenir cache",
    description: "A sharp collectible detail that breaks the stage pattern without leaving the concert context."
  },
  {
    id: "CON_006",
    src: concertSlipknotBlueMask,
    title: "Blue mask wall",
    date: "2026-07-20",
    month: "July",
    year: "2026",
    category: "concerts",
    artist: "Slipknot",
    location: "Live field",
    mood: "cold aggression",
    description: "Blue lights, silhouettes and a strong central visual: clean enough to become the Slipknot anchor."
  },
  {
    id: "CON_007",
    src: concertSlipknotBlueWide,
    title: "Blue beam spread",
    date: "2026-07-20",
    month: "July",
    year: "2026",
    category: "concerts",
    artist: "Slipknot",
    location: "Live field",
    mood: "bass and haze",
    description: "A wider blue frame with light beams giving the set more air and depth."
  },
  {
    id: "CON_008",
    src: concertSlipknotRedStage,
    title: "Red field signal",
    date: "2026-07-20",
    month: "July",
    year: "2026",
    category: "concerts",
    artist: "Slipknot",
    location: "Live field",
    mood: "alarm state",
    description: "The red stage reads like an alert panel; minimal, dark and aggressive."
  },
  {
    id: "CON_009",
    src: concertSlipknotRedWall,
    title: "Red wall",
    date: "2026-07-20",
    month: "July",
    year: "2026",
    category: "concerts",
    artist: "Slipknot",
    location: "Live field",
    mood: "system warning",
    description: "A compact red wall of light that pairs well with the terminal aesthetic."
  },
  {
    id: "CON_010",
    src: concertMegadethRedWide,
    title: "Megadeth red wide",
    date: "2026-07-20",
    month: "July",
    year: "2026",
    category: "concerts",
    artist: "Megadeth",
    location: "Arena",
    mood: "thrash layer",
    description: "A wide red stage with crowd energy kept as texture instead of focus."
  },
  {
    id: "CON_011",
    src: concertMegadethLightsWide,
    title: "Megadeth light burst",
    date: "2026-07-20",
    month: "July",
    year: "2026",
    category: "concerts",
    artist: "Megadeth",
    location: "Arena",
    mood: "flash point",
    description: "The light spread gives the Megadeth set a second angle without feeling duplicated."
  },
  {
    id: "CON_012",
    src: concertEpicaRedWide,
    title: "Epica red floor",
    date: "2026-07-20",
    month: "July",
    year: "2026",
    category: "concerts",
    artist: "Epica",
    location: "Arena",
    mood: "symphonic heat",
    description: "A red wide shot with stage geometry and strong separation between performers and floor."
  },
  {
    id: "CON_013",
    src: concertEpicaBlueArena,
    title: "Epica blue arena",
    date: "2026-07-20",
    month: "July",
    year: "2026",
    category: "concerts",
    artist: "Epica",
    location: "Arena",
    mood: "orchestral scale",
    description: "Blue light opens the arena and gives the Epica group a cooler counterweight."
  },
  {
    id: "CON_014",
    src: concertEpicaPurpleStage,
    title: "Purple stage focus",
    date: "2026-07-20",
    month: "July",
    year: "2026",
    category: "concerts",
    artist: "Epica",
    location: "Arena",
    mood: "violet pulse",
    description: "A purple-lit frame that matches the site palette almost too well."
  },
  {
    id: "CON_015",
    src: concertEpicaRedSmoke,
    title: "Red smoke layer",
    date: "2026-07-20",
    month: "July",
    year: "2026",
    category: "concerts",
    artist: "Epica",
    location: "Arena",
    mood: "heated fog",
    description: "Smoke and red light give this one a heavier cinematic texture."
  },
  {
    id: "CON_016",
    src: concertEpicaSymphonicWide,
    title: "Symphonic wide",
    date: "2026-07-20",
    month: "July",
    year: "2026",
    category: "concerts",
    artist: "Epica",
    location: "Arena",
    mood: "full arrangement",
    description: "A wider composition that sells the full stage setup instead of a single performer."
  },
  {
    id: "CON_017",
    src: concertBabymetalArenaLasers,
    title: "Babymetal arena lasers",
    date: "2026-07-20",
    month: "July",
    year: "2026",
    category: "concerts",
    artist: "Babymetal",
    location: "Arena",
    mood: "laser ritual",
    description: "A bright arena shot with clean laser lines and a strong red/yellow split."
  },
  {
    id: "CON_018",
    src: concertBabymetalLightBeam,
    title: "White beam overload",
    date: "2026-07-20",
    month: "July",
    year: "2026",
    category: "concerts",
    artist: "Babymetal",
    location: "Arena",
    mood: "overexposed energy",
    description: "A chaotic but intentional burst of white light; useful as the loudest visual accent."
  },
  {
    id: "CON_019",
    src: concertBabymetalRedArena,
    title: "Red arena angle",
    date: "2026-07-20",
    month: "July",
    year: "2026",
    category: "concerts",
    artist: "Babymetal",
    location: "Arena",
    mood: "red ritual",
    description: "Red haze, crowd texture and suspended structure give it a theatrical layer."
  },
  {
    id: "CON_020",
    src: concertBabymetalDarkRed,
    title: "Dark red hold",
    date: "2026-07-20",
    month: "July",
    year: "2026",
    category: "concerts",
    artist: "Babymetal",
    location: "Arena",
    mood: "quiet before impact",
    description: "The darker Babymetal frame works as a pause between louder concert cards."
  }
];

function translateConcertTitle(item: GalleryItem) {
  if (item.category !== "concerts" || !item.artist) {
    return item.title;
  }

  return `${item.artist} // ${item.title}`;
}

function translateConcertLocation(item: GalleryItem) {
  if (item.category !== "concerts") {
    return item.location;
  }

  return item.location === "Archive item" ? "Objeto de archivo" : "Venue en vivo";
}

function translateConcertMood(item: GalleryItem) {
  if (item.category !== "concerts") {
    return item.mood;
  }

  return {
    Metallica: "escala metalica",
    Slipknot: "agresividad luminica",
    Megadeth: "thrash layer",
    Epica: "drama sinfonico",
    Babymetal: "ritual laser"
  }[item.artist ?? ""] ?? item.mood;
}

function translateConcertDescription(item: GalleryItem) {
  if (item.category !== "concerts" || !item.artist) {
    return item.description;
  }

  return {
    Metallica: "Toma curada de Metallica con escala de estadio, pantallas y energia pesada sin convertirlo en selfie.",
    Slipknot: "Toma curada de Slipknot con luces azules/rojas, siluetas y una vibra oscura que encaja con el sistema.",
    Megadeth: "Toma curada de Megadeth con escenario amplio, luz roja y crowd usado como textura de fondo.",
    Epica: "Toma curada de Epica con composicion de arena, luces teatrales y suficiente dramatismo sin sentirse repetida.",
    Babymetal: "Toma curada de Babymetal con lasers, rojo de arena y energia alta como modulo visual independiente."
  }[item.artist] ?? item.description;
}

const galleryItemsEs: GalleryItem[] = galleryItemsEn.map((item) => ({
  ...item,
  month:
    {
      July: "Julio",
      August: "Agosto",
      April: "Abril",
      February: "Febrero",
      October: "Octubre",
      November: "Noviembre",
      January: "Enero"
    }[item.month] ?? item.month,
  title:
    {
      IMG_001: "Maniaca despues de la lluvia",
      IMG_002: "Reforma despues de la lluvia",
      IMG_003: "Lilith desde abajo",
      IMG_004: "Senal verde",
      IMG_005: "Checkpoint en Tequila",
      IMG_007: "Campo de agave",
      IMG_008: "Luz desde la azotea",
      IMG_010: "Capa de camino oculto",
      IMG_012: "Letras de Tequila",
      IMG_013: "Piedra y sol",
      IMG_014: "Reflejo de jardin",
      IMG_015: "Reflejo del portal rojo",
      IMG_016: "Capa de arbol rojo",
      IMG_017: "Geometria de aloe",
      IMG_018: "Ping de flor roja",
      IMG_019: "Nube en cinta",
      IMG_020: "Sol de tormenta",
      IMG_021: "Ventana naranja",
      IMG_022: "Cielo en brasas"
    }[item.id] ?? translateConcertTitle(item),
  location:
    {
      IMG_001: "Camino de bosque",
      IMG_002: "Ciudad de Mexico",
      IMG_003: "Camino de bosque",
      IMG_004: "Ruta de montana",
      IMG_005: "Tequila",
      IMG_007: "Ruta del agave",
      IMG_008: "Azotea urbana",
      IMG_010: "Camino de bosque",
      IMG_012: "Tequila",
      IMG_013: "Centro historico",
      IMG_014: "Jardin",
      IMG_015: "Jardin",
      IMG_016: "Jardin",
      IMG_017: "Ruta del agave",
      IMG_018: "Jardin",
      IMG_019: "Horizonte urbano",
      IMG_020: "Horizonte urbano",
      IMG_021: "Horizonte del barrio",
      IMG_022: "Horizonte del barrio"
    }[item.id] ?? translateConcertLocation(item),
  mood:
    {
      IMG_001: "intensidad controlada",
      IMG_002: "atardecer cinematografico",
      IMG_003: "agresividad frontal",
      IMG_004: "exploracion tranquila",
      IMG_005: "archivo de roadtrip",
      IMG_007: "aire abierto",
      IMG_008: "low battery, good signal",
      IMG_010: "stealth mode",
      IMG_012: "checkpoint loaded",
      IMG_013: "arquitectura quieta",
      IMG_014: "impacto de archivo",
      IMG_015: "impacto de archivo",
      IMG_016: "color tranquilo",
      IMG_017: "patron filoso",
      IMG_018: "senal pequena",
      IMG_019: "estatica rosa",
      IMG_020: "clima pesado",
      IMG_021: "fuego archivado",
      IMG_022: "brasa tranquila"
    }[item.id] ?? translateConcertMood(item),
  description:
    {
      IMG_001: "El Ibiza rojo tomando todo el encuadre: asfalto mojado, verdes profundos y esa energia de pequena amenaza de Maniaca, Lilith, bebe.",
      IMG_002: "Luces de calle, pavimento mojado y un cielo morado. Se siente como si la ciudad compilara lentamente.",
      IMG_003: "Un retrato desde abajo del Ibiza con emblema, reflejos y textura de carretera construyendo todo el personaje.",
      IMG_004: "Textura de bosque denso, buena profundidad y una senal tranquila para la capa de viajes.",
      IMG_005: "Un marcador directo de viaje: color, sol y ese tipo de parada que pertenece al route log.",
      IMG_007: "Horizonte abierto, cielo azul y lineas de textura que dejan respirar el encuadre.",
      IMG_008: "Un skyline sobrio donde el atardecer queda bajo y las siluetas hacen el trabajo pesado.",
      IMG_010: "Hojas al frente, camino mojado y carroceria roja parcialmente oculta: bebe comportandose como mision secreta.",
      IMG_012: "Una tarjeta de viaje mas luminosa que le da a la galeria un marcador claro de lugar visitado.",
      IMG_013: "Un encuadre arquitectonico simple con suficiente contraste para romper el ritmo de carretera y atardecer.",
      IMG_014: "Una escena pasada de estanque conservada por composicion: puente, reflejo y un ritmo visual mas calmado.",
      IMG_015: "Una foto pasada que se queda porque el portal rojo y el reflejo en el agua todavia tienen caracter.",
      IMG_016: "Un arbol con acentos rojos que conecta naturalmente con la paleta del Ibiza.",
      IMG_017: "Simetria filosa y contraste terroso; una tarjeta de textura limpia para el archivo.",
      IMG_018: "Un acento rojo compacto que funciona como notificacion visual dentro de la galeria.",
      IMG_019: "Una franja de nube dramatica con suficiente color para sentirse vieja escuela y electrica.",
      IMG_020: "Nubes oscuras, sol bajo y un encuadre de alto contraste que agrega peso al set de atardeceres.",
      IMG_021: "Un bloque naranja de cielo conservado por color y mood, no solo por nostalgia.",
      IMG_022: "Un atardecer pasado con contraste fuerte; viejo, pero util como memoria visual."
    }[item.id] ?? translateConcertDescription(item)
}));

export const galleryPageContent: Record<"en" | "es", GalleryPageContent> = {
  en: {
    command: "$ open gallery",
    title: "Visual archive",
    subtitle: "A curated photo system with the Ibiza, places visited, sunsets, nature textures and live music fragments.",
    collectionLabel: "collections",
    momentLabel: "moment selected",
    selectedLabel: "selected",
    bestMomentsLabel: "best_moments",
    modalClose: "$ close",
    metadataTitle: "$ inspect photo.metadata",
    categories: {
      ibiza: "ibiza_maniaca",
      places: "places_visited",
      sunsets: "sunsets",
      nature: "nature",
      concerts: "concerts"
    },
    items: galleryItemsEn
  },
  es: {
    command: "$ open gallery",
    title: "Archivo visual",
    subtitle: "Un sistema curado con el Ibiza, lugares visitados, atardeceres, texturas naturales y fragmentos de conciertos.",
    collectionLabel: "colecciones",
    momentLabel: "momento seleccionado",
    selectedLabel: "seleccionado",
    bestMomentsLabel: "best_moments",
    modalClose: "$ close",
    metadataTitle: "$ inspect photo.metadata",
    categories: {
      ibiza: "ibiza_maniaca",
      places: "lugares_visitados",
      sunsets: "atardeceres",
      nature: "naturaleza",
      concerts: "conciertos"
    },
    items: galleryItemsEs
  }
};

export const galleryItems: GalleryItem[] = galleryItemsEn;

export const homeGalleryHighlights = galleryItemsEn.slice(0, 6);

export function getGalleryPageContent(language?: string) {
  return galleryPageContent[getSupportedLanguage(language)];
}

export function getHomeGalleryHighlights(language?: string) {
  const content = getGalleryPageContent(language);

  return content.items.filter((item) =>
    ["IMG_001", "IMG_002", "IMG_003", "IMG_004", "IMG_008", "IMG_010", "CON_006"].includes(item.id)
  );
}

export function getGalleryItems(language?: string) {
  return getGalleryPageContent(language).items;
}






