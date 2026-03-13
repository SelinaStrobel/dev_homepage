import Carousel from "./carousel.js";
import Image from "./image.js";
import Layout from "./layout.js";

export default function MarshausPage(): React.ReactNode {
    return <Layout title="Marshaus &ndash; Visualisierung">

        <div className="marshaus_page">

            <div className="marshaus_page_titleimage">
                <Image inputPath="./resources/Marshaus21fertig.jpg" lazy={true} />
            </div>

            <div className="marshaus_page_text1">

                <h1>Marshaus</h1>
                <h2>Visualisierung BA3</h2>
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
                    Die Verbindung der beiden Baukörper wird durch eine durchgängige Glasfuge gebildet, die sich wie ein Band weiter um das Hauptgebäude wickelt.
                    So bildet der entstehende Luftraum eine Art Pufferzone und lässt das Hauptgebäude scheinbar darüber schweben.
                </p>

            </div>

            <Carousel elements={[
                <div className="marshaus_page_carousel_picture" >
                    <Image inputPath="./resources/Marshaus01.jpg" lazy={false} />
                </div>,
                <div className="marshaus_page_carousel_picture" >
                    <Image inputPath="./resources/Marshaus05.jpg" lazy={false} />
                </div>,
                <div className="marshaus_page_carousel_picture" >
                    <Image inputPath="./resources/Marshaus06.jpg" lazy={false} />
                </div>,
                <div className="marshaus_page_carousel_picture" >
                    <Image inputPath="./resources/Marshaus09.jpg" lazy={false} />
                </div>,
                <div className="marshaus_page_carousel_picture" >
                    <Image inputPath="./resources/Marshaus13.jpg" lazy={false} />
                </div>,
                <div className="marshaus_page_carousel_picture" >
                    <Image inputPath="./resources/Marshaus14.jpg" lazy={false} />
                </div>,
                <div className="marshaus_page_carousel_picture" >
                    <Image inputPath="./resources/Marshaus15.jpg" lazy={false} />
                </div>,
                <div className="marshaus_page_carousel_picture" >
                    <Image inputPath="./resources/Marshaus16.jpg" lazy={false} />
                </div>,
                <div className="marshaus_page_carousel_picture" >
                    <Image inputPath="./resources/Marshaus21fertig.jpg" lazy={false} />
                </div>,
            ]} />

        </div>

    </Layout>

}
