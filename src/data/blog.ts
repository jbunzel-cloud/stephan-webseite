export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  teaser: string;
  readTime: number;
  image: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'weniger-ist-mehr-makeup-tipps',
    title: 'Weniger ist mehr: Wie du mit 5 Produkten besser aussiehst als mit 20',
    date: '2026-11-05',
    category: 'Beauty',
    teaser: 'Die meisten Frauen besitzen zu viel Make-up – und nutzen es trotzdem falsch. Nach fast 40 Jahren vor dem Schminkspiegel weiß ich: Es geht nicht um mehr Produkte. Es geht um die richtigen.',
    readTime: 6,
    image: '/images/coaching/coaching-05-lippenstift.jpg',
    content: `
      <p>Ich sitze vor einer Frau. Auf dem Tisch vor ihr: Foundation in drei Farbtönen, vier Concealer, zwei Contour-Paletten, ein Highlighter-Set mit acht Tönen, Mascara in zwei Varianten, Lippenstifte in Farben, die sie „irgendwann mal" tragen möchte. Alles zusammen: leicht über tausend Euro.</p>
      <p>Davon benutzt sie täglich: Mascara und Lippenbalsam.</p>
      <p>Das ist kein Einzelfall. Es ist die Regel.</p>

      <h2>Warum wir zu viel kaufen</h2>
      <p>Die Beauty-Industrie verdient daran, dass wir glauben, noch ein Produkt zu brauchen. Der perfekte Blush. Die bessere Foundation. Der Concealer, der alles verdeckt. Jede Kampagne verspricht: Mit diesem Produkt bist du endlich richtig.</p>
      <p>Das Problem: Niemand erklärt dir, was zu <em>deinem</em> Gesicht, deiner Haut, deinem Alltag passt. Du kaufst ins Blaue. Manches gefällt dir im Laden, wirkt aber zuhause falsch. Vieles landet nach zwei Anwendungen in der Schublade.</p>
      <p>Ich habe in fast 40 Jahren tausende Gesichter geschminkt. Von Kate Moss bis zur Braut aus Mitte. Was ich dabei gelernt habe: Die Frauen, die am besten aussehen, haben nicht die meisten Produkte. Sie haben die richtigen.</p>

      <h2>Die 5 Produkte, die wirklich reichen</h2>
      <p><strong>1. Eine Foundation, die zu deiner Haut passt</strong> — nicht zu der Haut, die du gerne hättest. Der Farbton muss mit deinem Hals übereinstimmen, nicht mit dem, wie du gerne aussehen würdest.</p>
      <p><strong>2. Ein Concealer</strong> — eine Nummer heller als die Foundation, gezielt unter die Augen und auf Rötungen. Nicht übers ganze Gesicht.</p>
      <p><strong>3. Eine Mascara</strong> — die zu deinen Wimpern passt. Dünne Wimpern brauchen Volumen, lange Wimpern Definition. Eine Mascara für alles gibt es nicht.</p>
      <p><strong>4. Ein Produkt für die Wangen</strong> — Blush oder Bronzer, aber nicht beides. Welches, hängt von deinem Hautton ab.</p>
      <p><strong>5. Ein Lippenstift, den du wirklich trägst</strong> — nicht der mutigste, nicht der teuerste. Der, mit dem du dich wohlfühlst.</p>
      <p>Das war's. Alles andere ist optional.</p>

      <h2>Was du wahrscheinlich nicht brauchst</h2>
      <p>Contour-Paletten funktionieren im Studio, unter professionellem Licht, mit professionellen Pinseln. Im Alltag sehen sie selten so aus wie auf Instagram. Highlighter auf der falschen Stelle ziehen Aufmerksamkeit auf das, was du verstecken möchtest. Drei Foundations unterschiedlicher Deckkraft ersetzen nicht das Wissen, wie man eine richtig aufträgt.</p>
      <p>Ich sage das nicht, um dich zu beschämen. Ich sage es, weil ich dieses Gespräch täglich führe — und weil die meisten Frauen erleichtert sind, wenn sie es hören.</p>

      <h2>Was ein Coaching dir wirklich bringt</h2>
      <p>In einem Coaching mit mir bringst du mit, was du hast. Wir gehen durch deine Produkte. Was funktioniert für dich. Was nicht. Warum. Und wie du das, was du bereits besitzt, richtig einsetzt.</p>
      <p>Du gehst nicht mit einer Einkaufsliste raus. Du gehst mit dem Wissen raus, das dich ab sofort besser und gezielter entscheiden lässt.</p>
      <p>Viele meiner Coaching-Kundinnen sparen danach nachweislich Geld — weil sie aufgehört haben, Dinge zu kaufen, die nicht zu ihnen passen.</p>
    `,
  },
  {
    slug: 'braut-makeup-berlin-guide',
    title: 'Braut-Make-up Berlin: Der ultimative Guide',
    date: '2026-03-10',
    category: 'Hochzeit',
    teaser: 'Alles, was du über Braut-Make-up in Berlin wissen musst – von der Wahl des richtigen Artists bis zum perfekten Probetermin.',
    readTime: 8,
    image: 'https://placehold.co/800x500/1A1A1A/C9A96E?text=Braut+Make-up',
    content: `
      <p>Der Tag deiner Hochzeit ist einer der wichtigsten Tage in deinem Leben – und dein Make-up spielt dabei eine entscheidende Rolle. Als Hair & Make-up Artist in Berlin mit fast 40 Jahren Erfahrung weiß ich, worauf es ankommt.</p>
      <h2>Der Probetermin ist unverzichtbar</h2>
      <p>Ein Probetermin ist keine Option, sondern eine Notwendigkeit. Er gibt dir die Möglichkeit, den Look in Ruhe auszuprobieren, Anpassungen vorzunehmen und am großen Tag ohne Überraschungen aufzuwachen. Plane den Probetermin mindestens 4-6 Wochen vor der Hochzeit.</p>
      <h2>Langlebigkeit ist alles</h2>
      <p>Ein gutes Braut-Make-up muss 12 bis 16 Stunden halten – durch Tränen, Tanzen und Umarmungen. Das erfordert spezielle Produkte und Techniken, die ich in meiner langjährigen Praxis perfektioniert habe.</p>
      <h2>Frühzeitig buchen</h2>
      <p>Beliebte Wochenenden in Berlin sind oft 12-18 Monate im Voraus ausgebucht. Je früher du buchst, desto sicherer ist dein Wunschtermin.</p>
    `,
  },
  {
    slug: 'dm-vs-high-end-makeup',
    title: 'DM vs. High-End: Welches Make-up hält besser?',
    date: '2026-02-20',
    category: 'Beauty',
    teaser: 'Ein ehrlicher Vergleich zwischen Drogerie-Produkten und High-End-Kosmetik aus der Sicht eines erfahrenen Make-up Artists.',
    readTime: 6,
    image: 'https://placehold.co/800x500/4A4A4A/FAFAF8?text=DM+vs+High-End',
    content: `
      <p>Eine der am häufigsten gestellten Fragen, die ich bekomme: Lohnt sich High-End-Make-up oder reichen Produkte aus der Drogerie? Die ehrliche Antwort: Es kommt darauf an.</p>
      <h2>Wo Drogerie-Produkte überzeugen</h2>
      <p>Viele Drogerie-Mascara-Produkte übertreffen teure Alternativen in puncto Volumen und Halt. Auch Lippenstifte von Marken wie Catrice oder L'Oréal können sich vor Premium-Produkten nicht verstecken.</p>
      <h2>Wo sich die Investition lohnt</h2>
      <p>Bei Foundation und Concealer macht die Qualität häufig einen spürbaren Unterschied – in der Textur, der Haltbarkeit und der Hautverträglichkeit. Wer sensible Haut hat, sollte hier nicht sparen.</p>
    `,
  },
  {
    slug: '5-makeup-fehler',
    title: '5 Make-up-Fehler, die fast jeder macht',
    date: '2026-02-01',
    category: 'Beauty',
    teaser: 'Von falschem Foundation-Ton bis zur vernachlässigten Pflege – diese häufigen Fehler lassen sich leicht vermeiden.',
    readTime: 5,
    image: 'https://placehold.co/800x500/C9A96E/1A1A1A?text=Make-up+Fehler',
    content: `
      <p>Nach fast vier Jahrzehnten als Make-up Artist habe ich alles gesehen. Hier sind die fünf Fehler, die ich am häufigsten beobachte – und wie du sie vermeidest.</p>
      <h2>1. Foundation im falschen Licht aussuchen</h2>
      <p>Kaufe deine Foundation niemals unter dem grellen Licht eines Drogeriemarktes. Natürliches Tageslicht ist entscheidend für die richtige Farbwahl.</p>
      <h2>2. Zu wenig Primer</h2>
      <p>Ein guter Primer verlängert die Haltbarkeit deines Make-ups enorm und gleicht Unebenheiten aus.</p>
      <h2>3. Vergessener Hals</h2>
      <p>Foundation endet nie am Kinn. Vergiss nicht, den Hals und das Dekolleté einzubeziehen.</p>
    `,
  },
  {
    slug: 'event-styling-trends-2026',
    title: 'Event-Styling Trends 2026',
    date: '2026-01-15',
    category: 'Editorial',
    teaser: 'Was uns in der Welt des Event-Stylings 2026 erwartet – die spannendsten Trends aus Berlin und den internationalen Modemetropolen.',
    readTime: 7,
    image: 'https://placehold.co/800x500/1A1A1A/FAFAF8?text=Trends+2026',
    content: `
      <p>2026 steht im Zeichen von mutigen Farben, natürlicher Schönheit und nachhaltigem Ansatz in der Beauty-Welt. Hier meine Prognosen für die wichtigsten Trends des Jahres.</p>
      <h2>Glow und Luminosity</h2>
      <p>Strahlende, gepflegte Haut ist und bleibt das ultimative Statement. Weniger ist mehr – dafür aber mit höchster Qualität.</p>
      <h2>Kräftige Lippen</h2>
      <p>Nach Jahren des Nude-Lippenstifts sind kräftige Farben zurück: Bordeaux, tiefes Rot und sogar Dunkelblau machen Furore.</p>
    `,
  },
  {
    slug: 'mein-weg-vom-wiener-friseursalon',
    title: 'Mein Weg vom Wiener Friseursalon zu den Fashion Weeks',
    date: '2025-12-10',
    category: 'Behind the Scenes',
    teaser: 'Eine persönliche Geschichte über fast 40 Jahre Leidenschaft, Handwerk und die Suche nach der individuellen Schönheit jedes Menschen.',
    readTime: 10,
    image: 'https://placehold.co/800x500/4A4A4A/C9A96E?text=Mein+Weg',
    content: `
      <p>Alles begann in den frühen 1980er Jahren in einem kleinen Wiener Friseursalon. Ich war jung, ehrgeizig und fasziniert von der Transformation, die ich täglich bei Menschen beobachtete.</p>
      <h2>Wien in den 80ern</h2>
      <p>Die Ausbildung zum Friseur war streng und traditionell – genau das, was ich brauchte. Das Handwerk zu beherrschen ist die Grundlage für alles Kreative, das danach kommt.</p>
      <h2>Der Weg nach Berlin</h2>
      <p>1998 zog ich nach Berlin – eine Stadt, die damals wie eine Wunde war, die gerade heilte. Kreativ, chaotisch, uferlos. Genau richtig für mich.</p>
    `,
  },
  {
    slug: 'makeup-mit-drogerieprodukte-top-10',
    title: 'Make-up mit Drogerieprodukte: Meine Top 10 unter 20 Euro',
    date: '2025-11-20',
    category: 'Beauty',
    teaser: 'Meine persönlichen Favoriten aus der Drogerie – Produkte, die ich selbst immer wieder greife und die den Vergleich mit teuren Marken nicht scheuen.',
    readTime: 6,
    image: 'https://placehold.co/800x500/FAFAF8/1A1A1A?text=Top+10+Drogerie',
    content: `
      <p>Man muss nicht viel Geld ausgeben, um großartig auszusehen. Hier sind meine Top 10 Drogerie-Produkte, die ich immer wieder empfehle – aus persönlicher Erfahrung von tausenden Shootings und Events.</p>
      <h2>1. Mascara von L'Oréal Telescopic</h2>
      <p>Verlängernd, definierend und langlebig. Dieser Mascara ist mein Geheimtipp für natürliche, betonte Wimpern.</p>
      <h2>2. Catrice All Matt Plus Shine Control Powder</h2>
      <p>Perfekt für Touchups unterwegs. Mattiert ohne zu kaschieren und hält sich diskret im Hintergrund.</p>
    `,
  },
];
