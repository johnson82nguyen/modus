import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Aboutme.css';

{/* About me page
    This component is called within Home component and will display information below
*/}
function AboutMe(){
  return (
    <div className='Home-container3'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>About me</h1>
      <p1> I'm a Computer Science major from the University of Minnesota with dreams of becoming a Software Engineer.
      </p1>
      <p1>  I love sports, video games, coding, movies, long walks on the beach, friends, family and my beautiful girlfriend Katherine.
      </p1>
      <p1> I am very interested in Modus because of the tech-stack, community and people. You guys rock. </p1>
      <p1>
      </p1>   {/* Extra p1 tags for spacing */}
      <p1>
      </p1>
      <p1> </p1>
      <p1> Thank you Scott and Modus team for this opporunity. I appreciate you guys a lot and I hope to hear from you guys soon! </p1>
      <p1>  <i class="far fa-smile"></i> </p1>
    </div>
  );
}

export default AboutMe;
