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

        {/* DTS */}
        <div className="flex gap-10">
            <div className="w-2/5 text-sm text-justify">
                <img className="w-4/5" src="../../../assets/icons/dts_icon.svg" alt="" />
                <p className="">Eventprise adalah karya final project kelompok D pada fase pre-bootcamp SYNRGY Academy. Project ini di buat oleh Tim UI/UX Kelompok D yang terdiri dari 3 orang yaitu Alfarel Zaki , Vira Ayu dan Naomi Lisda. Ditambah beberapa masukkan dari seluruh anggota Kelompok D dari Frontend dan Back End.</p>
                <p className="mt-1">Catatan : eventprice yang saya buat saat ini adalah hasil penulisan ulang secara pribadi tentu ada beberapa perubahan yang saya buat seperti cara pengerjanan, teknologi yang digunakan, alur bisnis, dll. Tapi secara keseluruhan masih sama hanya saja tidak bisa di bilang sama, sebab masih banyak kekurangan dan apa yang dikerjakan secara kelompok dan pribadi pastinya hasilnya berbeda.</p>
                <div className="p-4 grid grid-cols-2 gap-2 bg-white rounded-md shadow-sm border mt-2">
                    {listTech.map((tech, i)=> (<CardTech key={i} {...tech}/>))}
                </div>
                <div className="flex justify-end mt-6">
                    <button className="rounded-full px-10 py-2 bg-yellow-orange text-white">Detail</button>
                </div>
            </div>
            <div className="w-3/5 flex gap-6">
                <div className="">
                    <img className="  " src="../../../assets/images/eventprise_p_5.png" alt="" />
                </div>
                <div className="">
                    <img className="  " src="../../../assets/images/eventprise_p_6.png" alt="" />
                </div>
            </div>
        </div>

        {/* DTS */}
        <div className="flex gap-10 mt-4">
            <div className="w-2/5 text-sm text-justify">
                <img className="w-4/5" src="../../../assets/icons/eventprise_icon.svg" alt="" />
                <p className="">Eventprise adalah karya final project kelompok D pada fase pre-bootcamp SYNRGY Academy. Project ini di buat oleh Tim UI/UX Kelompok D yang terdiri dari 3 orang yaitu Alfarel Zaki , Vira Ayu dan Naomi Lisda. Ditambah beberapa masukkan dari seluruh anggota Kelompok D dari Frontend dan Back End.</p>
                <p className="mt-1">Catatan : eventprice yang saya buat saat ini adalah hasil penulisan ulang secara pribadi tentu ada beberapa perubahan yang saya buat seperti cara pengerjanan, teknologi yang digunakan, alur bisnis, dll. Tapi secara keseluruhan masih sama hanya saja tidak bisa di bilang sama, sebab masih banyak kekurangan dan apa yang dikerjakan secara kelompok dan pribadi pastinya hasilnya berbeda.</p>
                <div className="p-4 grid grid-cols-2 gap-2 bg-white rounded-md shadow-sm border mt-2">
                    {listTech.map((tech, i)=> (<CardTech key={i} {...tech}/>))}
                </div>
                <div className="flex justify-end mt-6">
                    <button className="rounded-full px-10 py-2 bg-[#8480FC] text-white">Detail</button>
                </div>
            </div>
            <div className="w-3/5 flex gap-6">
                <div className="">
                    <img className="  " src="../../../assets/images/eventprise_p_1.png" alt="" />
                </div>
                <div className="">
                    <img className="  " src="../../../assets/images/eventprise_p_2.png" alt="" />
                </div>
            </div>
        </div>

       
    </div>
  )
}
