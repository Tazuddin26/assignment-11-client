import React from "react";
import ManagePost from "./ManagePost";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PostedVolunteers from "./PostedVolunteers";
const ManageMyPost = () => {
  return (
    <div className="mt-4">
      <Tabs >
        <div className="lg:mx-8 flex justify-center items-center">
          <TabList>
            <Tab>My Volunteer Request Post</Tab>
            <Tab>My volunteer need post</Tab>
          </TabList>
        </div>
        <TabPanel>
          <h2>
            {" "}
            <ManagePost />
          </h2>
        </TabPanel>
        <TabPanel>
          <h2>
            <PostedVolunteers />
          </h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ManageMyPost;
