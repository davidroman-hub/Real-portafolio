import React from 'react'
import './Footer.scss'

function FooterV() {
    return (
        <footer>
            <div className = 'social'>
                <a href='https://www.instagram.com/elmorenito_gamer/?hl=es-la' target='_blank' rel='noopener noreferrer'>
                    <i className=" fa fa-instagram"/>
                </a>

                <a href='https://www.facebook.com/Morenito-GAMER-459373204604942' target='_blank' rel='noopener noreferrer'>
                    <i className=" fa fa-facebook"/>
                </a>

                <a href='https://www.youtube.com/channel/UCkLV4rLOnDM6pyJtzVh6UKw?view_as=subscriber' target='_blank' rel='noopener noreferrer'>
                    <i className=" fa fa-youtube"/>
                </a>

            </div>
            
        </footer>
    )
}

export default FooterV