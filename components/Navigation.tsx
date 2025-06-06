'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.css';

const Navigation = () => {
    const pathname = usePathname();

    return (
        <nav className={styles.nav}>
            <Link href="/" className={pathname === '/' ? styles.active : ''}>
                Home
            </Link>
            <Link href="/todos" className={pathname === '/todos' ? styles.active : ''}>
                Todo List
            </Link>
            <Link href="/profile" className={pathname === '/profile' ? styles.active : ''}>
                Profile
            </Link>
        </nav>
    );
};

export default Navigation; 