import '../css/componentes.css';
//import logo from '../assets/img/webpack-logo.png';



export const saludar=(nombre)=>{

    const h1 = document.createElement("h1");
    h1.innerText=nombre;
    document.body.append(h1);



    //img
   /* console.log(logo);
    const img = document.createElement("img");
    img.src=logo;
    document.body.append(img);*/
}