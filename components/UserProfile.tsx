'use client';
import { useState } from 'react';
import styles from './UserProfile.module.css';

interface UserData {
    name: string;
    email: string;
    theme: 'light' | 'dark';
    notifications: boolean;
}

const UserProfile = () => {
    const [userData, setUserData] = useState<UserData>({
        name: '',
        email: '',
        theme: 'light',
        notifications: true,
    });

    const [isEditing, setIsEditing] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsEditing(false);
        setIsSaved(true);
        setTimeout(() => setIsSaved(false), 3000);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = e.target;
        setUserData({
            ...userData,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
        });
    };

    return (
        <div className={styles.container}>
            <h2>User Profile</h2>
            {isSaved && <div className={styles.savedMessage}>Profile updated successfully!</div>}

            {isEditing ? (
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={userData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={userData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="theme">Theme:</label>
                        <select
                            id="theme"
                            name="theme"
                            value={userData.theme}
                            onChange={handleChange}
                        >
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label>
                            <input
                                type="checkbox"
                                name="notifications"
                                checked={userData.notifications}
                                onChange={handleChange}
                            />
                            Enable Notifications
                        </label>
                    </div>

                    <button type="submit" className={styles.saveButton}>
                        Save Changes
                    </button>
                </form>
            ) : (
                <div className={styles.profile}>
                    <div className={styles.profileInfo}>
                        <p><strong>Name:</strong> {userData.name || 'Not set'}</p>
                        <p><strong>Email:</strong> {userData.email || 'Not set'}</p>
                        <p><strong>Theme:</strong> {userData.theme}</p>
                        <p><strong>Notifications:</strong> {userData.notifications ? 'Enabled' : 'Disabled'}</p>
                    </div>
                    <button
                        onClick={() => setIsEditing(true)}
                        className={styles.editButton}
                    >
                        Edit Profile
                    </button>
                </div>
            )}
        </div>
    );
};

export default UserProfile; 