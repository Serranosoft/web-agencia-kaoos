import styles from '@/styles/section.module.scss'

export default function Section({children, large}) {


    return (
        <>
            <div className={`${styles.root} ${large ? styles.large : ''}`}>{children}</div>
        </>
    )
}