import React from 'react'
import './project.css'
import images from '../../images'

const Project = () => {
  return (
    <div id='project'>
      <div className="project_desktop_view">
        <div className="img">
        <img src={images.imagegallerymilkbottles} alt="" />
        </div>
        <div className="img">
        </div>
        <div className="img">
        <img src={images.imagegalleryorange} alt="" />
        </div>
        <div className="img">
        <img src={images.imagegallerycone} alt="" />
        </div>
        <div className="img">
        <img src={images.imagegallerysugarcubes} alt="" />
        </div>
      </div>

      <div className="project_mobile_view">
        <div className="img">
        <img src={images.imagegallerymilkbottlesm} alt="" />
        </div>
        
        <div className="img">
        <img src={images.imagegalleryorangem} alt="" />
        </div>
        <div className="img">
        <img src={images.imagegalleryconem} alt="" />
        </div>
        <div className="img">
        <img src={images.imagegallerysugarcubesm} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Project
