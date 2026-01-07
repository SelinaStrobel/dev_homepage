import Image from "./image.js";
import Layout from "./layout.js";


export default function IndexPage(): React.ReactNode {
    return <Layout title="Selina's Homepage">

        <div className="index_page">
            <h1 className="index_page_heading">Meine Projekte</h1>

            <div className="index_page_body">
                

             <a className="index_page_project" href="/projects/hkaforum">
                <Image inputPath="./resources/Eingang Holzmodell.jpg" lazy={true} />
                <div className="index_page_project_title">
                    HKA Forum &ndash; dritter Ort für den HKA-Campus
                </div>
             </a>

             <a className="index_page_project" href="/projects/dielebensader">
                <Image inputPath="./resources/SBE4_Stadtquartier_PRT_Modellbild_05a.png" lazy={true} />
                <div className="index_page_project_title">
                    Die Lebensader 
                </div>
             </a>

             <a className="index_page_project" href="/projects/marshaus">
                <Image inputPath="./resources/Marshaus.jpg" lazy={true} />
                <div className="index_page_project_title">
                    Marshaus &ndash; Visualisierung
                </div>
             </a>

            </div>
            

        </div>

    </Layout>

}