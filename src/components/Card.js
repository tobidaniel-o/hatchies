import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const Card = ({
  firstName,
  lastName,
  aveScores,
  company,
  email,
  skill,
  pic,
  grades,
}) => {
  const [gradeDetails, setGradeDetails] = useState(true);

  const onClick = () => {
    setGradeDetails(!gradeDetails);
  };

  return (
    <div className="card-container">
      <div className="card-img-container">
        <img src={pic} alt={`${firstName} ${lastName}`} />
      </div>
      <div className="card-details">
        <h2>
          {firstName} {lastName}
        </h2>
        <div className="card-mini-details">
          <p>Email: {email}</p>
          <p>Company: {company}</p>
          <p>Skill: {skill}</p>
          <p>Average: {aveScores}</p>
        </div>
        <div className="list-of-scores">
          {gradeDetails
            ? ""
            : grades.map((grade, index) => {
                index++;
                return (
                  <p key={index}>
                    Test {index}: <span className="score">{grade}%</span>
                  </p>
                );
              })}
        </div>
      </div>
      <div className="open-close" onClick={onClick}>
        {gradeDetails ? (
          <FontAwesomeIcon icon={faPlus} />
        ) : (
          <FontAwesomeIcon icon={faMinus} />
        )}
      </div>
    </div>
  );
};

export default Card;
