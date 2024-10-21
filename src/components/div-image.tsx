export function DivImage({ height, width, img, smallClass }: { height: string; width: string; img: string; smallClass: string }) {
    return (
        <div
            className={smallClass}
            style={{
                height: height,
                width: width,
                backgroundImage: `url(${img})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: `${width} ${height}`,
                borderBottomLeftRadius: '5px',
                borderBottomRightRadius: '5px',
                margin: '.5rem',
            }}
        />
    );
}
