import React from 'react'
import './homeStyle.css'
import img from '../img/hackathon.png'
import info from '../assets/text.json'
export const HomeScreen = () => {
  return (
    <div className="home-screen">
        <section className="home__info">
            <h1>{info.title}</h1>
            <p>{info.description}</p>
            <p>{info.description1}</p>
            <p>{info.description2}</p>
            <p>{info.description3}</p>
            <p>{info.description4}</p>
            <p>{info.description5}</p>
        </section>
        <aside className="home__image">
            <h1>
                <img src={img} alt="" />
            </h1>
        </aside>
    </div>
  )
}
