import React, { useState } from 'react';
import { Col, Row, Toast, Button } from 'react-bootstrap';

interface ToastEventProps {
    title?: string;
    children: React.ReactNode;
}

const ToastEvents = ({ children, title }: ToastEventProps): JSX.Element => {
    const [show, setShow] = useState(false);

    return (
        <Row>
            <Col xs={6}>
                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                    {title && <Toast.Header>{title}</Toast.Header>}
                    <Toast.Body>{children}</Toast.Body>
                </Toast>
            </Col>
            <Col xs={6}>
                <Button onClick={() => setShow(true)}>Show Toast</Button>
            </Col>
        </Row>
    );
};

export default ToastEvents;
