import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

const StaticSite = () => (
  <Router>
    <h1>Primeros pasos con React Router</h1>
    <nav>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/acerca">Acerca</Link>
        </li>
        <li>
          <Link to="/servicios">Servicios</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
    </nav>
    <hr />
    <Route path="/" component={Home} />
    <Route path="/acerca" component={Acerca} />
    <Route path="/Servicios" component={Servicios} />
    <Route path="/contacto" component={Contacto} />
  </Router>
);

const Home = () => (
  <div>
    <h2>hola Bienvenid@s a mi WebApp con React</h2>
  </div>
);

const Acerca = () => (
  <div>
    <h2>hola Bienvenid@s, este soy yo y mi perfil</h2>
  </div>
);

const Servicios = () => (
  <ul>
    <li>Instrucción y Capacitación Web</li>
    <li>Diseño y desarrollo web</li>
  </ul>
);

const Contacto = ({ match }) => (
  <div>
    <h2>Información de contacto</h2>
    <Route path={`${match.url}/:contactoInfo`} component={InfoContacto} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Manténte en contacto :)</h3>}
    />
    <ul>
      <li>
        <Link to={`${match.url}/email`}>Email</Link>
      </li>
      <li>
        <Link to={`${match.url}/web`}>Sitio Web</Link>
      </li>
      <li>
        <Link to={`${match.url}/ubicacion`}>Ubicación</Link>
      </li>
    </ul>
    <Route
      path={`${match.url}/email`}
      render={() => (
        <a href="mailto:ismael_br7@hotmail.com" target="_blank">
          ismael_br7@hotmail.com
        </a>
      )}
    />
  </div>
);

const InfoContacto = ({ match }) => (
  <div>
    <h4> {match.params.contactoInfo} </h4>
  </div>
);

export default StaticSite;
