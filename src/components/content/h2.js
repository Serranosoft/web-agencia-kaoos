import styles from '@/styles/components/content/h2.module.scss'

export default function H2({children, className}) {


    return (
        <>
            <h2 className={`${styles.root} ${className && className}`}>{children}</h2>
        </>
    )
}