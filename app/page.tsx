export default function Home() {
  return (
    <div style={{background:"#0b1220",color:"white",padding:"60px",textAlign:"center"}}>
      <h1>NEXO Empreendedor AI</h1>
      <p>Descubra quanto seu negócio está perdendo hoje</p>

      <a href="/login">
        <button style={{
          marginTop:20,
          padding:"12px 20px",
          background:"#FF7A00",
          border:"none",
          color:"white",
          borderRadius:8
        }}>
          Começar agora
        </button>
      </a>
    </div>
  );
}
