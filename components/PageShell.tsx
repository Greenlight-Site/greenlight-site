import type { PageContent, Practitioner } from "@/lib/types";

interface Props {
  page: PageContent | null;
  practitioners?: Practitioner[] | null;
}

export default function PageShell({ page, practitioners }: Props) {
  if (!page) return (
    <div style={{padding:"200px 80px",textAlign:"center"}}>
      <p style={{color:"#5b7a8a"}}>Content coming soon.</p>
    </div>
  );

  return (
    <div style={{paddingTop:"110px"}}>
      {/* Hero */}
      <section style={{padding:"80px 80px 80px",background:"#0d3349",position:"relative",overflow:"hidden"}}>
        <p style={{fontSize:"11px",fontWeight:700,letterSpacing:"2.5px",textTransform:"uppercase",color:"#00c07f",marginBottom:"16px"}}>
          {page.title}
        </p>
        <h1 style={{fontFamily:"Nunito,sans-serif",fontSize:"clamp(36px,5vw,58px)",fontWeight:900,color:"#fff",lineHeight:1.1,letterSpacing:"-1px",marginBottom:"20px",maxWidth:"700px"}}
          dangerouslySetInnerHTML={{__html: page.hero_headline}}/>
        {page.hero_subline && (
          <p style={{fontFamily:"Nunito,sans-serif",fontSize:"clamp(18px,2.5vw,26px)",fontWeight:700,color:"rgba(255,255,255,.55)",marginBottom:"16px"}}>
            {page.hero_subline}
          </p>
        )}
        <p style={{fontSize:"18px",color:"rgba(255,255,255,.7)",lineHeight:1.75,maxWidth:"620px"}}
          dangerouslySetInnerHTML={{__html: page.hero_body}}/>
      </section>

      {/* Practitioners (About page) */}
      {practitioners && practitioners.length > 0 && (
        <section style={{padding:"96px 80px",background:"#eef4f8"}}>
          <p style={{fontSize:"11px",fontWeight:700,letterSpacing:"2.5px",textTransform:"uppercase",color:"#00a86b",marginBottom:"14px"}}>The Team</p>
          <h2 style={{fontFamily:"Nunito,sans-serif",fontSize:"clamp(28px,4vw,42px)",fontWeight:900,color:"#0d3349",marginBottom:"52px"}}>Meet Our Practitioners</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"28px"}}>
            {practitioners.map(p => (
              <div key={p.id} style={{background:"#fff",border:"1px solid #cddce6",borderRadius:"20px",overflow:"hidden"}}>
                <div style={{height:"240px",background:"#dce8f0",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"12px",fontWeight:700,letterSpacing:"2px",textTransform:"uppercase",color:"#9bb5c4"}}>
                  {p.photo_url ? <img src={p.photo_url} alt={p.name} style={{width:"100%",height:"100%",objectFit:"cover"}}/> : "Photo"}
                </div>
                <div style={{padding:"28px"}}>
                  <p style={{fontFamily:"Nunito,sans-serif",fontSize:"20px",fontWeight:900,color:"#0d3349",marginBottom:"4px"}}>{p.name}</p>
                  <p style={{fontSize:"13px",color:"#00a86b",fontWeight:600,marginBottom:"12px"}}>{p.credentials}</p>
                  <p style={{fontSize:"14px",color:"#5b7a8a",lineHeight:1.65,marginBottom:"16px"}}>{p.bio || "[Bio to be provided by client.]"}</p>
                  <div style={{display:"flex",flexWrap:"wrap",gap:"6px"}}>
                    {p.specialties?.map(s => (
                      <span key={s} style={{background:"#eef4f8",color:"#1a4f6e",fontSize:"12px",fontWeight:600,padding:"4px 10px",borderRadius:"20px"}}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section style={{padding:"96px 80px",textAlign:"center",background:"#eef4f8"}}>
        <h2 style={{fontFamily:"Nunito,sans-serif",fontSize:"clamp(28px,4vw,40px)",fontWeight:900,color:"#0d3349",marginBottom:"16px"}}>
          Discover the Right of Way to Rapid Recovery
        </h2>
        <p style={{fontSize:"17px",color:"#5b7a8a",maxWidth:"520px",margin:"0 auto 40px",lineHeight:1.7}}>
          Take the 2-minute quiz to see if Greenlight is right for you — or schedule directly with one of our practitioners.
        </p>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"20px",flexWrap:"wrap"}}>
          <a href="/schedule" style={{background:"#e84e1b",color:"#fff",padding:"16px 36px",borderRadius:"10px",fontSize:"16px",fontWeight:700,textDecoration:"none"}}>Schedule Now →</a>
          <a href="/quiz" style={{border:"2px solid #0d3349",color:"#0d3349",padding:"14px 32px",borderRadius:"10px",fontSize:"15px",fontWeight:700,textDecoration:"none"}}>Take the Free Quiz</a>
        </div>
        <p style={{marginTop:"20px",fontSize:"14px",color:"#5b7a8a"}}>
          Or call us at <a href="tel:4808184148" style={{color:"#0d3349",fontWeight:700,textDecoration:"none"}}>(480) 818-4148</a>
        </p>
      </section>
    </div>
  );
}
