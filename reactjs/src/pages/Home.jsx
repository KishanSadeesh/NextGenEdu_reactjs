import React from 'react'
import { useRef,useEffect,useState} from 'react';
import '../Styles/style_home.css'
import '../Components/HideNav'
import front from '../Assets/front.jpg'

function Home() {
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
      <div className="image-container">
          <img src={front} alt="AI Tutor" className="curved-image" />
        </div>
      <div className="text">     
          <p>
          
          <h1>AI TUTOR</h1> 
          <br/>
          <br/>NextGenEdu’s AI Tutor is an intelligent learning companion designed to assess your skills and enhance your understanding through interactive learning. Equipped with advanced algorithms and adaptive assessments, our AI Tutor provides personalized feedback, identifies knowledge gaps, and tailors lessons to your needs. Whether you're preparing for exams or mastering new concepts, our AI-driven platform ensures efficient learning with real-time insights and targeted guidance. With a user-friendly interface and robust performance, NextGenEdu’s AI Tutor empowers learners to achieve their full potential, making education more engaging, effective, and accessible.
            </p>
      </div>
    </div>
      
    </div>
  )
}

export default Home