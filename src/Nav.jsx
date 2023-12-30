import React from 'react';
import { useFont } from './FontContext';
import { Button , Typography, Toolbar, AppBar }from '@mui/material';
const Navbar = () => {
  const { font, toggleFont } = useFont();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ fontFamily: font }}>
          App
        </Typography>
        <Button color="inherit" onClick={toggleFont}>
          Toggle Font
        </Button>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
