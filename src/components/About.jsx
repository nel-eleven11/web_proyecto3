import React from 'react'

const About = () => {
    return (
        <section id='about' className='container mh-100 card '>
            <div class='row p-5'>
                <div class='col-md-4 text-center'>
                    <img src="./img/nelson.jpg" alt="" className='about-img' />
                </div>
                <div class='col-md-7 '>
                    <h2 className='text-center'>About Me</h2>
                    <p class="text-justify">
                    I am a 3rd year student studying Computer Science and Information Technology Engineering, 
                    I am 20 years old and I am passionate about programming and software development. 
                    Throughout my academic training, I have acquired solid knowledge in various programming 
                    languages and technological tools. I am excited to work on challenging projects that allow me 
                    to apply and expand my technical skills, and I am always looking for new opportunities to 
                    learn and grow professionally. I am committed to excellence and innovation, and my goal is to 
                    contribute meaningfully to the field of technology.
                    </p>
                    <p class="text-justify"></p>
                </div>
            </div>
        </section>
    )
}

export default About