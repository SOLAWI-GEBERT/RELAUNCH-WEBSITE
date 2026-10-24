import { ErnteanteilAbschnitt, ErnteanteilSeite } from "../../components/ErnteanteilSeite";
import { ernteanteilNach } from "../../data/ernteanteile";

const anteil = ernteanteilNach("kirschgarten-beeren")!;

export function KirschgartenBeeren() {
  return (
    <ErnteanteilSeite anteil={anteil}>
      <ErnteanteilAbschnitt anteil={anteil} />
    </ErnteanteilSeite>
  );
}
