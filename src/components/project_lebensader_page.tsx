import Image from "./image.js";
import Layout from "./layout.js";

export default function LebensaderPage(): React.ReactNode {
    return <Layout title="Die Lebensader">



        <div className="lebensader_page_titleimage">
            <Image inputPath="./resources/SBE4_Stadtquartier_PRT_Modellbild_05a.png" lazy={true} />
        </div>




    </Layout>
}