/* eslint-disable quotes */

//Ici je vais créer des données factice pour la Tarification
//Il sera possible de recupérés ces données directement à partir d'un API

import valid_icon from '../../assets/valid-icon.svg';
import clear_icon from '../../assets/clear-icon.svg';
import { Link } from 'react-router-dom';

const tarifs = {
    'base':{
        label:'BASE',
        pricePerMonth:'5.99',
        detList:[
            {icon:'valid',label:'Paiement sécurisé'},
            {icon:'valid',label:'Accès à un nombre limité de cours en ligne dans un domaine spécifique'},
            {icon:'valid',label:"Matériel d'apprentissage interactif, tels que des vidéos et des quiz"},
            {icon:'clear',label:'Aucun certificat de réussite ou de diplôme'},
            {icon:'clear',label:'Aucun tutorat en ligne'},
        ],
        width:400
    },
    'premium':{
        label:'PREMIUM',
        pricePerMonth:'29.99',
        detList:[
            {icon:'valid',label:'Paiement sécurisé'},
            {icon:'valid',label:'Accès illimité à tous les cours en ligne sur le site web'},
            {icon:'valid',label:"Matériel d'apprentissage interactif, tels que des vidéos, des quiz et des projets pratiques"},
            {icon:'valid',label:"Diplôme ou certification reconnu sur le marché du travail pour chaque domaine d'étude"},
            {icon:'valid',label:"Tutorat en ligne illimité avec des instructeurs professionnels et des mentors"},
            {icon:'valid',label:"Accès à des événements exclusifs en ligne, tels que des webinaires et des conférences, animés par des experts du domaine."},
        ],
        width:450
    },
    'standard':{
        label:'STANDARD',
        pricePerMonth:'24.99',
        detList:[
            {icon:'valid',label:'Paiement sécurisé'},
            {icon:'valid',label:'Accès à un nombre limité de cours en ligne dans un domaine spécifique'},
            {icon:'valid',label:"Matériel d'apprentissage interactif, tels que des vidéos et des quiz"},
            {icon:'valid',label:"Certificat de réussite pour chaque cours complété"},
            {icon:'valid',label:"Tutorat en ligne limité avec des instructeurs professionnels"},
        ],
        width:400
    },
};

const euro = '€';

function Tarif(){
    return (<div className="py-10 flex flex-wrap justify-center items-center">

        {/* Pour le bloc base */}
        <div className=" transform scale-90 border-2 shadow-lg flex flex-col pt-10 mb-5 rounded-lg bg-white" style={{width:`${tarifs['base'].width}px`}}>
            {/* Forfait */}
            <div className="flex flex-col text-center mb-5">
                <span className="font-bold"> Forfait </span>
                <span className="text-3xl leading-10 font-extrabold text-gray-800"> {tarifs['base'].label} </span>
            </div>

            {/* Prix */}
            <div className="flex flex-col text-center mb-12">
                <div className="flex items-end justify-center">
                    <span className="text-6xl  font-bold text-gray-800"> {tarifs['base'].pricePerMonth}  </span>
                    <span className="text-xl text-gray-800"> {euro} </span>
                </div>
                <span className="text-gray-600"> par mois </span>
            </div>

            {/* Liste des éléments */}
            <div className="flex flex-col px-5 text-sm ">
                {tarifs['base'].detList.map((d) => <div className="flex my-2 items-start" key={d.label}>
                    <img src={(d.icon == 'valid')?valid_icon:clear_icon} width={20} className="mr-5"  height={20} />
                    {/* <img src={valid_icon} width={20} className="mr-5"  height={20} /> */}
                    <span className="text-gray-800"> {d.label} </span>
                </div>)}
            </div>
            {/* Boutons de souscription */}
            <div className="p-5 flex justify-center items-center">
                <button className="w-full p-4 font-bold text-white rounded-lg bg-[#2B2626] shadow-2xl shadow-purple-500">SOUSCRIRE</button>
            </div>
        </div>

        {/* Pour le bloc premium */}
        <div className=" transform scale-90 premium-card border-2 mb-5 shadow-lg border-gray-600 bg-white flex flex-col pt-10 rounded-lg mx-5 bg-gradient-to-tr from-purple-200 via-transparent to-transparent" style={{width:`${tarifs['premium'].width}px`}}>
            {/* Forfait */}
            <div className="flex flex-col text-center mb-5">
                <span className="font-bold"> Forfait </span>
                <span className="text-3xl leading-10 font-extrabold text-gray-800"> {tarifs['premium'].label} </span>
            </div>

            {/* Prix */}
            <div className="flex flex-col text-center mb-12">
                <div className="flex items-end justify-center">
                    <span className="text-6xl  font-bold text-gray-800"> {tarifs['premium'].pricePerMonth}  </span>
                    <span className="text-xl text-gray-800"> {euro} </span>
                </div>
                <span className="text-gray-600"> par mois </span>
            </div>

            {/* Liste des éléments */}
            <div className="flex flex-col px-10 text-sm">
                {tarifs['premium'].detList.map((d) => <div className="flex my-2 items-start" key={d.label}>
                    <img src={(d.icon == 'valid')?valid_icon:clear_icon} width={20} className="mr-5"  height={20} />
                    {/* <img src={valid_icon} width={20} className="mr-5"  height={20} /> */}
                    <span className="text-gray-800"> {d.label} </span>
                </div>)}
            </div>
            {/* Boutons de souscription */}
            <div className="p-5 px-10 flex justify-center items-center">
                <Link to={'/formulairePaiement'} className="w-full text-center p-4 font-bold text-white rounded-lg bg-black shadow-2xl shadow-purple-500" >SOUSCRIRE</Link>
            </div>
        </div>

        {/* pour le bloc standard */}
        <div className=" transform scale-90 border-2 shadow-lg flex mb-5 flex-col pt-10 rounded-lg bg-white" style={{width:`${tarifs['standard'].width}px`}}>
            {/* Forfait */}
            <div className="flex flex-col text-center mb-5">
                <span className="font-bold"> Forfait </span>
                <span className="text-3xl leading-10 font-extrabold text-gray-800"> {tarifs['standard'].label} </span>
            </div>

            {/* Prix */}
            <div className="flex flex-col text-center mb-12">
                <div className="flex items-end justify-center">
                    <span className="text-6xl  font-bold text-gray-800"> {tarifs['standard'].pricePerMonth}  </span>
                    <span className="text-xl text-gray-800"> {euro} </span>
                </div>
                <span className="text-gray-600"> par mois </span>
            </div>

            {/* Liste des éléments */}
            <div className="flex flex-col px-5 text-sm">
                {tarifs['standard'].detList.map((d) => <div className="flex my-2 items-start" key={d.label}>
                    <img src={(d.icon == 'valid')?valid_icon:clear_icon} width={20} className="mr-5"  height={20} />
                    {/* <img src={valid_icon} width={20} className="mr-5"  height={20} /> */}
                    <span className="text-gray-800"> {d.label} </span>
                </div>)}
            </div>
            {/* Boutons de souscription */}
            <div className="p-5 flex justify-center items-center">
                <button className="w-full p-4 font-bold text-white rounded-lg bg-[#2B2626] shadow-2xl shadow-purple-500">SOUSCRIRE</button>
            </div>
        </div>



    </div>);
}




export default Tarif;