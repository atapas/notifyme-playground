import React, { useState, useEffect, useRef } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import NotifyMe from 'react-notification-timeline';

import { getRandom } from './util';

import './App.css';

const App = () => {

  const [data, setData] = useState([]);
  const dataRef = useRef(data);
  dataRef.current = data;
  const [realTime, setRealTime] = useState(false);


  const addNotification = (count, when) => {
    console.log('Add Notification');
    let obj = {};
    obj['update'] = getRandom();

    if (when === 'now') {
      obj['timestamp'] = new Date().getTime();
    } if (when === 'minute') {
      obj['timestamp'] = new Date().getTime() - (61 * 1000);
    } if (when === 'hour') {
      obj['timestamp'] = new Date().getTime() - (61 * 60 * 1000);;
    } else if (when === 'yesterday') {
      obj['timestamp'] = new Date().getTime() - (25 * 60 * 60 * 1000);
    }
    else if (when === 'month') {
      obj['timestamp'] = new Date().getTime() - (31 * 24 * 60 * 60 * 1000);
    }
    else if (when === 'year') {
      obj['timestamp'] = new Date().getTime() - (13 * 30 * 24 * 60 * 60 * 1000);
    }
    setData(() => ([...dataRef.current, obj]));
    console.log('data added', data);
  }

  const manageRealTime = () => {
    setRealTime(!realTime);
  }

  useEffect(() => {
    setData(data);
    console.log('On data Change', data);
  }, [data]);

  useEffect(() => {
    let interval;
    if (realTime) {
      interval = setInterval(() => {
        console.log('In setInterva;', dataRef, data);
        addNotification(1, 'now');
      }, 5000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [realTime]);

  return (
    <div className="app">
      <div className="btnList">
        <Button variant="secondary" onClick={() => addNotification(1, 'now')}>Add a Notification</Button> {' '}
        <Button variant={realTime? 'danger' : 'success'} onClick={() => manageRealTime()}>{realTime ? 'Stop Real-Time': 'Start Real-Time'}</Button>
        <br />
        { realTime && <span style={{color: 'gray'}}>A notification will be sent every 5 seconds!</span> }
      </div>

      <Container fluid style={{padding:'30px'}}>
        <Row>
          
          <Col sm={12} className="medium">
            <NotifyMe
              data={data}
              storageKey='notific_key'
              notific_key='timestamp'
              notific_value='update'
              heading='Notification Alerts'
              sortedByKey={false}
              showDate={true}
              size={64}
              color="yellow"
            />
          </Col>
        </Row>
      </Container>
      
    </div>
  );
};
export default App;

