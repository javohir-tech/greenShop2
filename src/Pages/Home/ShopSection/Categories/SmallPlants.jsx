import React from 'react'
import TovarBox from '../../../../Components/TovarBox/TovarBox'
import data from '../../../../Data/Data'
import { useNavigate } from 'react-router';

export default function SmallPlants() {
  const malumot = data.slice(8, 11);
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
