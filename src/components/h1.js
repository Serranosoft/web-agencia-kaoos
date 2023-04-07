import styles from '@/styles/h1.module.scss'

export default function H1({children}) {


    return (
        <>
            <h1 className={styles.root}>{children}</h1>
        </>
    )
}