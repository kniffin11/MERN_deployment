import React, {useState, useEffect} from "react";
import {useParams, useHistory, Link} from 'react-router-dom';
import axios from 'axios';

const OnePet = () => {
    const {id} = useParams();
    const [petInfo, setPetInfo] = useState({});
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${id}`)
        .then(response => {
            console.log("response -->", response);
            setPetInfo(response.data.results);
        })
        .catch(err => {
            console.log("errrr", err);

        })
        console.log("doing other stuff");
    }, [])

    const deletePet = () => {
        axios.delete(`http://localhost:8000/api/pet/delete/${id}`)
        .then(response => {
            console.log("reponse -> ", response)
            history.push("/");
        })
        .catch(err => console.log("something went wrong", err))
    }

    return (
        <>
            <div style={{gap: "50px"}} className="d-flex">
                <h1>Pet Shelter</h1>
                <p><Link to={'/'}>Go Back</Link></p>
            </div>
            <h3>Details about: {petInfo.petName}</h3>
            <p>Pet Type: {petInfo.petType}</p>
            <p>Description: {petInfo.petDescription}</p>
            {
                petInfo.skillOne? <p>Skills: {petInfo.skillOne} {petInfo.skillTwo} {petInfo.skillThree} </p>: null
            }
            <button onClick={deletePet} >Adopt {petInfo.petName}</button>
        </>
    );
}

export default OnePet;