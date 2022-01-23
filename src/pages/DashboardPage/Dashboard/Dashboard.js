import React from 'react';
import { Col, Row } from 'react-bootstrap';
import DashboardHome from '../DashboardHome/DashboardHome';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css';
const Dashboard = () => {
    return (
        <>
        <section >
            <Row className='dashboard-container'>
                <Col md={3}>
                    <Sidebar></Sidebar>
                </Col>
                <Col md={9}>
                    <DashboardHome></DashboardHome>
                </Col>
            </Row> 
        </section>
           
        </>
    );
};

export default Dashboard;