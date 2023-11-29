import React from 'react'
import images from '../../images'

import './services.css'

const Services = () => {
  return (
<div id='about'>
    {/* top */}

    <div className="services_top">
        <div className="top">
            <div className="transform">
                <h1>Transform your brand</h1>
                <p>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
                <div>
                <a className='transform_lm' href="#">learn more</a>
                </div>
            </div>

        </div>

        <div className="top">
            <img className="top_image" src={images.imagetransform} alt="tramsform_image" />
        </div>

    </div>


    {/* middle */}

    <div className="services_middle">

    <div className="middle">
            <img className="middle_image" src={images.imagestandout} alt="standout_image" />
        </div>


        <div className="middle">
            <div className="standout">
                <h1>Stand out to the right audience</h1>
                <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
                <div>
                    <a className='standout_lm' href="#">learn more</a>
                </div>
            </div>

        </div>
    </div>

    {/* bottom */}
    <div className="services_bottom" id='services'>

        <div className="bottom">
                <img className='graphic_image' src={images.imagegraphicdesign} alt="graphic_image" />
                <div className="graphic_content">
                    <h1>Graphic Design</h1>
                    <p>Great design makes you memorable. We deliver <br />artwork that underscores your brand message <br />and captures potential clients’ attention.</p>

                </div>
            
        </div>

        <div className="bottom">
            
                <img className='photograph_image' src={images.imagephotography} alt="photograph_image" />
                <div className="photo_content">
                    <h1>Photography</h1>
                    <p>Increase your credibility by getting the most <br />stunning, high-quality photos that improve your <br />
                    business image.</p>

                </div>
            
            
        </div>


    </div>


</div>
    
  )
}

export default Services
