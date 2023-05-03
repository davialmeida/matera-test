import { TextField, TextFieldProps } from '@mui/material';
import styled from 'styled-components';

export type InputProps = {
  mask?: (value: string) => string;
} & TextFieldProps;

const Input = styled(({ onChange, ...props }: InputProps) => (
  <TextField
    {...props}
    InputLabelProps={{
      ...props.InputLabelProps,
      shrink: true,
    }}
    onChange={(e) => {
      e.stopPropagation();
      e.preventDefault();
      if (props.mask) {
        e.target.value = props.mask(e.currentTarget.value);
      }
      onChange && onChange(e);
    }}
  />
))``;

export default Input;
