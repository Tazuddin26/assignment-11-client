import React from 'react';
import Banner from './Banner/Banner';
import VolunteerNeed from '../PageLayout/VolunteerNeed/VolunteerNeed';
import AboutTeam from './AboutTeam';
import TaskHighlite from './TaskHighlite';


const Home = () => {
    return (
        <div className='mt-24'>
            
            <Banner/>
            <VolunteerNeed/>
            <AboutTeam/>
            <TaskHighlite/>

        </div>
    );
}

export default Home;
