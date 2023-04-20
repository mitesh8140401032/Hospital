import a1 from './image/a.jpg'
import a2 from './image/b.jpg'
import a3 from './image/c.jpg'

export default function main5() {
    return (
        <div className="container abc ">
            <h1 className="text-center">Our Tearm</h1>
            <div className="row text-center m-0 p-0">
                <div className="col-lg-4 m-0 p-0">
                    <img src={a3} className='round' />
                    <h3 className='mt-3'><b>Dr. Jessica Tailor</b></h3>
                    <p>Dental Implant Surgeon</p>
                </div>
                <div className="col-lg-4 m-0 p-0">
                    <img src={a1} className='round' />
                    <h3 className='mt-3'><b>Dr. Linda Feldman</b></h3>
                    <p>Cosmetic Dental Surgeon</p>

                </div>
                <div className="col-lg-4 m-0 p-0">
                    <img src={a2} className='round' />
                    <h3 className='mt-3'><b>Dr. Brian Adam</b></h3>
                    <p>Restorative Dentist</p>

                </div>
            </div>
        </div>
    )
}
