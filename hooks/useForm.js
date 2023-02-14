import { useState } from "react";

export default function useForm(){
    const [text,setText] = useState('');
    const [list,setList] = useState([]);
    const handleChange = (e)=>{setText(e.target.value)}
    const handleSubmit = async(e)=>{
      e.preventDefault();
      console.log('loading');
      const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=5ca87e7611334e1185885057231302&q=${text}&aqi=no`,{method:'GET'});
      const json = await res.json();
      console.log(json);
      setList([...list,json]);
      console.log('completed');
    }

    return [list,text,handleChange,handleSubmit];
}