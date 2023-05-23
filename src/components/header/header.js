import styles from '@/styles/header/header.module.scss'
import Logo from '@/components/logo/logo'
import Text from '../content/text'
import { useRouter } from 'next/router'
import Button from '../content/button';
import Link from 'next/link';

export default function Header() {
    
    const route = useRouter();

    return (
        <header className={`${styles.root} ${route.pathname.split('/')[1] === "blog" && styles.light}`}>
            <div>
                <Link href="/">
                    <Logo />
                </Link>
                {
                    route.pathname.split('/')[1] === "blog" && <Link href="/blog"><Text>Blog</Text></Link>
                }
            </div>
            {
                route.pathname.split('/')[1] !== "blog" && <Button highlight to="/blog">Ver Blog</Button>
            }

        </header>
    )
}