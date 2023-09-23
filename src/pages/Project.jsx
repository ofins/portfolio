import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import projects_list from '../components/projectData';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft, faCircleRight, faExpand } from "@fortawesome/free-solid-svg-icons";
import '../styles/Project.css';


const Project = () => {

  const { id } = useParams();
  const details = projects_list.find(project => project.id === parseInt(id));

  const [imageSlot, setImageSlot] = useState(0);
  const addOne = () => {
    if (imageSlot < details.imageURL.length - 1) {
      return setImageSlot(prev => prev + 1);
    }
  };
  const minusOne = () => {
    if (imageSlot > 0) {
      return setImageSlot(prev => prev - 1);
    }
  };

  return (
    <div className="project--container">
      {
        <>
          <div className="project--context">
            <div className="project--header">
              <h1><FontAwesomeIcon icon={details.logo} /> {details.text}</h1>
              <p>{details.date_range}</p>
              <p>source: <a href={details.sourceURL} target='_blank' rel="noreferrer">{details.sourceURL}</a></p>
              <p>demo: <a href={details.demoURL} target='_blank' rel="noreferrer">{details.demoURL}</a></p>
            </div>
            <div className="project--tool">
              <h4>Built with: </h4>
              {details.built_with.map((item, index) => (<p key={index}>{item}</p>))}
            </div>
            <div className="project--notes">
              <section>
                <h4>What I learned from this project :</h4>
                <ul>
                  {details.learnt.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>
              <section>
                <h4>Summary</h4>
                {details.summary.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </section>
            </div>
            <div className="project--space"></div>
          </div>
        </>
      }
    </div>
  );
};

export default Project;