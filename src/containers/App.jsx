import React from "react";
import { HashRouter, Switch } from "react-router-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
//HashRouter   BrowserRouter
import Header from "../components/Header";
import HomeParent from "../pages/HomeParent";
import Cubre from "../components/Cubre";
import Prevencion from "../pages/Prevencion";
import Asistencia from "../pages/Asistencia";
// import AsistenciaFondo from '../pages/AsistenciaFondo';
import Seguros from "../components/Seguros";
import NoCubre from "../pages/NoCubre";
import Footer from "../components/Footer";
import PreventipsConjunto from "../components/PreventipsConjunto";
import CubreParent from "../pages/CubreParent";
import Cobrar from "../pages/Cobrar";
import Informacion from "../pages/Informacion";
import UsarSeguro from "../components/UsarSeguro";
import Contacto from "../pages/Contacto";
import ScrollToTop from "../components/ScrollToTop";
import json from "../jsons/json/pages.json";
import { changeDevice } from "../funciones";
import "../assets/styles/tailwind.css";
import "../assets/styles/App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.device = changeDevice();
    const body = this.getComponent();
    this.state = {
      body,
    };
  }

  componentDidMount() {
    const mql = window.matchMedia("(min-width: 1024px)");
    mql.addListener((e) => {
      if (e.matches) {
        this.device === "desktop";
        this.changeDeviceState();
      } else {
        this.device === "mobile";
        this.changeDeviceState();
      }
    });
  }

  changeDeviceValidation = (callback) => {
    const deviceResize = changeDevice();
    if (deviceResize !== this.device) {
      this.device = deviceResize;
      if (typeof callback === "function") {
        callback();
      } else {
        console.log("Callback is not a funciton");
      }
    }
  };

  changeDeviceState = () => {
    const body = this.getComponent();
    this.setState({
      body,
    });
  };

  getComponent = () => {
    let components;
    const device = changeDevice();
    if (device === "mobile") {
      components = (
        <div className="mobile">
          <HashRouter>
            <Switch>
              <Route exact path="/">
                <ScrollToTop />
                <HomeParent />
              </Route>
              <Route path="/home">
                <Header />
                <Switch>
                  <Route path="/home/cubre">
                    <ScrollToTop />
                    <CubreParent />
                  </Route>
                  {json.map((row) => {
                    const { id, path, hasFooter, onlyDesktop } = row;
                    if (!onlyDesktop) {
                      return (
                        <Route path={path} key={id}>
                          <ScrollToTop />
                          {this.verifyPages(path)}
                          {hasFooter && <Footer />}
                        </Route>
                      );
                    }
                    return null;
                  })}
                  <Route path="/home/contacto">
                    <ScrollToTop />
                    <Contacto />
                    <Footer />
                  </Route>
                </Switch>
              </Route>
            </Switch>
          </HashRouter>
        </div>
      );
    } else {
      if (document.querySelector("body")) {
        if (
          document.querySelector("body").classList.contains("overflow-hidden")
        ) {
          document
            .querySelector("body")
            .classList.replace("overflow-hidden", "overflow-auto");
        }
      }
      components = (
        <div className="desktop">
          <Header />
          {/* <router>
            <div className="class">
              <route exact path='/bici' component={Cubre}></route>
            </div>
          </router> */}
          <HashRouter>
            <HomeParent />
            <div className="mx-40">
              <Cubre />
              {json.map((row) => {
                const { id, onlyMobile, pathDesktop } = row;
                let { path } = row;
                if (pathDesktop) {
                  path = pathDesktop;
                }
                if (!onlyMobile) {
                  return <div key={id}>{this.verifyPages(path)}</div>;
                }
                return null;
              })}
            </div>
          </HashRouter>
          <Footer />
        </div>
      );
    }
    return components;
  };

  verifyPages = (path) => {
    let component;
    switch (path) {
      case "/home/noCubre":
        component = <NoCubre />;
        break;
      case "/home/prevencion":
        component = <Prevencion />;
        break;
      case "/home/informacion":
        component = <Informacion />;
        break;
      case "/home/cobrarSeguro":
        component = <Cobrar />;
        break;
      case "/home/seguros":
        component = <Seguros />;
        break;
      case "/home/asistencia":
        component = <Asistencia />;
        break;
      case "/home/noCubre/irPreventips":
        component = <PreventipsConjunto />;
        break;
      case "/home/usarSeguro":
        component = <UsarSeguro />;
        break;
      case "/home/contacto":
        component = <Contacto />;
        break;
    }
    return component;
  };

  render() {
    const { body } = this.state;
    return <div className="App">{body}</div>;
  }
}

export default App;
