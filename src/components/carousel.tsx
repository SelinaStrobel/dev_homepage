import type React from "react";

interface CarouselProps {
    elements: React.ReactNode[],
}

export default function Carousel(props: CarouselProps): React.ReactNode {
    let key = (Math.floor(Math.random() * 100000) + 1).toString();

    return <div className="carousel">
        {props.elements.map((e, i) =>
            <div id={`carousel_${key}_${i}`} className="carousel_element" key={i}>
                <a className="carousel_left" href={`#carousel_${key}_${(i + props.elements.length - 1) % props.elements.length}`}>
                    {/* left */}
                    <img src="data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='0,50 80,100 80,0' fill='%23fff'/%3E%3C/svg%3E" />
                </a>
                <a className="carousel_right" href={`#carousel_${key}_${(i + 1) % props.elements.length}`}>
                    {/* left */}
                    <img src="data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='100,50 20,100 20,0' fill='%23fff'/%3E%3C/svg%3E" />
                </a>
                {e}
            </div>)}
    </div>;
}
