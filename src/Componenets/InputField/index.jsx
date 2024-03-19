import { TextField } from '@mui/material'
import React from 'react'

function InputField(label , type) {
    return (<TextField
        id="outlined-basic"
        label={label}
        type={type}
        variant="outlined" />)
}

export default InputField
