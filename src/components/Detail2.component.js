import { useContext } from 'react'
import { store } from '../context'

const Detail2 = () => {
  let storeValues = useContext(store)
  let { firstName, lastName, address } = storeValues
  return (
    <>
      <div>
        Name:{firstName} {lastName}
      </div>
      <div>Address:{address} </div>
    </>
  )
}

export default Detail2
