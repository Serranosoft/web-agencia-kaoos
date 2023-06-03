import styles from '@/styles/components/content/h3.module.scss'

export default function H3({children}) {


    return (
        <>
            <h3 className={styles.root}>{children}</h3>
        </>
    )
}