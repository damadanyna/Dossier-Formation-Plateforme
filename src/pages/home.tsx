import logo_svg from '../assets/logo.svg';
import group_1 from '../assets/group1.svg';
import group from '../assets/group.svg';

import Boutton from '../components/btn/Boutton'; 

import TimelineSlide from '../components/timelineSlide';
import ChiffreCles from '../components/accueil/ChiffreCles';
import Temoignage from '../components/accueil/Temoignage'



function Home() {

    const slide_elt = [];

    for (let i = 0; i < 8; i++) {
        slide_elt.push({title:`Indicateur ${i+1}`,subtitle:'Lorem ipsum dolor sit amet diam lorem sdsqsdfqsdfqs sdfqsdf sqdfqsdf  it'});
    }

    return (
    <div className='flex flex-col pt-20'>
        
        {/* Elt de bienvenue */}
        <div className='flex flex-col items-center justify-center'>
            {/* LOGO avec text */}
            <div className='flex flex-col items-center justify-center mt-10'>
                <img src={logo_svg} width={120}  height={123} />
                <span className='text-3xl leading-10  font-extrabold text-gray-900' > DOSSIER </span>
                <span className='text-4xl leading-10 font-extrabold text-gray-800'> FORMATION </span>
            </div>

            {/* Texte de bievenue */}
            <div className='text-center w-3/5 text-gray-600 text-md mt-12'>
                <p>
                    Bienvenue sur notre plateforme de formation en ligne ! Nous sommes une entreprise spécialisée dans la formation professionnelle pour les entreprises et les particuliers. Nous sommes convaincus que la formation est un élément clé pour le développement personnel et professionnel de chacun. C'est pourquoi nous mettons notre expertise à votre disposition pour vous aider à atteindre vos objectifs.
                </p>
            </div>

            {/* Les deux boutons */}
            <div className='flex justify-center items-center mt-12'>

                <Boutton> COMMENCER </Boutton>
                {/* <button className=' p-2 px-5 border rounded-lg'> A PROPOS </button>  */}
                <Boutton type='secondary' className='ml-2'>  APROPOS </Boutton>
            </div>


        </div>

        {/* Composants slider */}
        <TimelineSlide elts={slide_elt} />
         
         {/* Service */}
       <div id="service" className="flex flex-col mt-8 "> 
            <div className=' w-full items-center flex justify-center  mt-6'>
                <img className=' relative -mr-14 mt-12' src={group} alt="" />
                <img className=' relative' src={group_1} alt="" />
            </div>

            <div className=" font-extrabold flex flex-col mt-16 items-center">
                    <span className=' text-3xl'> Services</span>
                    <span className=' relative text-7xl service_txt_ opacity-10'> Services</span>
            </div>
             
            <div className="flex justify-center">
                <div className='text-center w-3/5 text-gray-600 text-sm mt-5'>
                    <p>
                    Nous proposons une large gamme de formations pour répondre aux besoins spécifiques de nos clients. Que vous soyez une entreprise ou un particulier, nous avons des formations adaptées à votre profil et à vos objectifs. Nous proposons des formations en ligne, en présentiel ou en blended learning, ainsi que des formations sur mesure pour répondre à vos besoins spécifiques. Nos formateurs expérimentés vous accompagnent tout au long de votre parcours pour vous aider à atteindre vos objectifs.
                    </p>
                </div>
            </div>
       </div>
       
       {/* chiffre cles */}
        <div id="chiffreCle" className="flex bg-stone-900    mt-24 pb-10 " > 
            <ChiffreCles ></ChiffreCles>
        </div> 

       {/* chiffre cles */}
        <div id="chiffreCle" className="flex    mt-24 pb-10 " > 
            <Temoignage ></Temoignage>
        </div> 


        
    </div>
    );
  }
  
  
  export default Home;