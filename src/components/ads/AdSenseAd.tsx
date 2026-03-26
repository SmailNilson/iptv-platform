"use client";

import { useEffect } from "react";

declare global {
    interface Window {
        adsbygoogle: unknown[];
    }
}

export function AdSenseAd() {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
            console.error("AdSense error:", err);
        }
    }, []);

    return (
        <div style={{ margin: "2rem 0", textAlign: "center", minHeight: "100px" }}>
            <ins
                className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-3235102292758932"
                data-ad-slot="auto"
                data-ad-format="auto"
                data-full-width-responsive="true"
            />
        </div>
    );
}
