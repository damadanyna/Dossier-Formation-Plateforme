import { useState } from 'react';

type EltSlide = {
    title:string,
    subtitle:string
}


function TimelineSlide(props: { elts: Array<EltSlide>; eltShow?:number  }){

    //Variable pour le slide
    const taille_elt_slide = 200;
    const [index_translate,setIndexTranslate] = useState(0);
    const slide_elt = props.elts;
    const nbEltShow = (props.eltShow)?props.eltShow:(props.elts.length > 4 ? 4:3);

    return (
        <div className='flex justify-center items-center flex-col mt-5'>
            {/* Elt slider */}
            <div style={{maxWidth: `${nbEltShow * taille_elt_slide}px` }} className='overflow-hidden flex mb-5 relative'>

                <span style={{width: `${nbEltShow * taille_elt_slide}px` }} className='flex absolute top-5 h-px border-dashed border border-1 border-gray-600'></span>

                <div className='flex duration-300' style={{transform:`translateX(${index_translate * taille_elt_slide}px)`}}>
                    {slide_elt.map((elt) => <div key={elt.title} className=' rounded flex flex-col' style={{width:`${taille_elt_slide}px`,height:`${taille_elt_slide + 50}px`}} >

                        <div style={{height:'150px'}} className="relative flex justify-center items-center">

                            <div style={{height:'100px'}} className='w-px absolute top-5 border-dashed border border-1 border-gray-600'></div>

                            <div className='w-6 h-6 border-2 bg-white border-black rounded flex justify-center items-center absolute top-2 rotate-45' >
                                <div className='w-4 h-4 rounded bg-black'></div>
                            </div>

                            <div className='w-3 h-3 rounded bg-purple-600 rotate-45 absolute' style={{ top:'125px' }}>

                            </div>

                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <span className=''> { elt.title } </span>
                            <span className='text-center text-sm  text-gray-600'> { elt.subtitle } </span>
                        </div>

                    </div> )}
                </div>
            </div>

            {/* Les 2 boutons sliders */}
            <div className='flex mb-2 '>
                <button className='bg-stone-200 py-2 px-3 rounded-xl text-xs border  p-1' onClick={prev}>{'<'} </button>
                <button className='bg-stone-200 py-2 px-3 rounded-xl text-xs border ml-2 p-1' onClick={next} > {'>'} </button>
            </div>
        </div>
    );


    //Fonction quand on avance dans le timeline
    function next(){
        if(index_translate <= -(slide_elt.length - 3)) return;
        setIndexTranslate(index_translate - 1);
    }

    //Fonction quand on récule dans le timeline
    function prev(){
        if(index_translate>= 1) return;
        setIndexTranslate(index_translate + 1);
    }
}

export default TimelineSlide;