import React, {useState, useEffect} from 'react';
import { useParams, useHistory, Link} from 'react-router-dom';
import axios from 'axios';

const EditPet = (props) => {
    const {id} = useParams();

    const [petInfo, setPetInfo] = useState({});

    let [errors, setErrors] = useState({});

    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${id}`, )
        .then(response => {
            console.log("response -->", response);
            setPetInfo(response.data.results);
        })
        .catch(err => {
            console.log("errrr", err);
        })
        console.log("doing other stuff");
    }, [])

    const changeHandler = (e) => {
        setPetInfo({
            ...petInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/pet/update/${id}`, petInfo)
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
        <>
            <div className="container">
            <p><Link to={'/'}>Go Back</Link></p>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="petName">Pet Name: </label>
                    <input type="text" name="petName" className="form-control" onChange={changeHandler} value={petInfo.petName} ></input>
                    <p className="text-danger">{errors.petName?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="petType">Pet Type: </label>
                    <input type="text" name="petType" className="form-control" onChange={changeHandler} value={petInfo.petType} ></input>
                    <p className="text-danger">{errors.petType?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="petDescription">Pet Description: </label>
                    <input type="text" name="petDescription" className="form-control" onChange={changeHandler} value={petInfo.petDescription} ></input>
                    <p className="text-danger">{errors.petDescription?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="skillOne">Skill One: </label>
                    <input type="text" name="skillOne" className="form-control" onChange={changeHandler} value={petInfo.skillOne} ></input>
                    <p className="text-danger">{errors.skillOne?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="skillTwo">Skill Two: </label>
                    <input type="text" name="skillTwo" className="form-control" onChange={changeHandler} value={petInfo.skillTwo} ></input>
                    <p className="text-danger">{errors.skillTwo?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="skillThree">Skill Three: </label>
                    <input type="text" name="skillThree" className="form-control" onChange={changeHandler} value={petInfo.skillThree} ></input>
                    <p className="text-danger">{errors.skillThree?.message}</p>
                </div>
                <input style={{marginTop: "10px"}} type="submit" value="Update" ></input>
            </form>
        </div>
        </>
    );
}

export default EditPet;