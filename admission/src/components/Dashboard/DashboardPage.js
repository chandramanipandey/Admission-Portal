import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../CSS/DashboardPage.css";
import { useHistory, Link } from "react-router-dom";
import { receivefromfirebase } from "../Firebase/receivefromfirebase";
import { getAuth } from "firebase/auth";
import DashboardCard from "./DashboardCard";
import { checknewuser } from "../Firebase/checknewstudent";

export function AdminDashboardPage() {
  return (
    <div>
      <Row>
        <DashboardCard
          title="Total Students"
          titleText="See list of Students &gt;"
          controlId="StudentList"
        />
        <DashboardCard
          title="Student Fees"
          titleText="Check Approved / Pending Fees &gt;"
          controlId="StudentFees"
        />
        <DashboardCard
          title="Fees Tracking"
          titleText="Track Fees &gt;"
          controlId="fedseform"
        />
      </Row>
      <Row className="mt-3">
        <DashboardCard
          title="Notice Generation"
          titleText="Generate Notice &gt;"
          controlId="GenerateNotice"
        />
        <DashboardCard
          title="Fee Structure"
          titleText="Manage Fee Structure &gt;"
          controlId="FeeStructure"
        />
      </Row>
    </div>
  );
}

export function StudentDashboardPage() {
  const auth = getAuth();

  return (
    <div>
      <Row className="mt-3">
        <DashboardCard
          title="Register Yourself"
          titleText="Registration Form Link &gt;"
          controlId="fedseform"
        />
        <DashboardCard
          title="Fees Corner"
          titleText="Fill Fee Details &gt;"
          controlId="FeesDetails"
        />
        <DashboardCard
          title="My Profile"
          titleText="Check Profile &gt;"
          controlId="MyProfile"
        />
      </Row>
    </div>
  );
}
