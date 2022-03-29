
import { Http } from '@material-ui/icons'
import HttpCliente from '../servicios/HttpCliente'

export const registraUsuario = usuario => {
    return new Promise((resolve,eject)=>{
        HttpCliente.post('/User/registrar',usuario)
        .then(response =>{
            resolve(response)
        }).catch(error => {resolve(error.response)})
    }) 
}

export const obtenerUsuarioActual = () =>{
    return new Promise((resolve, eject)=>{
        HttpCliente.get('/User').then(response=>{
            resolve(response)
        }).catch(error => {resolve(error.response)})
    })
}