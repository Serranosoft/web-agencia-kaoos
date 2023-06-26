import styles from "@/styles/components/content/container.module.scss"

export default function Container({children, large, className, ref, fullscreen, id}) {

    return (
        <>
            <section ref={ref} id={id} className={`${styles.root} ${large ? styles.large : ''} ${className ? className : ''} ${fullscreen ? styles.fullscreen : ''}`}>{children}</section>
        </>
    )
}