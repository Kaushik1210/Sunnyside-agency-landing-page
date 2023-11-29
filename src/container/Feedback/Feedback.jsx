import React from 'react'
import './feedback.css'
import images from '../../images'

const Feedback = () => {
  return (
    <div>
      

        <div className="feedback">
          <h1>Client testimonials</h1>

          <div className="empolyee">
            <div className="candidate">
              <img src={images.imageemily} alt="marketing_director" />
              <p>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
              <h4>Emily R.</h4>
              <span>Marketing Director</span>
            </div>

            <div className="candidate">
            <img src={images.imagethomas} alt="cheif_operator" />
            <p>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
            <h4>Thomas S.</h4>
            <span>Chief Operating Officer</span>
            </div>

            <div className="candidate">
            <img src={images.imagejennie} alt="business_owner" />
            <p>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!  </p>
            <h4>Jennie F.</h4>
            <span>Business Owner</span>
            

            </div>

          </div>
        </div>


    </div>
  )
}

export default Feedback
