import React from 'react';
import { Button, ThemeProvider as MuiThemeProvider, TextField } from '@material-ui/core';
import theme from "./theme/theme";
import './App.css';
import RegistrarUsuario from './componentes/seguridad/Registrar';
import Login from './componentes/seguridad/Login';
import PerfilUsuario from './componentes/seguridad/Usiarios';


function App() {


  return (
    <MuiThemeProvider theme ={theme}>
      <Login/>
      <PerfilUsuario/>

    </MuiThemeProvider>

  );
}

export default App;
