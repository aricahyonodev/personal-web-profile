
const Card = () => {
    return (
            <div className="flex-1 flex justify-center ">
            <div className="w-4/5 bg-white shadow-md border-2 rounded-md px-6 py-6 ">
                <h1 className="font-semibold text-lg">Pendidikan</h1>
                <p>Universitas Wijaya Kusuma Surabaya </p>
                <ul className="list-disc ml-8 ">
                    <li>Teknik Informatika Sep 2016 - April 2020</li>
                </ul>
                <p>SMKN 7 Surabaya</p>
                <ul className="list-disc ml-8">
                    <li >Teknik Komputer & Jaringan Mei 2013 - Mei 2016</li>
                </ul>
                <h1  className="font-semibold text-lg border-t-2 mt-2">Prestasi</h1>
                <ul className="list-disc ml-8">
                    <li>Mahasiswa Lulusan Terbaik tingkat Prodi Teknik Informatika 2020</li>
                    <li>Mahasiswa Lulusan Dengan Predikat pujian Terbaik Tingkat Fakultas Teknik 2020</li>
                </ul>
                <h1  className="font-semibold text-lg border-t-2 mt-2">Beasiswa</h1>
                <ul className="list-disc ml-8">
                    <li>Beasiswa OCBC NISP Bantuan Tunai Biaya Pendidikan 1 Semester Tingkat Universitas Wijaya Kusuma Surabaya 2019</li>
                </ul>
            </div>
         </div>
    )
}

export const AboutMe = () => {
  return (
    <div className="mt-24 px-12 pb-20">
    <div className='flex'>
        <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2">Tentang Saya</h1>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Saya adalah Mahasiswa Terbaik tingkat prodi Teknik Informatika 2020 di Universitas Wijaya Kusuma Surabaya dengan IPK 3.64 dari skala 4.0 dengan Masa Belajar 7 semester. Saya gemar belajar pemrograman secara mandiri ataupun dengan dunia luar. secara mandiri saya sering belajar dari buku bacaan seperti buku- buku karya Dunia Ilkom, W3school, dll. 
                Untuk belajar melalui dunia luar saya sering mengikuti seminar teknologi, pelatihan-pelatihan di internet seperti Dicoding, Digital Talent Scholarship dan SYNRGY Academy. Selain itu saya adalah pribadi yang terbuka untuk belajar hal baru dan selalu menjunjung tinggi akan pentingnya Komunikasi Yang Baik.</p>
        </div>
        <Card/>
    </div>

   
    </div>
   
  )
}
