import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './cards';
import { Container, Row } from 'react-bootstrap';


function App() {
  return (
    <div className='bg-dark'>
      <nav className="navbar bg-warning">
        <div className="container">
          <a className="navbar-brand fw-bold text-dark m-auto" href="https://">News Site</a>
        </div>
      </nav>

      <div className="container-fluid">
        <nav className="navbar mt-3">
          <form className="container-fluid">
            <div className="input-group">
              <input id="searchInput" type="text" className="form-control" placeholder="Find some insight.."
                aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </form>
        </nav>
        <p className="headline-badge mt-2 fw-bold text-white offset-1 fs-4"><span className="badge bg-warning">Headlines</span>
          today</p>
      </div>


    </div>

  );
}

export default App;
