import React from 'react'
import './awardStyle.css'
import img from '../img/1.png'
import img2 from '../img/2.webp'
import img3 from '../img/3.webp'

const Awards = () => {
  return (
    <div className="award-container">
    <div className="award-card">
      <h3>Primer lugar</h3>
      <img src={img} alt="Primer lugar" />
      <p>Tendra la oportunidad de tener un contrato directo con nuestra empresa o de alguno de los patrocinadores,
        y ademas podra llevarse un grandioso premio de hasta $5.000.000 COP
      </p>
    </div>
    <div className="award-card">
      <h3>Segundo lugar</h3>
      <img src={img2} alt="Segundo lugar" />
      <p>Tendra la oportunidad de tener un contrato directo con nuestra empresa o de alguno de los patrocinadores,
        y ademas podra llevarse un premio de hasta $4.000.000 COP</p>
    </div>
    <div className="award-card">
      <h3>Tercer lugar</h3>
      <img src={img3} alt="Tercer lugar" />
      <p>Tendra la oportunidad de tener un contrato directo con nuestra empresa o de alguno de los patrocinadores,
        y ademas podra llevarse como premio una consola de video juego Playstation 5 🎮 </p>
    </div>
  </div>
  )
}

export default Awards