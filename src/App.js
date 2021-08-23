import "./App.css";
import CardList from "./components/CardList";
import { useEffect, useState } from "react";
import SearchBox from "./components/SearchBox";

function App() {
  const [students, setStudents] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://api.hatchways.io/assessment/students")
      .then((response) => response.json())
      .then((users) => {
        return setStudents(users.students);
      });
  }, []);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const filteredStudents = students.filter((student) => {
    return (
      student.firstName.toLowerCase().includes(searchField.toLowerCase()) ||
      student.lastName.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  return (
    <div className="wrapper">
      <SearchBox searchChange={onSearchChange} />
      <CardList students={filteredStudents} />
    </div>
  );
}

export default App;
