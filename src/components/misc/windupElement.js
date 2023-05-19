import { CharWrapper, WindupChildren } from "windups";
import styles from "@/styles/components/misc/windup.module.scss"


export default function WindupElement({ children, isAnswer, onFinished, mode }) {
    return (
        <WindupChildren onFinished={onFinished}>
            <div className={`${styles.windup} ${isAnswer && styles.windupAnswer}`}>
                <CharWrapper element={mode === "jumpy" ? JumpyChar : RotateChar}>
                    {children}
                </CharWrapper>
            </div>
        </WindupChildren>
    )
}

const RotateChar = ({ children }) => {
    return <span className={`${styles.root} ${styles.rotate}`}>{children}</span>
}

const JumpyChar = ({ children }) => {
    return <span className={`${styles.root} ${styles.jumpy}`}>{children}</span>
}