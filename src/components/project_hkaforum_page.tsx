import Image from "./image.js";
import Layout from "./layout.js";

export default function HKAForumPage(): React.ReactNode {
    return <Layout title="HKA Forum">

        <div className="hkaforum_page_container">

            <div className="hkaforum_page_item1">
                <Image inputPath="./resources/Eingang Holzmodell.jpg" lazy={true} />
            </div>

            <div className="hkaforum_page_item2">
                <Image inputPath="./resources/Tragwerk_Iso.jpg" lazy={true} />
            </div>

            <div className="hkaforum_page_item3">
                <Image inputPath="./resources/Titel_Eingang 1.200.jpg" lazy={true} />
            </div>
            <div className="hkaforum_page_text1">

                <h1>HKA Forum</h1>
                <h2>Entwurf BA3+4</h2>
                <p>
                    Das HKA Forum ist ein zweiteiliger Baukörper.
                    Das Hauptgebäude besteht aus einem fünfgeschossigen Kubus mit quadratischem Grundriss, welcher ein zentrales Atrium aufweist.
                </p>
                <p>
                    Im ersten und zweiten Obergeschoss befinden sich verschiedenste Lernräume und Lernplätze direkt am Atrium.
                    Vorlesungen finden im dritten Geschoss statt, dort befinden sich der Hörsaal und PC-Poolräume.
                    Im obersten Geschoss liegt die Bibliothek, welche gleichzeitig Ausblick über den Campus bietet.
                </p>
                <p>
                    Der Veranstaltungsraum ist ein seperater Baukörper, der in das Hauptgebäude eingeschoben ist.
                    Die Verbindung der beiden Baukörper wird durch eine durchgängige Glasfuge gebildet, die sich wie ein Band wei-
                    ter um das Hauptgebäude wickelt.
                    So bildet der entstehende Luftraum eine Art Pufferzone und lässt das Hauptgebäude scheinbar darüber schweben.
                </p>

            </div>

        </div>

    </Layout>

}
