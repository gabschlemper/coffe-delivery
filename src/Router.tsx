import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayouts";
import { Home } from "./pages/Home";
import { Checkout } from "./pages/Checkout";
import { ConfirmedOrder } from "./pages/ConfirmedOrder";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Checkout />} />
        <Route path="/confirmed-order" element={<ConfirmedOrder />} />
      </Route>
    </Routes>
  );
}
