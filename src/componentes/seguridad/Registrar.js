import React from "react";
import { Button, Container, Grid, TextField, Typography } from "@material-ui/core";
import style from "../Tool/Style";

const RegistrarUsuario =() =>{
    
    
    return(
        <Container component="main" maxWidth="md" justify="center">
            <div style={style.paper}>
                <Typography component= "h1" variant="h5">
                    registro de Usuario
                </Typography>
                <form style={style.form}>
                    <Grid container spacing={2}>
                        
                        <Grid item xs={12} md={6}>
                            <TextField 
                                    name="nombre" 
                                    variant="outlined" 
                                    fullWidth 
                                    label = "Ingrese su nombre"
                                    >
                                    </TextField>
                        </Grid>

                        <Grid item xs={12} md={6}>
                        <TextField 
                                    name="Apellidos" 
                                    variant="outlined" 
                                    fullWidth 
                                    label = "Ingrese sus apellidos"
                                    >
                                    </TextField>                            
                        </Grid>

                        <Grid item xs={12} md={6}>
                        <TextField 
                                    name="email"
                                    type="email" 
                                    variant="outlined" 
                                    fullWidth 
                                    label = "Ingrese su correo Electrónico"
                                    >
                                    </TextField>                            
                        </Grid>                        

                        <Grid item xs={12} md={6}>
                        <TextField 
                                    name="UserName" 
                                    variant="outlined" 
                                    fullWidth 
                                    label = "Ingrese su nombre de usuario"
                                    >
                                    </TextField>                            
                        </Grid>

                        <Grid item xs={12} md={6}>
                        <TextField 
                                    name="password" 
                                    type="password"
                                    variant="outlined" 
                                    fullWidth 
                                    label = "Ingrese su contraseña"
                                    >
                                    </TextField>                            
                        </Grid>

                        <Grid item xs={12} md={6}>
                        <TextField 
                                    name="confirmaPassword" 
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