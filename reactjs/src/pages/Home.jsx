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
  const product = [
    {
      name: "Rice",
      soiltype: ["Sandy","Loam","Silt"],
      temprange: ["Tropical"],
      wateravail: ["Abundant"],
    },
    {
      name: "Potatoes",
      soiltype: ["Clay"],
      temprange: ["Cold"],
      wateravail: ["Adequate"],
    },
    {
      name: "Corn (Maize)",
      soiltype: ["Loam"],
      temprange: ["Temperate"],
      wateravail: ["Seasonal"],
    },
    {
      name: " Sugarcane",
      soiltype: ["Silt","Sandy"],
      temprange: ["Subtropical"],
      wateravail: ["Dependance","Abundant"],
    },
    {
      name: "Bananas",
      soiltype: ["Clay","Loam"],
      temprange: ["Tropical"],
      wateravail: ["Abundant"],
    },
    {
      name: "Cranberries",
      soiltype: ["Sandy"],
      temprange: ["Cold"],
      wateravail: ["Abundant"],
    },
    {
      name: "Strawberries",
      soiltype: ["Sandy"],
      temprange: ["Temperate"],
      wateravail: ["Abundant"],
    },
    {
      name: "Cranberries",
      soiltype: ["Sandy"],
      temprange: ["Cold"],
      wateravail: ["Abundant"],
    },
    {
      name: "Pineapple",
      soiltype: ["Sandy"],
      temprange: ["Tropical"],
      wateravail: ["Adequate"],
    },
    {
      name: "Peanuts",
      soiltype: ["Sandy"],
      temprange: ["Tropical"],
      wateravail: ["Seasonal"],
    },
    {
      name: "Cassava",
      soiltype: ["Sandy"],
      temprange: ["Tropical"],
      wateravail: ["Dependence"],
    },
  ]

const [selectedOptioncase1, setSelectedOptioncase1] = useState('');
const handleSelectChangecase1 = (event) => {
setSelectedOptioncase1(event.target.value);
};
const [selectedOptioncase2, setSelectedOptioncase2] = useState('');
const handleSelectChangecase2 = (event) => {
setSelectedOptioncase2(event.target.value);
};
const [selectedOptioncase3, setSelectedOptioncase3] = useState('');
const handleSelectChangecase3 = (event) => {
setSelectedOptioncase3(event.target.value);
};

const [selectedCrop, setSelectedCrop] = useState("");

const handleSubmit = (e) => {
e.preventDefault();
const matchingCrop = product.find(crop =>
  crop.soiltype.includes(selectedOptioncase1) &&
  crop.temprange.includes(selectedOptioncase2) &&
  crop.wateravail.includes(selectedOptioncase3)
);

if (matchingCrop) {
  setSelectedCrop(matchingCrop.name);
} else {
  setSelectedCrop("No matching crop found.");
}
};

  

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
        <h1>Expert Solutions</h1>
      <div id='expertsol'>
    <form>
      <div className="formalign">
      <label>Soil Type:</label>
        <select value={selectedOptioncase1} onChange={handleSelectChangecase1}>
          <option value="" >Select here</option>
          <option name="soiltype" value="Sandy">Sandy</option>
          <option name="soiltype" value="Clay">Clay</option>
          <option name="soiltype" value="Loam">Loam</option>
          <option name="soiltype" value="Silt">Silt</option>
        </select>
        <label>Temperature Range:</label>

      <select value={selectedOptioncase2} onChange={handleSelectChangecase2}>
        <option value="" >Select here</option>
        <option name="temprange" value="Tropical">Tropical (hot and humid)</option>
        <option name="temprange" value="Cold">Cold (chilly to freezing)</option>
        <option name="temprange" value="Temperate">Temperate (moderate)</option>
        <option name="temprange" value="Subtropical">Subtropical (warm to hot)</option>
      </select>
      <label>Water Availability:</label>
      <select value={selectedOptioncase3} onChange={handleSelectChangecase3}>
  
        <option value="" >Select here</option>
        <option name="wateravail" value="Abundant">Abundant water supply</option>
        <option name="wateravail" value="Adequate">Adequate water supply</option>
        <option name="wateravail" value="Seasonal">Seasonal water availability</option>
        <option name="wateravail" value="Dependence">Dependence on rainfall</option>
      </select>
      </div>
      <button onClick={handleSubmit} value="submit" name='submit'>Try it</button>
    </form>
    <b>
    <p>Crop: {selectedCrop}</p>
    </b>
    </div>
    </div>
    </div>
  )
}

export default Home