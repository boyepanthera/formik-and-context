import { useContext } from 'react'
import { store } from '../context'
import { Experience } from './Experience.component'

const Detail = () => {
  let storeValues = useContext(store)
  let { firstName, lastName, address } = storeValues
  return (
    <>
      <div>
        Name:{firstName} {lastName}
      </div>
      <div>Address:{address} </div>
      <Experience />
    </>
  )
}

export default Detail
