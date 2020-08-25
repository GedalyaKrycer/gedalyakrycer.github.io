import React, { useRef, useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Reaptcha from "reaptcha";
import axios from "axios";
import qs from "qs";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';






// This is static top section of the page and gives it semantic value.
function ContactForm() {

    // START Code Copied From https://github.com/kimfucious/netlify-forms-formik/blob/master/src/FormikForm.js#L7
    //
    const [errMsg, setErrMsg] = useState("");
    const [executing, setExecuting] = useState(false);
    const [formValues, setFormValues] = useState({});
    const [formReset, setFormReset] = useState({});
    // const [loaded, setLoaded] = useState(false);
    const [msgSent, setMsgSent] = useState(false);
    const [rcError, setRcError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [token, setToken] = useState("");
    const [verified, setVerified] = useState(false);

    const rcRef = useRef(null);


    useEffect(() => {
        const handleSubmit = async (formValues, token) => {
            const data = {
                ...formValues,
                "g-recaptcha-response": token
            };
            const options = {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                data: qs.stringify(data),
                url: "/"
            };
            try {
                await axios(options);
                setMsgSent(true);
                formReset();
            } catch (e) {
                setErrMsg(e.message);
            }
        };
        if (token) {
            handleSubmit(formValues, token);
        }
    }, [formReset, formValues, token]);

    const onError = () => {
        console.log("error...");
        setRcError(true);
    };

    const onExpire = () => {
        console.log("expired...");
        console.log("resetting...");
        resetReCaptcha();
    };

    const onLoad = resetForm => {
        console.log("loaded...");
        setFormReset(resetForm);
    };

    const onVerify = token => {
        console.log("verified...");
        setToken(token);
        setVerified(true);
        setExecuting(false);
    };

    const renderButton = (executing, isSubmitting) => {
        if (errMsg) {
            return (
                <button
                    className="btn btn-lg btn-outline-primary mt-3"
                    type="submit"
                    disabled
                >
                    Error
                </button>
            );
        } else if (msgSent) {
            return (
                <button
                    className="btn btn-lg btn-outline-success mt-3"
                    type="submit"
                    disabled
                >
                    Submitted
                </button>
            );
        } else {
            return (
                <button
                    className="btn btn-lg btn-outline-info mt-3"
                    type="submit"
                    disabled={isSubmitting || executing}
                >
                    Submit
                </button>
            );
        }
    };

    const resetEverything = resetForm => {
        if (rcError) {
            setRcError(false);
        }
        if (resetForm) {
            setMsgSent(false);
            setErrMsg(false);
            resetForm();
        }
        resetReCaptcha();
    };

    const resetReCaptcha = async () => {
        console.log("resetting...");
        await rcRef.current.reset();
        setVerified(false);
    };

    // END Code Copied From https://github.com/kimfucious/netlify-forms-formik/blob/master/src/FormikForm.js#L7
    //

    return (
        <section>
            <Container>
                <Row className="justify-content-md-center mt-5">
                    <Col className="white-color" lg={8}>
                        {/* // END Code Copied From https://github.com/kimfucious/netlify-forms-formik/blob/master/src/FormikForm.js#L7
    // */}
                        <Formik
                            initialValues={{
                                "bot-field": "",
                                "form-name": "contact",
                                email: "",
                                username: ""
                            }}
                            validate={values => {
                                let errors = {};
                                if (!values.email) {
                                    errors.email = "Required";
                                } else if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                ) {
                                    errors.email = "Invalid email address";
                                }
                                if (!values.name) {
                                    errors.username = "Required";
                                }
                                if (!values.message) {
                                    errors.message = "Required";
                                }
                                return errors;
                            }}
                            onSubmit={values => {
                                setIsSubmitting(true);
                                setFormValues({ ...values });
                                setExecuting(true);
                                rcRef.current.execute();
                            }}
                        >
                            {({ resetForm }) => (
                                <Form
                                    data-netlify="true"
                                    data-netlify-honeypot="bot-field"
                                    data-netlify-recaptcha="true"
                                    className="d-flex flex-column align-items-center"
                                    name="contact"
                                    noValidate
                                >
                                    <Field type="hidden" name="form-name" />
                                    <Field type="hidden" name="bot-field" />
                                    <div className="form-group">
                                        <label
                                            className="col-form-label col-form-label-lg"
                                            htmlFor="username"
                                        >
                                            Name
              </label>
                                        <Field
                                            className="form-control form-control-lg"
                                            name="name"
                                            type="text"
                                        />
                                        <ErrorMessage
                                            className="invalid-feedback"
                                            name="name"
                                            component="div"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label
                                            className="col-form-label col-form-label-lg"
                                            htmlFor="email"
                                        >
                                            Email
              </label>
                                        <Field
                                            className="form-control form-control-lg"
                                            name="email"
                                            type="email"
                                        />
                                        <ErrorMessage
                                            className="invalid-feedback"
                                            name="email"
                                            component="div"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label
                                            className="col-form-label col-form-label-lg"
                                            htmlFor="message"
                                        >
                                            Message
              </label>
                                        <Field
                                            className="form-control form-control-lg"
                                            name="message"
                                            component="textarea"
                                        />
                                        <ErrorMessage
                                            className="invalid-feedback"
                                            name="message"
                                            component="div"
                                        />
                                    </div>
                                    <Reaptcha
                                        ref={rcRef}
                                        sitekey="6Le_laEUAAAAACRNoby3_NLejhu0lCqb4_WeSotQ"
                                        data-netlify-recaptcha="true"
                                        onError={onError}
                                        onExpire={onExpire}
                                        onVerify={onVerify}
                                        onLoad={() => onLoad(() => resetForm)}
                                        size="invisible"
                                    />
                                    {renderButton(isSubmitting, executing, verified)}
                                    {errMsg ? <div className="text-primary m-1">{errMsg}</div> : null}
                                    {(msgSent || errMsg) && (
                                        <button
                                            className="btn btn-lg btn-link text-dark"
                                            onClick={() => resetEverything(resetForm)}
                                        >
                                            reset form
                                        </button>
                                    )}
                                </Form>
                            )}
                        </Formik>

                        {/* // END Code Copied From https://github.com/kimfucious/netlify-forms-formik/blob/master/src/FormikForm.js#L7
    // */}



                        {/* <form name="contact" method="POST">


                            <div className="form-group">
                                <label htmlFor="inputName">Name</label>
                                <input type="text" className="form-control" id="inputName" aria-describedby="inputName" placeholder="John Smith" name="name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputEmail">Email address</label>
                                <input type="email" className="form-control" id="inputEmail" aria-describedby="inputEmail" placeholder="example@gmail.com" name="email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputTextArea">Message</label>
                                <textarea className="form-control" id="inputTextArea" rows="3" name="message"></textarea>
                            </div>


                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form> */}
                    </Col>
                </Row>
            </Container>

        </section>
    )
}


export default ContactForm;