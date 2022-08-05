import { useRef } from "react";
import { IoChevronBackSharp } from "react-icons/io5";
import { IoChevronForwardSharp } from "react-icons/io5";

interface PropsSlider {
    children: JSX.Element[] | JSX.Element
}

const Slider = ({ children }: PropsSlider) => {

    const containerRow = useRef<HTMLDivElement>(null);

    const handleLeft = (width: React.RefObject<HTMLDivElement>) => {
        const imageCarousel: Element | null = document.querySelector('.card-slider');
        const widthImageCarousel: number | undefined = imageCarousel?.scrollWidth;
        width.current!.scrollLeft -= widthImageCarousel!;
    };

    const handleRight = (width: React.RefObject<HTMLDivElement>) => {
        const imageCarousel: Element | null = document.querySelector('.card-slider');
        const widthImageCarousel: number | undefined = imageCarousel?.scrollWidth;
        width.current!.scrollLeft += widthImageCarousel!;
    };

    return (
        <>
            <section className='slider' ref={containerRow}>
                <div className='slider-content'>
                    {children}
                </div>
            </section>

            <div className="arrows">
                <button onClick={() => handleLeft(containerRow)}>{'<'}</button>
                <button onClick={() => handleRight(containerRow)}>{'>'}</button>
            </div>
        </>
    );
}

export default Slider