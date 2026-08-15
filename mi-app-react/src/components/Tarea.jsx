import { useState } from 'react';

export default function Tarea({ nombreTarea, alCambiar}) {
  const [completada, setCompletada] = useState(false);
  
  const manejarClic = () => {
        const nuevoEstado = !completada;
        setCompletada(nuevoEstado);

        if(nuevoEstado===true){
            alCambiar(1);
        } else{
            alCambiar(-1);
        }
    }

  return (
    <div style={{ marginBottom: '10px' }}>
      <span style={{ textDecoration: completada ? 'line-through' : 'none' }}>
        {nombreTarea}
      </span>
      <button onClick={manejarClic} style={{ marginLeft: '10px' }}>
        {completada ? 'Desmarcar' : 'Completar'}
        
      </button>
    </div>
  );
}