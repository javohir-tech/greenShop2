import React from 'react'
import KontentSection from '../../../Components/KontentSection/KontentSection'

//images 
import s1 from '../../../../public/Images/s1.jpg'
import s2 from '../../../../public/Images/s2.jpg'
import s3 from '../../../../public/Images/s3.jpg'
import s4 from '../../../../public/Images/s4.jpg'

function Kontent() {
    return (
        <div className='py-md-5 py-3'>
            <div className='container'>
                <div className='text-center py-3'>
                    <h1 className='section-subtitle'>Our Blog Posts</h1>
                    <p className='section-title'>We are an online plant shop offering a wide range of cheap and trendy plants. </p>
                </div>
                <div className='row g-3'>
                    <div className="col-xl-3 col-md-6">
                        <KontentSection img={s1} date={"September 12"} time={"Read in 6 minutes"} title={"Cactus & Succulent Care Tips"} subtitle={"Cacti are succulents are easy care plants for any home or patio"} />
                    </div>
                    <div className='col-xl-3 col-md-6'>
                        <KontentSection img={s2} date={"September 12 "} time={"Read in 2 minutes"} title={"Top 10 Succulents for Your Home"} subtitle={"Best in hanging baskets. Prefers medium to high light."} />
                    </div>
                    <div className='col-xl-3 col-md-6'>
                        <KontentSection img={s3} date={"September 12 "} time={"Read in 3 minutes"} title={"Cacti & Succulent Care Tips"} subtitle={"Cacti and succulents thrive in containers and because most are.."} />
                    </div>
                    <div className='col-xl-3 col-md-6'>
                        <KontentSection img={s4} date={"September 12 "} time={"Read in 2 minutes"} title={"Best Houseplants Room by Room"} subtitle={"The benefits of houseplants are endless. In addition to.."} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Kontent
