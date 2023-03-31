import '../estilos/Form.css';
import Request from './Request';
import Precio from './Precio';
import React ,{useRef} from 'react';

function FormEncab() {
  const mostrar = useRef();
  return (
    <main ref={mostrar} className='card'>
      <h3 className='subtitulo'>Completar los datos solicitados</h3>
      <div className='container'>
      <Request />
      <Precio />
      </div>
    </main>
  );
}
export default FormEncab;