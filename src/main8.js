import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function main8() {
    return (
        <div className='container abc'>
            <div className='row p-0 m-0 d-flex justify-content-center' >
                <div className='col-lg-3'>
                    <h2 className='h1'>Make an Appointment</h2>
                </div>
                <div className='col-lg-6'>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                            <Form.Control type="type" placeholder="Enter Your Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                            <Form.Control type="email" placeholder="Enter a valid Email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                            <Form.Control as="textarea" placeholder="Enter Your Message" rows={3} />
                        </Form.Group>
                        <Button  className='btn2'>Submit </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}
