import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { SolidarischeLandwirtschaft } from "./pages/SolidarischeLandwirtschaft";
import { Ernteanteile } from "./pages/Ernteanteile";
import { HedererSommergemuese } from "./pages/ernteanteile/HedererSommergemuese";
import { HedererObst } from "./pages/ernteanteile/HedererObst";
import { TristansWintergemuese } from "./pages/ernteanteile/TristansWintergemuese";
import { WalzHuhn } from "./pages/ernteanteile/WalzHuhn";
import { WalzBratgockerl } from "./pages/ernteanteile/WalzBratgockerl";
import { WalzHack } from "./pages/ernteanteile/WalzHack";
import { WalzWurst } from "./pages/ernteanteile/WalzWurst";
import { WalzGetreide } from "./pages/ernteanteile/WalzGetreide";
import { KirschgartenBeeren } from "./pages/ernteanteile/KirschgartenBeeren";
import { Mitmachen } from "./pages/Mitmachen";
import { SoFunktionierts } from "./pages/SoFunktionierts";
import { FragenAntworten } from "./pages/FragenAntworten";
import { Kalender } from "./pages/Kalender";
import { Anmeldung } from "./pages/Anmeldung";
import { Depots } from "./pages/Depots";
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
      { path: "ernteanteile", Component: Ernteanteile },
      { path: "ernteanteile/hederer-sommer", Component: HedererSommergemuese },
      { path: "ernteanteile/hederer-obst", Component: HedererObst },
      { path: "ernteanteile/tristans-winter", Component: TristansWintergemuese },
      { path: "ernteanteile/walz-huhn", Component: WalzHuhn },
      { path: "ernteanteile/walz-bratgockerl", Component: WalzBratgockerl },
      { path: "ernteanteile/walz-hack", Component: WalzHack },
      { path: "ernteanteile/walz-wurst", Component: WalzWurst },
      { path: "ernteanteile/walz-getreide", Component: WalzGetreide },
      { path: "ernteanteile/kirschgarten-beeren", Component: KirschgartenBeeren },
      { path: "mitmachen", Component: Mitmachen },
      { path: "so-funktionierts", Component: SoFunktionierts },
      { path: "haeufige-fragen", Component: FragenAntworten },
      { path: "kalender", Component: Kalender },
      { path: "anmeldung", Component: Anmeldung },
      { path: "depots", Component: Depots },
      { path: "kontakt-anmeldung", Component: KontaktAnmeldung },
      { path: "impressum", Component: Impressum },
      { path: "datenschutz", Component: Datenschutz },
    ],
  },
]);