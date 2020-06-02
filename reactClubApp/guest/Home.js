import React from 'react';
import ReactDOM from 'react-dom';
import '../Club.css';
import football from '../images/images.jpeg';

function Home (){	
	return( 
		<div>
		<main className="flex-container">
		<h1>Sports Club</h1>
		<img src={football} />
		<h2>Figure 1 : Football </h2>
		<h3>Healthy bodies, healthy minds</h3>
		<p>Through the development of healthy physical activity habits, children and youth are not only supporting healthy bodies, but are also likely to show improved performance  school</p>
		<h3>Social skills</h3>
		<p>Structured activities, such as organized sports, are linked to lower levels of antisocial behaviour  children. Indeed, sport clubs can help them develop important social skills such as good citizenship, positive peer relations and respect authority through learning to interact not only other children their age, but also older individuals their coaches and sports officials.</p>
		<h3> Self-esteem </h3> 
		<p>Studies have shown that those who engage  sport and physical activity are more confident – this is particularly important  child development. Sport clubs allow children and youth to build self-esteem as they learn to trust their own abilities, receive encouragement and praise from coaches and parents, and learn to accept constructive criticism.</p> 
		</main> 
		<footer>
		<p>Copyright © 2020 Akrati Mahajan </p>
		</footer>
		</div>
	);
}
export default Home;