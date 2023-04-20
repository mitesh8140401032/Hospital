import d1 from "./image/doctor.jpg"

export default function main3() {
    return (
        <div className="container abc">
            <div className="row m-0 p-0">
                <div className="col-lg-6 m-0 p-0">
                    <img src={d1} className=" img-fluid" />
                </div>
                <div className="col-lg-6 p-0 m-0 d-flex align-items-center justify-content-center">
                    <div className="ms-3 me-3 ">
                        <h5 className="mt-4 ">We Provide</h5>
                        <h1>Total Health Care</h1>
                        <p className="m-0">We provide the most full medical services, so every person could have the opportunity to receive qualitative medical help.

                            Clinical excellence, diversity, and access to innovative technology are all hallmarks of the graduate medical education experience at Caring Doc. Our residents, fellows, and renowned staff share their experience working at Caring Doc.
                        </p>
                        <b className="m-0">We try to do our best to help you and provide with a high-quality services.</b>
                        <br/>
                        <button className='btn1 btn2'>READ MORE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
