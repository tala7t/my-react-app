import { useAPI } from "./Context/ContextForms";
import { Link } from "react-router-dom";
import { useEffect } from "react";
export default function ShowInformation(){
let {form, image, video, isChecked, setForm, setImage, setVideo, setIsChecked} = useAPI();

  useEffect(() => {
    setForm(JSON.parse(localStorage.getItem("form")));
    setImage(localStorage.getItem("image"));
    setVideo(localStorage.getItem("video"));
    setIsChecked(JSON.parse(localStorage.getItem("isChecked")));
  }, []);
    return(
        
        <div className="show-information">
        <p>Name: {form.name} </p>
        <p>Title: {form.title}</p>
        <p>Email: {form.email}</p>
        <p>Date: {form.date}</p>
        <p>Text: {form.text}</p>
        <p>Are You Student? {form.radio}</p>
        <p>Cities: {isChecked.Pairs && <span>Pairs,</span>}
        {isChecked.Dubai && <span>Dubai,</span>}
        {isChecked.London && <span>London</span>}</p>
        <p>Choose Specialty: {form.isSelect}</p>
        <p>Image: </p>
       {image && <img src={image} alt="uploaded"/>}
        <p>Video</p>
       {video && <video src={video} controls />}

       <Link to="/">
    <button>Page form</button>
    </Link>

    </div>
    

    );
}