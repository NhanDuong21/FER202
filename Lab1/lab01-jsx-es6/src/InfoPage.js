import React from "react";
const InfoPage = () => {
  const course = {
    name: "React Fundamentals",
    code: "LAB01",
    instructor: "Mr. Thanh",
    duration: "10 weeks",
  };
  // Destructuring object
  const { name, code, instructor, duration } = course;
  return (
    <div style={{ margin: "20px", textAlign: "center" }}>
      <h2>Course Information</h2>
      <p>Course: {name}</p>
      <p>Code: {code}</p>
      <p>Instructor: {instructor}</p>
      <p>Duration: {duration}</p>
    </div>
  );
};
export default InfoPage;
