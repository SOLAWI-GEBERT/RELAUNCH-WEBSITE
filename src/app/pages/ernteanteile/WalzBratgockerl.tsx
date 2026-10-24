import { ErnteanteilAbschnitt, ErnteanteilSeite } from "../../components/ErnteanteilSeite";
import { ernteanteilNach } from "../../data/ernteanteile";

const anteil = ernteanteilNach("walz-bratgockerl")!;

export function WalzBratgockerl() {
  return (
    <ErnteanteilSeite anteil={anteil}>
      <ErnteanteilAbschnitt anteil={anteil} />
    </ErnteanteilSeite>
  );
}
