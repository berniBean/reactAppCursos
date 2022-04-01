import { Toolbar, IconButton, Typography, makeStyles, Button, Avatar } from '@material-ui/core';
import React from 'react';
import FotoUsuario from '../../logo.svg'

const useStyles = makeStyles((theme) => ({
    seccionDesktop:{
        display : 'none',
        [theme.breakpoints.up("md")] :{
            display : 'flex'
        }
    }, 
    seccionMobile :{
        display : 'flex',
        [theme.breakpoints.up("md")] : {
            display : 'none'
        }
    },   
    grow : {
            flexGrow: 1
        },
    avatarSize :{
        width : 40,
        height : 40
    }
    }))

const BarSesion = () => {

    const classes = useStyles();

    return (
        <Toolbar>
            <IconButton color ="inherit">
                <i className='material-icons'>menu</i>
            </IconButton>

            <Typography variant='h6' >Cursos Online</Typography>

            <div className={classes.grow}></div>

            <div className={classes.seccionDesktop}>
                <Button color = "inherit">Salir</Button>
                <Button color="inherit">
                    {"Nombre de Usuario"}
                </Button>
                <Avatar src={FotoUsuario} >
                </Avatar>

            </div>

            <div className={classes.seccionMobile}>
                <IconButton color ="inherit">
                    <i className='material-icons'>more</i>
                </IconButton>

            </div>
            



        </Toolbar>
    );
};

export default BarSesion;