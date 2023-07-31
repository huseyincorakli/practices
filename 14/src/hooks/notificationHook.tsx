import { useState } from 'react';
import  { Toaster, toast } from 'react-hot-toast';

export const useToast=(
    messageText:string='Success TopCenter Message!',
    messageType:MessageType=MessageType.success,
    position:Position=Position.TopCenter)=>{

    const [msg,setMsg]= useState(messageText);
    const [msg_position,setMsgPosition] =useState(position)
    
   
    const ShowToast = (message=msg,type= messageType,toastPosition=msg_position)=>{
        setMsg(message)
        setMsgPosition(toastPosition)

        if (type===MessageType.success) {
            toast.success(message, { position: toastPosition });
        }
        else if(type===MessageType.error){
            toast.error(message, { position: toastPosition });
        }
    }
    
    

    return (ShowToast);

}

export enum MessageType{
    success="success",
    error="error"
}
export enum Position {
    TopCenter='top-center',
    TopLeft='top-left',
    TopRight='top-right',
    BottomLeft='bottom-left',
    BottomCenter='bottom-center',
    BottomRight='bottom-right'
}