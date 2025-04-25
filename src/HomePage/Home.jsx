// import React from 'react';
// import Banner from './Banner/Banner';
// import VolunteerNeed from '../PageLayout/VolunteerNeed/VolunteerNeed';
// import AboutTeam from './AboutTeam';
// import TaskHighlite from './TaskHighlite';

// const Home = () => {
//     return (
//         <div className='mt-24'>

//             <Banner/>
//             <VolunteerNeed/>
//             <AboutTeam/>
//             <TaskHighlite/>

//         </div>
//     );
// }

// export default Home;

import React from "react";
import Banner from "./Banner/Banner";
import VolunteerNeed from "../PageLayout/VolunteerNeed/VolunteerNeed";
import AboutTeam from "./AboutTeam";
import TaskHighlite from "./TaskHighlite";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Home = () => {
  return (
    <div className="mt-24 space-y-12">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Banner />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <VolunteerNeed />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <AboutTeam />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <TaskHighlite />
      </motion.div>
    </div>
  );
};

export default Home;
