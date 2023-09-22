import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import sensor from '../Imagens/sensor.jpeg'
import jumpers from '../Imagens/Jumpers.jpeg'
import LEDRGB from '../Imagens/LEDRGB.jpeg'
import placa from '../Imagens/placa.jpeg'
import buzzer from '../Imagens/buzzer.jpg'
import arduino from '../Imagens/Arduino.jpeg'
import resistor from '../Imagens/resistor.jpg'
import potenciometro from '../Imagens/potenciometro.jpg'
import button from '../Imagens/Button.png'
import usb from '../Imagens/usb.jpg'
import '../Styles/Recursos.css'

const Recursos = () => {
  return (
    <section className='Recursos'>
        <div className='Texto-lancamento'>
            <h2>Equipamentos Utilizados</h2>
        </div>     
        <div className='Blocos'>
        <div className="bloquinho">
            <figure>
            <img src={sensor} alt="sensor arduino" />
            </figure>
            
            <p className='Blocos-text'>Sensor ultrassônico R$ 19,00</p>
        </div>
        <div className="bloquinho">
            <figure>
            <img src={jumpers} alt="fjumpers" />
            </figure>
            
            <p className='Blocos-text'>Fios R$ 19,00</p>
        </div>
        <div className="bloquinho">
            <figure>
            <img src={LEDRGB} alt="led RGB" />
            </figure>
            
            <p className='Blocos-text'>Fita de Led R$ 37,00</p>
        </div>
        </div>
        <div className='Blocos'>
        <div className="bloquinho">
            <figure>
            <img src={placa} alt="placa de ensaio" />
            </figure>
            
            <p className='Blocos-text'>Protoboard R$ 27,00</p>
        </div>
        <div className="bloquinho">
            <figure>
            <img src={buzzer} alt="buzzer" />
            </figure>
            <p className='Blocos-text'> Buzzer R$ 25,00</p>
        </div>
        <div className="bloquinho">
            <figure>
            <img src={arduino} alt="placa arduino" />
            </figure>
            
            <p className='Blocos-text'>Arduino R$ 130,00</p>
        </div>
        </div>
        <div className='Blocos'>
        <div className="bloquinho">
            <figure>
            <img src={resistor} alt="resistor" />
            </figure>
            
            <p className='Blocos-text'>Resistor R$ 0,05 cada</p>
        </div>
        <div className="bloquinho">
            <figure>
            <img src={potenciometro} alt="potenciometro" />
            </figure>
            
            <p className='Blocos-text'>Potenciômetro R$ 2,50 cada</p>
        </div>
        <div className="bloquinho">
            <figure>
            <img src={button} alt="botao" />
            </figure>
            
            <p className='Blocos-text'>Botão R$ 0,27 cada</p>
        </div>
        </div>
        
    </section>
  )
}

export default Recursos