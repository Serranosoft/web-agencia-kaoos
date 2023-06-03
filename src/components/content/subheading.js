import styles from "@/styles/components/content/subheading.module.scss"
import Text from "./text"
export default function SubHeading({children, className}) {

    return (
        <Text className={`${styles.root} ${className && className}`}>{children}</Text>
    )
}