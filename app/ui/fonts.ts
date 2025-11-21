import { Orbitron } from 'next/font/google';

export const orbitron = Orbitron({
    subsets: ['latin'],
    variable: '--font-orbitron', // Asta ne ajută să îl folosim în Tailwind
    display: 'swap',
});