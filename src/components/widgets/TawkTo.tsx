"use client";

import { useEffect } from 'react';

// Replace with your Tawk.to Property ID and Widget ID
const TAWK_PROPERTY_ID = 'YOUR_TAWK_PROPERTY_ID';
const TAWK_WIDGET_ID = 'YOUR_TAWK_WIDGET_ID';

export const TawkTo = () => {
    useEffect(() => {
        // Tawk.to Script
        const s1 = document.createElement("script");
        s1.async = true;
        s1.src = `https://embed.tawk.to/${TAWK_PROPERTY_ID}/${TAWK_WIDGET_ID}`;
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        document.head.appendChild(s1);

        return () => {
            // Cleanup on unmount
            document.head.removeChild(s1);
        };
    }, []);

    return null;
};
