import React, {FC} from 'react'

interface AlertProps {
    alertText?: string
    alertType?: string
}

export const Alert: FC<AlertProps> = (props) => {

    const text = props.alertText || 'no data'
    const type = props.alertType || 'secondary'

    return (
        <div className={"mt-3 alert alert-" + type} role="alert">
            {text}
        </div>
    )
}