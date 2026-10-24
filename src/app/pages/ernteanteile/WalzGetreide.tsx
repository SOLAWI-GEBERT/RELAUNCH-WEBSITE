import { ErnteanteilAbschnitt, ErnteanteilSeite } from "../../components/ErnteanteilSeite";
import { ernteanteilNach } from "../../data/ernteanteile";

const anteil = ernteanteilNach("walz-getreide")!;

export function WalzGetreide() {
  return (
    <ErnteanteilSeite anteil={anteil}>
      <ErnteanteilAbschnitt anteil={anteil} />
    </ErnteanteilSeite>
  );
}
