import {memo} from 'react'

const Header = () => {
  console.log('Header Rendered');
  
  return (
    <div>
      <header>Header</header>
    </div>
  )
}

export default memo(Header)