import Layout from "./layout.js";
interface AboutPageProps {
    some_text: string,
}
export default function AboutPage(props: AboutPageProps): React.ReactNode {
   return <Layout title="Selina">
              <body>
                <div>
                    <h1 className="index_page_some_heading"> <a href="/about">Merry CHRIStmas!!</a> </h1>
                    <p>{props.some_text}</p>
                    <a href="/about">About</a>
                    
                </div>
            </body>
        </Layout>

    
}
