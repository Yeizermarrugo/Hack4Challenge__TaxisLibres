import React from 'react'
import about from '../assets/about.json'
import img2 from '../img/hackathon2.jpg'
import img3 from '../img/hackathon3.png'
import img4 from '../img/4.png'
import img5 from '../img/5.png'

import './about.css'
import Sponsors from './Sponsors'
const AboutHackathon = () => {
  return (
    <>
    <article>
      <h1>{about.title}</h1>
      <header className='card__header'>
          <div id="captioned-gallery">
            <figure className="slider">
              <figure>
                <img src={img4} alt />
              </figure>
              <figure>
                <img src={img2} alt />
              </figure>
              <figure>
                <img src={img3} alt />
              </figure>
              <figure>
                <img src={img5} alt />
              </figure>
            </figure>
          </div>
      </header >
      <div className='card__body'>
        <h6 className='card__title'>{about.description}</h6>
        <div className='card__container'>
          <p className='card__title'><b>Temática: </b>{about.topics}</p>
          <b>Estructura del evento:</b>
          <ul>El Hackathon se dividirá en varias etapas, incluyendo:
            <li><b>Registro y formación de equipos: </b>{about.event.structure[0]}</li>
            <li><b>Presentación de desafíos: </b>{about.event.structure[1]}</li>
            <li><b>Fase de desarrollo: </b> {about.event.structure[2]}</li>
            <li><b>Presentación de proyectos: </b>{about.event.structure[3]}</li>
            <li><b>Ceremonia de premiación: </b>{about.event.structure[4]}</li>
          </ul>
          <p className='card__label'><b>Lugar: </b> {about.place[0]}</p>
          <p className='card__label'><i>{about.place[1]}</i></p>
          <p className='card__label'><b>Fecha y hora:</b> {about.date}</p>
          <h5>{about.info}</h5>
        </div>
      </div>
      <div className='card__messagge'>
        <div> 
      <h2>
        Movemos los sueños de los colombianos.
        </h2>
        </div>
      </div>
    </article >
    <Sponsors/>
    </>
  )
}

export default AboutHackathon