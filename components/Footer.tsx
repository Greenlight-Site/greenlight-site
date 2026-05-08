import Link from "next/link";

const LOGO = (
  <svg viewBox="0 0 40 40" width="32" height="32" fill="none">
    <circle cx="20" cy="20" r="20" fill="#0d3349"/>
    <path d="M28 20.5C28 24.6 24.4 28 20 28C15.6 28 12 24.6 12 20.5C12 16.4 15.6 13 20 13C22.5 13 24.7 14.1 26.2 15.8L23.5 18.3C22.7 17.4 21.4 16.8 20 16.8C17.8 16.8 16 18.5 16 20.5C16 22.5 17.8 24.2 20 24.2C21.8 24.2 23.3 23.1 23.8 21.6H20V18.5H28V20.5Z" fill="#00c07f"/>
  </svg>
);

const col = (title: string, links: {href:string,label:string}[]) => (
  <div key={title}>
    <h4 style={{fontSize:"11px",fontWeight:700,letterSpacing:"1.5px",textTransform:"uppercase",color:"rgba(255,255,255,.3)",marginBottom:"16px"}}>{title}</h4>
    <ul style={{listStyle:"none",padding:0,margin:0}}>
      {links.map(({href,label}) => (
        <li key={href} style={{marginBottom:"9px"}}>
          <Link href={href} style={{color:"rgba(255,255,255,.55)",textDecoration:"none",fontSize:"14px"}}>{label}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  return (
    <footer style={{background:"#0d2233",padding:"52px 80px 36px"}}>
      <div style={{display:"grid",gridTemplateColumns:"1.5fr 1fr 1fr 1fr",gap:"48px",marginBottom:"44px"}}>
        <div>
          <div style={{display:"flex",alignItems:"center",gap:"10px",marginBottom:"12px"}}>{LOGO}
            <span style={{fontFamily:"Nunito,sans-serif",fontSize:"20px",fontWeight:800,color:"#fff"}}>Greenlight</span>
          </div>
          <p style={{fontSize:"13px",color:"rgba(255,255,255,.4)",lineHeight:1.7,marginBottom:"20px"}}>
            Practitioner-guided sessions for trauma, PTSD, anxiety, grief and more. Using the ART method. Mesa, AZ.
          </p>
          <div style={{display:"flex",gap:"10px"}}>
            {["Facebook","Instagram"].map(s => (
              <a key={s} href="#" aria-label={s} style={{width:"34px",height:"34px",borderRadius:"8px",background:"rgba(255,255,255,.07)",display:"flex",alignItems:"center",justifyContent:"center",color:"rgba(255,255,255,.5)",textDecoration:"none",fontSize:"13px"}}>{s[0]}</a>
            ))}
          </div>
        </div>
        {col("Services",[
          {href:"/how-it-works",label:"How It Works"},
          {href:"/who-it-helps",label:"Who It Helps"},
          {href:"/saf-t",label:"SAF-T Training"},
          {href:"/partners",label:"Partners"},
        ])}
        {col("About",[
          {href:"/about",label:"Our Team"},
          {href:"/faq",label:"FAQ"},
          {href:"/blog",label:"Blog"},
          {href:"/contact",label:"Contact Us"},
        ])}
        {col("Get Help",[
          {href:"/quiz",label:"Take the Quiz"},
          {href:"/intake",label:"Intake Form"},
          {href:"/schedule",label:"Schedule Now"},
          {href:"tel:4808184148",label:"(480) 818-4148"},
        ])}
      </div>
      <div style={{borderTop:"1px solid rgba(255,255,255,.07)",paddingTop:"26px",display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:"12px"}}>
        <p style={{fontSize:"13px",color:"rgba(255,255,255,.3)",margin:0}}>© 2026 Greenlight · All Rights Reserved · Mesa, AZ</p>
        <p style={{fontSize:"13px",color:"rgba(255,255,255,.3)",margin:0}}>
          <Link href="/medical-disclaimer" style={{color:"rgba(255,255,255,.3)",textDecoration:"none"}}>Disclaimer</Link>
          &nbsp;·&nbsp;
          <Link href="/privacy-policy" style={{color:"rgba(255,255,255,.3)",textDecoration:"none"}}>Privacy Policy</Link>
        </p>
      </div>
    </footer>
  );
}
