import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { SolidarischeLandwirtschaft } from "./pages/SolidarischeLandwirtschaft";
import { HoefeUndErnteanteile } from "./pages/HoefeUndErnteanteile";
import { Mitmachen } from "./pages/Mitmachen";
import { Kalender } from "./pages/Kalender";
import { Anmeldung } from "./pages/Anmeldung";
import { LieferungKalender } from "./pages/LieferungKalender";
import { KontaktAnmeldung } from "./pages/KontaktAnmeldung";
import { Impressum } from "./pages/Impressum";
import { Datenschutz } from "./pages/Datenschutz";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "solidarische-landwirtschaft", Component: SolidarischeLandwirtschaft },
      { path: "hoefe-und-ernteanteile", Component: HoefeUndErnteanteile },
      { path: "mitmachen", Component: Mitmachen },
      { path: "kalender", Component: Kalender },
      { path: "anmeldung", Component: Anmeldung },
      { path: "lieferung-kalender", Component: LieferungKalender },
      { path: "kontakt-anmeldung", Component: KontaktAnmeldung },
      { path: "impressum", Component: Impressum },
      { path: "datenschutz", Component: Datenschutz },
    ],
  },
]);