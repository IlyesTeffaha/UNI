import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCog, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button, ButtonGroup, Breadcrumb, InputGroup, Dropdown } from '@themesberg/react-bootstrap';

//////////////////////////////////////////////////////////////////////////////

import { faAngleDown, faAngleUp, faArrowDown, faArrowUp, faEdit, faEllipsisH, faExternalLinkAlt, faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import {  Nav, Card, Image, Table, ProgressBar, Pagination } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../routes";
import { pageVisits, pageTraffic, pageRanking } from "../data/tables";
import transactions from "../data/transactions";
import commands from "../data/commands";
import axios from "axios";

// import { TransactionsTable } from "../components/Tables";

export default () => {
  //

  const [userslist,setUsersList] = useState([]);


  useEffect(()=>{
    let iscanceled =false;

    const getusers=async()=>{
      axios.get("http://localhost:3001/auth/allusers",{headers:{accessToken:localStorage.getItem("accessToken")},
    }).then((response)=>{
      if(!iscanceled){
        setUsersList(response.data);
        
      }
      
      })

      return()=>{
        iscanceled=true;
      };
    };
    // await timeout(1000);
 getusers();
  },[]);



  
  
   return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>Sidebar Menu</Breadcrumb.Item>
            <Breadcrumb.Item active>User list</Breadcrumb.Item>
          </Breadcrumb>
          <h4>User list</h4>
          {/* <p className="mb-0">Your web analytics dashboard template.</p> */}
        </div>
        <div className="btn-toolbar mb-2 mb-md-0">
          <ButtonGroup>
            <Button variant="outline-primary" size="sm">Share</Button>
            <Button variant="outline-primary" size="sm">Export</Button>
          </ButtonGroup>
        </div>
      </div>

      <div className="table-settings mb-4">
        <Row className="justify-content-between align-items-center">
          <Col xs={8} md={6} lg={3} xl={4}>
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
              <Form.Control type="text" placeholder="Search" />
            </InputGroup>
          </Col>
          <Col xs={4} md={2} xl={1} className="ps-md-0 text-end">
            <Dropdown as={ButtonGroup}>
              <Dropdown.Toggle split as={Button} variant="link" className="text-dark m-0 p-0">
                <span className="icon icon-sm icon-gray">
                  <FontAwesomeIcon icon={faCog} />
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-xs dropdown-menu-right">
                <Dropdown.Item className="fw-bold text-dark">Show</Dropdown.Item>
                <Dropdown.Item className="d-flex fw-bold">
                  10 <span className="icon icon-small ms-auto"><FontAwesomeIcon icon={faCheck} /></span>
                </Dropdown.Item>
                <Dropdown.Item className="fw-bold">20</Dropdown.Item>
                <Dropdown.Item className="fw-bold">30</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </div>
 
      <TransactionsTable/>
    </>
  );
  
};
export const TransactionsTable = () => {
  const totalTransactions = transactions.length;
  const [userslist,setUsersList] = useState([]);

  useEffect(()=>{
    let iscanceled =false;

    const getusers=async()=>{
      axios.get("http://localhost:3001/auth/allusers",{headers:{accessToken:localStorage.getItem("accessToken")},
    }).then((response)=>{
      if(!iscanceled){
        setUsersList(response.data);
        console.log("hi")
        
      }
      
      })

      return()=>{
        iscanceled=true;
      };
    };
    // await timeout(1000);
 getusers();
  },[]);

  // const TableRow = () => {

  //       const [userslist,setUsersList] = useState([]);

  //       useEffect(()=>{
  //         let iscanceled =false;

  //         const getusers=async()=>{
  //           axios.get("http://localhost:3001/auth/allusers",{headers:{accessToken:localStorage.getItem("accessToken")},
  //         }).then((response)=>{
  //           if(!iscanceled){
  //             setUsersList(response.data);
  //             console.log("hi")
              
  //           }
            
  //           })

  //           return()=>{
  //             iscanceled=true;
  //           };
  //         };
  //         // await timeout(1000);
  //      getusers();
  //       },[]);
        
   

    
  //       console.log('test')


  //   return (
     
  //       <>
  

  // {userslist.map((value, key) => {
  //   return (
  //     <tr key={key}>
  //       <td>
  //         <Card.Link as={Link} to={Routes.Invoice.path} className="fw-normal">
  //           {value.username}
  //         </Card.Link>
  //       </td>
  //       <td>
  //         <span className="fw-normal">
  //           {value.email}
  //         </span>
  //       </td>
  //       <td>
  //         <span className="fw-normal">
  //           {value.PhoneNumber}
  //         </span>
  //       </td>
  //       <td>
  //         <span className="fw-normal">
  //         {new Date(value.birthday).toDateString()}
  //         </span>
  //       </td>
  //       <td>
  //         <span className="fw-normal">
  //           {/* ${parseFloat(price).toFixed(2)}
  //            */}
  //            {value.address}

  //         </span>
  //       </td>
  //       <td>
  //         <span >
  //           {value.currentstatus}
  //         </span>
  //       </td>
  //       <td>
  //         <Dropdown as={ButtonGroup}>
  //           <Dropdown.Toggle as={Button} split variant="link" className="text-dark m-0 p-0">
  //             <span className="icon icon-sm">
  //               <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
  //             </span>
  //           </Dropdown.Toggle>
  //           <Dropdown.Menu>
  //             <Dropdown.Item>
  //               <FontAwesomeIcon icon={faEye} className="me-2" /> View Details
  //             </Dropdown.Item>
  //             <Dropdown.Item>
  //               <FontAwesomeIcon icon={faEdit} className="me-2" /> Edit
  //             </Dropdown.Item>
  //             <Dropdown.Item className="text-danger">
  //               <FontAwesomeIcon icon={faTrashAlt} className="me-2" /> Remove
  //             </Dropdown.Item>
  //           </Dropdown.Menu>
  //         </Dropdown>
  //       </td>
  //     </tr>
  //     )}
  //     )}




      
  //     </>
  //   );
  // };

  return (
    <Card border="light" className="table-wrapper table-responsive shadow-sm">
      <Card.Body className="pt-0">
        <Table hover className="user-table align-items-center">
          <thead>
            <tr>
              <th className="border-bottom">Username</th>
              <th className="border-bottom">Email</th>
              <th className="border-bottom">Phone Number</th>
              <th className="border-bottom">Birthday</th>
              <th className="border-bottom">Address</th>
              
              <th className="border-bottom">Current Status</th>

            </tr>
          </thead>
          <tbody>
          <>
  

  {userslist.map((value, key) => {
    return (
      <tr key={key}>
        <td>
          <Card.Link as={Link}  to={`/userprofile/${value.id}`} className="fw-normal">
            {value.username}
          </Card.Link>
        </td>
        <td>
          <span className="fw-normal">
            {value.email}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {value.PhoneNumber}
          </span>
        </td>
        <td>
          <span className="fw-normal">
          {new Date(value.birthday).toDateString()}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {/* ${parseFloat(price).toFixed(2)}
             */}
             {value.address}

          </span>
        </td>
        <td>
          <span >
            {value.currentstatus}
          </span>
        </td>
        <td>
          <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle as={Button} split variant="link" className="text-dark m-0 p-0">
              <span className="icon icon-sm">
                <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
              </span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faEye} className="me-2" /> View Details
              </Dropdown.Item>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faEdit} className="me-2" /> Edit
              </Dropdown.Item>
              <Dropdown.Item className="text-danger">
                <FontAwesomeIcon icon={faTrashAlt} className="me-2" /> Remove
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
      )}
      )}




      
      </>
          </tbody>
        </Table>
        <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
          <Nav>
            <Pagination className="mb-2 mb-lg-0">
              <Pagination.Prev>
                Previous
              </Pagination.Prev>
              <Pagination.Item active>1</Pagination.Item>
              <Pagination.Item>2</Pagination.Item>
              <Pagination.Item>3</Pagination.Item>
              <Pagination.Item>4</Pagination.Item>
              <Pagination.Item>5</Pagination.Item>
              <Pagination.Next>
                Next
              </Pagination.Next>
            </Pagination>
          </Nav>
          <small className="fw-bold">
            Showing <b>{totalTransactions}</b> out of <b>25</b> entries
          </small>
        </Card.Footer>
      </Card.Body>
      
    </Card>
  );
};
