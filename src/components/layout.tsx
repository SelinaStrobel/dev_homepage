interface LayoutProps {
    title: string,
}
export default function Layout(props: React.PropsWithChildren<LayoutProps>): React.ReactNode {
    return <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <title>{props.title}</title>
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <link rel="stylesheet" type="text/css" href="/styles.css" />
            <script defer src="https://analytics.chris-besch.com/script.js" data-website-id="7b94afa8-f505-4181-aeb4-4ca5b9bfb244"></script>
        </head>

        <body>
            <div className="layout_navbar">
                <div className="layout_navbar_left">
                    <a href="/">Selina Strobel</a>
                </div>
                <div className="layout_navbar_right">
                    <div>
                        Projekte
                    </div>
                    <div>
                        <a href="/about">About</a>
                    </div>

                </div>

            </div>

            <div className="layout_body">
                {props.children}
            </div>

            <div className="layout_footer">
                Contact
            </div>
        </body>
    </html>;
}
