import Login from '../components/Login';
import styles from './styles/index.module.css';

const IndexPage : React.FC = () => {
    return (
        <div className={styles.page}>
            <h1 className={styles.page__title}>Sign in</h1>
            <div className={styles.page__content}>
                <Login provider="google" />
                <Login provider="facebook" />
                <Login provider="line" />
            </div>
        </div>
    );
}

export default IndexPage;