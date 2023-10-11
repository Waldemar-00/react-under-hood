import { memo } from 'react'
function Button({ children, foo }) {
  console.log('Button')
  return (
    <button onClick={foo}>
      { children }
    </button>
  )
}
export default memo(Button)