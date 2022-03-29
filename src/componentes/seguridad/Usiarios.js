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

const PerfilUsuario = () => {
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
            <Grid item xs={12} md={6}>
              <TextField
                name="nombre"
                variant="outlined"
                fullWidth
                label="Ingrese su nombre completo"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                name="email"
                type="email"
                variant="outlined"
                fullWidth
                label="Ingrese su correo Electrónico"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                name="password"
                type="password"
                variant="outlined"
                fullWidth
                label="Ingrese su contraseña"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="password"
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
