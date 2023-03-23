import React from 'react';

const ChiffreCles:React.FC=()=>{
    const grid_data=[
        {
            label:558,
            title:'Nombre de formations proposées',
            sub_title:'indiquez le nombre total de formations proposées sur votre plateforme.'
        },
        {
            label:1045,
            title:'Nombre de formateurs',
            sub_title:'indiquez le nombre total de formateurs disponibles sur votre plateforme.'
        },
        {
            label:10.586,
            title:'Nombre de bénéficiaires formés',
            sub_title:'indiquez le nombre total de personnes ayant suivi des formations sur votre plateforme.'
        },
        {
            label:10,
            title:'Taux de satisfaction des clients',
            sub_title:'indiquez le pourcentage de clients satisfaits de votre service.'
        },
        {
            label:'95%',
            title:'Taux de réussite aux examens',
            sub_title:'Si vous proposez des examens à la fin de vos formations, indiquez le taux de réussite de vos bénéficiaires.'
        },
        {
            label:'03 h',
            title:'Durée moyenne des formations',
            sub_title:'Indiquez la durée moyenne de vos formations pour aider les bénéficiaires à choisir la formation la plus adaptée à leurs besoins.'
        } 
    ];
    return (
    <div className=" w-full  h-full flex-col items-center">
        <div className=" font-extrabold flex flex-col mt-16 items-center">
            <span className=' text-white text-4xl'> Chiffre cles</span>
            <span className=' text-white relative text-7xl service_txt_ opacity-10'> Chiffre cles</span>
        </div>
        <div className="grid grid-cols-3">
            {grid_data.map((item,index)=>(
                <div key={index} className="flex items-center my-6 mx-7 justify-center flex-col text-white"> 
                    <div className=" w-44 bg-white text-2xl  text-fuchsia-700 flex items-center justify-center  font-extrabold h-28 rounded-lg">  {item.label}</div>
                    <div className=" w-24 box_shasdow_ h-2 -mt-2 bg-tranparent"></div>
                    <span className=" text-sm font-extrabold mt-7 mb-3">{item.title}</span>
                    <span className=" text-xs text-center">{item.sub_title}</span>
                </div>
            ))
            }
        </div>
    </div>
    );
};
export default ChiffreCles;