import React from 'react'

const PartnershipContent = ({partnershipGrowth}) => {

    const partnership=partnershipGrowth
    return (
        <React.Fragment>
           <section className='PartnershipContent pt-100 pb-70'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 col-lg-12 text-center'>
                         <h2 className='text-center'>{partnership.heading2}</h2>
                         <div className='my-3 px-4'>
                            <p>{partnership.description}</p>
                            <p>{partnership.description2}</p>
                         </div>
                        
                    </div>
                </div>
            </div>
           </section>
        </React.Fragment>
    )
}

export default PartnershipContent;