import React from 'react'
import { useParams } from 'react-router'
import data from './Data/Data'

export default function PlantDetail() {
    const {id} = useParams()
    const plant = data.find(item => item.key ===parseInt(id)) 
    if(!plant){
        return <h2>tovar topilmadi</h2>
    }
  return (
    <div>
        <h1>{plant.tovar_name}</h1>
        <img src={plant.tovar_img} alt="" />
        <p>{plant.tovar_summa}</p>
    </div>
  )
}
