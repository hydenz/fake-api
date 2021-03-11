import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

const Api = () => {
  const [endPoint, setendPoint] = useState('');
  const [output, setOutput] = useState('');
  useEffect(() => {
    let endpoint = localStorage.getItem('endpoint');
    endpoint && setendPoint(endpoint);
  }, []);

  const getJson = (e) => {
    e.preventDefault();
    axios
      .get(endPoint)
      .then((resp) => {
        resp.data = JSON.stringify(resp.data, null, 2);
        setOutput(resp.data);
      })
      .catch((err) => {
        if (err.response) {
          setOutput(err.response.data.msg);
        } else if (err.request) {
          setOutput('Server out of reach, please try again later');
        }
      });
  };
  return (
    <Container>
      <Row className='mt-5'>
        <Col>
          <Card className='text-center'>
            <Card.Header>Use the API</Card.Header>
            <Card.Body className='text-left'>
              <Form>
                <Form.Row>
                  <Form.Label column='lg' xs='auto'>
                    Endpoint:
                  </Form.Label>
                  <Col xs={true}>
                    <Form.Control
                      size='lg'
                      type='text'
                      value={endPoint}
                      onChange={(e) => setendPoint(e.target.value)}
                    />
                  </Col>
                  <Col xs='auto'>
                    <Button variant='success' size='lg' onClick={getJson}>
                      GET
                    </Button>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Form.Text className='text-muted ml-1 mt-2'>
                    {`You can use our example endpoint ${window.location.href}/1`}
                  </Form.Text>
                </Form.Row>
              </Form>
              <h2 className='mt-2'>Response:</h2>
              <Form.Control
                as='textarea'
                rows={12}
                style={{ resize: 'none' }}
                spellCheck='false'
                readOnly={true}
                value={output}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Api;
