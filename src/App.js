import './App.css';
import FormEncab from './components/FormEncab';
import './estilos/Form.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div className="container App">
      <h1 className='titulo'>Seguros del hogar 🏡</h1>
      <header className="App-header">
        <FormEncab />
        <div>
        </div>
      </header>
    </div>
  );
}


