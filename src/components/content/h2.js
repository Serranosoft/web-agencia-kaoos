import styles from '@/styles/components/h2.module.scss'

export default function H2({children}) {


    return (
        <>
            <h2 className={styles.root}>{children}</h2>
        </>
    )
}