import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './cards';


function App() {
  return (
    <div className='bg-dark'>

      <nav className="navbar bg-warning">
        <div className="container">
          <a className="navbar-brand fw-bold text-dark m-auto" href="https://">News Site</a>
        </div>
      </nav>

      <div className="container-fluid">
        <Cards />
      </div>

    </div>

  );
}

export default App;
