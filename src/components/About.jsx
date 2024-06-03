import React from 'react'

const About = () => {
    return (
        <section id='about' className='container mh-100 card '>
            <div class='row p-5'>
                <div class='col-md-4 text-center'>
                    <img src="./img/niebla.jpg" alt="" className='about-img' />
                </div>
                <div class='col-md-7 '>
                    <h2 className='text-center'>About Me</h2>
                    <p class="text-justify">
                        Hola soy Nelson Eduardo García Bravatti y soy estudiante de Ingeniería en Ciencias de la Computadción y tecnologías de la Información en la
                        Universidad del Valle de Guatemala. 
                    </p>
                    <p class="text-justify"></p>
                </div>
            </div>
        </section>
    )
}

export default About