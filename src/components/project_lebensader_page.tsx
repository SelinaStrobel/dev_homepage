import Image from "./image.js";
import Layout from "./layout.js";

export default function LebensaderPage(): React.ReactNode {
    return <Layout title="Die Lebensader">

        <div className="lebensader_page_container">

            <div className="lebensader_page_titleimage">
                <Image inputPath="./resources/SBE4_Stadtquartier_PRT_Modellbild_05a.png" lazy={true} />
            </div>

            <div className="lebensader_page_lageplan">
                <Image inputPath="./resources/SBE4_Stadtquartier_PRT_Lageplan_HG_03.jpg" lazy={true} />
            </div>

            <div className="lebensader_page_pikto_lebensader">
                <Image inputPath="./resources/SBE4_Stadtquartier_PRT_Piktogramm_Lebensader_01.jpg" lazy={true} />
            </div>

            <div className="lebensader_page_pikto_baustruktur">
                <Image inputPath="./resources/SBE4_Stadtquartier_PRT_Piktogramm_Baustruktur_02.jpg" lazy={true} />
            </div>

            <div className="lebensader_page_pikto_gebäudehöhe">
                <Image inputPath="./resources/SBE4_Stadtquartier_PRT_Piktogramm_Gebäudehöhe_01.jpg" lazy={true} />
            </div>

            <div className="lebensader_page_pikto_wegenetz">
                <Image inputPath="./resources/SBE4_Stadtquartier_PRT_Piktogramm_Wegenetz_01.jpg" lazy={true} />
            </div>

            <div className="lebensader_page_pikto_retentionsraum">
                <Image inputPath="./resources/SBE4_Stadtquartier_PRT_Piktogramm_Retentionsraum_04.jpg" lazy={true} />
            </div>

            <div className="lebensader_page_grundriss_eg">
                <Image inputPath="./resources/SBE4_Stadtquartier_PRT_GrundrissEG.jpg" lazy={true} />
            </div>

            <div className="lebensader_page_grundriss_og">
                <Image inputPath="./resources/SBE4_Stadtquartier_PRT_GrundrissOG.jpg" lazy={true} />
            </div>

            <div className="lebensader_page_modellfoto_01">
                <Image inputPath="./resources/SBE4_Stadtquartier_PRT_Modellbild_08a.png" lazy={true} />
            </div>

            <div className="lebensader_page_modellfoto_02">
                <Image inputPath="./resources/SBE4_Stadtquartier_PRT_Modellbild_09a.png" lazy={true} />
            </div>

            <div className="lebensader_page_modellfoto_03">
                <Image inputPath="./resources/SBE4_Stadtquartier_PRT_Modellbild_10a.png" lazy={true} />
            </div>

            <div className="lebensader_page_modellfoto_04">
                <Image inputPath="./resources/SBE4_Stadtquartier_PRT_Modellbild_11c.png" lazy={true} />
            </div>

            <div className="lebensader_page_schnitt_a">
                <Image inputPath="./resources/SBE4_Stadtquartier_PRT_SchnittA.jpg" lazy={true} />
            </div>

            <div className="lebensader_page_schnitt_b">
                <Image inputPath="./resources/SBE4_Stadtquartier_PRT_SchnittB.jpg" lazy={true} />
            </div>

            <div className="lebensader_page_visualisierung">
                <Image inputPath="./resources/SBE4_Stadtquartier_PRT_Visualisierung_01.png" lazy={true} />
            </div>

            <div className="lebensader_page_text1 text">

                <h1>Die Lebensader</h1>
                <h2>Stadtbauentwurf BA4</h2>
                <h3>Konzept</h3>
                <p>
                    Das Konzept „Lebensader“ basiert auf einer zentralen grünen Zone aus,
                    die sich durch das gesamte Quartier erstreckt und damit eine Verbindung des Oberwalds im Osten und der Alb im Westen darstellt.
                </p>
                <p>
                    Der parkähnlich gestaltete Grünzug bietet eine hohe Lebensqualität für Menschen, Tiere und Pflanzen.
                    Der Park ist beidseitig von Wohnblöcken eingefasst, die sich zur Quartiersmitte öffnen.
                    Es entsteht ein fließender Übergang vom öffentlichen Park hin zu den privaten Innenhöfen.
                </p>
                <p>
                    Die „Lebensader“ verfolgt das Ziel, ein hohes Grünraumangebot zu schaffen und trotzdem eine hohe Wohnungsdichte zu erreichen.
                </p>

            </div>

            <div className="lebensader_page_text_lebensader text">
                <h3>Vom Oberwald bis zur Alb</h3>
                <p>
                    Der öffentlich zugängliche Park führt von Ost nach West durch das Quartier und verbindet den Oberwald mit dem Albgrün, die zwei Orte, an denen Kaltluft entsteht.
                    In den Sommermonaten kann kühle Luft hindurchströmen und eine Überhitzung verhindern.
                </p>
                <p>
                    Für die Zukunft bietet das Konzept die Möglichkeit, den derzeit ungenutzten Grünstreifen im Osten aufzuwerten.
                    Es ist anzustreben, dass in nachfolgenden Entwicklungen des Stadtraums westlich der „Lebensader“ der Park fortgeführt wird, um eine durchgehende grüne Achse zu schaffen, die sowohl die ökologische als auch die soziale Vernetzung stärkt.
                </p>
            </div>

            <div className="lebensader_page_text_baustruktur text">
                <h3>Gebäudetypologie</h3>
                <p>
                    Der Grünzug ist beidseitig von Wohnblöcken eingefasst, die sich zur Quartiersmitte öffnen.
                    Das Ergebnis ist eine Reihe von u-förmigen Gebäuden.
                    Die „Flügel“ der Blöcke passen sich dem breiter werdenden Grünzug an.
                    Daher haben sie keine rechten Winkel und sind nicht gleich lang.
                </p>
                <p>
                    Ein Netz aus größeren Wegen und kleineren Pfaden mit Aktivitätszonen schafft Räume der Begegnung.
                    So findet man neben vielen Sitzgelegenheiten auch einen Barfußpfad, Spielplätze, Fitnessgeräte, Tischtennisplatten, Bücherschränke und vieles mehr.
                </p>
            </div>

            <div className="lebensader_page_text_wegenetz text">
                <h3>Zugänge ins Viertel</h3>
                <p>
                    Die Gassen zwischen den „Flügeln“ bilden Eingänge zum zentralen Grünzug und werden von Fußgängern und Fahrradfahrern dominiert.
                    Hier befinden sich die Hauseingänge und straßenbegleitende Fahrradabstellplätze.
                    Durch die gegenüberliegende Bahnhaltestelle sind sie autofrei realisierbar.
                </p>

                <p>
                    Die Gasse im Westen ist breiter gestaltet.
                    Sie geht aus dem Resedenweg der Gartenstadt hervor und durchquert als wichtige Nord-Süd-Verbindung das Quartier.
                    An der Stelle, wo diese Achse den Grünzug kreuzt, befindet sich ein Platz.
                    Dort sind die Blöcke geschlossen und bieten Raum für das zum Park ausgerichtete Gewerbe, wie einem Café.
                </p>
                <p>
                    Die Tiefgarage des Quartiers befindet sich unter den zwei Blöcken im Südwesten.
                    Die Zufahrt erfolgt über die Herrenalber Straße.
                </p>
            </div>

            <div className="lebensader_page_text_gebäudehöhe text">
                <h3>Gebäudehöhe</h3>
                <p>
                    Beim Übergang zur Gartenstadt im Süden übernehmen die Blöcke mit ihren vier Geschossen die Höhe der angrenzenden Zeilenbauten.
                    Die Seiten der Blöcke, welche zur Herrenalber Straße und zur Straße am Rüppurrer Schloss ausgerichtet sind, haben fünf Geschosse, um das Innere des Quartiers von den stark frequentierten Straßen abzugrenzen.

                </p>
                <p>
                    Die geschlossene Bauweise schützt zudem vor Lärmbelastung durch die große Verkehrskreuzung im Nordwesten.
                    Dort befindet sich mit sieben Geschossen der höchste Punkt der Bebauung, der mit den benachbarten Hochhäusern interagiert.
                    Zum Grünzug stufen sich die „Flügel“ der Gebäude auf drei Geschosse ab.
                </p>

            </div>

            <div className="lebensader_page_text_retentionsraum text">
                <h3>Retentionsraum</h3>
                <p>
                    Durch das Sockelgeschoss ist es möglich, in den Gassen ein Gefälle zum Grünzug hin auszubilden.
                    Entwässerungsrinnen fangen anfallendes Regenwasser auf und leiten es zum Park, wo es versickern kann.

                </p>
                <p>
                    Im Grünzug befinden sich Mulden, die sich bei Starkregenereignissen füllen können.
                    Das Wasser wird temporär gespeichert und zeitverzögert wieder abgegeben.
                    Die höhergelegenen Wege bleiben trocken.
                </p>

            </div>

            <div className="lebensader_page_text_hof text">
                <h3>Gemeinsamer Hof</h3>
                <p>
                    Die Innenhöfe sind privatisiert und für die Bewohner des jeweiligen Blocks bestimmt.
                    Sie werden gemeinschaftlich genutzt und bilden somit einen Ort der Begegnung.
                    Mithilfe der Bepflanzung wird ein fließender Übergang von dem dichten Bewuchs des Grünzugs bis hin zu einer lichteren Begrünung des Hofs geschaffen und damit der Unterschied zwischen dem öffentlichen und dem privaten Bereich ablesbar.
                    Gleichzeitig kann der Grünzug auch als Erweiterung des eigenen Gartens gesehen werden.

                </p>
                <p>
                    Vom Park kommende größere Wege verjüngen sich und steigen zu den Eingängen leicht an, um den Höhenunterschied zwischen Hof und Erdgeschoss zu überwinden.
                    Die privaten Terrassen der Erdgeschosswohnungen sind dadurch und durch zusätzliche Bepflanzung blickgeschützt.
                    Die Wohnungen in den Obergeschossen besitzen zum Hof ausgerichtete Balkone.
                </p>

            </div>

            <div className="lebensader_page_text_fassade text">
                <h3>Fassadengestaltung</h3>
                <p>
                    Die Fassade zum Innenhof steht im Bezug zum Grünzug und übernimmt dessen spielerischen Charakter.
                    Sie setzt sich aus vertikalen Holzlamellen zusammen, die unregelmäßig angeordnet sind, aber im Ganzen ein einheitliches Bild ergeben.
                    An ihnen können Pflanzen hochranken und zusätzlichen Sichtschutz bieten.

                </p>
                <p>
                    Durch die herausstehenden Balkone bekommt die Fassade eine gewisse Tiefe und Spiel.
                    Zu den Straßen und Gassen erscheint die Holzfassade flächig und geschlossen.
                </p>

            </div>


        </div>

    </Layout>
}