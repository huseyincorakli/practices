
const Validate = (Component:React.FunctionComponent)=>{
    const  ValidateWrapper = (props:any)=> {
        
        const validate=(name:string,msg:string)=>{
            if (name=='') {
              alert(msg)
            }
          }
        return(
            <Component validate={validate} {...props}/>
        )
    }
    return ValidateWrapper
}

export default Validate