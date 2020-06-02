import React from 'react';
import ReactDOM from 'react-dom';
import '../Club.css';
import sport from '../images/unnamed.jpeg';

function About(){    
   return(
    <div>
    <main  className="flex-container">
    <img src={sport}/>
    <h2>Figure 1</h2>
    <h1>About Sports club</h1>
    <p>Sports clubs range from organisations whose members play together, unpaid, and may play other similar clubs on occasion, watched mostly by family and friends, to large commercial organisations professional players which have teams which regularly compete against those of other clubs and attract sometimes very large crowds of paying spectators. Clubs may be dedicated to a single sport or to several (multi sport club)</p>
    <p>Sport clubs provide an opportunity children and youth to learn skills that will help them school, as well as their future careers and personal relationship. Through engagement sport, they learn leadership, teamwork, problem-solving, responsibility, self discipline, and a sense of initiative</p>
    </main>
    <footer>
    <p>Copyright © 2020 Akrati Mahajan</p>
    </footer>
    </div>
    );
} 

export default About;