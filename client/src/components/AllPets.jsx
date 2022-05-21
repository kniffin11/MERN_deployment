import React, { useState, useEffect } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

const AllPets = (props) => {

    const [allPets, setAllPets] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/pet')
        .then(response => {
            console.log("Response --> ", response);
            setAllPets(response.data.results);
        })
        .catch(err => {
            console.log("errrr", err);
        })
        console.log("doing other stuff");
    }, [props.newPet])

    // black belt feature: sorts pets by type (and alphabetically)
    let allPetsSorted = allPets.sort((a,b) => (a.petType > b.petType) ? 1 : ((b.petType > a.petType) ? -1 : 0))

    return (
        <div className="container">
            <h1>Pet Shelter</h1>
            <p><Link to="/new">Add a pet to the shelter</Link></p>
            <p>These pets are looking for a good home! </p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allPetsSorted.map((petObj, idx) => {
                            return (
                                <tr key={petObj._id}>
                                    <td>{petObj.petName}</td>
                                    <td>{petObj.petType}</td>
                                    <td><Link to={`/${petObj._id}`}>Details</Link> | <Link to={`/edit/${petObj._id}`}>Edit</Link></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllPets;