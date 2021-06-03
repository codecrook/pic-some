import { useState, useRef, useEffect } from 'react';

export default function useHover() {
    const [hovered, setHovered] = useState(false);
    const ref = useRef(null);
    const enter = () => setHovered(true);
    const leave = () => setHovered(false);

    useEffect(() => {
        const currentRef = ref.current;
        currentRef.addEventListener('mouseenter', enter);
        currentRef.addEventListener('mouseleave', leave);
        return () => {
            currentRef.removeEventListener('mouseenter', enter);
            currentRef.removeEventListener('mouseleave', leave);
        };
    }, []);

    return [hovered, ref];
}
