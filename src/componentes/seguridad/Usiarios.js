import {
  Avatar,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import style from "../Tool/Style";
import PersonIcon from "@material-ui/icons/Person";
import { useState } from "react";
import { useEffect } from "react";
import { obtenerUsuarioActual } from "../../Actions/UsuarioAction";


const PerfilUsuario = () => {

  const [ usuario, setUsuario] = useState({
    NombreCompleto : '',
    Email : '',
    Password : '',
    ConfirmarPassword : '',
    Username: ''
  })

  const ingresarValoresMemoria = e =>{
    const {name,value} = e.target;
    setUsuario(anterio => ({
      ...anterio,
      [name] : value
    }))
  }

  useEffect(()=> {
    obtenerUsuarioActual()
    .then(response =>{
      console.log(response)
    })
  },[])

  return (
    <Container componet="main" maxWidth="md" justify="center">
      <div style={style.paper}>
        <Avatar style={style.paper}>
          <PersonIcon style={style.icon}></PersonIcon>
        </Avatar>
        <Typography componet="h1" variant="h5">
          Perfil de usuario
        </Typography>
        <form style={style.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <TextField
                name="NombreCompleto"
                value = {usuario.NombreCompleto}
                onChange={ingresarValoresMemoria}
                variant="outlined"
                fullWidth
                label="Ingrese su nombre completo"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                name="Username"
                value = {usuario.Username}
                onChange={ingresarValoresMemoria}
                type="email"
                variant="outlined"
                fullWidth
                label="Ingrese su Nombre de usuario"
              />
            </Grid>            

            <Grid item xs={12} md={6}>
              <TextField
                name="Email"
                value = {usuario.Email}
                onChange={ingresarValoresMemoria}
                type="email"
                variant="outlined"
                fullWidth
                label="Ingrese su correo Electrónico"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                name="Password"
                value = {usuario.Password}
                onChange={ingresarValoresMemoria}
                type="password"
                variant="outlined"
                fullWidth
                label="Ingrese su contraseña"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="ConfirmarPassword"
                value = {usuario.ConfirmarPassword}
                onChange={ingresarValoresMemoria}
                type="password"
                variant="outlined"
                fullWidth
                label="confirmar su contraseña"
              />
            </Grid>
          </Grid>

          <Grid container justify="center">
                <Grid item xs={12} md={6}>
                    <Button type="submit" 
                            fullWidth
                            variant="contained"
                            size ="large"
                            color = "primary"
                            style={style.submit}
                            >
                        Guardar
                    </Button>
                </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default PerfilUsuario;
