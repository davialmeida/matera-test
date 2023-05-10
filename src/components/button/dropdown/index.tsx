import { KeyboardArrowDown } from '@mui/icons-material';
import { Box, MenuItem } from '@mui/material';
import { useState } from 'react';

import { LoggedUserMenu } from './styles';

export interface DropdownProps {
  options: {
    label: string;
    onClick: () => void;
  }[];
}

const Dropdown = ({ options }: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = (fn?: () => void) => {
    setAnchorEl(null);
    setOpen(false);
    fn && fn();
  };

  return (
    <>
      <Box sx={{ cursor: 'pointer' }} onClick={handleClick}>
        <KeyboardArrowDown sx={{ cursor: 'pointer', display: 'flex' }} />
      </Box>
      <LoggedUserMenu
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={(e) => handleClose()}
        anchorEl={anchorEl}
      >
        {options?.map((option, index) => (
          <MenuItem key={index} onClick={(e) => handleClose(option.onClick)}>
            {option.label}
          </MenuItem>
        ))}
      </LoggedUserMenu>
    </>
  );
};

export default Dropdown;
