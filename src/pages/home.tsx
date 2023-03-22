import logo_svg from '../assets/logo.svg';

import Boutton from '../components/btn/Boutton';

import TimelineSlide from '../components/timelineSlide';



function Home() {

    const slide_elt = [];

    for (let i = 0; i < 8; i++) {
        slide_elt.push({title:`Indicateur ${i+1}`,subtitle:'Lorem ipsum dolor sit amet diam lorem sdsqsdfqsdfqs sdfqsdf sqdfqsdf  it'});
    }

    return (
    <div className='flex flex-col'>
        
        {/* Elt de bienvenue */}
        <div className='flex flex-col items-center justify-center'>
            {/* LOGO avec text */}
            <div className='flex flex-col items-center justify-center mt-10'>
                <img src={logo_svg} width={120}  height={123} />
                <span className='text-3xl leading-10  font-extrabold text-gray-900' > DOSSIER </span>
                <span className='text-4xl leading-10 font-extrabold text-gray-800'> FORMATION </span>
            </div>

            {/* Texte de bievenue */}
            <div className='text-center w-3/5 text-gray-600 text-lg mt-5'>
                <p>
                    Bienvenue sur notre plateforme de formation en ligne ! Nous sommes une entreprise spécialisée dans la formation professionnelle pour les entreprises et les particuliers. Nous sommes convaincus que la formation est un élément clé pour le développement personnel et professionnel de chacun. C'est pourquoi nous mettons notre expertise à votre disposition pour vous aider à atteindre vos objectifs.
                </p>
            </div>

            {/* Les deux boutons */}
            <div className='mt-5 flex justify-center items-center'>
                <Boutton> COMMENCER </Boutton>
                {/* <button className=' p-2 px-5 border rounded-lg'> A PROPOS </button>  */}
                <Boutton type='secondary' className='ml-2'>  APROPOS </Boutton>
            </div>

        </div>

        {/* Composants slider */}
        <TimelineSlide elts={slide_elt} />
        
    </div>
    );
  }
  
  
  export default Home;