import React from "react";
import { Container, Table, Badge } from "react-bootstrap";

function EventsHistory({ events }) {
  
  // Función auxiliar para decorar el Ranking
  const renderRank = (rank) => {
    switch(rank) {
      case 1: return <Badge bg="warning" text="dark" style={{fontSize: '1em'}}>🥇 1º</Badge>;
      case 2: return <Badge bg="secondary" style={{fontSize: '1em'}}>🥈 2º</Badge>;
      case 3: return (
          <Badge 
            style={{
              fontSize: '1em', 
              backgroundColor: '#cd7f32', // Color Bronce
              color: 'white'              // Aseguramos texto blanco
            }}
          >
            🥉 3º
          </Badge>
        );
      default: return <span className="font-weight-bold">{rank}º</span>;
    }
  };

  return (
    <section className="py-5" style={{ backgroundColor: '#1a1a1a' }}> {/* Fondo oscuro para continuidad */}
      <Container>
        <h3 className="text-white mb-4 border-bottom pb-2 border-secondary">
          🏆 Historial de Competiciones
        </h3>

        <Table hover responsive variant="dark" className="text-center align-middle" style={{ borderRadius: '10px', overflow: 'hidden' }}>
          <thead style={{ backgroundColor: '#000' }}>
            <tr>
              <th className="py-3 text-uppercase text-secondary" style={{ fontSize: '0.9rem' }}>Fecha</th>
              <th className="py-3 text-uppercase text-secondary" style={{ fontSize: '0.9rem' }}>Ranking</th>
              <th className="py-3 text-uppercase text-secondary" style={{ fontSize: '0.9rem' }}>Tiempo</th>
              <th className="py-3 text-uppercase text-info" style={{ fontSize: '0.9rem' }}>💨 Top Blow</th>
            </tr>
          </thead>
          <tbody>
            {events && events.length > 0 ? (
              events.map((event, index) => (
                <tr key={index}>
                  {/* Fecha */}
                  <td className="text-white-50">{event.date}</td>
                  
                  {/* Ranking con medallas */}
                  <td>{renderRank(event.rank)}</td>
                  
                  {/* Tiempo */}
                  <td>{event.time}</td>
                  
                  {/* Top Blow (Destacado) */}
                  <td className="font-weight-bold text-info" style={{ fontSize: '1.1rem' }}>
                    {event.topBlow} <span style={{fontSize: '0.8rem'}}>N</span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4 text-muted">
                  Este participante aún no tiene registros.
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
    </section>
  );
}

export default EventsHistory;