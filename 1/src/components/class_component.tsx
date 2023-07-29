import React from "react"
//Class Component==>   
class ClassComponent extends React.Component{
    //JSX with Curly Braces
     componentName:string='class'
    render(){
         return React.createElement('p',null,`This is a ${this.componentName} component`)

    }
}
export default ClassComponent