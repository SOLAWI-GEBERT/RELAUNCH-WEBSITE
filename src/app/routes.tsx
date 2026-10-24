import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { SolidarischeLandwirtschaft } from "./pages/SolidarischeLandwirtschaft";
import { Ernteanteile } from "./pages/Ernteanteile";
import { TristansWintergemuese } from "./pages/ernteanteile/TristansWintergemuese";
import { TristanSommergemuese } from "./pages/ernteanteile/TristanSommergemuese";
import { WalzHuhn } from "./pages/ernteanteile/WalzHuhn";
import { WalzBratgockerl } from "./pages/ernteanteile/WalzBratgockerl";
import { WalzHack } from "./pages/ernteanteile/WalzHack";
import { WalzWurst } from "./pages/ernteanteile/WalzWurst";
import { WalzGetreide } from "./pages/ernteanteile/WalzGetreide";
import { KirschgartenBeeren } from "./pages/ernteanteile/KirschgartenBeeren";
import { KirschgartenObst } from "./pages/ernteanteile/KirschgartenObst";
import { SchweigertsEdelpilze } from "./pages/ernteanteile/SchweigertsEdelpilze";
import { Mitmachen } from "./pages/Mitmachen";
import { SoFunktionierts } from "./pages/SoFunktionierts";
import { FragenAntworten } from "./pages/FragenAntworten";
import { Kalender } from "./pages/Kalender";
import { Depots } from "./pages/Depots";
import { Newsletter } from "./pages/Newsletter";
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
      { path: "ernteanteile/tristan-winter", Component: TristansWintergemuese },
      { path: "ernteanteile/tristan-sommer", Component: TristanSommergemuese },
      { path: "ernteanteile/walz-huhn", Component: WalzHuhn },
      { path: "ernteanteile/walz-bratgockerl", Component: WalzBratgockerl },
      { path: "ernteanteile/walz-hack", Component: WalzHack },
      { path: "ernteanteile/walz-wurst", Component: WalzWurst },
      { path: "ernteanteile/walz-getreide", Component: WalzGetreide },
      { path: "ernteanteile/kirschgarten-beeren", Component: KirschgartenBeeren },
      { path: "ernteanteile/kirschgarten-obst", Component: KirschgartenObst },
      { path: "ernteanteile/schweigerts-edelpilze", Component: SchweigertsEdelpilze },
      { path: "mitmachen", Component: Mitmachen },
      { path: "so-funktionierts", Component: SoFunktionierts },
      { path: "haeufige-fragen", Component: FragenAntworten },
      { path: "kalender", Component: Kalender },
      { path: "depots", Component: Depots },
      { path: "newsletter", Component: Newsletter },
      { path: "impressum", Component: Impressum },
      { path: "datenschutz", Component: Datenschutz },
    ],
  },
]);