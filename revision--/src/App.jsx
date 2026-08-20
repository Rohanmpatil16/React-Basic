import React from 'react'
import Card from"./components/Card.jsx"
const App = () => {

  const user=[
  {
    "name": "Rohan Patil",
    "age": 22,
    "profession": "Software Developer",
    "salary": 65000,
    "photo": "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    "name": "Priya Sharma",
    "age": 24,
    "profession": "UI/UX Designer",
    "salary": 55000,
    "photo": "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    "name": "Amit Kulkarni",
    "age": 28,
    "profession": "Data Analyst",
    "salary": 72000,
    "photo": "https://randomuser.me/api/portraits/men/46.jpg"
  },
  {
    "name": "Sneha Joshi",
    "age": 26,
    "profession": "Project Manager",
    "salary": 85000,
    "photo": "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    "name": "Rahul Deshmukh",
    "age": 30,
    "profession": "Backend Developer",
    "salary": 90000,
    "photo": "https://randomuser.me/api/portraits/men/68.jpg"
  }
]
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {user.map((elem,index) => (
        <Card 
          key={index}
          username={elem.name}
          age={elem.age}
          profession={elem.profession}
          salary={elem.salary}
          photo={elem.photo}
        />
      ))}
    </div>
  )
}

export default App