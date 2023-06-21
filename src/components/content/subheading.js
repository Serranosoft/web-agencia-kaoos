import styles from "@/styles/components/content/subheading.module.scss"
import Text from "./text"
export default function SubHeading({children, className, line}) {

    return (
        <Text xxl className={`${styles.root} ${className && className} ${line ? styles.line : ''}`}>{children}</Text>
    )
}