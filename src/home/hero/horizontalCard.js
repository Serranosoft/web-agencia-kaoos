import styles from '@/styles/home/hero/horizontalCard.module.scss'
import { HiUserAdd } from "react-icons/hi";
import Text from "@/components/content/text";

export default function HorizontalCard() {

    return (
        <div className={`${styles.root}  aos-effect2-el`}>
            <div className={styles.content}>
                <div>
                    <HiUserAdd size={45} />
                    <Text xl={true}><strong>APP's y ASO</strong></Text>
                </div>
                <Text>Da el paso para tener tu aplicación móvil y deja que la posicionemos en el top de su categoría. <strong>Facilidad, accesibilidad y comodidad</strong>.</Text>
            </div>
        </div>
    )
}