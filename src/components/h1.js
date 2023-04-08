import styles from '@/styles/components/h1.module.scss'

export default function H1({children, style}) {


    return (
        <>
            <h1 className={`${styles.root} ${style && style}`}>{children}</h1>
        </>
    )
}