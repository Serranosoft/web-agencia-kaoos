import styles from '@/styles/highlight.module.scss'

export default function Highlight({children, large}) {


    return (
        <>
            <span className={styles.root}>{children}</span>
        </>
    )
}