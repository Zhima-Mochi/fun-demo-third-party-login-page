import React from 'react';
import styles from '../styles/UserPage.module.css';

const UserPage: React.FC = () => {
    // Mock user data for demonstration. In a real application, you'd fetch this data.
    const user = {
        name: 'John Doe',
        imageUrl: 'https://via.placeholder.com/150' // Placeholder image URL
    };

    return (
        <div className={styles.container}>
            <img src={user.imageUrl} alt={user.name} className={styles.profileImage} />
            <h2 className={styles.userName}>{user.name}</h2>
        </div>
    );
}

export default UserPage;
