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
            console.log('response',response);
            resolve(response)
        }).catch(error => {resolve(error.response)})
    })
}

export const actualizarUsuario = (usuario) =>{
    return new Promise((resolve, eject) => {
        HttpCliente.put('/User',usuario)
        .then(response => {
            resolve(response)
        })
    })
}