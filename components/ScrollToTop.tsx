"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLenis } from 'lenis/react';

export default function ScrollToTop() {
    const pathname = usePathname();
    const lenis = useLenis();

    useEffect(() => {
        // Când se schimbă pagina, folosim instanța Lenis pentru a da scroll sus.
        // `immediate: true` asigură că saltul este instantaneu, nu animat (standard pentru navigare).
        if (lenis) {
            lenis.scrollTo(0, { immediate: true });
        } else {
            // Fallback nativ dacă Lenis nu este gata
            window.scrollTo(0, 0);
        }
    }, [pathname, lenis]);

    return null;
}