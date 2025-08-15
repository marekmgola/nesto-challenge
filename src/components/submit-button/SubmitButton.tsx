'use-client'
import Button from "../buttton/Button"
import { useFormStatus } from "react-dom"
import Spinner from "../spinner/Spinnner"

const SubmitButton = ({ disabled, children }: {
    disabled: boolean
    children?: React.ReactNode
}) => {
    const { pending } = useFormStatus()
    const disableButton = pending || disabled
    return <Button variant="primary" loading={pending} type="submit" disabled={disableButton}>
        <div className="row">
            {pending ? <Spinner size={12} color="var(--color_dark_blue)" /> : null}
            {children}
        </div>
    </Button>
}

export default SubmitButton