export function DivImage({ height, width, img, smallClass }: { height: string; width: string; img: string; smallClass: string }) {
    return (
        <div
            className={`img ${smallClass}`}
            style={{
                height: height,
                width: width,
                backgroundImage: `url(${process.env.PUBLIC_URL} ${img})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: `${width} ${height}`,
                borderBottomLeftRadius: '5px',
                borderBottomRightRadius: '5px',
                margin: '.5rem',
            }}
        />
    );
}
