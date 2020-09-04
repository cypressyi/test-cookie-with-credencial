export default function Home() {
  return (
    <div>
      <button onClick={() => setCookie()}>Set cookie</button>
      <button onClick={() => getCookie()}>Get cookie</button>
      <button onClick={() => deleteCookie()}>Delete cookie</button>
    </div>
  );
}

async function setCookie() {
  await fetch("/api/set");
  alert('Set Cookie!')
}

async function getCookie() {
  const { message } = await fetch("/api/get", { credentials: "same-origin" }).then(
    (res) => {
      return res.json();
    }
  );
  alert(message);
}
async function deleteCookie() {
  await fetch("/api/delete");
  alert('Delete cookie!')
}
