
export const Hero = () => {

  const listNav = ["Beranda", "Skill Pemrograman", "Bootcamp", "Project"]


  return (
    <div className='bg-yellow-spring px-12 pt-4 pb-20'>
        {/* Top Navigation */}
        <nav className='flex justify-between items-center'>
            <img className="block" src="../../../assets/icons/ari_icon.svg" alt="" />
            <div className="flex list-none space-x-12 font-medium text-lg ">
                {listNav.map((nav, i) => <li key={i} className={`${nav === "Beranda" ? "border-b-4 pb-1 border-y-yellow-orange" : "" }`}>{nav}</li> )}
            </div>
        </nav>

        {/* Hero */}
        <div className="flex mt-16">
            <div className="flex-1 pt-14">
                <h1 className="font-bold text-3xl text-yellow-orange">Halo, Saya Ari Cahyono </h1>
                <h2 className="font-medium text-5xl mt-1">Seorang Web Developer</h2>
                <p className=" mt-2">Dengan kegemaran belajar banyak hal, kekaguman akan ilmu pengetahuan dan bagaimana suatu ilmu pengetahuan memberikan pengaruh dalam kehidupan.</p>
                <button className="font-medium mt-6 text-white px-8 py-2 bg-yellow-orange rounded-full">Email Saya</button>
            </div>
            <div className="flex-1 flex justify-center">
                <img className="block w-5/6" src="../../../assets/images/ari_hero.png" alt="" />
            </div>
        </div>
    </div>
  )
}
// 