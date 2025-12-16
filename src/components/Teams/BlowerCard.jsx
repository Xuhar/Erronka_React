import React from 'react';



function BlowerCard({ imageSrc, name, nickname, age, lungCapacity }) {
  
  const link = `/blowers/${name.toLowerCase()}`;
  
  return (
    <a href= {link} >
    <div className="participant-card">
        {/* Imagen de fondo */}
      <div className="participant-card-img-container">
        <img 
            src={imageSrc} 
            alt={`${nickname} portrait`} 
            className="participant-card-img" 
        />
      </div>

      {/* Superposición con información */}
      <div className="participant-card-overlay text-center text-white">
         {/* Usamos el 'Name' real para la etiqueta pequeña */}
        <div className="mb-1">
            <span className="participant-badge">{name}</span>
        </div>
        
        {/* Usamos el 'Surname/Apodo' para el texto grande */}
        <h3 className="participant-nickname mb-2">{nickname}</h3>

        {/* Edad y Capacidad Pulmonar abajo */}
        <div className="participant-details">
          <span>{age} AÑOS</span>
          <span className="mx-2">•</span>
          <span>{lungCapacity}</span>
        </div>
      </div>
    </div>

    </a>
  );
}

export default BlowerCard;