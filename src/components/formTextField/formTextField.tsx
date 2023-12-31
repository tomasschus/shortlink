import React, { useEffect, useRef } from 'react';
import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import { ChangeEvent } from "react";

interface FormTextFieldProps {
    value: string;
    onChange: Function;
}

const FormTextField = ({ value, onChange }: FormTextFieldProps) => {

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    const CustomTextField = styled(TextField)({
        '& label.Mui-focused': {
          color: 'white',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: 'white',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'white',
          },
          '&:hover fieldset': {
            borderColor: 'white',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'white',
          },
        },
        '& .MuiInputBase-input': {
          color: 'white',
        },
        '& .MuiInput-underline:before': {
          borderBottomColor: 'white', // default
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
          borderBottomColor: 'white', // hover
        },
        '& .MuiInputBase-input::placeholder': {
          color: 'white', // placeholder
        },
      });
      
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if(inputRef.current){
          inputRef.current.placeholder = "Escribe la URL aquí"
        }
    }, []);

    useEffect(() => inputRef.current?.focus(), [value])

    return (
        <CustomTextField
            id="url-input"
            className="url-input"
            label="URL"
            value={value}
            onChange={handleChange}
            fullWidth
            required
            InputLabelProps={{
                style: { color: 'white' }
            }}
            InputProps={{
                style: { color: 'white' }
            }}
            inputRef={inputRef}
        />
    );
}

export default FormTextField;
