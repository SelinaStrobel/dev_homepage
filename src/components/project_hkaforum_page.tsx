import Image from "./image.js";
import Layout from "./layout.js";

export default function HKAForumPage(): React.ReactNode {
    return <Layout title="Selina's Homepage">

        <div className="index_page">
            <h1 className="index_page_some_heading"> <a href="/about"></a> </h1>
            <Image inputPath="./resources/Eingang Holzmodell.jpg" lazy={true} />
            <Image inputPath="./resources/Tragwerk_Iso.jpg" lazy={true} />
            <Image inputPath="./resources/Titel_Eingang 1.200.jpg" lazy={true} />

        </div>

    </Layout>

}