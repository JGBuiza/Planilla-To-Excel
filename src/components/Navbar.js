import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hamburger from 'hamburger-react'
import { NavIcon} from './NavbarElements';
import green from "@material-ui/core/colors/green";


const drawerWidth = 0
const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    fontFamily: 'Kaushan Script',
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
  },
  grow : {
    alignItems: 'center',
    display: 'flex',
    marginLeft: '30%'
  },
  appBar: {
    background: '#000',
    boxShadow: 'none',
    color:'#fff',
    [theme.breakpoints.up('sm')]: {
      width: `10px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  customColor: {
    // or hex code, this is normal CSS background-color
    backgroundColor: green[500]
  },
  image: {
    marginLeft: '13%',
    padding: '4px'
  },
  customHeight: {
    minHeight: 10
  }, components: {
    MuiToolbar: {
      styleOverrides: {
        regular: {
          height: "12px",
          width: "20px",
          minHeight: "32px",
          "@media (min-width: 600px)": {
            minHeight: "48px",
          },
          backgroundColor: "#ffff00",
          color: "#000000",
        },
      },
    },
  },
}));

export default function Navbar({ toggle, isOpen}) {
  const classes = useStyles();
  
 
  return (
    <React.Fragment>
      <AppBar
      position="fixed" className={classes.appBar} color="inherit"
      >
        <Toolbar>
        <NavIcon onClick={toggle}>
        <Hamburger toggled={isOpen}/>
     </NavIcon>
          
      <div className={classes.grow} />
      <h1 className="titulo" align="center">Exportador de Planillas CSV</h1>
        </Toolbar>
      </AppBar>
  
    
    </React.Fragment>
  );
}
