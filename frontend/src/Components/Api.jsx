import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';

const Api = () => {
  const [endpointID, setendpointID] = useState('');
  const currentUrl = window.location.href;
  const endpoint = currentUrl + `/${endpointID}`;
  const [output, setOutput] = useState('');
  const [btnLoading, setbtnLoading] = useState(false);
  useEffect(() => {
    let id = localStorage.getItem('id');
    id && setendpointID(id);
  }, []);

  const getJson = (e) => {
    e.preventDefault();
    setbtnLoading(true);
    axios
      .get(endpoint)
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
      })
      .then(() => setbtnLoading(false));
  };

  const handleInput = (e) => {
    const { value } = e.target;
    const reg = /^\d+$/;
    if (reg.test(value) && value.length <= 4) setendpointID(value);
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
                  <Col xs={12} sm='auto'>
                    <Form.Label
                      column='lg'
                      xs='auto'
                      style={{ paddingLeft: 0, paddingRight: 0 }}
                    >
                      Endpoint:
                    </Form.Label>
                  </Col>
                  <Col xs>
                    <InputGroup size='lg' style={{ minWidth: '150px' }}>
                      <InputGroup.Append>
                        <InputGroup.Text id='basic-addon2'>
                          /api/
                        </InputGroup.Text>
                      </InputGroup.Append>
                      <Form.Control
                        type='text'
                        value={endpointID}
                        onChange={handleInput}
                      />
                    </InputGroup>
                  </Col>
                  <Col xs='auto'>
                    <Button
                      variant='success'
                      size='lg'
                      onClick={getJson}
                      disabled={!endpointID}
                    >
                      {btnLoading ? (
                        <Spinner
                          as='span'
                          animation='border'
                          size='sm'
                          role='status'
                          aria-hidden='true'
                        />
                      ) : (
                        'GET'
                      )}
                    </Button>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Form.Text className='text-muted ml-1 mt-2'>
                    You can use our example endpoint /api/1
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
