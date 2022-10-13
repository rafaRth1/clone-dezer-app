import { useRef } from 'react';

export const useSlider = () => {
	const fila: any = useRef<HTMLDivElement>(null);

	const handleLeft = (ancho: any) => {
		const imageCarousel: any = document.querySelector('.card-slider');
		const widthImageCarousel: any = imageCarousel?.scrollWidth;
		ancho.current.scrollLeft -= widthImageCarousel;
	};

	const handleRight = (ancho: any) => {
		const imageCarousel: any = document.querySelector('.card-slider');
		const widthImageCarousel: any = imageCarousel?.scrollWidth;
		ancho.current.scrollLeft += widthImageCarousel;
	};

	return { fila, handleLeft, handleRight };
};
