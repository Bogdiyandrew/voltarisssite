"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie_consent");
        if (!consent) {
            setShowBanner(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookie_consent", "true");
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-800 p-4 z-[100] text-white flex flex-col md:flex-row items-center justify-between gap-4 shadow-2xl">
            <p className="text-sm text-zinc-300 text-center md:text-left">
                Folosim cookie-uri pentru a analiza traficul și a îmbunătăți experiența.{" "}
                <Link href="/politica-cookies" className="underline hover:text-white">
                    Detalii
                </Link>
            </p>
            <div className="flex gap-3">
                <button
                    onClick={() => setShowBanner(false)}
                    className="text-sm text-zinc-400 hover:text-white px-4 py-2 cursor-pointer"
                >
                    Refuz
                </button>
                <button
                    onClick={acceptCookies}
                    className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-bold transition-colors cursor-pointer"
                >
                    Accept
                </button>
            </div>
        </div>
    );
}