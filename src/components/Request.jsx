import { useState, useEffect } from 'react';
import '../estilos/Form.css';
import useInfo from './useInfo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const  Request = () => {
  const [datos, setDatos] = useState([])
  useEffect(() => {
    fetch('datos.json')
      .then((response) => {
        return response.json()
      })
      .then((datos) => {
        setDatos(datos);
      })
  }, [])

  const [metrosIngresados, setMetrosIngresados] = useState('')
  const MIngresados = (m) => {
    setMetrosIngresados(m.target.value);
  }

  const [edificio, setEdificio] = useState('seleccione');
  const TipoPropiedad = (p) => {
    setEdificio(p.target.value)
  }

  const [zona, setZona] = useState('seleccione');
  const TipoZona = (zon) => {
    setZona(zon.target.value)
  }

  return (
    <form id="formulario" className="Info" onSubmit={useInfo}>
      <label className="label">Seleccione tipo de Propiedad</label>
      <select className="formulario-elemento" name="propiedad" onChange={TipoPropiedad} value={edificio}>
        {datos.map(d => {
          return (
            <option key={d.id} className="option">{d.edificio}</option>
          );
        })}
      </select>

      <label className="label">Seleccione Ubicación</label>
      <select value={zona} name="zona" onChange={TipoZona} className="formulario-elemento">
        {datos.map(z => {
          return (
            <option key={z.id} className="option">{z.zona}</option>
          );
        })}
      </select>
      <label className="label">Ingrese los metros cuadrados</label>
      <input tpye="number" onChange={MIngresados} name="ingreso" value={metrosIngresados.ingreso} className="formulario-elemento"></input>

      <button type="submit" className="enviar" value="Enviar">Cotizar</button>
      <ToastContainer position="bottom-right" reverseOrder={false} />
    </form>
  );
}
export default Request;