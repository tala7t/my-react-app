import {useAPI } from "./Context/ContextForms";
import { Link, useNavigate } from "react-router-dom";
import ShowInformation from "./ShowInformation";

export default function Forms(){
let {form, setForm} = useAPI();
let {image, setImage} = useAPI();
let {video, setVideo} = useAPI();
let {isChecked, setIsChecked} = useAPI();

    const handleImageUploade = (e) =>{
        const file = e.target.files[0];

        setImage(URL.createObjectURL(file));
    }
    const handleVideoUploade = (e) => {
        const file = e.target.files[0];

        setVideo( URL.createObjectURL(file));
    }

    const navigate = useNavigate();
    const handleSubmit = (e) =>{
       // e.preventDefault();
        //console.log(form, image, video, isChecked);
        localStorage.setItem("form", JSON.stringify(form));
        localStorage.setItem("image", image || "");
        localStorage.setItem("video", video || "");
        localStorage.setItem("isChecked", JSON.stringify(isChecked));
        navigate("/info");
    }

    return(
        < div className="container">
        <div>
        <form onSubmit={handleSubmit} className="FormContainer">
            <label>Name: </label>
            <input type="text" value={form.name} onChange={(e) =>{
            setForm({...form, name: e.target.value});
            }}/>
            <br></br>

            <label>Title: </label>
            <input type="text" value={form.title} onChange={(e) =>{
                setForm({...form, title: e.target.value})
            }}/>
            <br></br>

            <label>Email</label>
            <input type="email" value={form.email} onChange={(e) =>{
                setForm({...form, email: e.target.value});
            }}/>
            <br></br>
            <label>Date</label>
            <input value={form.date} onChange={(e) =>{
            setForm({...form, date: e.target.value})
}}/>

<br></br>

<textarea rows={4} cols={50} placeholder="write the text" 
value={form.text} onChange={(e) =>{
    setForm({...form, text: e.target.value});}}></textarea>
    <br></br>
<div className="option">
<h2>Are You Student?</h2>
<label>Yes</label>
<input type="radio" value="Yes" checked={form.radio === "Yes"} onChange={(e) =>{
   setForm({...form, radio: e.target.value})
}}/>
<label>No</label>
<input type="radio" value="No" checked={form.radio === "No"} onChange={(e) =>{
   setForm({...form, radio: e.target.value})
}}/>
</div>
<br></br>
<div className="option">
<h2>Choose the Cities</h2>
<label>Pairs</label>
<input type="checkbox" checked={isChecked.Pairs} onChange={(e)=>{
    setIsChecked({...isChecked ,Pairs:e.target.checked})
}}/>
<label>Dubai</label>
<input type="checkbox" checked={isChecked.Dubai} onChange={(e)=>{
    setIsChecked({...isChecked, Dubai: e.target.checked})
}}/>
<label>London</label>
<input type="checkbox" checked={isChecked.London} onChange={(e)=>{
    setIsChecked({...isChecked, London: e.target.checked})
}}/>
</div>
<br></br>

<h2>Choose Specialty</h2>
<select value={form.isSelect} onChange={(e) =>{
    setForm({...form, isSelect: e.target.value})}}>
    <option value="Frontend">Frontend</option>
    <option value="Backend">Backend</option>
    <option value="Full Stack">Full Stack</option>
    <option value="UI/UX">UI/UX</option>
</select>

<br></br>

<h2>Image Uploade</h2>
<input type="file" accept="image/*" onChange={handleImageUploade}/>
{image && <img src={image} alt="preview" />}

<h2>Vedio Uploade</h2>
<input type="file" accept="video/*" onChange={handleVideoUploade}/>
{video && <video src={video} controls/>
}
<br></br>


<button type="submit">Send</button>
        </form>

<Link to="/info">
    <button>Go to ShowInformation</button>
</Link>

        </div>
    <ShowInformation/>

        </div>

    );

}