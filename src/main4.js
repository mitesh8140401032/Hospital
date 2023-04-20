import d2 from "./image/min.jpg"

import 'bootstrap/dist/css/bootstrap.min.css';


export default function main4() {
    return (
        <div className="container-fluid abc">
            <div className="row d-flex p-0 m-0  justify-content-end">
                <div className="col-lg-4 d-flex align-items-center">
                   
                        <div>
                            <h1>Get Online Consultation</h1>
                            <p>In most cases, the initial consultation will be sufficient. In more complicated cases, a second, follow-up consultation may be necessary. You can contact our center at any time and ask your questions. Our professional support representative will answer your questions with great pleasure. </p>
                            <h6>Take the First Step to Help <br />
                                111 222 22 11</h6>
                       </div>
                    
                </div>
                <div className="col-lg-6 m-0 p-0">
                    <img className="img3" src={d2} />
                </div>
            </div>
        </div>
    )
}

