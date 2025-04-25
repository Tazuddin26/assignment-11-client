import React from "react";
import ManagePost from "./ManagePost";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PostedVolunteers from "./PostedVolunteers";
import { motion } from "framer-motion";

const ManageMyPost = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-28"
    >
      <Tabs>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:mx-8 flex justify-center items-center"
        >
          <TabList>
            <Tab>My Volunteer Request Post</Tab>
            <Tab>My Volunteer Need Post</Tab>
          </TabList>
        </motion.div>

        <TabPanel>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ManagePost />
          </motion.div>
        </TabPanel>

        <TabPanel>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <PostedVolunteers />
          </motion.div>
        </TabPanel>
      </Tabs>
    </motion.div>
  );
};

export default ManageMyPost;
