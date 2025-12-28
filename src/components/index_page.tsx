import Layout from "./layout.js";

interface IndexPageProps {
    some_text: string,
}
export default function IndexPage(props: IndexPageProps): React.ReactNode {
    return <Layout title="Selina">
        <body>
            <div>
                <h1 className="index_page_some_heading"> <a href="/about">Merry CHRIStmas!!</a> </h1>
                <p>{props.some_text}</p>


            </div>
        </body>
    </Layout>

}