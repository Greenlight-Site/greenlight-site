"use client";
import type { PageContent } from "@/lib/types";

export default function HomeClient({ page }: { page: PageContent | null }) {
  return (
    <div style={{paddingTop:"110px"}}>
      <section style={{minHeight:"90vh",background:"#0d3349",display:"grid",gridTemplateColumns:"1fr 1fr"}}>
        <div style={{padding:"80px 64px",display:"flex",flexDirection:"column",justifyContent:"center"}}>
          <p style={{fontSize:"11px",fontWeight:700,letterSpacing:"2.5px",textTransform:"uppercase",color:"#00c07f",marginBottom:"16px"}}>
            Now Accepting New Clients · Mesa, AZ
          </p>
          <p style={{fontFamily:"Nunito,sans-serif",fontSize:"clamp(28px,3.5vw,42px)",fontWeight:700,color:"rgba(255,255,255,.55)",marginBottom:"8px"}}>
            {page?.hero_subline || "Quickly and Effectively"}
          </p>
          <h1 style={{fontFamily:"Nunito,sans-serif",fontSize:"clamp(40px,5vw,62px)",fontWeight:900,color:"#fff",lineHeight:1.1,letterSpacing:"-1px",marginBottom:"28px"}}
            dangerouslySetInnerHTML={{__html: page?.hero_headline || "Overcome <span style='color:#00c07f'>Trauma</span>"}}/>
          <p style={{fontSize:"17px",color:"rgba(255,255,255,.72)",lineHeight:1.7,maxWidth:"480px",marginBottom:"40px"}}>
            {page?.hero_body || "Greenlight uses the ART method — a fast, private, practitioner-guided process that helps you overcome trauma, PTSD, anxiety, and grief. Often in just 1 to 5 sessions."}
          </p>
          <a href="/schedule" style={{display:"inline-flex",alignItems:"center",gap:"10px",background:"#e84e1b",color:"#fff",padding:"16px 36px",borderRadius:"10px",fontSize:"16px",fontWeight:700,textDecoration:"none",width:"fit-content"}}>
            Get Help Now →
          </a>
        </div>
        <div style={{background:"#eef4f8",display:"flex",flexDirection:"column",justifyContent:"center",padding:"80px 56px"}}>
          <div style={{width:"100%",aspectRatio:"16/9",background:"#dce8f0",borderRadius:"14px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"12px",fontWeight:700,letterSpacing:"2px",textTransform:"uppercase",color:"#9bb5c4",marginBottom:"28px"}}>Video</div>
          <ul style={{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:"12px"}}>
            {["No diagnosis is needed","You stay in control the entire time","No need to talk about your trauma","No homework between sessions","Brief — only 1–5 one-hour sessions","Relief is immediate and lasting"].map(item => (
              <li key={item} style={{display:"flex",alignItems:"center",gap:"12px",fontSize:"15px",color:"#0d2233"}}>
                <span style={{width:"22px",height:"22px",background:"#e6f9f2",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,color:"#00a86b",fontSize:"12px",fontWeight:700}}>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
