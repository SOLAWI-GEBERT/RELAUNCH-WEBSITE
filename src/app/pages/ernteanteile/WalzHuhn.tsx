import { ErnteanteilAbschnitt, ErnteanteilSeite } from "../../components/ErnteanteilSeite";
import { ernteanteilNach } from "../../data/ernteanteile";

const anteil = ernteanteilNach("walz-huhn")!;

export function WalzHuhn() {
  return (
    <ErnteanteilSeite anteil={anteil}>
      <ErnteanteilAbschnitt anteil={anteil} />
    </ErnteanteilSeite>
  );
}
