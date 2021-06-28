import React, {useState} from 'react';
import AgregarContacto from './Components/AgregarContacto';
import Tabla from './Components/Tabla';
import Actualizar from './Routes/Actualizar'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

const App = () => {
  const [contacto, setContacto] = useState([]);

  return (
    <>
      <div className = 'app container'>
        <div className = 'jumbotron'>
          <h1>Contactos</h1>
          <Router>
            <Redirect from="/" to="/inicio" />
            <Switch>
              <Route path = '/inicio'>
                <AgregarContacto setContacto = {setContacto}/>
                <Tabla contacto = {contacto} setContacto = {setContacto}/>
              </Route>

              <Route path = '/actualizar/:Nombre/:Numero/:id'>
                <Actualizar/>
              </Route>

            </Switch>
          </Router>
        </div>
      </div>
      
    </>
  );
}

export default App;
