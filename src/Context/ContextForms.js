import {  useState ,createContext, useContext } from "react";

const ContextForms = createContext();
export const ContextData=({children})=>{
        const [form, setForm] = useState({
        name:"",
        title:"",
        email:"",
        text:"",
        isSelect:"",
        radio:"",
        date:"",
    });
    const [image, setImage] = useState(null);
    const [video, setVideo] = useState(null);
    const [isChecked , setIsChecked] = useState({Pairs: false, Dubai : false, London: false});




    return (
<ContextForms.Provider value={{form, setForm, image, setImage, video, setVideo, isChecked, setIsChecked}}>
{children}
</ContextForms.Provider>
    )
}
export const useAPI=()=>{
    let Data=useContext(ContextForms);
    return Data;
}

