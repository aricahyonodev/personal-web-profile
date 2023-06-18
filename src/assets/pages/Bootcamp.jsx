
export const Bootcamp = () => {
  return (
    <div className="px-28 pb-20 bg-yellow-spring">
        <h1 className="text-center font-bold text-5xl pt-28">Pelatihan Intensif  Developer</h1>
        <div className="mb-12 mt-1 flex justify-center">
            <p className="text-center w-3/4">Perjalanan pribadi saya dalam belajar pemrograman dari dunia luar tidak hanya belajar teknikal namun juga belajar bagaimana adaptive dan berkolaborasi dengan teman teman yang lain.  </p>
        </div>
        <div className="flex justify-between gap-4">

            {/* SYNRGY Academy */}
            <div className="flex-1 border shadow-sm rounded-xl bg-white p-6 pt-8">
                <img src="../../../assets/icons/synrgy_icon.svg" className="w-4/5 text-center mb-1" alt="" />
                <h1 className="text-xl font-semibold text-[#104B60]">Kelas Full Stack Java Script</h1>
                <h2 className=" text-[#A39E9E]"> Pre-Bootcamp : Jan 2022 - Feb 2022</h2>
                <p className="text-sm text-justify">           Pelatihan ini diselenggarakan selama 2 bulan dan kami belajar banyak dalam dunia Full Stack Developer dengan teknologi Java Script dan Express JS.  Pada akhir Fase yaitu Demo aplikasi saya  mendapatkan bagian untuk melakukan presentasi Demo Aplikasi yang sudah kami kerjakan dan juga kami mendapatkan prestasi yaitu Kelompok Terbaik dari total 5 Besar kelompok. </p>
                <ul className="flex flex-wrap gap-1 mt-1">
                    <li className="text-xs rounded-full py-1 px-3 text-center bg-yellow-orange">Web Dasar</li>
                    <li className="text-xs rounded-full py-1 px-3 text-center bg-yellow-orange">Java Script</li>
                    <li className="text-xs rounded-full py-1 px-3 text-center bg-yellow-orange">Express JS</li>
                </ul>
                <h1 className="text-xl mt-2 font-semibold text-[#104B60]">Kelas Java Back End</h1>
                <h2 className=" text-[#A39E9E]"> Main-Bootcamp : Mar 2022 - Jun 2022</h2>
                <p className="text-sm text-justify">Pelatihan ini diselenggarakan selama 4 bulan dan kami belajar banyak dalam dunia Back-End Developer dengan teknologi Java Spring.</p>
                <ul className="flex flex-wrap gap-1 mt-1">
                    <li className="text-xs rounded-full py-1 px-5 text-center bg-yellow-orange">Java</li>
                    <li className="text-xs rounded-full py-1 px-5 text-center bg-yellow-orange">Java Spring</li>
                </ul>
            </div>

            {/* Digital Talent Scholarship  */}
             <div className="flex-1 border shadow-sm rounded-xl bg-white p-6 pt-8">
                 <div className="flex justify-center mb-1">
                     <img src="../../../assets/icons/dts_icon.svg" className="w-4/5 text-center mb-1" alt="" />
                </div>
                <h1 className="text-xl font-semibold text-[#007DFF]"> IT Perbangkan Kelas Front End Developer</h1>
                <h2 className=" text-[#A39E9E]">Ags 2021 - Okt 2021</h2>
                <p className="text-sm text-justify">    Pelatihan ini diselenggarakan selama 3 bulan dan kami belajar banyak dalam dunia Front End Developer dengan teknologi React JS.
        Ada beberapa prestasi yang di dapat selama kegiatan ini secara pribadi ·mendapatkan rangking 15 dari total 150 orang Peserta yang bisa lulus dari kelas Frontend Developer dan Backend Developer dan secara tim · menjadi Kelompok Terbaik Ke-2 dari total 17 kelompok.</p>
                <ul className="flex flex-wrap gap-1 mt-1">
                    <li className=" text-xs rounded-full py-1 px-3 text-center text-white bg-[#007DFF]">Web Dasar</li>
                    <li className=" text-xs rounded-full py-1 px-3 text-center text-white bg-[#007DFF]">React JS</li>
                    <li className=" text-xs rounded-full py-1 px-3 text-center text-white bg-[#007DFF]">Testing</li>
                    <li className=" text-xs rounded-full py-1 px-3 text-center text-white bg-[#007DFF]">Deploy</li>
                    <li className=" text-xs rounded-full py-1 px-3 text-center text-white bg-[#007DFF]">Continuous integration</li>
                    <li className=" text-xs rounded-full py-1 px-3 text-center text-white bg-[#007DFF]">Continuous Deployment</li>
                </ul>
            </div>

            {/* Dicoding Academy  */}
             <div className="flex-1 border shadow-sm rounded-xl bg-white p-6 pt-8">
                <div className="flex justify-center mb-1">
                    <img src="../../../assets/icons/dicoding_icon.svg" className="w-4/5" alt="" />
                </div>
                <h1 className="text-xl font-semibold 2D3E50"> Menjadi Front-End Web Developer Expert</h1>
                <h2 className=" text-[#A39E9E] text-sm">Mei 2021 - Juni 2021</h2>
                <p className="text-sm text-justify">Pelatihan ini diselenggarakan selama 2 bulan dan kami belajar banyak dalam dunia Front End Developer dengan teknologi  Java Script. Pelatihan ini adalah Beasiswa dari Lintasarta Digischool 2021 kelanjutan dari Beasiswa Lintasarta Digischool 2020 bagi yang terpilih untuk bisa menyelesaikan pelatihan terakhir dari Learning Path Front-End Web Developer di Dicoding</p>
                <ul className="flex flex-wrap gap-1 mt-1">
                   <li className="text-xs rounded-full py-1 px-2 text-center bg-[#2D3E50] text-white">Web Dasar</li>
                    <li className="text-xs rounded-full py-1 px-3 text-center bg-[#2D3E50] text-white">PWA</li>
                    <li className="text-xs rounded-full py-1 px-3 text-center bg-[#2D3E50] text-white">Webpack</li>
                    <li className="text-xs rounded-full py-1 px-3 text-center bg-[#2D3E50] text-white">Optimasi</li>
                    <li className="text-xs rounded-full py-1 px-3 text-center bg-[#2D3E50] text-white">Testing</li>
                    <li className="text-xs rounded-full py-1 px-3 text-center bg-[#2D3E50] text-white">Deploy</li>
                </ul>
            </div>

        </div>
    </div>
  )
}
