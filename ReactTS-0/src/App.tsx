import { Greeting } from './components/Greeting';
import './App.css';

export const App = () => {



  return (
    <div className='mt-5 container'>
      <div className="card">
        <div className="card-header">
          Your Todo's
        </div>

        <Greeting name="Naresh" />

      </div>
    </div>
  );
}
