import Image from "./image.js";
import Layout from "./layout.js";


export default function IndexPage(): React.ReactNode {
    return <Layout title="Selina">

        <div className="index_page">
            <h1 className="index_page_some_heading"> "Merry CHRIStmas!! </h1>

            <a href="/projects/hkaforum">
                <Image inputPath="./resources/Eingang Holzmodell.jpg" lazy={true} />
            </a>


        </div>

    </Layout>

}