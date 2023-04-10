import styles from "../styles/components/container.module.scss"

export default function Container({children, large, style}) {

    return (
        <>
            <section className={`${styles.root} ${large ? styles.large : ''} ${style ? style : ''}`}>{children}</section>
        </>
    )
}