import p1 from './image/diagnosis.png';
import p2 from './image/operator.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default function Main2() {
    return (
        <div className='container'>
            <div className='row  abc'>
                <div className='col-lg-8  '>
                    <div className='row'>
                        <div className='col-lg-4 col-md-6 col-sm-12  pt-3 '>
                            <img src={p1} />
                            <h3 className=' a' >Consultation</h3>
                            <p className='b'>by professional</p>
                        </div>
                        <div className='col-lg-4 col-md-6 pt-3 '>
                            <img src={p1} />
                            <h3 className=' a'>Diagnosis</h3>
                            <p className='b'>accurate approach</p>
                        </div>
                        <div className='col-lg-4 col-md-6 pt-3 '>
                            <img src={p1} />
                            <h3 className=' a'>Treatment</h3>
                            <p className='b'>individual approach</p>
                        </div>
                        <div className='col-lg-4 col-md-6 pt-3   '>
                            <img src={p2} />
                            <h3 className=' a'>Pregnancy care</h3>
                            <p className='b'>safety and carefully</p>
                        </div>
                        <div className='col-lg-4 col-md-6 pt-3  '>
                            <img src={p2} />
                            <h3 className=' a'>Pediatric</h3>
                            <p className='b'>high-quality kids care</p>
                        </div>
                        <div className='col-lg-4 col-md-6 pt-3  '>
                            <img src={p2} />
                            <h3 className='mt-3 mb-3 a'>Online Help</h3>
                            <p className='b'>24/7</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-sm-12 abc2'>
                    <div className='ms-4 me-4'>
                        <h6 className='c' >Check Our</h6>
                        <h2 className='c'>Weekly Timetable</h2>
                        <p>You can make an appointment , select the convient time and choose the appropriate doctor here.</p>
                        <button className='btn1'>READ MORE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}