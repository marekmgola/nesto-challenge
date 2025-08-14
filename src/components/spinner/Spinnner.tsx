import styles from "./spinnner.module.css"

type SpinnerProps = {
    color?: string
}

const Spinner = ({ color = '--color_yellow' }: SpinnerProps) => {
    return (
        <div className={`${styles['lds-dual-ring']}`} style={{ color: `var(${color})` }}></div>
    )
}

export default Spinner