import parse from 'html-react-parser';
import Image from 'next/image';

export default function ConvertBody({ content }) {
    return (
        <>
            {parse(content, {
                replace: (node) => {
                    if (node.name === 'img') {
                        const { src, alt, width, height } = node.attribs;
                        return (
                            <Image
                                src={src}
                                alt={alt}
                                layout="responsive"
                                width={width}
                                height={height}
                                sizes="{min-width: 768px} 768px, 100vw"
                                priority
                            />
                        );
                    }
                },
            })}
        </>
    );
}