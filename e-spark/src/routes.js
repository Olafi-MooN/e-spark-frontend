import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { ScrollCategoryProvider } from "../src/providers/scrollCategory";

import { AuthProvider } from "../src/providers/auth";

import { AboutCar } from "./pages/AboutCar";
//import { Checkout } from "./pages/Checkout";
//import { Pagamento } from "./pages/Pagamento";
import { Planos } from "./pages/Planos";
import { Usuario } from "./pages/Usuario";
import { Home } from "./pages/Home";
import { Historico } from "./pages/HistoryUser";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <AuthProvider>
          <ScrollCategoryProvider>
            <Route path="/" exact component={Home} />
          </ScrollCategoryProvider>
          <Route path="/aboutcar" component={AboutCar} />
          <Route path="/planos" component={Planos} />
          <Route path="/usuario" component={Usuario} />
          <Route path="/historyUser" component={Historico} />
        </AuthProvider>
      </Switch>
    </BrowserRouter>
  );
}
