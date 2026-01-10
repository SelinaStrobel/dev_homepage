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
                    Die Verbindung der beiden Baukörper wird durch eine durchgängige Glasfuge gebildet, die sich wie ein Band wei-
                    ter um das Hauptgebäude wickelt.
                    So bildet der entstehende Luftraum eine Art Pufferzone und lässt das Hauptgebäude scheinbar darüber schweben.
                </p>

            </div>

            <div className="marshaus_page_image_progress">

                <div className="marshaus_page_image01">
                    <Image inputPath="./resources/Marshaus01.jpg" lazy={true} />
                </div>

                <div className="marshaus_page_image02">
                    <Image inputPath="./resources/Marshaus02.jpg" lazy={true} />
                </div>

                <div className="marshaus_page_image03">
                    <Image inputPath="./resources/Marshaus03.jpg" lazy={true} />
                </div>

                <div className="marshaus_page_image04">
                    <Image inputPath="./resources/Marshaus04.jpg" lazy={true} />
                </div>

                <div className="marshaus_page_image05">
                    <Image inputPath="./resources/Marshaus05.jpg" lazy={true} />
                </div>

                <div className="marshaus_page_image06">
                    <Image inputPath="./resources/Marshaus06.jpg" lazy={true} />
                </div>

                <div className="marshaus_page_image07">
                    <Image inputPath="./resources/Marshaus07.jpg" lazy={true} />
                </div>

                <div className="marshaus_page_image08">
                    <Image inputPath="./resources/Marshaus08.jpg" lazy={true} />
                </div>

                <div className="marshaus_page_image09">
                    <Image inputPath="./resources/Marshaus09.jpg" lazy={true} />
                </div>

                <div className="marshaus_page_image10">
                    <Image inputPath="./resources/Marshaus10.jpg" lazy={true} />
                </div>

                <div className="marshaus_page_image11">
                    <Image inputPath="./resources/Marshaus11.jpg" lazy={true} />
                </div>

                <div className="marshaus_page_image12">
                    <Image inputPath="./resources/Marshaus12.jpg" lazy={true} />
                </div>

                <div className="marshaus_page_image13">
                    <Image inputPath="./resources/Marshaus13.jpg" lazy={true} />
                </div>

                <div className="marshaus_page_image14">
                    <Image inputPath="./resources/Marshaus14.jpg" lazy={true} />
                </div>

                <div className="marshaus_page_image15">
                    <Image inputPath="./resources/Marshaus15.jpg" lazy={true} />
                </div>

                <div className="marshaus_page_image16">
                    <Image inputPath="./resources/Marshaus16.jpg" lazy={true} />
                </div>

                <div className="marshaus_page_image17">
                    <Image inputPath="./resources/Marshaus17.jpg" lazy={true} />
                </div>

                <div className="marshaus_page_image18">
                    <Image inputPath="./resources/Marshaus18.jpg" lazy={true} />
                </div>

                <div className="marshaus_page_image19">
                    <Image inputPath="./resources/Marshaus19.jpg" lazy={true} />
                </div>

                <div className="marshaus_page_image20">
                    <Image inputPath="./resources/Marshaus20.jpg" lazy={true} />
                </div>

                <div className="marshaus_page_image21">
                    <Image inputPath="./resources/Marshaus21fertig.jpg" lazy={true} />
                </div>
            </div>




        </div>

    </Layout>

}