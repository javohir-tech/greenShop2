import React, { useState } from 'react'
import TovarBox from '../../../../Components/TovarBox/TovarBox'
import data from '../../../../Data/Data'
import { Pagination } from 'react-bootstrap'
import './AllPlants.css'
import { useNavigate } from 'react-router'


function AllPlats() {
  const [activePage, setActivaPage] = useState(1)
  const malumot = data
  const itemsPerpage = 9;
  const totalPages = Math.ceil(malumot.length / itemsPerpage)

  const indexOfLastItem = activePage * itemsPerpage;
  const indexOfFirstItem = indexOfLastItem - itemsPerpage;

  const currentItems = malumot.slice(indexOfFirstItem, indexOfLastItem)

  let items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item key={number} active={number === activePage} onClick={() => setActivaPage(number)}>
        {number}
      </Pagination.Item>,
    );
  }

  const handleNext = () => {
    if (activePage < totalPages) {
      setActivaPage(activePage + 1)
    }
  }

  const navigate = useNavigate()

  const handleClick = (id) =>{
    navigate(`/plants/${id}`)
  }
  return (
    <div className='row mt-5 g-xl-5'>
      {currentItems.map((item) => (
        <div className='col-md-4 col-6' key={item.key} onClick={()=>handleClick(item.key)}>
          <TovarBox
            tovarName={item.tovar_name}
            tovarSumma={item.tovar_summa}
            tovarImg={item.tovar_img} />
        </div>
      ))}
      <div className='d-flex justify-content-end ms-auto'>
        <Pagination size="sm">{items}
          <Pagination.Next onClick={handleNext} disabled={activePage === totalPages} />
        </Pagination>
      </div>
    </div>
  )
}

export default AllPlats
