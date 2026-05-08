"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const LOGO = (
  <svg viewBox="0 0 40 40" width="36" height="36" fill="none">
    <circle cx="20" cy="20" r="20" fill="#0d3349"/>
    <path d="M28 20.5C28 24.6 24.4 28 20 28C15.6 28 12 24.6 12 20.5C12 16.4 15.6 13 20 13C22.5 13 24.7 14.1 26.2 15.8L23.5 18.3C22.7 17.4 21.4 16.8 20 16.8C17.8 16.8 16 18.5 16 20.5C16 22.5 17.8 24.2 20 24.2C21.8 24.2 23.3 23.1 23.8 21.6H20V18.5H28V20.5Z" fill="#00c07f"/>
  </svg>
);

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <div style={{background:"#00c07f",color:"#fff",textAlign:"center",padding:"9px 24px",fontSize:"13px",fontWeight:600,position:"fixed",top:0,left:0,right:0,zIndex:100}}>
        ✅ Take a quiz to see if Greenlight is right for you
        <Link href="/quiz" style={{color:"#fff",textDecoration:"underline",marginLeft:"6px"}}>Start →</Link>
      </div>
      <nav style={{
        position:"fixed",top:"38px",left:0,right:0,zIndex:99,
        display:"flex",alignItems:"center",justifyContent:"space-between",
        padding:"0 56px",height:"72px",
        background:"rgba(255,255,255,0.97)",backdropFilter:"blur(12px)",
        borderBottom:"1px solid #cddce6",
        boxShadow: scrolled ? "0 2px 24px rgba(13,51,73,0.08)" : "none",
        transition:"box-shadow .3s"
      }}>
        <Link href="/" style={{display:"flex",alignItems:"center",gap:"10px",textDecoration:"none"}}>
          {LOGO}
          <span style={{fontFamily:"Nunito,sans-serif",fontSize:"22px",fontWeight:800,color:"#0d3349"}}>Greenlight</span>
        </Link>
        <ul style={{display:"flex",alignItems:"center",gap:"28px",listStyle:"none",margin:0,padding:0}}>
          {[
            {href:"/how-it-works",label:"How It Works"},
            {href:"/who-it-helps",label:"Who It Helps"},
            {href:"/partners",label:"Partners"},
            {href:"/saf-t",label:"SAF-T"},
            {href:"/about",label:"About Us"},
            {href:"/contact",label:"Contact Us"},
          ].map(({href,label}) => (
            <li key={href}>
              <Link href={href} style={{textDecoration:"none",fontSize:"14px",fontWeight:500,color:"#0d2233",opacity:.7,transition:"opacity .2s"}}
                onMouseEnter={e=>(e.currentTarget.style.opacity="1")}
                onMouseLeave={e=>(e.currentTarget.style.opacity=".7")}
              >{label}</Link>
            </li>
          ))}
          <li>
            <Link href="/schedule" style={{
              background:"#0d3349",color:"#fff",padding:"10px 22px",
              borderRadius:"8px",fontSize:"14px",fontWeight:700,textDecoration:"none",
              transition:"background .2s"
            }}>Schedule Now</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
