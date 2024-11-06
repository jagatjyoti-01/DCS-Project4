import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";
import { ImHome } from "react-icons/im";
import { TfiEmail } from "react-icons/tfi";
import { FaUser } from "react-icons/fa6";


const Resume = () => {
  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-dark">
      <div className="row w-100 bg-white" style={{ maxWidth: "800px" }}>
        {/* Left Section */}
        <div className="col-12 col-md-7 p-4">
          {/* Heading Section */}
          <div className="text-center text-md-start py-3">
            <h1 className="fw-bold "style={{color:'rgb(0 29 73)'}}>ASMITA JAIN</h1>
            <h2 className="fw-semibold text-secondary">Content Writer</h2>
          </div>
          
          {/* Career Objective */}
          <div className="my-3">
            <h5 className=" text-white px-2 py-1" style={{background:'rgb(0 29 73)'}}>CAREER OBJECTIVE</h5>
            <p className="text-secondary mt-2">
              A dynamic and self-driven individual looking for a content writer
              position in a reputed organization where I can enhance my content
              writing skills and contribute to the organization's growth.
            </p>
          </div>

          {/* Education Section */}
          <div className="my-3">
            <h5 className=" text-white px-2 py-1" style={{background:'rgb(0 29 73)'}}>EDUCATION</h5>
            <ul className="list-unstyled mt-2">
              <li className="d-flex align-items-start">
                <GoDotFill className="me-2" />
                <p>M.C.A from Osmania University in 2020-22 with GPA 8.5</p>
              </li>
              <li className="d-flex align-items-start">
                <GoDotFill className="me-2" />
                <p>B.Sc Computer Science, Vivekananda Degree College in 2017-20 with GPA 8.3</p>
              </li>
              <li className="d-flex align-items-start">
                <GoDotFill className="me-2" />
                <p>Intermediate (MPC) from Sri Chaitanya Jr College in 2015-17 with GPA 8.5</p>
              </li>
              <li className="d-flex align-items-start">
                <GoDotFill className="me-2" />
                <p>10th Class from Brilliant Grammar High School in 2015 with GPA 8.7</p>
              </li>
            </ul>
          </div>

          {/* Projects Section */}
          <div className="my-3">
            <h5 className=" text-white px-2 py-1" style={{background:'rgb(0 29 73)'}}>PROJECTS</h5>
            <p className="mt-2">
              2 months internship at ABC Technologies from 1 May 2022 to 30 June 2022.
            </p>
            <p className="fw-bold">Key Responsibilities:</p>
            <ul className="list-unstyled ps-3">
              <li>Research keywords and include them in the articles.</li>
              <li>Write well-researched blog articles with no plagiarism.</li>
              <li>Develop content for multiple platforms such as websites, emails, and social media.</li>
            </ul>
          </div>

          {/* Skills Section */}
          <div className="my-3">
            <h5 className=" text-white px-2 py-1" style={{background:'rgb(0 29 73)'}}>SKILLS</h5>
            <ul className="list-unstyled ps-3 mt-2">
              <li>Ability to write unique content</li>
              <li>SEO optimization</li>
              <li>Website analysis</li>
              <li>Detailed research skills</li>
              <li>Product description writing</li>
              <li>Excellent communication skills</li>
              <li>Team player</li>
              <li>Quick learner</li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-12 col-md-5  text-white p-4" style={{background:'rgb(0 29 73)'}}>
          {/* Profile Image */}
          <div className="d-flex justify-content-center my-3">
            <div className="bg-white " style={{ width: "120px", height: "120px",color:'gray',display:'flex',justifyContent:'center',alignItems:"center" }}><FaUser className="fs-1" />
            </div>
          </div>

          {/* Contact Information */}
          <div className="my-3">
            <h5>Contact Information</h5>
            <div className="d-flex align-items-center my-2">
              <TfiEmail className="me-2" />
              <p>Email: jagatjyotidash2@gmail.com</p>
            </div>
            <div className="d-flex align-items-center my-2">
              <BiSolidPhoneCall className="me-2" />
              <p>Mobile No: 6372304687</p>
            </div>
            <div className="d-flex align-items-center my-2">
              <ImHome className="me-2" />
              <p>Address: 8-124, patia, cs pur, bhubaneswar 751016</p>
            </div>
          </div>

          {/* Personal Information */}
          <div className="my-3">
            <h5>PERSONAL INFORMATION</h5>
            <ul className="list-unstyled mt-2">
              <li>DOB: 04 january 2003</li>
              <li>Gender: mail</li>
              <li>Father's Name: Goutam dash</li>
              <li>Languages Known: English, Hindi & odia</li>
              <li>Interests: Reading books & Playing Chess</li>
            </ul>
          </div>

          {/* Links Section */}
          <div className="my-3">
            <h5>LINKS</h5>
            <p>Blogs: <a href="https://yourblogname.com" className="text-light">myblogname.com</a></p>
            <p>LinkedIn: <a href="https://linkedin.com/in/asmitxx" className="text-light">ijouuhh;iojuiuoijo</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
