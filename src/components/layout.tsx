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
                        About
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
