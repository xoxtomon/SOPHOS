import styles from './page.module.css';
import '../public/global.css';
import CustomCard from '@/components/card/CustomCard';
import CardGrid from '@/components/cardGrid/CardGrid';
import CustomTab from '@/components/tab/CustomTab';

export default function Home() {
    const cardArray = [
        {
            id: 1,
            name: 'Paul',
            lastName: 'Martinez',
            email: 'paul@mail.com',
        },
        {
            id: 1,
            name: 'Paul',
            lastName: 'Martinez',
            email: 'paul@mail.com',
        },
        {
            id: 1,
            name: 'Paul',
            lastName: 'Martinez',
            email: 'paul@mail.com',
        },
        {
            id: 1,
            name: 'Paul',
            lastName: 'Martinez',
            email: 'paul@mail.com',
        },
        {
            id: 1,
            name: 'Paul',
            lastName: 'Martinez',
            email: 'paul@mail.com',
        },
        {
            id: 1,
            name: 'Paul',
            lastName: 'Martinez',
            email: 'paul@mail.com',
        }
    ];

    //<button className={styles.btn}>Learn More</button>
    return (
        <div className={styles.App}>
            <div className={styles.AppHeader}>
                <h1>GameBuster</h1>
                <CustomTab />
                <p>This is a basic landing page created with Next.js</p>
                <CardGrid propsArray={cardArray} />
            </div>
        </div>
    )
}