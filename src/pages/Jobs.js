import React, { useState } from "react";
import Title from "../components/Title";
import jobs from "../constants/jobs";
import { Nav } from "react-bootstrap";
import { FaAngleDoubleRight } from "react-icons/fa";

export default function Jobs() {
  const [showJobDetail, displayJobDetails] = useState(true);
  const [jobDetails, setJobDetails] = useState(jobs[0]);
  const [value, setValue] = useState(0);

  return (
    <header className="pt-5 mt0" style={{ height: "90vh" }}>
      <section className="container">
        <Title
          title="Experience"
          textAlignment="center"
          marginAlignment="auto"
        />
        <div className="row mt-5">
          <div className="col-4">
            {jobs.map((job, index) => {
              return (
                <button
                  onClick={() => {
                    displayJobDetails(true);
                    setJobDetails(job);
                    setValue(index);
                  }}
                  className="job-btn mb-4"
                >
                  {job.companyName}
                </button>
              );
            })}
          </div>
          <div className="col-8">
            {showJobDetail ? (
              <div>
                <h4>{jobDetails.jobProfile}</h4>
                <Nav>
                  <Nav.Link
                    href={jobDetails.companyUrl}
                    target="_blank"
                    className="badge badgeSkills mt-2 p-2"
                    style={{
                      color: "#617d98",
                      textAlign: "center"
                    }}
                  >
                    {jobDetails.companyName}
                  </Nav.Link>
                </Nav>
                <p className="mt-2">{jobDetails.duration}</p>
                <div
                  key={jobDetails.id}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    columnGap: "2rem",
                    alignItems: "center"
                  }}
                >
                  <FaAngleDoubleRight
                    style={{ color: "#2caeba" }}
                  ></FaAngleDoubleRight>
                  {jobDetails.jobLine1}
                  <FaAngleDoubleRight
                    style={{ color: "#2caeba" }}
                  ></FaAngleDoubleRight>
                  {jobDetails.technologyStack}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </header>
  );
}
