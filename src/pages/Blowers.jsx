import Hero from '../components/HeroSection'
import TeamCatalog from '../components/Teams/TeamCatalog';

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
      {/* <Hero
        title="Blowers"
        subtitle="Best blowers in the galaxy 🤪🤪"
      /> */}
      <TeamCatalog 
            title="Top Blowers"
            subtitle="Los mas duros del planeta"
            participants={teamRoster} 
        />
    </>
  );
};
export default TeamPage;
