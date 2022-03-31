import React, {useState} from "react";
import { Button, Container, Grid, TextField, Typography } from "@material-ui/core";
import style from "../Tool/Style";
import { registraUsuario } from "../../Actions/UsuarioAction";


const RegistrarUsuario =() =>{
    
    const [usuario,setUsuario] = useState({
        NombreCompleto : '',
        Email : '',
        Password : '',
        ConfirmarPassword : '',
        UserName : ''
    })
    
    const IngresarValoresMemoria = e => {
        const {name,value} = e.target;
        setUsuario(anteior => ({
            ...anteior,
            [name] : value
            
        }))
    }

    const NuevoUsuarioBoton = e => {
        e.preventDefault();
        registraUsuario(usuario)
        .then(response => {
            console.log("Se Registro exitosamente el nuevo Usuario",response)
            window.localStorage.setItem("token_seguridad",response.data.token)
        })
    }


    return(
        <Container component="main" maxWidth="md" justify="center">
            <div style={style.paper}>
                <Typography component= "h1" variant="h5">
                    registro de Usuario
                </Typography>
                <form style={style.form}>
                    <Grid container spacing={2}>
                        
                        <Grid item xs={12} md={12}>
                            <TextField 
                                    name="NombreCompleto" 
                                    value = {usuario.NombreCompleto}
                                    onChange = {IngresarValoresMemoria}
                                    variant="outlined" 
                                    fullWidth 
                                    label = "Ingrese su nombre y apellidos"
                                    >
                                    </TextField>
                        </Grid>

                        <Grid item xs={12} md={6}>
                        <TextField 
                                    name="Email"
                                    type="email" 
                                    value = {usuario.Email}
                                    onChange = {IngresarValoresMemoria}                                    
                                    variant="outlined" 
                                    fullWidth 
                                    label = "Ingrese su correo Electrónico"
                                    >
                                    </TextField>                            
                        </Grid>                        

                        <Grid item xs={12} md={6}>
                        <TextField 
                                    name="UserName"
                                    value = {usuario.UserName}
                                    onChange = {IngresarValoresMemoria}     
                                    variant="outlined" 
                                    fullWidth 
                                    label = "Ingrese su nombre de usuario"
                                    >
                                    </TextField>                            
                        </Grid>

                        <Grid item xs={12} md={6}>
                        <TextField 
                                    name="Password" 
                                    value = {usuario.Password}
                                    onChange = {IngresarValoresMemoria}     
                                    type="password"
                                    variant="outlined" 
                                    fullWidth 
                                    label = "Ingrese su contraseña"
                                    >
                                    </TextField>                            
                        </Grid>

                        <Grid item xs={12} md={6}>
                        <TextField 
                                    name="ConfirmarPassword" 
                                    value = {usuario.ConfirmarPassword}
                                    onChange = {IngresarValoresMemoria}     
                                    type="password"
                                    variant="outlined" 
                                    fullWidth 
                                    label = "confirmar su contraseña"
                                    >
                                    </TextField>                            
                        </Grid>                                                 

                    </Grid>
                    <Grid container justify="center">
                        <Grid item xs ={12} md={6}>
                            <Button type="submit" 
                                onClick = {NuevoUsuarioBoton}
                                fullWidth variant="contained" 
                                color="primary" 
                                size="large" 
                                style={style.submit}>
                                    Enviar
                            </Button>
                        </Grid>
                    </Grid>

                </form>
            </div>
        </Container>
    );
}
export default RegistrarUsuario