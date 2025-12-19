import Hero from '../components/Teams/TeamHero'
import TeamCatalog from '../components/Teams/TeamCatalog';
import Form from '../components/Form';
import HeroCosas from '../components/HeroSection'

import "../styles/Team.css"
const teamRoster = [
    {
      name: "Oihan",
      surname: "El fokin jefe",
      age: 25,
      lungCapacity: "6.5L Capacidad",
      image: "/Blowers/Oihan.png" 
    },
    {
      name: "Iñigo",
      surname: "el que quieras",
      age: 27,
      lungCapacity: "7.1L Capacidad",
      image: "/Blowers/hans.webp"
    },
    {
      name: "Xuhar",
      surname: "Vago con correa",
      age: 24,
      lungCapacity: "5.8L Capacidad",
      image: "/Blowers/donald.webp"
    },
    {
      name: "Pepe",
      surname: "Makina",
      age: 28,
      lungCapacity: "6.2L Capacidad",
      image: "/Blowers/ruso.webp"
    },
     {
      name: "Sebas",
      surname: "Peruano de manual",
      age: 25,
      lungCapacity: "6.0L Capacidad",
      image: "/Blowers/sebas.jpg"
    },
    // ... más participantes ...
  ];
const TeamPage = () => {
  return (
    <>
      <Hero
        logoSrc="/Teams/puzgailur.png"
        name="Puzgailur"
        description="Puzgailur, euskal herriko kanika putzari txapeldunak 2018. urtean. Talde bikaina izan zen eta maila mantentzen da! Urte hartan, Donostiako Aste Nagusian, final handian aurkariak harritu zituzten: kapitainak, Xabier 'Puzka' Etxeberria, 47 kanika jarri zituen segidan, haizea kontrolatuz eta jendetza oihuka jarriz. Harrezkero, Puzgailur taldeak urtero parte hartzen du txapelketetan, gazte berriak sartuz –azkenekoan, Miren neskak, 19 urte besterik ez duela, erakustaldi ikusgarria egin zuen Bilboko jaian."
      />
      <TeamCatalog 
            title="Blowers" 
            participants={teamRoster} 
        />
      <HeroCosas 
        title="Apuntarse"
        cosas={
            <Form fields={['name', 'email', 'message', 'terms']} />
        }
      />
    </>
  );
};
export default TeamPage;
