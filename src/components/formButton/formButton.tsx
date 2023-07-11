import React from 'react';
import { Button, styled } from '@mui/material';

interface FormButtonProps {
  disabled: boolean;
}

const StyledButton = styled(Button)(({}) => ({
  '&.Mui-disabled': {
    color: "white",
    backgroundColor: "#81c784",
    '&:hover': {
      backgroundColor: "#81c784",
    },
  },
}));

function FormButton({ disabled = false }: FormButtonProps) {
  return (
    <StyledButton
      variant="contained"
      color="success"
      type="submit"
      disabled={disabled}
    >
      Acortar
    </StyledButton>
  );
}

export default FormButton;
