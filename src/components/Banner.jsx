import React from 'react'
import 'boxicons'

const Banner = () => {

    return (
        <div class='banner'>
            <div class='container'>
                <div class='row p-5' >
                <div class='col-xl-8 col-lg-8'>
                    <div class='textblock'>
                    <h3>Hello from</h3>
                    <h1>Nelson García</h1>
                    <h3>And I'm a <span>Computer cience and IT Engineer Student</span></h3>
                    <p>View my GitHub</p>
                    <div class="social-media">
                        <a href="https://github.com/nel-eleven11" target="_blank" rel="noreferrer"><box-icon name='github' type='logo' ></box-icon></a>
                    </div>
                    <a href="./CVNelson.pdf" download class="btn mt-2">Download CV</a>
                    </div>
                </div>
                    <div class='col-xl-4 col-lg-4'>
                        <img src="./img/discgif.gif" alt="" class='home-img' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner