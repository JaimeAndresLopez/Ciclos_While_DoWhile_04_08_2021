// let papitas = 10;
// while (papitas) {
//     console.log(`Tengo ${papitas} papitas.`);
//     papitas--;
// }

// while (true) {
//     let usuario = prompt(`Ingrese el usuario`);
//     if(usuario == `Jaime`){
//         let contrasena = prompt(`Ingrese su contraseña`);
//         if(contrasena===`123`){
//             alert(`Bienvenido ${usuario}`);
//             bandera = false;
//         }else alert(`La contraseña ${contrasena} no existe.`);
//     }else alert(`El usuario ${usuario} no existe.`);
// }

// let bandera = true;
// while(bandera){
//     console.log(bandera);
//     let usuario = prompt("Ingrese el usuario");
//     if(usuario=="Jaime"){
//         let contrasena = prompt("Ingrese la contraseña");
//         if(contrasena=="123"){
//             alert(`Bienvenido Usario`);
//             bandera = false;
//         }else{
//             alert(`La contraseña ${contrasena} no existe`);
//         }
//     }else{
//         alert(`El usuario ${usuario} no existe`);
//     }

// let usuario = prompt(`Ingrese el usuario`);
// let contrasena = undefined;
// bandera = (usuario==`Jaime`)
//             ?(contrasena=prompt(`Ingrese la contraseña`),
//                 (contrasena==`123`)
//                 ?(
//                     alert(`Bienvenido ${usuario}`),
//                     false
//                 ):(alert(`La contraseña ${contrasena} no existe`),true)
//             ):(alert(`El usuario ${usuario} no existe`), true)
//                 ):(alert(`El usuario ${usuario} no existe`),true);

do{
    let usuario = prompt(`Ingrese el usuario`);
    let contrasena = prompt(`Ingrese la contraseña`);
    var bandera = {
        usuario: usuario!=`Jaime`,
        contrasena: contrasena!=`123`,
        condicion: usuario!=`Jaime` || contrasena!=`123`
    };
    if(!bandera.condicion) alert(`Bienvenido Usario`);
    if(bandera.usuario) alert(`El usuario ${usuario} no existe`);
    if(bandera.contrasena) alert(`La contraseña ${contrasena} no existe`);

}while(bandera.condicion);