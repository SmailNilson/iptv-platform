"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ContactsRedirect() {
    const router = useRouter();

    useEffect(() => {
        router.replace('/contact');
    }, [router]);

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            background: 'var(--bg-primary)',
            color: 'white'
        }}>
            Redirection...
        </div>
    );
}
