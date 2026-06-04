export default function Login() {
  return (
    <div style={{padding:50}}>
      <h1>Login NEXO</h1>

      <input placeholder="Email" style={{display:"block",margin:10,padding:10}} />
      <input placeholder="Senha" style={{display:"block",margin:10,padding:10}} />

      <button style={{
        background:"#0A4D8C",
        color:"white",
        padding:10,
        border:"none"
      }}>
        Entrar
      </button>
    </div>
  );
}
