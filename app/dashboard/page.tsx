export default function Dashboard() {
  return (
    <div style={{padding:40}}>
      <h1>Dashboard NEXO</h1>

      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20}}>

        <div style={{background:"#111827",color:"white",padding:20}}>
          💰 Faturamento: R$ 10.000
        </div>

        <div style={{background:"#111827",color:"white",padding:20}}>
          📉 Despesas: R$ 6.000
        </div>

        <div style={{background:"#111827",color:"white",padding:20}}>
          📊 Lucro: R$ 4.000
        </div>

        <div style={{background:"#111827",color:"white",padding:20}}>
          👥 Clientes: 120
        </div>

      </div>
    </div>
  );
}
