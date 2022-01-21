import React from 'react';
import { Col, Row } from 'react-bootstrap';
import DashboardHome from '../DashboardHome/DashboardHome';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <>
           <Row>
                <Col md={3}>
                    <Sidebar></Sidebar>
                </Col>
                <Col md={9}>
                    <DashboardHome></DashboardHome>
                </Col>
            </Row> 
        </>
    );
};

export default Dashboard;