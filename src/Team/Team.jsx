import React from 'react';
import './Team.css';

const Team = () => {
  return (
    <div className="team-container">
      <h2 className='text-3xl font-serif'>Our Team</h2>
      <div className="team-members grid md:grid-cols-3 gap-5 ">
        <div className="team-member">
          <div className='flex justify-center items-center'>
          <img src="https://i.ibb.co/mv8HM3r/reza-biazar-e-Sjm-ZW97c-H8-unsplash.jpghttps://i.ibb.co/DkkCpRV/imansyah-muhamad-putera-n4-Kew-LKFOZw-unsplash-1.jpg" alt="Member 1" />
          </div>
          <h3>Dean Mark</h3>
          <p>Role: Developer</p>
        </div>
        <div className="team-member">
         <div className='flex justify-center items-center'>
         <img src="https://i.ibb.co/2cmNh06/juan-encalada-WC7-KIHo13-Fc-unsplash.jpg" alt="Member 2" />
         </div>
          <h3>Smith william</h3>
          <p>Role: Designer</p>
        </div>
        <div className="team-member">
          <div className='flex justify-center items-center' >
          <img src="https://i.ibb.co/G5XP3LS/anastasia-vityukova-0j-Sd5-XW58-Ak-unsplash.jpg" alt="Member 3" />
          </div>
          <h3>Mike Johnson</h3>
          <p>Role: Marketer</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
