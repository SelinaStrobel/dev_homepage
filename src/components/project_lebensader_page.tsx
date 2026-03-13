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

            <div className="lebensader_page_text1">

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

            <div className="lebensader_page_text_lebensader">
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

            <div className="lebensader_page_text_baustruktur">
                <h3>Gebäudetypologie</h3>
                <p>
                    Der Grünzug ist beidseitig von Wohnblöcken eingefasst, die sich zur Quartiersmitte öffnen.
                    Das Ergebnis ist eine Reihe von u-förmigen Gebäuden.

                </p>
                <p>
                    Die „Flügel“ der Blöcke passen sich dem breiter werdenden Grünzug an.
                    Daher haben sie keine rechten Winkel und sind nicht gleich lang.
                    Ein Netz aus größeren Wegen und kleineren Pfaden mit Aktivitätszonen schafft Räume der Begegnung.
                    So findet man neben vielen Sitzgelegenheiten auch einen Barfußpfad, Spielplätze, Fitnessgeräte, Tischtennisplatten, Bücherschränke und vieles mehr.
                </p>
            </div>

        </div>

    </Layout>
}