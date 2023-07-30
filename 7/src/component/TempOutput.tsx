

const TempOutput = ({Output}) => {
  return (
    <div>
      {
        Output==null? 
          <p>Lütfen bir değer giriniz</p>:
          <p>Celcius : {Output}</p>

      }
    </div>
  )
}

export default TempOutput
