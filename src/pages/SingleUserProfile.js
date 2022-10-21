import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './css/SingleUserProfile.css'
import {Container} from 'react-bootstrap'

function SingleUserProfile() {
    const [userdata,setUserdata]= useState([]);



    let {id} = useParams()
    
    useEffect(()=>{
        axios.get(`http://localhost:3001/auth/getuser/${id}`,{headers:{accessToken:localStorage.getItem("accessToken")},
    }).then((response)=>{
            setUserdata(response.data)
            
        })
    },[id]);
    
    
    function getAge(dateString) 
    {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
        {
            age--;
        }
        return age;
    }
    
    
      return (
        <div>
             {/* {userdata.map((value, key) => {
          return (
           <div key={key}>
     */}
    <Container>
    
    
    <section className ="section about-section gray-bg" id="about">
                <div className ="container">
                    <div className ="row align-items-center flex-row-reverse">
                        <div className ="col-lg-6">
                            <div className ="about-text go-to">
                                <h3 className ="dark-color">{userdata.username}</h3>
                                {/* <h6 className ="theme-color lead">A Lead UX &amp; UI designer based in Canada</h6>
                                <p>I <mark>design and develop</mark> services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions.</p> */}
                                <div className ="row about-list">
                                    <div className ="col-md-6">
                                    <div className ="media">
                                            <label>Username</label>
                                            <p>{userdata.username}</p>
                                        </div>
                                        <div className ="media">
                                            <label>Birthday</label>
                                            <p>{new Date(userdata.birthday).toDateString()}</p>
                                        </div>
                                        <div className ="media">
                                            <label>Age</label>
                                            <p>{getAge(userdata.birthday)}</p>
    
                                        </div>
                                        <div className ="media">
                                            <label>Profile Creation Date</label>
                                            <p typeof='date'>{new Date(userdata.createdAt).toDateString()}</p>
                                        </div>
                                        <div className ="media">
                                            <label>Address</label>
                                            <p>{userdata.address}</p>
                                        </div>
                                    </div>
                                    <div className ="col-md-6">
                                        <div className ="media">
                                            <label>E-mail</label>
                                            <p>{userdata.email}</p>
                                        </div>
                                        <div className ="media">
                                            <label>Phone</label>
                                            <p>{userdata.PhoneNumber}</p>
                                        </div>
                                        <div className ="media">
                                            <label>Current Status</label>
                                            <p>{userdata.currentstatus}</p>
                                        </div>
                                        <div className ="media">
                                            <label>Occupation</label>
                                            <p>{userdata.occupation}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className ="col-lg-6">
                            <div className ="about-avatar">
                                <img src={userdata.image} title="" alt=""/>
                            </div>
                        </div>
                    </div>
                    {/* <div className ="counter">
                        <div className ="row">
                            <div className ="col-6 col-lg-3">
                                <div className ="count-data text-center">
                                    <h6 className ="count h2" data-to="500" data-speed="500">500</h6>
                                    <p className ="m-0px font-w-600">Happy Clients</p>
                                </div>
                            </div>
                            <div className ="col-6 col-lg-3">
                                <div className ="count-data text-center">
                                    <h6 className ="count h2" data-to="150" data-speed="150">150</h6>
                                    <p className ="m-0px font-w-600">Project Completed</p>
                                </div>
                            </div>
                            <div className ="col-6 col-lg-3">
                                <div className ="count-data text-center">
                                    <h6 className ="count h2" data-to="850" data-speed="850">850</h6>
                                    <p className ="m-0px font-w-600">Photo Capture</p>
                                </div>
                            </div>
                            <div className ="col-6 col-lg-3">
                                <div className ="count-data text-center">
                                    <h6 className ="count h2" data-to="190" data-speed="190">190</h6>
                                    <p className ="m-0px font-w-600">Telephonic Talk</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
    
        
            </Container>
    
{/*     
           </div>
           )
        
        })}
     */}
    
    
        
        </div>
      )
}

export default SingleUserProfile