import React from "react";

const Resume = ({ data }) => {
  if (data) {
    var skillmessage = data.skillmessage;
    var education = data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });
    var work = data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          {work.company.includes("Wootlab") ? <ul>
            <li>Part of the team that developed software applications used by an organization (UNDP), targeted at achieving the organization's business objectives. These applications handled over 700,000 records for a national program. - <b>NJFP</b></li>
            <li>Responsible for working on a range of projects with React & Nextjs as the primary frontend technologies.</li>
            <li>Designing and developing appealing interactive websites on a daily basis.</li>
            <li>Collaborating with UI/UX designers and backend developers in delivering user stories into real software solutions.</li>
            <li>Working with robust REST API(s) for large enterprise applications</li>
            <li>Worked with Google places and autocomplete API(s) on a taxi Application (Uber Clone) - React Native</li>
            <li>Integrated Google Search API on a search application (Google Search Clone) - React</li>
            <li>Built a number of restful API(s) with Express and Typescript</li>
            <li>Assisted in training 52 Nigerian youths on web development(HTML, CSS, Javascript & Nodejs) and android development -Basecamp (Bootcamp)</li>
            <li>Trained a number of kids on game development (scratch programming) - KidsCypher</li>
          </ul>
          : <p>{work.description}</p>
          }
        </div>
      );
    });
    var skills = data.skills.map(function (skills) {
      var className = "bar-expand " + skills.name.toLowerCase();
      return (
          <li key={skills.name}>
            <span style={{ width: skills.level }} className={className}></span>
            <em>{skills.name}</em>
          </li>
      );
    });
  }

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">{work}</div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{skillmessage}</p>

          <div className="bars">
            <ul className="skills">{skills}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
