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
                        I am a 20 years old and  3rd year student studying Computer Science and Information Technology Engineering in Guatemala. 
                        Throughout my academic training, I have acquired solid knowledge in various programming 
                        languages and technological tools. I am excited to work on challenging projects that allow me 
                        to apply and expand my technical skills, and I am always looking for new opportunities to 
                        learn and grow professionally. I am committed to excellence and innovation, and my goal is to 
                        contribute meaningfully to the field of technology.
                    </p>

                    <p class="text-justify">
                        I like listening to music, play the guitar, playing video games, and watching movies. I am also a fan of fooball, specially for
                        Real Madrid and Bayern Münich, I practice football and volleyball in my free time. Reading books is also one of 
                        my things, recently I have been reading a series called Shadowhunters, which I highly recommend. In terms of music,
                        my favorites genres are rock, alternativ rock and smooth jazz, some of my favorites bands are: Imagine Dragons, 
                        Radiohead, Daft Punk, Acoustic Alchemy and Gorillaz. 
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About