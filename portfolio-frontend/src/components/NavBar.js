import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
        Iulia's portfolio
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home Page
        </Button>
        <Button color="inherit" component={Link} to="/portofolio">
          Creations
        </Button>
        <Button color="inherit" component={Link} to="/add">
          Add New Work
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
