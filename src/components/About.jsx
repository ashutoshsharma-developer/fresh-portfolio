import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20"
    >
      <div>
        <h1 className="font-bold text-3xl mb-5">About</h1>
        <p>
          Hi, I’m Ashutosh, a passionate and dedicated fresher in web
          development. I enjoy transforming ideas into functional, user-friendly
          websites using my skills in <b> [MERN]</b> . I have worked on several
          projects, which showcase my ability to create dynamic and responsive
          designs. My approach is centered around writing clean code, solving
          problems creatively, and continuously learning to stay updated with
          the latest technologies. I’m excited to contribute to impactful
          projects, collaborate with teams, and grow as a professional in the
          tech industry
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">Education</h1>
        <span>
          <ul>
            <li>
              <span className="text-lg font-bold">*</span> Pursuing Bachler in
              Computer Application from Signa Institute of Technology.
            </li>
            <li>
              {" "}
              <span className="text-lg font-bold">*</span> I have done my class
              12th from BSS Education Centre.{" "}
            </li>
            <li>
              <span className="text-lg font-bold">*</span> I have done my class
              10th from Heritage International school.
            </li>
          </ul>
        </span>
        <br />

        <h1 className="text-green-600 font-semibold text-xl">
          Skills and Expertise
        </h1>
        <span>
          <span className="text-lg font-bold font-serif">
            Proficiency in MERN Stack Technologies:
          </span>
          <br />
          MongoDB, Express.js, React.js and Node.js for full-stack web
          application development. <br />
          <span className="text-lg font-bold font-serif">
            Frontend Development Expertise:
          </span>
          <br />
          Strong knowledge of HTML5, CSS3, JavaScript and building responsive UI
          using React. <br />
          <span className="text-lg font-bold font-serif">
            Backend Development:
          </span>
          <br />
          Expertise in building RESTful APIs using Node.js and Express.js with
          secure and scalable server-side logic. <br />
          <span className="text-lg font-bold font-serif">
            Database Management:
          </span>
          <br />
          Proficient in designing, querying, and optimizing NoSQL databases
          using MongoDB. <br />
          <span className="text-lg font-bold font-serif">Version Control</span>
          <br />
          Experience with Git and GitHub for version control, code
          collaboration, and managing repositories. <br />
          <span className="text-lg font-bold font-serif">
            State Management:
          </span>{" "}
          <br />
          Knowledge of state management tools like React Context API, Redux, or
          Zustand for scalable application design. <br />
        </span>
        <br />

        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <span>
          My mission is to leverage my skills and creativity to deliver
          innovative Web development solutions that exceed client expectations
          and contribute positively to the digital landscape. I am committed to
          continuous learning and growth, always seeking new challenges and
          opportunities to expand my horizons.
        </span>
      </div>
    </div>
  );
}

export default About;
