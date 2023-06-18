
const Card = ({img, title, subTitle}) => {
    return (
        <div className="rounded-md bg-white border-2 shadow-sm text-center pt-4 pb-4">
            <div className="h-24 flex justify-center items-center mb-1">
                <img src={`../../../assets/icons/${img}`} alt="" />
            </div>
            <h1 className="font-semibold text-base">{title}</h1>
            <p className=" text-sm text-[#79819A]">{subTitle}</p>
        </div>
    )
}

const listTech = [
    {
        img : "react_js_icon.png",
        title : "React JS",
        subTitle : "Front-End Library"
    },
    {
        img : "tailwind_css_icon.png",
        title : "Tailwind CSS",
        subTitle : "utility-first CSS framework"
    },
    {
        img : "express_js_icon.png",
        title : "Express JS",
        subTitle : "Back-End Framework"
    },
    {
        img : "laravel_icon.png",
        title : "Laravel",
        subTitle : "Back-End Framework"
    },
    {
        img : "postgress_sql_icon.png",
        title : "Postgress  SQL",
        subTitle : "Back-End Framework"
    },
    {
        img : "mysql_icon.png",
        title : "Mysql",
        subTitle : "Database Relational"
    },
    {
        img : "git_icon.png",
        title : "GIT",
        subTitle : "Version Control"
    },
    {
        img : "visual_studio_code_icon.png",
        title : "Visual Studio Code",
        subTitle : "Code Editor"
    },
    {
        img : "notion_icon.png",
        title : "Notion",
        subTitle : "Back-End Framework"
    },
    {
        img : "agile_methodologi_icon.png",
        title : "Agile Methodologi",
        subTitle : "software development methods"
    },
]
export const ProgrammingSkill = () => {
  return (
    <div className="px-28 pb-20 pt-8">
        <h1 className="font-bold text-5xl text-center">Skill Pemrograman </h1>
        <div className="grid grid-cols-5 gap-3 mt-12">
            {listTech.map((tech, i)=> (<Card key={i} {...tech}/>))}
        </div>
    </div>
  )
}
