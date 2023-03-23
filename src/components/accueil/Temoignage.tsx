import React,{FC} from 'react'; 
import cot from '../../assets/cot.svg'
import man from '../../assets/man.png'
import woman from '../../assets/woman.png'
const Service:FC=()=>{
    return(
        <div className="flex flex-row h-full w-full pb-28 justify-center ">
            
            <div className="flex  flex-col w-full  items-center overflow-y-auto overflow-x-hidden">
                <div className="flex px-4  flex-col items-center">
                <div className="flex flex-col  items-center">
                   
                    <div className=" font-extrabold flex flex-col mt-16 items-center">
                        <span className=' text-3xl'> Temoignage</span>
                        <span className=' relative text-7xl service_txt_ opacity-10'> Temoignage</span>
                    </div>
                </div>
                
                <span className=' text-center w-2/3 text-sm mt-10'>
                    Nous avons aidé des centaines de clients à atteindre leurs objectifs de formation et à développer leurs compétences. Voici ce que certains de nos clients satisfaits ont à dire à propos de notre service  </span>
                </div>
                <div className="flex bg-stone-800 mt-24 pb-10 " > 
                </div>

                <div className=" w-full flex justify-center"> 
                    <div className="mr-14  flex flex-col w-1/3 border py-5 border-stone-700 rounded-xl  px-5 " >
                        <div className="flex w-full justify-center">
                            <img className=' w-14' src={cot} alt="" />
                        </div>
                        <div className=' w-full flex justify-center px-5'>
                            <span className='  text-center w-full text-sm mt-10'>
                            J'ai suivi une formation sur la gestion de projet proposée par cette plateforme et j'ai été très satisfait du contenu et de la qualité de la formation. Les formateurs étaient très compétents et ont su répondre à toutes mes questions.
                            </span>
                        </div>
                        
                        <div className="flex w-full my-4 mt-7 justify-center">
                        <span className=' w-14 border border-stone-400'></span>
                        </div>
                        <div className="flex w-full mt-3 justify-center">
                            <img className=' w-14' src={man} alt="" />
                        </div>
                        <div className="flex w-full my-2 justify-center">
                        <span className=' font-bold'>John Doe</span>
                        </div>
                    </div>  
                    <div className="mr-14  flex flex-col w-1/3 border py-5 border-stone-700 rounded-xl  px-5 " >
                        <div className="flex w-full justify-center">
                            <img className=' w-14' src={cot} alt="" />
                        </div>
                        <div className=' w-full flex justify-center px-5'>
                            <span className='  text-center w-full text-sm mt-10'>
                            Nous avons choisi cette entreprise pour former notre équipe de commerciaux et nous avons été très satisfaits du résultat. Les formateurs ont su s'adapter à nos besoins et les résultats ont été rapidement visibles. </span>
                        </div>
                        
                        <div className="flex w-full my-4 mt-7 justify-center">
                        <span className=' w-14 border border-stone-400'></span>
                        </div>
                        <div className="flex w-full mt-3 justify-center">
                            <img className=' w-14' src={woman} alt="" />
                        </div>
                        <div className="flex w-full my-2 justify-center">
                        <span className=' font-bold'>Jannette Doe</span>
                        </div>
                    </div>  
                </div>   
            </div>
 
        </div>
    )
}

export default Service;
