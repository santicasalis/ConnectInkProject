import Link from "next/link"; 
import Image from "next/image"
//import Navbar from '../nav/page.jsx';

export default function Home() {
  return (
    <div>
     
      <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", overflow: "hidden" }}>
        <Image
          src="/tat4.jpg" 
          alt="tatooback"
          className="dark:invert"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center", color: "#fff", width: "100%" }}>
          <h1 style={{ fontSize: "4rem", margin: 0 }}>ConnectInk</h1>
        </div>
        <div style={{ position: "absolute", bottom: "20px", left: "50%", transform: "translateX(-50%)", textAlign: "center", width: "100%" }}>
          <button style={{ padding: "15px 30px", fontSize: "1.5rem", backgroundColor: "#000", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
            <Link href="/tattoerregform"> 
              Comenzar
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}


