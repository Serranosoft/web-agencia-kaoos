import styles from '@/styles/header/header.module.scss'
import Logo from '@/components/logo/logo'
import Text from '../content/text'
import { DM_Serif_Text } from 'next/font/google'

const title = DM_Serif_Text({ subsets: ['latin'], weight: "400" })

export default function Header(blog = false) {

    return (
        <header className={`${styles.root} ${blog && styles.light} ${title.className}`}>
            <Logo />
            {
                blog && <Text>Blog</Text>
            }
        </header>
    )
}