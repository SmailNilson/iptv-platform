/**
 * Preload critical images for faster page loads
 * Add this to the head of pages with hero images
 */

interface PreloadImageProps {
    src: string;
    as?: 'image';
    type?: 'image/webp' | 'image/jpeg' | 'image/png';
}

export function PreloadImage({ src, as = 'image', type = 'image/webp' }: PreloadImageProps) {
    return (
        <link
            rel="preload"
            href={src}
            as={as}
            type={type}
        />
    );
}
