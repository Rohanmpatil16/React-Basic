import React from 'react'

const Card = (props) => {
  return (
    <div className="bg-white text-black p-6 rounded shadow-md ">
        <img src={props.photo} alt=" " className="w-24 h-24 rounded-full object-cover mb-4"/>
        <h1 className="text-xl font-bold mb-2">{props.username}</h1>
        <h4 className="text-gray-600 mb-2">{props.profession}</h4>
        <h4 className="text-gray-600 mb-2">{props.age}</h4>
        <h4 className="text-gray-600 mb-2">${props.salary.toLocaleString()}</h4>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Profile</button>
    </div>
  )
}

export default Card