import React, { useEffect, useState } from 'react';
import './UserRequest.css'

const UserRequest = () => {
    const [isActive, setIsActive] = useState(false)
    const [userR, setUserR] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/client-request')
            .then(res => res.json())
            .then(data => setUserR(data))
    }, [isActive])


    // Send Message to the user

    const activeUser = (id,phoneNumber) => {
        let USERNAME = process.env.REACT_APP_USERNAME
        let PASSWORD = process.env.REACT_APP_PASSWORD
        let number = `88${phoneNumber}`
        let message = `Congratulation! You have joined successfully and created an account in SB One Global Shop. Thank You`

        fetch('http://localhost:5000/activeuser', {
            method: 'PUT',
            body: JSON.stringify({
                id: id,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.message === 1) {
                    var myHeaders = new Headers();
                    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

                    var raw = "";

                    var requestOptions = {
                        method: 'POST',
                        headers: myHeaders,
                        body: raw,
                        redirect: 'follow'
                    };

                    fetch(`http://66.45.237.70/api.php?username=${USERNAME}&password=${PASSWORD}&number=${number}&message=${message}`, requestOptions)
                        .then(response => response.text())
                        .then(result => {
                            console.log(result)                            
                        })
                        .catch(error => console.log('error', error));
                    setIsActive(true)

                }
            })
            .catch(err => {
                console.log(err)
            })

    }
    return (
        <div>
            <h2>
                User Request
            </h2>
            {
                userR.map(user => <div className='user-r-box'>
                    <img src={`data:image/png;base64,${user.profilePic}`} alt='ggg' />
                    <h6>User ID: {user._id}</h6>
                    <h6>Account-Type: {user.accountType}</h6>
                    <h6>Refer ID: {user.referId}</h6>
                    <h6>Name: {user.name}</h6>
                    <h6>Phone: {user.phoneNumber}</h6>
                    <h6>Father's Name: {user.fatherName}</h6>
                    <h6>Mother's Name: {user.motherName}</h6>
                    <h6>Nominee Name: {user.nomineeName}</h6>
                    <h6>Date Of Birth: {user.dateOfBirth}</h6>
                    <h6>Nid/Birth: {user.nidBirth}</h6>
                    <h6>Profession: {user.profession}</h6>
                    <h6>{user.referId}</h6>
                    <h5>Address:</h5>
                    <h6>UpZilla: {user.upzilla}, Post: {user.post}, District: {user.district}, Division: {user.division}</h6>
                    <button onClick={() => !user.isValidUser && activeUser(user._id, user.phoneNumber)} className="up-b bbm mt-3">{user.isValidUser ? "Activated" : "Not Active"}</button>
                </div>)
            }
        </div>
    );
};

export default UserRequest;