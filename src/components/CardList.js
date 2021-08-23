import React from "react";
import Card from "./Card";

const CardList = ({ students }) => {
  const average = (scoreArr) => {
    return scoreArr.reduce((a, b) => Number(a) + Number(b)) / scoreArr.length;
  };


  return (
    <div>
      {students.map((student) => {
        return (
          <Card
            key={student.id}
            pic={student.pic}
            firstName={student.firstName}
            lastName={student.lastName}
            email={student.email}
            company={student.company}
            skill={student.skill}
            aveScores={average(student.grades) + "%"}
            grades = {student.grades}
          />
        );
      })}
    </div>
  );
};

export default CardList;
