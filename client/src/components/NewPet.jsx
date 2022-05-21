import {useHistory} from 'react-router-dom';
import React, {useState} from 'react';
import axios from 'axios';

const NewPet = (props) => {
    let [petName, setPetName] = useState("");
    let [petType, setPetType] = useState("");
    let [petDescription, setPetDescription] = useState("");
    let [skillOne, setSkillOne] = useState("");
    let [skillTwo, setSkillTwo] = useState("");
    let [skillThree, setSkillThree] = useState("");

    let [errors, setErrors] = useState({});

    const history = useHistory();

    const addPet = (e) => {
        e.preventDefault();

        let formInfo = {petName, petType, petDescription, skillOne, skillTwo, skillThree};

        axios.post("http://localhost:8000/api/pet/new", formInfo)
            .then(response => {
                console.log("response: ", response);
                if(response.data.error){
                    setErrors(response.data.error.errors);
                } else {
                    props.setNewPet(!props.newPet);
                    history.push("/");
                }
            })
            .catch(err => console.log("errrrrr", err))
    }

    return (
        <div className="container">
            <form onSubmit={addPet}>
                <div className="form-group">
                    <label htmlFor="petName">Pet Name: </label>
                    <input type="text" name="petName" className="form-control" onChange={(e)=>setPetName(e.target.value)} value={petName} ></input>
                    <p className="text-danger">{errors.petName?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="petType">Pet Type: </label>
                    <input type="text" name="petType" className="form-control" onChange={(e)=>setPetType(e.target.value)} value={petType} ></input>
                    <p className="text-danger">{errors.petType?.message}</p>

                </div>
                <div className="form-group">
                    <label htmlFor="petDescription">Pet Description: </label>
                    <input type="text" name="petDescription" className="form-control" onChange={(e)=>setPetDescription(e.target.value)} value={petDescription} ></input>
                    <p className="text-danger">{errors.petDescription?.message}</p>

                </div>
                <div className="form-group">
                    <label htmlFor="skillOne">Skill One: </label>
                    <input type="text" name="skillOne" className="form-control" onChange={(e)=>setSkillOne(e.target.value)} value={skillOne} ></input>
                    <p className="text-danger">{errors.skillOne?.message}</p>

                </div>
                <div className="form-group">
                    <label htmlFor="skillTwo">Skill Two: </label>
                    <input type="text" name="skillTwo" className="form-control" onChange={(e)=>setSkillTwo(e.target.value)} value={skillTwo} ></input>
                    <p className="text-danger">{errors.skillTwo?.message}</p>

                </div>
                <div className="form-group">
                    <label htmlFor="skillThree">Skill Three: </label>
                    <input type="text" name="skillThree" className="form-control" onChange={(e)=>setSkillThree(e.target.value)} value={skillThree} ></input>
                    <p className="text-danger">{errors.skillThree?.message}</p>
                </div>
                <input style={{marginTop: "10px"}} type="submit" value="Add Pet" ></input>
            </form>
        </div>
    );
}

export default NewPet;