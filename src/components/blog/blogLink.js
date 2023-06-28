import Link from "next/link";
import styles from "@/styles/components/blog/blogLink.module.scss"
export default function BlogLink({ href, img, className, style, alt }) {


    return (
        <Link style={style && style} className={`${styles.root} ${className && className}`} href={href}>
            <img src={img} alt={alt} />
        </Link>
    )
}