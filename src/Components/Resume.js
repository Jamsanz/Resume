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
            <li>Developed and maintained multiple applications using ReactJS, Redux, and Typescript to create a dynamic user experience with optimal performance.</li>
            <li>Used NextJS to build fast and optimized server-side rendered React applications, resulting in improved user experience and increased performance.</li>
            <li>Built cross-platform mobile applications using React Native and integrated with REST API(s) to access and manage data from the backend.</li>
            <li>Worked with NodeJS to build scalable and efficient server-side applications and integrated them with GraphQL and REST API(s) for optimized data retrieval and management.</li>
            <li>Implemented data storage solutions using both MySQL and MongoDB, ensuring data consistency and security across all applications.</li>
            <li>Utilized Redux to manage and maintain the state of applications, resulting in improved app functionality and user experience.</li>
            <li>Designed and implemented efficient data retrieval systems using GraphQL, resulting in reduced load times and improved data management.</li>
            <li>Maintained code quality and collaborated with the development team to ensure all applications were developed to meet the needs of clients and users.</li>
            <li>Contributed to the implementation of continuous integration and delivery processes using Git, GitHub, and Vercel to ensure the seamless delivery of updates and new features to users.</li>
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
