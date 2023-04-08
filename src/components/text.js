import styles from '@/styles/text.module.scss'

export default function Text({children, large}) {


    return (
        <>
            <p className={`${styles.root} ${large === true ? styles.large : ''}`}>{children}</p>
        </>
    )
}