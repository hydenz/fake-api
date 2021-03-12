import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

const Home = () => {
  const [userInput, setuserInput] = useState('');
  const [validJson, setvalidJson] = useState({
    text: '',
    color: '',
    disabledBtn: true,
  });
  const [modalOpts, setmodalOpts] = useState({ show: false, msg: '' });
  const [btnLoading, setbtnLoading] = useState(false);
  const postJson = (e) => {
    e.preventDefault();
    setbtnLoading(true);
    let json = JSON.parse(userInput);
    axios
      .post('/api', json)
      .then((res) => {
        setmodalOpts({ show: true, msg: res.data.msg });
        let endpoint = window.location.href.replace(
          'home',
          `api/${res.data.id}`
        );
        localStorage.setItem('endpoint', endpoint);
      })
      .catch(() =>
        setmodalOpts({
          show: true,
          msg:
            'There was an error processing your request, please try again later',
        })
      )
      .then(() => setbtnLoading(false));
  };
  useEffect(() => {
    if (userInput) {
      try {
        JSON.parse(userInput);
        setvalidJson({
          text: 'Valid JSON Format',
          color: 'success',
          disabledBtn: false,
        });
      } catch (err) {
        setvalidJson({
          text: 'Invalid JSON Format',
          color: 'danger',
          disabledBtn: true,
        });
      }
    }
  }, [userInput]);
  return (
    <Container>
      <Row className='mt-5'>
        <Col>
          <Card className='text-center'>
            <Card.Header>Post Your JSON</Card.Header>
            <Card.Body>
              <Card.Title>
                Enter a JSON text and we will generate an endpoint to GET it
              </Card.Title>
              <Form className='mt-4'>
                <Form.Group controlId='formBasicText'>
                  <Form.Control
                    as='textarea'
                    rows={12}
                    style={{ resize: 'none' }}
                    spellCheck='false'
                    value={userInput}
                    onChange={(e) => setuserInput(e.target.value)}
                  />
                </Form.Group>
                <Container>
                  <Row>
                    <Col>
                      <p className={`text-left text-${validJson.color}`}>
                        {validJson.text}
                      </p>
                    </Col>
                    <Col className='text-right'>
                      <Button
                        variant='primary'
                        type='submit'
                        disabled={validJson.disabledBtn}
                        onClick={postJson}
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
                          'Submit'
                        )}
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Modal
        show={modalOpts.show}
        onHide={() => setmodalOpts({ show: false, msg: '' })}
      >
        <Modal.Header closeButton>
          <Modal.Title>Request Response</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalOpts.msg}</Modal.Body>
        <Modal.Footer>
          <Button
            variant='secondary'
            onClick={() => setmodalOpts({ show: false, msg: '' })}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Home;
