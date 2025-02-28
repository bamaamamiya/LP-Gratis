import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FormLandingPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
const navigate = useNavigate();
	
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedPhone = `'${phone}`; // Tambahin petik biar gak ilang 0
    try {
      const response = await fetch(
        "https://sheetdb.io/api/v1/s25m4byzd5wxd",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: [{ name: name, phone: formattedPhone }] }),
        }
      );

      if (response.ok) {
				alert(`Nama ${name} dan Nomor HP ${phone} berhasil didaftarkan untuk Landing Page Gratis! 🎉`);
				navigate("/instruksi");
			} else {
        alert("Gagal mendaftarkan data!");
      }
    } catch (error) {
      alert("Terjadi kesalahan, coba lagi!");
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-sm mx-auto p-6 bg-white shadow-lg rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-4">Syarat Mendapatkan Landing Page Gratis</h2>
          <p className="text-gray-600 mb-6">
            1. Buat 1 Landing Page di Canva.<br />
            2. Beli domain sendiri.<br />
            3. Tunggu kabar lebih lanjut di WhatsApp Anda.
          </p>
          <p className="text-green-600 font-bold">Kami akan segera menghubungi Anda!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm mx-auto p-6 bg-white shadow-lg rounded-xl">
        <h2 className="text-2xl font-bold text-center mb-4">🔥Dapatkan Landing Page Gratis</h2>
        <p className="text-gray-600 text-center mb-6">
          Masukkan nama dan nomor WhatsApp Anda untuk menerima akses Landing Page Gratis + update promo sebelum orang lain tahu!
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Masukkan nama..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="tel"
            placeholder="Masukkan nomor HP..."
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-800"
          >
            Selanjutnya
          </button>
        </form>
      </div>
    </div>
  );
}