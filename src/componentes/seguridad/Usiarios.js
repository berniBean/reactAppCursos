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
import { useState, useEffect } from "react";
import { actualizarUsuario, obtenerUsuarioActual } from "../../Actions/UsuarioAction";


const PerfilUsuario = () => {

  const [ usuario, setUsuario] = useState({
    nombreCompleto : '',
    email : '',
    password : '',
    confirmarPassword : '',
    userName: ''
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
      setUsuario(response.data)
    })
  },[])

  const guardarUsuario = e =>{
    e.preventDefault()
    actualizarUsuario(usuario)
    .then(response => {
      window.localStorage.setItem("token_seguridad", response.data.token)
    })
  }

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
                name="nombreCompleto"
                value = {usuario.nombreCompleto}
                onChange={ingresarValoresMemoria}
                variant="outlined"
                fullWidth
                label="Ingrese su nombre completo"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                name="userName"
                value = {usuario.userName}
                onChange={ingresarValoresMemoria}
                variant="outlined"
                fullWidth
                label="Ingrese su nombre completo"
              />
            </Grid>            

            <Grid item xs={12} md={6}>
              <TextField
                name="email"
                value = {usuario.email}
                onChange={ingresarValoresMemoria}
                type="email"
                variant="outlined"
                fullWidth
                label="Ingrese su correo Electrónico"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                name="password"
                value = {usuario.password}
                onChange={ingresarValoresMemoria}
                type="password"
                variant="outlined"
                fullWidth
                label="Ingrese su contraseña"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="confirmarPassword"
                value = {usuario.confirmarPassword}
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
                            onClick={guardarUsuario}
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
