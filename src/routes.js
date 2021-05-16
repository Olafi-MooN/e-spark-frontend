import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { ScrollCategoryProvider } from "../src/providers/scrollCategory";

import { AuthProvider } from "../src/providers/auth";
import { AboutCarProvider } from "../src/providers/cards";
import { PaymentProvider } from "../src/providers/payment";

import { AboutCar } from "./pages/AboutCar";
import { Checkout } from "./pages/Checkout";
import { Pagamento } from "./pages/Pagamento";
import { Planos } from "./pages/Planos";
import { Usuario } from "./pages/Usuario";
import { Home } from "./pages/Home";
import { Historico } from "./pages/HistoryUser";
import { CardCredit } from './pages/CardCredit';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <AuthProvider>
          <AboutCarProvider>
            <ScrollCategoryProvider>
              <Route path="/" exact component={Home} />
            </ScrollCategoryProvider>
            <Route path="/aboutcar" component={AboutCar} />
            <PaymentProvider>
              <Route path="/plan" component={Planos} />
              <Route path="/creditcard" component={CardCredit} />
              <Route path="/checkout" component={Checkout} />
              <Route path="/payment" component={Pagamento} />
            </PaymentProvider>
          </AboutCarProvider>
          <Route path="/historyUser" component={Historico} />
          <Route path="/usuario" component={Usuario} />
        </AuthProvider>
      </Switch>
    </BrowserRouter>
  );
}
