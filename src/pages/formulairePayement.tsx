import React from 'react'; 

import valid_icon from '../assets/valid-icon.svg';
import clear_icon from '../assets/clear-icon.svg';
import Text from '../components/inputs/Text';
import paypal_icon from '../assets/paypal.svg';
import PaymentCardNameInput from '../components/inputs/PaymentCardNameInput';
import Datexp from '../components/inputs/ExpirationInput';
import { Link } from 'react-router-dom';
import Button from '../components/btn/Boutton'; 

const FormaulairePayement: React.FC = () => {

    const tarifs = {
        'base':{
            label:'BASE',
            pricePerMonth:'5.99',
            detList:[
                {icon:'valid',label:'Paiement sécurisé'},
                {icon:'valid',label:'Accès à un nombre limité de cours en ligne dans un domaine spécifique'},
                {icon:'valid',label:'Matériel d\'apprentissage interactif, tels que des vidéos et des quiz'},
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
                {icon:'valid',label:'Matériel d\'apprentissage interactif, tels que des vidéos, des quiz et des projets pratiques'},
                {icon:'valid',label:'Diplôme ou certification reconnu sur le marché du travail pour chaque domaine d\'étude'},
                {icon:'valid',label:'Tutorat en ligne illimité avec des instructeurs professionnels et des mentors'},
                {icon:'valid',label:'Accès à des événements exclusifs en ligne, tels que des webinaires et des conférences, animés par des experts du domaine.'},
            ],
            width:450
        },
        'standard':{
            label:'STANDARD',
            pricePerMonth:'24.99',
            detList:[
                {icon:'valid',label:'Paiement sécurisé'},
                {icon:'valid',label:'Accès à un nombre limité de cours en ligne dans un domaine spécifique'},
                {icon:'valid',label:'Matériel d\'apprentissage interactif, tels que des vidéos et des quiz'},
                {icon:'valid',label:'Certificat de réussite pour chaque cours complété'},
                {icon:'valid',label:'Tutorat en ligne limité avec des instructeurs professionnels'},
            ],
            width:400
        },
    };
 

    return (
       <div className='flex w-full flex-row py-4 mb-11'> 
            {/* Pour le bloc premium */}
           <div className='flex w-1/4 flex-col items-center mx-5 '>
                <div className=' premium-card border-2 shadow-lg border-gray-600 bg-white flex flex-col pt-10 rounded-lg bg-gradient-to-tr from-purple-200 via-transparent to-transparent' style={{width:'100%',height:'100%',margin:'0px 20px'}}>
                    {/* Forfait */}
                    <div className='flex flex-col text-center mb-5'>
                        <span className='font-bold'> Forfait </span>
                        <span className='text-3xl leading-10 font-extrabold text-gray-800'> {tarifs['premium'].label} </span>
                    </div>

                    {/* Liste des éléments */}
                    <div className='flex flex-col px-10 text-xs'>
                        {tarifs['premium'].detList.map((d) => <div className='flex my-2 items-start' key={d.label}>
                            <img src={(d.icon == 'valid')?valid_icon:clear_icon} width={20} className='mr-5'  height={20} />
                            {/* <img src={valid_icon} width={20} className='mr-5'  height={20} /> */}
                            <span className='text-gray-800'> {d.label} </span>
                        </div>)}
                    </div>
                    {/* Boutons de souscription */}
                    <div className='p-5 px-10 flex justify-center items-center'>
                        <Link to={'/formulairePaiement'} className='w-full text-center p-4 font-bold text-white rounded-lg bg-black shadow-2xl shadow-purple-500' >Tarif : 29.99€</Link>
                    </div>
                </div>  
                <div className='box_shasdow_ w-4/5 h-1 bg-transparent' ></div>
           </div>
            <div className=' mr-4 w-4/5 h-full flex-col items-center flex border-2 px-3 rounded-lg border-black '>
                <div className='flex flex-col pb-14 py-3 w-full'>
                        <div className='flex flex-row justify-center'>
                            <span className=' text-xl font-semibold mt-4 '>Informations de payement :</span>
                        </div>
                        <div className='flex flex-col lg:flex-row w-full '>
                            <div className='flex w-full  flex-col'>
                                <span className=' mt-6  text-stone-500'>Informations de facturation :</span>
                                <div className='flex mt-7 w-full flex-col'>
                                    <div className='flex w-full  flex-row'>
                                        <div className='flex w-full '>
                                            <Text placeholder='[champ pour le nom]' required={true} label={'Nom'} value={''} onChange={function (_event: React.ChangeEvent<HTMLInputElement>): void {
                                                throw new Error('Function not implemented.');
                                            } } style_={{width:' 100%'}}></Text>
                                        </div>
                                        <div className='flex w-full ml-3'>
                                            <Text placeholder='[champ pour le prénom]' required={true} label={'Prénom'} value={''} onChange={function (_event: React.ChangeEvent<HTMLInputElement>): void {
                                                throw new Error('Function not implemented.');
                                            } }  style_={{width:' 100%'}}></Text>
                                        </div>
                                    </div>     
                                    <div className=' mt-7'>
                                        <Text placeholder='[champ pour l\adresse e\-mail]' required={true} label={'Email'} value={''} onChange={function (_event: React.ChangeEvent<HTMLInputElement>): void {
                                            throw new Error('Function not implemented.');
                                        } }  style_={{flex:''}}></Text> 
                                    </div>

                                    <div className='mt-7'>
                                        <Text placeholder={'[champ pour l\'adresse de facturation]'} required={true} label={'Adresse de facturation'} value={''} onChange={function (_event: React.ChangeEvent<HTMLInputElement>): void {
                                            throw new Error('Function not implemented.');
                                        } }  style_={{flex:''}}></Text> 
                                    </div> 
                                    <div className='flex w-full flex-row mt-7'>
                                        <div className='flex w-full'>
                                            <Text placeholder='[champ pour la ville]' required={true} label={'Ville'} value={''} onChange={function (_event: React.ChangeEvent<HTMLInputElement>): void {
                                                throw new Error('Function not implemented.');
                                            } }  style_={{width:'100%'}}></Text> 
                                        </div>
                                        <div className='flex ml-3 w-full'>
                                            <Text placeholder='[sélectionner le pays]' required={true} label={'Pays'} value={''} onChange={function (_event: React.ChangeEvent<HTMLInputElement>): void {
                                                throw new Error('Function not implemented.');
                                            } }  style_={{width:'100%'}}></Text> 
                                        </div>
                                    </div>    
                                </div>
                            </div> 
                            <div className='flex w-full flex-col  ml-12'>
                                <span className=' mt-6 text-stone-500'>Informations de paiement :</span>
                                <div className='flex mt-6 w-full flex-col'>
                                    <div className='flex items-center flex-row'>
                                        <div className='flex w-full flex-col'>
                                            <PaymentCardNameInput placeholder='[champ pour le nom]' required={true} label={'Nom sur la carte'} name={''}></PaymentCardNameInput>    
                                        </div>
                                        <div className='flex py-2 mt-4 rounded-md ml-2 px-4 border-blue-400 border'>
                                            <img className='' src={paypal_icon} alt='' />
                                        </div>


                                    </div>     
                                    <div  className=' mt-4 flex-col flex'>
                                        <Text placeholder='[champ pour le numéro de carte de crédit]' required={true} label={'Numéro de carte'} value={''} onChange={function (_event: React.ChangeEvent<HTMLInputElement>): void {
                                            throw new Error('Function not implemented.');
                                        } }  style_={{width:'100%'}}></Text>   
                                    </div>

                                    <div className='flex w-full flex-row mt-7'>
                                        <Text placeholder='[champ pour la ville]' required={true} label={'Ville'} value={''} onChange={function (_event: React.ChangeEvent<HTMLInputElement>): void {
                                            throw new Error('Function not implemented.');
                                        } }  style_={{width:'100%'}}></Text> 
                                        <div className='flex ml-3'>
                                            <Text placeholder='[sélectionner le pays]' required={true} label={'Pays'} value={''} onChange={function (_event: React.ChangeEvent<HTMLInputElement>): void {
                                                throw new Error('Function not implemented.');
                                            } }  style_={{width:'100%'}}></Text> 
                                        </div>
                                    </div> 

                                    <div className='flex flex-row mt-7'>
                                        <Datexp label={'Dade d’expiration'} name={''}   style_={{width:'100%'}} required={true}></Datexp>
                                    </div> 
                                    <div className='flex opacity-75'>
                                        <Button type='primary-b'>PAYER 29.99€</Button>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
            <div className='box_shasdow_ w-full h-1 bg-transparent' ></div>
            </div>

       </div>
    );
};

export default FormaulairePayement;