import { Orbitron, Inter } from 'next/font/google'; // Importăm Inter

export const orbitron = Orbitron({
    subsets: ['latin'],
    variable: '--font-orbitron',
    display: 'swap',
});

export const inter = Inter({ // Configurăm Inter
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});