"use client";

import { useEffect, useState } from 'react';
import { Navbar } from "@/components/layout/Navbar";
import styles from './contacts.module.css';

interface Contact {
    id: number;
    name: string;
    email: string | null;
    phone: string | null;
    source: string;
    message: string | null;
    status: string;
    created_at: string;
}

export default function ContactsAdmin() {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState<string>('all');

    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        try {
            const response = await fetch('/api/contacts');
            const data = await response.json();
            if (data.success) {
                setContacts(data.data);
            }
        } catch (error) {
            console.error('Error fetching contacts:', error);
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('fr-FR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const getStatusBadge = (status: string) => {
        const badges: Record<string, { color: string; label: string }> = {
            new: { color: '#3B82F6', label: 'Nouveau' },
            contacted: { color: '#F59E0B', label: 'Contacté' },
            converted: { color: '#22C55E', label: 'Converti' },
            lost: { color: '#EF4444', label: 'Perdu' }
        };
        const badge = badges[status] || badges.new;
        return (
            <span style={{
                padding: '0.25rem 0.75rem',
                borderRadius: '12px',
                backgroundColor: badge.color + '20',
                color: badge.color,
                fontSize: '0.85rem',
                fontWeight: '600'
            }}>
                {badge.label}
            </span>
        );
    };

    const getSourceIcon = (source: string) => {
        const icons: Record<string, string> = {
            email: '📧',
            whatsapp: '📱',
            form: '📝'
        };
        return icons[source] || '📝';
    };

    const filteredContacts = filter === 'all'
        ? contacts
        : contacts.filter(c => c.status === filter);

    return (
        <main className={styles.main}>
            <Navbar />

            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>📊 Gestion des Contacts (CRM)</h1>
                    <div className={styles.stats}>
                        <div className={styles.statCard}>
                            <div className={styles.statValue}>{contacts.length}</div>
                            <div className={styles.statLabel}>Total Contacts</div>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statValue}>
                                {contacts.filter(c => c.status === 'new').length}
                            </div>
                            <div className={styles.statLabel}>Nouveaux</div>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statValue}>
                                {contacts.filter(c => c.status === 'converted').length}
                            </div>
                            <div className={styles.statLabel}>Convertis</div>
                        </div>
                    </div>
                </div>

                <div className={styles.filters}>
                    <button
                        className={filter === 'all' ? styles.activeFilter : ''}
                        onClick={() => setFilter('all')}
                    >
                        Tous ({contacts.length})
                    </button>
                    <button
                        className={filter === 'new' ? styles.activeFilter : ''}
                        onClick={() => setFilter('new')}
                    >
                        Nouveaux ({contacts.filter(c => c.status === 'new').length})
                    </button>
                    <button
                        className={filter === 'contacted' ? styles.activeFilter : ''}
                        onClick={() => setFilter('contacted')}
                    >
                        Contactés ({contacts.filter(c => c.status === 'contacted').length})
                    </button>
                    <button
                        className={filter === 'converted' ? styles.activeFilter : ''}
                        onClick={() => setFilter('converted')}
                    >
                        Convertis ({contacts.filter(c => c.status === 'converted').length})
                    </button>
                </div>

                {loading ? (
                    <div className={styles.loading}>Chargement...</div>
                ) : (
                    <div className={styles.tableContainer}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Source</th>
                                    <th>Nom</th>
                                    <th>Email</th>
                                    <th>Téléphone</th>
                                    <th>Message</th>
                                    <th>Status</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredContacts.map((contact) => (
                                    <tr key={contact.id}>
                                        <td>{getSourceIcon(contact.source)}</td>
                                        <td className={styles.name}>{contact.name}</td>
                                        <td>{contact.email || '-'}</td>
                                        <td>{contact.phone || '-'}</td>
                                        <td className={styles.message}>
                                            {contact.message ? contact.message.substring(0, 50) + '...' : '-'}
                                        </td>
                                        <td>{getStatusBadge(contact.status)}</td>
                                        <td className={styles.date}>{formatDate(contact.created_at)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </main>
    );
}
