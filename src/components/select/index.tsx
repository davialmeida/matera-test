import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as SelectBase,
  SelectProps,
} from '@mui/material';

const Select = ({
  options,
  ...props
}: SelectProps & {
  options: {
    label: string;
    value: string | number;
  }[];
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel id={props.id}>{props.label}</InputLabel>
      <SelectBase labelId={props.id} id={props.id} {...props}>
        {options?.map((option, idx) => (
          <MenuItem key={idx} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </SelectBase>
    </FormControl>
  );
};

export default Select;
