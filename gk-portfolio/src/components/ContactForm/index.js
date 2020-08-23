import React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// This is static top section of the page and gives it semantic value.
function Bio() {
    return (
        <section>
            <Container>
                <Row className="justify-content-md-center mt-5">
                    <Col className="white-color" lg={8}>
                        <form data-netlify="true" name="contact" method="POST" netlify-honeypot="bot-field" data-netlify-recaptcha="true">

                            {/* <!-- Honeypot protection from spam bots --> */}
                            <p className="hidden">
                                <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                            </p>
                            <div className="form-group">
                                <label htmlFor="inputName">Name</label>
                                <input type="text" className="form-control" id="inputName" aria-describedby="inputName" placeholder="John Smith" name="name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="exampleInputEmail1" placeholder="example@gmail.com" name="email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="message"></textarea>
                            </div>

                            {/* <!-- reCaptcha 2 --> */}
                            <div data-netlify-recaptcha="true" className="mb-4"></div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}


export default Bio;