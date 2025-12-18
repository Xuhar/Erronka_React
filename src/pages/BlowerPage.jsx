import { useParams } from 'react-router-dom';
import HeroBlower from '../components/HeroBlower';
import EventsHistory from '../components/Blowers/EventsHistory';
import "../styles/Blower.css";

const BlowerPage = () => {
  const { id } = useParams(); // Esto captura "oihan", "pepe", etc.

  const blowersData = {
    oihan: {
      name: "Oihan",
      surname: "El fokin jefe",
      description: "Aupa, urnietako tipo oso jator bat naiz eta nire birikak altzairuzkoak dira. Inork ezin nau irabazi, tren ondoko tabernan aritzen den erretzaile zaharrez gain.",
      age: 21,
      PulmonCap: 69,
      yazz: 10,
      imageSrc: "/Blowers/Oihan.png",
      events: [
        { date: "12 Oct 2024", rank: 1, time: "02:17 min", topBlow: 88 },
        { date: "05 Sep 2024", rank: 3, time: "02:40 min", topBlow: 75 },
        { date: "20 Ago 2024", rank: 7, time: "03:10 min", topBlow: 62 },
        { date: "15 Jul 2024", rank: 2, time: "02:22 min", topBlow: 81 },
      ],
    },
    pepe: {
      name: "Pepe",
      surname: "El destructor de birikas",
      description: "Soy de Bilbao, fumo como un camionero y aun así soplo más fuerte que nadie. ¡Aupa los míos!",
      age: 35,
      PulmonCap: 85,
      yazz: 18,
      imageSrc: "/Blowers/ruso.webp", // Asegúrate de tener esta imagen
      events: [
        { date: "10 Nov 2024", rank: 1, time: "02:05 min", topBlow: 92 },
        { date: "01 Oct 2024", rank: 2, time: "02:15 min", topBlow: 89 },
        { date: "18 Sep 2024", rank: 1, time: "02:08 min", topBlow: 91 },
      ],
    },
    iñigo: {
      name: "Iñigo",
      surname: "El huracán que fuma Pueblo",
      description: "Yo era un simple fumador de liar hasta que Oihan vio el potencial en mis pulmones y Marbloro apoyó esa idea para llevar a cabo mi espectacular carrera como soplador. ",
      age: 35,
      PulmonCap: 85,
      yazz: 18,
      imageSrc: "/Blowers/hans.webp",
      events: [
        { date: "21 Jul 2025", rank: 3, time: "02:22 min", topBlow: 72 },
        { date: "01 Oct 2024", rank: 2, time: "02:02 min", topBlow: 89 },
        { date: "08 Mar 2024", rank: 1, time: "02:08 min", topBlow: 91 },
      ],
    },
    sebas: {
      name: "Sebas",
      surname: "Peruano",
      description: "Lleno de un potencial inmesurable gracias a la técnica de tornados aprendidos de sus apetitosos platos de palomas callejeras.🤪🤰",
      age: 35,
      PulmonCap: 85,
      yazz: 18,
      imageSrc: "/Blowers/sebas.jpg",
      events: [
        { date: "21 Jul 2025", rank: 3, time: "02:22 min", topBlow: 72 },
        { date: "01 Oct 2024", rank: 2, time: "02:02 min", topBlow: 89 },
        { date: "08 Mar 2024", rank: 1, time: "02:08 min", topBlow: 91 },
      ],
    },
  };

  const blower = blowersData[id?.toLowerCase()] || blowersData.oihan;

  return (
    <>
      <HeroBlower
        name={blower.name}
        surname={blower.surname}
        description={blower.description}
        age={blower.age}
        PulmonCap={blower.PulmonCap}
        yazz={blower.yazz}
        imageSrc={blower.imageSrc}
      />
      <EventsHistory events={blower.events} />
    </>
  );
};

export default BlowerPage;