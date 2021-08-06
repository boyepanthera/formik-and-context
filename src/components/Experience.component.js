import { useContext } from 'react'
import { store } from '../context'
export const Experience = () => {
  const storeValues = useContext(store)
  const { experience: experienceYear } = storeValues

  return (
    <div>
      I have {experienceYear} working experience cutting across sales, marketing
      and programming
    </div>
  )
}
