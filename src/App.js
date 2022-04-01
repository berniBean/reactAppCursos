import React from 'react';
import { Grid, ThemeProvider as MuiThemeProvider, TextField } from '@material-ui/core';
import theme from "./theme/theme";
import './App.css';
import RegistrarUsuario from './componentes/seguridad/Registrar';
import Login from './componentes/seguridad/Login';
import PerfilUsuario from './componentes/seguridad/Usiarios';
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import AppNavBar from './navegacion/AppNavBar';


function App() {


  return (
    <BrowserRouter>
      <MuiThemeProvider theme ={theme}>
        <AppNavBar/>
        <Grid container>
            <Routes>
               <Route exact path ="/" element={<PerfilUsuario/>} />
                <Route exact path ="/auth/login" element={<Login/>} />
                <Route exact path ="/auth/registrar" element={<RegistrarUsuario/> } />
                <Route exact path ="/auth/perfil" element={ <PerfilUsuario/>} />              
            </Routes>
        </Grid>
        

      </MuiThemeProvider>

    </BrowserRouter>

  );
}

export default App;
