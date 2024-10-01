import React from 'react'
import TovarBox from '../../../../Components/TovarBox/TovarBox'
import data from '../../../../Data/Data'

function AllPlats() {
    const malumot = data
  return (
    <div className='row mt-5'>
      {/* <TovarBox tovarName={} tovarSumma={} tovarImg={}/> */}
        {malumot.map((item)=>(
            <div className='col-4' key={item.key}>
        <TovarBox
         tovarName={item.tovar_name} 
         tovarSumma={item.tovar_summa}
          tovarImg={item.tovar_img}/>
        </div>
        ))}
        
    </div>  
  )
}

export default AllPlats
