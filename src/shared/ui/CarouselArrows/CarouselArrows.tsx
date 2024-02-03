interface CarouselArrowsProps {
    onClick: () => void;
    [x: string]: any
}

export const CustomRightArrow = ({ onClick, ...rest }: CarouselArrowsProps) => {
    const {
        onMove,
        carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    // @ts-ignore
    return <button onClick={() => onClick()} style={{width: '100px', height: '100px', background: 'black'}}/>;
};
