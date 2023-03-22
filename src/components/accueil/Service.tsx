import React,{FC} from 'react';
import logo from '../assets/Logo_DF_2.svg'  
const Service:FC=()=>{
    return(
        <div className="flex flex-row h-full mt-3">
            
            <div className="flex  flex-col w-full  items-center overflow-y-auto overflow-x-hidden">
                <div className="flex px-4  flex-col items-center">
                <div className="flex flex-col  items-center">
                    <img src={logo} className=" w-36" alt="" />
                    <span className=' uppercase text-4xl font-extrabold'>dossier</span>
                    <span className=' uppercase text-4xl font-extrabold'>formation</span>   
                    <span className=' text-center w-2/3 text-sm mt-10'>Bienvenue sur notre plateforme de formation en ligne ! Nous sommes une entreprise spécialisée dans la formation professionnelle pour les entreprises et les particuliers. Nous sommes convaincus que la formation est un élément clé pour le développement personnel et professionnel de chacun. C'est pourquoi nous mettons notre expertise à votre disposition pour vous aider à atteindre vos objectifs.</span>
                    <div className="flex flex-row mt-7">
                            <button className=" bg-fuchsia-800 py-3 text-xs px-5 font-extrabold rounded-xl mr-3 uppercase text-white">Commencer</button>
                            <button className=" border border-black py-3 text-xs px-5 font-extrabold ml-3 rounded-xl uppercase text-black">A propos</button>
                    </div>
                    <div className=" font-extrabold flex flex-col mt-16 items-center">
                        <span className=' text-3xl'> Services</span>
                        <span className=' relative text-7xl service_txt_ opacity-10'> Services</span>
                    </div>
                </div>
                
                <span className=' text-center w-2/3 text-sm mt-10'>
                    Nous proposons une large gamme de formations pour répondre aux besoins spécifiques de nos clients. Que vous soyez une entreprise ou un particulier, nous avons des formations adaptées à votre profil et à vos objectifs. Nous proposons des formations en ligne, en présentiel ou en blended learning, ainsi que des formations sur mesure pour répondre à vos besoins spécifiques. Nos formateurs expérimentés vous accompagnent tout au long de votre parcours pour vous aider à atteindre vos objectifs.
                </span>
                </div>
                <div className="flex bg-stone-800 mt-24 pb-10 " >
                    {/* <Chiffre_cles ></Chiffre_cles> */}
                </div> 
            </div>
 
        </div>
    )
}

export default Service;
