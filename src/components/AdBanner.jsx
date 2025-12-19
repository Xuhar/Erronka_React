import React, { useState } from 'react';
import { X } from 'lucide-react';

const AdBanner = ({ position = 'right', closeable = true }) => {
  const [isVisible, setIsVisible] = useState(true);

  console.log('AdBanner renderizado:', { position, isVisible });

  if (!isVisible) return null;

  const positionClasses = {
    right: 'right-0 top-20',
    left: 'left-0 top-20',
    top: 'top-0 left-1/2 -translate-x-1/2',
    bottom: 'bottom-0 left-1/2 -translate-x-1/2'
  };

  const isHorizontal = position === 'top' || position === 'bottom';

  return (
    <aside
        style={{ position: 'fixed' }}
        className={`fixed ${positionClasses[position]} z-40 ${
        isHorizontal ? 'w-full max-w-4xl' : 'w-72'
      } m-4`}
    >
      <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg shadow-2xl overflow-hidden">
        {closeable && (
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-2 right-2 bg-white/20 hover:bg-white/30 rounded-full p-1 transition-colors z-10"
            aria-label="Cerrar anuncio"
          >
            <X size={16} className="text-white" />
          </button>
        )}
        
        <div className={`p-6 ${isHorizontal ? 'flex items-center gap-6' : ''}`}>
          <div className={`${isHorizontal ? 'flex-1' : ''}`}>
            <h3 className="text-white font-bold text-lg mb-2">
              ¡Oferta Especial!
            </h3>
            <p className="text-white/90 text-sm mb-4">
              Obtén un 50% de descuento en todos nuestros productos premium.
            </p>
            <button className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm w-full">
              Saber más
            </button>
          </div>
          
          {isHorizontal && (
            <div className="w-32 h-32 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-4xl">🎁</span>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default AdBanner;