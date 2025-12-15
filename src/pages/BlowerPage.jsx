import HeroBlower from '../components/HeroBlower';
import EventsHistory from '../components/Blowers/EventsHistory';
import "../styles/Blower.css"

const participantEvents = [
  { date: "12 Oct 2024", rank: 1, time: "02:17 min", topBlow: 88 },
  { date: "05 Sep 2024", rank: 3, time: "02:40 min", topBlow: 75 },
  { date: "20 Ago 2024", rank: 7, time: "03:10 min", topBlow: 62 },
  { date: "15 Jul 2024", rank: 2, time: "02:22 min", topBlow: 81 },
];

const BlowerPage = () => {
  return (
    <>
      <HeroBlower
        name="Oihan"
        surname="El fokin jefe"
        description="Aupa, urnietako tipo oso jator bat naiz eta nire birikak altzairuzkoak dira. Inork ezin nau irabazi, tren ondoko tabernan aritzen den erretzaile zaharrez gain."
        age={21}
        PulmonCap={69} 
        yazz={10}
        imageSrc="/Blowers/Oihan.png"
      />
      <EventsHistory events={participantEvents} />
    </>
  );
};

export default BlowerPage;