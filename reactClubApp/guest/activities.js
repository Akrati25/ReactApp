import React from 'react';
import ReactDOM from 'react-dom';
import '../Club.css';
import CustomData from '../activities.json';

function Activities(){
  return(
    <div>
    <main  className="flex-container">
    <h1>Many different Sports Activities</h1>
    <p>We play all game together like Football, Basketball, bike polo, football, basketball, futsal, cricket, volleyball, handball, rink hockey, bowling, water polo, rugby, track and field athletics, boxing, baseball, cycling, tennis, rowing, gymnastics and others, including less traditional sports such as airsoft, billiards, orienteering, paintball or roller derby. The teams and athletes belonging to a sports club may compete in several different leagues, championships and tournaments wearing the same club colors and using the same club name, sharing also the same club fan base, supporters and facilities</p>
    <section id="activitiesTable">
    <table>
    <thead>
    <tr>
    <td>Event</td>
    <td>Dates</td>
    </tr>
    </thead>
    <tbody>
    {
      CustomData.map((row) => {
        return (
          <tr>
          <td>{row.event}</td>
          <td>{row.dates}</td>
          </tr>
          );
      })
    }
    </tbody>
    </table>
    </section>
    </main>
    <footer>
    <p>Copyright © 2020 Akrati Mahajan</p>
    </footer>
    </div>
    );
}
export default Activities;