import { CharWrapper, WindupChildren } from "windups";
import styles from "@/styles/components/misc/windup.module.scss"
import { DM_Serif_Text } from 'next/font/google'
const font = DM_Serif_Text({ subsets: ['latin'], weight: "400" })


export default function WindupElement({ children, isAnswer, onFinished, mode }) {
    return (
        <WindupChildren onFinished={onFinished}>
            <div className={`${styles.windup} ${isAnswer && styles.windupAnswer}`}>
                <CharWrapper element={RotateChar}>
                    {children}
                </CharWrapper>
            </div>
        </WindupChildren>
    )
}

const RotateChar = ({ children }) => {
    return <span className={`${styles.root} ${styles.rotate} ${font.className}`}>{children}</span>
}