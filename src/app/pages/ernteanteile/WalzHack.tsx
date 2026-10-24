import { ErnteanteilAbschnitt, ErnteanteilSeite } from "../../components/ErnteanteilSeite";
import { ernteanteilNach } from "../../data/ernteanteile";

const anteil = ernteanteilNach("walz-hack")!;

export function WalzHack() {
  return (
    <ErnteanteilSeite anteil={anteil}>
      <ErnteanteilAbschnitt anteil={anteil} />
    </ErnteanteilSeite>
  );
}
