import styles from '@/styles/text.module.scss'

export default function Text({children}) {


    return (
        <>
            <p className={styles.root}>{children}</p>
        </>
    )
}