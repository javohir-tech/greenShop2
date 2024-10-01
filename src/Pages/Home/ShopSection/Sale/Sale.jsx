import React from 'react'
import data from '../../../../Data/Data'
import TovarBox from '../../../../Components/TovarBox/TovarBox'
import { useNavigate } from 'react-router'

export default function Sale() {
  const malumot = data.slice(3, 6)
  const navigate = useNavigate()

  const handleClick = (id) =>{
    navigate(`/plants/${id}`)
  }
  return (
    <div className='row mt-5'>
      {malumot.map((item) => (
        <div className='col-4' key={item.key} onClick={()=>handleClick(item.key)}>
          <TovarBox tovarName={item.tovar_name} tovarSumma={item.tovar_summa} tovarImg={item.tovar_img} />
        </div>
      ))}
    </div>
  )
}
