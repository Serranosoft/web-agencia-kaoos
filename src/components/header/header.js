import styles from '@/styles/header/header.module.scss'
import Logo from '@/components/logo/logo'
import Text from '../content/text'
import { useRouter } from 'next/router'

export default function Header() {

    const route = useRouter();

    return (
        <header className={`${styles.root} ${route.pathname.split('/')[1] === "blog" && styles.light}`}>
            <Logo />
            {
                route.pathname.split('/')[1] === "blog" && <Text>Blog</Text>
            }
        </header>
    )
}