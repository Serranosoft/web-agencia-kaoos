import styles from '@/styles/section.module.scss'

export default function Section({children, large, style}) {

    return (
        <>
            <div className={`${styles.root} ${large ? styles.large : ''} ${style && style}`}>{children}</div>
        </>
    )
}