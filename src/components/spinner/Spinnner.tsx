import { size } from "zod"
import styles from "./spinnner.module.css"

type SpinnerProps = {
    color?: string
    size?: number
}

const Spinner = ({ color = '--color_yellow', size = 50 }: SpinnerProps) => {
    return (
        <div className={styles.spinner} style={{ width: size, height: size, color: ` border: 4px solid var(${color})` }} ></div>
    )
}

export default Spinner