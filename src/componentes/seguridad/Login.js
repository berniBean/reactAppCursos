import React, { useState } from 'react'
import style from '../Tool/Style';
import { Button,Avatar, Container, TextField, Typography,Grid } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import { loginUsuario } from '../../Actions/UsuarioAction';

const Login =()=>{
    const [usuario,setUsuario] = useState({
        Email : '',
        Password : ''
    })

    const IngresarValoresMemoria = e => {
        const {name,value} = e.target;
        setUsuario(anteior => ({
            ...anteior,
            [name] : value
            
        }))
    }
    const iniciarSesion = e =>{
        e.preventDefault();
        loginUsuario(usuario)
        .then( response => {
            console.log('sesion iniciada',response)
            window.localStorage.setItem("token_seguridad",response.data.token)
        })

    }
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
                                    name="Email"
                                    value={usuario.Email}
                                    onChange = {IngresarValoresMemoria}
                                   
                                    variant="filled" 
                                    fullWidth 
                                    label = "Ingrese su Correo"
                                    margin='normal'>
                                </TextField>  

                            <TextField 
                                name="Password"
                                value={usuario.Password}
                                onChange = {IngresarValoresMemoria}                                
                                type="password"
                                variant="filled" 
                                fullWidth 
                                label = "Ingrese su contraseña"
                                margin= "normal">
                            </TextField>                           
 
                    <Button type="submit"
                            onClick={iniciarSesion} 
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