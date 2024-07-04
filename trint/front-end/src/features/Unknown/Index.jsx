import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';



function Avatar(props) {
    return (
        <Container>
            <Row>
                <Col >
                    <Image className='Avatar'
                        src={props.user.avatarUrl} thumbnail
                        alt={props.user.name}
                        width='100px'
                    />
                </Col>
            </Row>
        </Container>
    );
}

function UserInfo(props) {
    return (
        <Container>
            <Row >
                <Col sm={4} ><b>Full Name</b></Col>
                <Col sm={8}><big>{props.user.name}</big></Col>
            </Row>
            <hr />
            <Row>
                <Col sm={4}><b>Email</b></Col>
                <Col sm={8}><big>{props.user.email}</big></Col>
            </Row>
            <hr />
            <Row>
                <Col sm={4}><b>Address</b></Col>
                <Col sm={8}><big>{props.user.address}</big></Col>
            </Row>
            <hr />
            <Row>
                <Col sm={4}><b>Status</b></Col>
                <Col sm={8}><big>{props.user.status}</big></Col>
            </Row>
            <hr />
            <Row>
                <Col sm={4}><b>CreatedAt</b></Col>
                <Col sm={8}><big>{new Date(props.log.createdat).toLocaleString()}</big></Col>
            </Row>
            <hr />
            <Row>
                <Col sm={4}><b>UpdatedAt</b></Col>
                <Col sm={8}><big>{new Date(props.log.updatedat).toLocaleString()}</big></Col>
            </Row>
            <hr />
            <Row>
                <Col sm={4}><b>DeletedAt</b></Col>
                <Col sm={8}><big>{props.log.deletestatus ? new Date(props.log.deletedat).toLocaleString() : 'not deleted'}</big></Col>
            </Row>
        </Container>
    );
}

function UserDetail(props) {
    return (
        <Card style={{ width: '30rem', height: '38rem' }} className='Card'>
            <h3> <Badge bg="secondary">User Detail</Badge></h3>
            <div className='UserAvatar'>
                <Avatar user={props.author} /></div>
            <div className='UserInfo'>
                <UserInfo log={props.date} user={props.author} /></div>
        </Card>
    );
}
export default UserDetail

