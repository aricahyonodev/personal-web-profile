export const Footer = () => {
  return (
    <div className='text-center pb-6'>
        <img className="inline-block" src="../../../assets/icons/ari_icon.svg" alt="" />
        <div className='py-3 flex justify-center'>
         <div className='flex  space-x-5'>
          <a href="https://www.linkedin.com/in/ari-cahyono-905147137/"  target="_blank" rel="noreferrer"> 
           <img className="cursor-pointer" src="../../../assets/icons/linkedin_icon.svg" alt="" />
          </a>
          <a href="https://github.com/aricahyonodev"  target="_blank" rel="noreferrer">
           <img className="cursor-pointer" src="../../../assets/icons/github_icon.svg" alt="" />
          </a>
           <img className="cursor-pointer" src="../../../assets/icons/email_icon.svg" alt="" />
         </div>
        </div>
        <p className='text-sm'>@ 2023. All rights reserved</p>
    </div>
  )
}
