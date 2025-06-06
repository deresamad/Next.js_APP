'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.css';

/**
 * Navigation Component
 * 
 * A responsive navigation bar that shows the current active route.
 * 
 * Features:
 * - Automatic active link highlighting based on current route
 * - Responsive design with hover effects
 * - Consistent styling across the application
 * 
 * Props: None
 * 
 * State Management:
 * - Uses Next.js usePathname hook to track current route
 */
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