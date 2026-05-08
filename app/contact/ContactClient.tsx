"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ContactClient() {
  const [form, setForm] = useState({name:"",email:"",phone:"",message:""});
  const [sent, setSent] = useState(false);

  async function handleSubmit() {
    await supabase.from("form_submissions").insert({
      form_type: "contact", ...form
    });
    setSent(true);
  }

  if (sent) return (
    <div style={{padding:"200px 80px",textAlign:"center"}}>
      <h2 style={{fontFamily:"Nunito",fontSize:"36px",fontWeight:900,color:"#0d3349"}}>Message sent! ✅</h2>
      <p style={{color:"#5b7a8a",marginTop:"12px"}}>We'll be in touch shortly.</p>
    </div>
  );

  return (
    <div style={{padding:"160px 80px 96px",maxWidth:"640px",margin:"0 auto"}}>
      <p style={{fontSize:"11px",fontWeight:700,letterSpacing:"2.5px",textTransform:"uppercase",color:"#00a86b",marginBottom:"14px"}}>Contact Us</p>
      <h1 style={{fontFamily:"Nunito",fontSize:"clamp(32px,5vw,52px)",fontWeight:900,color:"#0d3349",marginBottom:"40px",lineHeight:1.1}}>How can we help?</h1>
      {[
        {id:"name",label:"Full Name",type:"text",placeholder:"Jane Smith"},
        {id:"email",label:"Email",type:"email",placeholder:"jane@email.com"},
        {id:"phone",label:"Phone",type:"tel",placeholder:"(480) 000-0000"},
      ].map(({id,label,type,placeholder}) => (
        <div key={id} style={{marginBottom:"20px"}}>
          <label style={{display:"block",fontSize:"13px",fontWeight:600,color:"#0d3349",marginBottom:"6px"}}>{label}</label>
          <input type={type} placeholder={placeholder} value={(form as any)[id]}
            onChange={e=>setForm({...form,[id]:e.target.value})}
            style={{width:"100%",padding:"12px 16px",border:"1.5px solid #cddce6",borderRadius:"10px",fontSize:"15px",outline:"none"}}/>
        </div>
      ))}
      <div style={{marginBottom:"28px"}}>
        <label style={{display:"block",fontSize:"13px",fontWeight:600,color:"#0d3349",marginBottom:"6px"}}>Message</label>
        <textarea placeholder="Tell us what you're dealing with…" value={form.message}
          onChange={e=>setForm({...form,message:e.target.value})}
          style={{width:"100%",padding:"12px 16px",border:"1.5px solid #cddce6",borderRadius:"10px",fontSize:"15px",outline:"none",minHeight:"120px",resize:"vertical"}}/>
      </div>
      <button onClick={handleSubmit} style={{width:"100%",background:"#e84e1b",color:"#fff",border:"none",padding:"16px",borderRadius:"10px",fontSize:"16px",fontWeight:700,cursor:"pointer",fontFamily:"Nunito,sans-serif"}}>
        Send My Message →
      </button>
      <p style={{marginTop:"20px",fontSize:"14px",color:"#5b7a8a",textAlign:"center"}}>Or call us at <a href="tel:4808184148" style={{color:"#0d3349",fontWeight:700,textDecoration:"none"}}>(480) 818-4148</a></p>
    </div>
  );
}
