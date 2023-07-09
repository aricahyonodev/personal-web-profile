import TextBold from "../components/TextBold"

const CardTech = ({title, img}) => {
    return (
        <div className="flex items-center gap-1">
            <img className="w-10" src={`../../../assets/icons/${img}`} alt="" />
            <p>{title}</p>
        </div>
    )
}
const listTech = [
    {
        img : "react_js_icon.png",
        title : "React JS",
    },
    {
        img : "tailwind_css_icon.png",
        title : "Tailwind CSS",
    },
    {
        img : "express_js_icon.png",
        title : "Express JS",
    },
    {
        img : "postgress_sql_icon.png",
        title : "Postgress  SQL",
    },
]


export const ListPortofolio = () => {
  return (
    <div className="px-12 pt-20 pb-20">
        <h1 className="font-bold text-5xl">Kreative Portofolio</h1>
        {/* EventPrice*/}
        <div className="flex gap-10 mt-4">
            <div className="w-2/5 text-justify">
                <img className="w-4/5" src="../../../assets/icons/eventprise_icon.svg" alt="" />
                <p className=""><TextBold text={"Eventprise"} /> adalah sebuah platform website yang menawarkan jasa event organizer untuk perusahaan atau organisasi. adapun fitur utamanya adalah <TextBold text={"Kustomisasi Paket, Pemesanan Langsung"} />  dan <TextBold text={"History Pesanan."} /></p>
                <p className="mt-1 font-bold">Fakta Seru</p>
                <ol className="list-decimal ">
                    <li className="ml-4">Eventprise adalah karya final project kelompok D pada fase pre-bootcamp SYNRGY Academy.  </li>
                    <li className="ml-4">Eventprice yang saya buat saat ini adalah hasil <TextBold text={"Penulisan Ulang Secara Pribadi"} /> tentu ada beberapa perubahan yang saya buat seperti <TextBold text={"cara pengerjanan, teknologi yang digunakan, alur bisnis, dll."} />  </li>
                    <li className="ml-4">Setiap ide dan assets pada Eventprise merupakan hak milik  oleh <TextBold text={"Tim UI/UX Kelompok D"} /> yang terdiri dari 3 orang yaitu <TextBold text={"Alfarel Zaki, Vira Ayu"} /> dan <TextBold text={"Naomi Lisda."} /> Ditambah beberapa masukkan dari seluruh anggota Kelompok D dari <TextBold text={"Frontend"} />dan<TextBold text={"Back End."} /></li>
                </ol>
                <div className="p-4 mt-4 grid grid-cols-2 gap-2 bg-white rounded-md shadow-sm border ">
                    {listTech.map((tech, i)=> (<CardTech key={i} {...tech}/>))}
                </div>
                {/* <div className="flex justify-end mt-6">
                    <button className="rounded-full px-10 py-2 bg-[#8480FC] text-white">Detail</button>
                </div> */}
            </div>
            <div className="w-3/5 flex gap-6 mb-4">
                <img className="w-1/2" src="../../../assets/images/eventprise_p_1.png" alt="" />
                <img className="w-1/2" src="../../../assets/images/eventprise_p_2.png" alt="" />
            </div>
        </div>

         {/* BRI Antrian Online*/}
        <div className="flex gap-10 mt-4">
            <div className="w-2/5 text-justify">
                <img className="mb-2" src="../../../assets/icons/qms_icon.png" alt="" />
                <p className=""><TextBold text={"BRI Antrian Online"} />  adalah sistem yang membantu mengelola antrian online pada Bank BRI. adapun fitur utamanya adalah
                <TextBold text={"Booking Tiket Antrian, Cek Antrian Bank Terkini, Daftar Kantor Bank BRI,"} />  dan <TextBold text={"Rekap Tiket Antiran."} /></p>
                <p className="mt-1 font-bold">Fakta Seru</p>
                <p className=""><TextBold text={"BRI Antrian Online"} /> adalah pengembangan Ulang dan 
                Re-Design dari Final Project <TextBold text={"Kelompok C  Queue Management System"} /> pada program <TextBold text={"Front End Developer - Digital Talent Scholarship Kominfo X Rakamin."} /> </p>
                <div className="p-4 mt-4 grid grid-cols-2 gap-2 bg-white rounded-md shadow-sm border">
                    {[listTech[0],listTech[1]].map((tech, i)=> (<CardTech key={i} {...tech}/>))}
                </div>
                {/* <div className="flex justify-end mt-6">
                    <button className="rounded-full px-10 py-2 bg-[#8480FC] text-white">Detail</button>
                </div> */}
            </div>
            <div className="w-3/5 flex-row gap-6">
                <img className="inline-block w-4/5  " src="../../../assets/images/qms_register.png" alt="" />
                <img className="inline-block w-4/5 mt-4" src="../../../assets/images/qms_homepage.png" alt="" />
            </div>
        </div>

    </div>
  )
}
