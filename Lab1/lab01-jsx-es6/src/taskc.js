import React from "react";
const TaskC = () => {
    const people = [
        { name: 'Jack', age: 50 },
 { name: 'Michael', age: 9 },
 { name: 'John', age: 40 },
 { name: 'Ann', age: 19 },
 { name: 'Elisabeth', age: 16 },
 { name: 'Peter', age: 25 },
 { name: 'Emily', age: 17 },
 { name: 'David', age: 33 },
 { name: 'Sarah', age: 12 },
 { name: 'James', age: 48 },
 { name: 'Jessica', age: 21 },
 { name: 'Kevin', age: 15 },
 { name: 'Ashley', age: 28 },
 { name: 'Brian', age: 18 },
 { name: 'Megan', age: 31 },
 { name: 'Christopher', age: 11 },
 { name: 'Nicole', age: 42 },
 { name: 'Matthew', age: 23 },
 { name: 'Amanda', age: 13 },
 { name: 'Joshua', age: 39 },
 { name: 'Melissa', age: 29 },
 { name: 'Daniel', age: 14 },
 { name: 'Stephanie', age: 36 },
 { name: 'Andrew', age: 27 },
 { name: 'Angela', age: 19 },
 { name: 'Justin', age: 45 },
 { name: 'Rebecca', age: 22 },
 { name: 'Ryan', age: 16 },
 { name: 'Katherine', age: 34 },
 { name: 'Paul', age: 20 },
    ];
    // Teenagers Từ 10 đến 20.
    const allTeenagers = people
    .filter(person => person.age >= 10 && person.age <= 20)
    .sort((a, b) => a.age - b.age);

    const firstTeenager = people.find (person => person.age >= 10 && person.age <= 20);// lấy chỗ danh sách chưa sort.

    // Không phải Teenagers
    const notTeenagers = people
    .filter(person => person.age < 10 || person.age > 20);

    // Người lớn nhất và nhỏ nhất từ notTeenagers
    const oldestPerson = notTeenagers
    .reduce((oldest, person) => (person.age > oldest.age ? person : oldest), notTeenagers[0]);
    const youngestPerson = notTeenagers
    .reduce((youngest, person) => (person.age < youngest.age ? person : youngest), notTeenagers[0]);

    return (
        <div style={{ margin: "40px", textAlign: "center" }}>
            <h2>People Demo</h2>
            <h3>First Teenager: {firstTeenager.name} ({firstTeenager.age})</h3>
            <h2>All Teenagers(sorted by age)</h2>
            <ul>
                {allTeenagers.map((teenager, index) => (
                    <li key={index}>{teenager.name} - ({teenager.age})</li>
                ))}
            </ul>
            <h2>Not Teenagers</h2>
            <ul>
                {notTeenagers.map((person, index) => {
                    let color = "black";
                    if (person.name === oldestPerson.name) {
                        color = "green";
                    } else if (person.name === youngestPerson.name) {
                        color = "red";
                    }
                    return <li key={index} style={{ color: color }}>{person.name} - ({person.age})</li>;
                })}
            </ul>
        </div>
    );
};
export default TaskC;