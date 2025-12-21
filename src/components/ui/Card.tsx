import React from 'react';
import styles from './Card.module.css';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    highlight?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className, highlight = false }) => {
    return (
        <div className={`${styles.card} ${highlight ? styles.highlight : ''} ${className || ''}`}>
            {children}
        </div>
    );
};
