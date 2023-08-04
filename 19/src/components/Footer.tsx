import { FC, useState } from 'react'
import { MainContext, useContext } from '../context/MainContext'

const Footer:FC = () => {
  const { setTheme, theme,setLogoText } = useContext(MainContext)
  const [newLogoText,setNewLogoText]=useState<string>();

  const handleChangeTheme = (): void => {
    setTheme(theme == 'dark' ? 'light' : 'dark')
  }

  const handleInputChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setNewLogoText(e.target.value);
  }


  const changeLogoText =(newLogoText:string)=>{
    setLogoText(newLogoText)
  }

  return (
    <div className='container'>
      <h2>FOOTER</h2>
        <button className='button' onClick={handleChangeTheme}>
        change theme
      </button>
      <br />
      <input type="text" onChange={(e)=>{handleInputChange(e)}} />
      <button onClick={()=>{changeLogoText(newLogoText)}} className='button'> change logoText</button>
    </div>
  )
}

export default Footer
