import React from 'react'
import { useRef,useEffect,useState} from 'react';
import '../Styles/style_home.css'
import '../Components/HideNav'
import dronevideo from '../Assets/dronevid.mp4'

function Home() {
  const videoRef = useRef(null);
  useEffect(() => {
    videoRef.current.play();
  }, []);
 

  

  return (
    <div className="homepage">
      <div className="section1">
      <video ref={videoRef} className="video" autoPlay muted loop>
        <source src={dronevideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video> 
      <div className="text">     
          <p>
          
          <h1>Agricultural Drone</h1> 
          <br/>
          <br/>
            AgriCity's agricultural drones are equipped with cutting-edge sensors and imaging technology,<br /> offering farmers comprehensive aerial insights for crop monitoring and management. Our drones enable precise <br /> spraying, mapping, and analysis, empowering farmers to make data-driven decisions and optimize yields.<br /> With user-friendly interfaces and robust performance, Agricity drones streamline farming operations,<br /> reduce input costs, and promote sustainable practices, ensuring a prosperous future for agriculture.<br />
            </p>
      </div>
    </div>
      <div className="section2">
        <h1>AI powered Education:</h1>
      <div id='expertsol'>

    </div>
    </div>
    </div>
  )

};

export default Home