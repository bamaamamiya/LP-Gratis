import { useNavigate } from "react-router-dom";

export default function InstruksiPage() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">📌 Langkah Mendapatkan Landing Page Gratis</h2>
        <p className="text-gray-600 mb-4 text-left">
          1️⃣ Buat Landing Page di Canva.<br />
          2️⃣ Download sebagai PNG lalu convert ke webp<br />
					3️⃣	Jadikan 1 zip Upload ke Google Drive<br/>
          4️⃣ Beli domain sendiri di Niagahoster.<br />
					5️⃣ Jika semua bahan sudah siap, hubungi Bama.<br/>
        </p>
        <button
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-800"
					onClick={() => window.location.href = "https://discord.gg/HGbCwWFkEk"}
        >
          Hubungi Bama di Discord
					</button>
      </div>
    </div>
  );
}
