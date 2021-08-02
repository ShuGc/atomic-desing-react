import React from 'react';
import xd from './xd/xd.png'
import './Imagen.css';



class Imagen extends React.Component{

    render(){
        return (
            <div className = "img_container"> 
                <img className="img_container__img" src ={xd} ></img>
            </div>
        );
    }

}

export default Imagen;