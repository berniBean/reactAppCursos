import React from 'react'
import style from '../Tool/Style';
import { Button,Avatar, Container, TextField, Typography,Grid } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';

const Login =()=>{
    return(

            <Container  maxWidth="xs" justify="center">
                <div style={style.paper}>
                    <Avatar style={style.avatar}>
                        <LockIcon style={style.icon}/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Login de usuario
                    </Typography>
                    <form style={style.form}>

                                <TextField 
                                    name="username" 
                                    variant="filled" 
                                    fullWidth 
                                    label = "Ingrese su usuario"
                                    margin='normal'>
                                </TextField>  

                            <TextField 
                                name="password"
                                type="password"
                                variant="filled" 
                                fullWidth 
                                label = "Ingrese su contraseña"
                                margin= "normal">
                            </TextField>                           
 
                    <Button type="submit" 
                                fullWidth variant="contained" 
                                color="primary" 
                                size="large" 
                                style={style.submit}>
                                    Iniciar sesión
                            </Button>                 
                    </form>

                </div>

            </Container>

    );
}

export default Login;