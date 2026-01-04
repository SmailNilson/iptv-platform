"use client";

import { useState } from 'react';
import styles from './ContactForm.module.css';

interface ContactFormProps {
    source?: 'email' | 'whatsapp' | 'form';
    defaultMessage?: string;
}

export function ContactForm({ source = 'form', defaultMessage = '' }: ContactFormProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: defaultMessage
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess(false);

        try {
            const response = await fetch('/api/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email || undefined,
                    phone: formData.phone || undefined,
                    message: formData.message || undefined,
                    source: source
                }),
            });

            const data = await response.json();

            if (data.success) {
                setSuccess(true);
                setFormData({ name: '', email: '', phone: '', message: '' });

                // Redirect to WhatsApp if source is whatsapp
                if (source === 'whatsapp' && formData.phone) {
                    const whatsappUrl = `https://wa.me/17575357760?text=${encodeURIComponent(
                        `Bonjour, je suis ${formData.name}. ${formData.message || 'Je souhaite un test gratuit 24h IPTV Premium'}`
                    )}`;
                    window.open(whatsappUrl, '_blank');
                }
            } else {
                setError(data.error || 'Une erreur est survenue');
            }
        } catch (err) {
            setError('Erreur de connexion. Veuillez réessayer.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                <label htmlFor="name">Nom complet *</label>
                <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="Votre nom"
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="votre@email.com"
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="phone">Téléphone / WhatsApp</label>
                <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+33 6 12 34 56 78"
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    placeholder="Votre message..."
                />
            </div>

            {error && <div className={styles.error}>{error}</div>}
            {success && <div className={styles.success}>✅ Merci ! Nous vous contacterons bientôt.</div>}

            <button
                type="submit"
                className={styles.submitButton}
                disabled={loading}
            >
                {loading ? 'Envoi en cours...' : 'Envoyer'}
            </button>

            <p className={styles.note}>
                * Au moins un email ou un téléphone est requis
            </p>
        </form>
    );
}
