
interface Props {
    text: string;
    titleStatus:boolean
  }
  
const PropsComponent: React.FC<Props> = (props)=> {
  return (
    <div>
      {props.text}
      <br />
      {props.titleStatus? 'Showing...':'Hiding...'}
    </div>
  )
}


export default PropsComponent
