import styles from "@/styles/components/content/highlight.module.scss"
import Text from "./text"

export default function Highlight({children, large}) {


    return (
        <>
            <Text xl className={styles.root}>{children}</Text>
        </>
    )
}