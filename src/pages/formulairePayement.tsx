import React from 'react';
import dot from '../assets/doted.svg';
import human from '../assets/human.svg';
import Text from '../components/inputs/Text';
import Email from '../components/inputs/Email';
import Button from '../components/btn/Boutton';

const FormaulairePayement: React.FC = () => {
    return (
       <div className="flex h-screen w-full flex-row justify-between py-4 px-3">
            <div></div>
            <div className=' flex-col items-center flex border-2 px-3 rounded-lg border-black '>
                <div className="flex flex-col">
                    <div className="flex flex-row justify-center">
                        <span className=' text-xl font-semibold mt-4'>Informations de payement :</span>
                    </div>
                    <div className="flex flex-row">
                        <div className='flex flex-col'>
                            <span className=' mt-6'>Informations de facturation :</span>
                            <div className="flex mt-6 flex-col">
                                <div className="flex flex-row">
                                    <Text placeholder='[champ pour le nom]' required={true} label={'Nom'}></Text>
                                    <div className="flex ml-3">
                                        <Text placeholder='[champ pour le prénom]' required={true} label={'Prénom'}></Text>
                                    </div>
                                </div>     
                                <div className=' mt-3'>
                                    <Text placeholder="[champ pour l'adresse e-mail]" required={true} label={'Email'}></Text>  
                                </div>

                                <div className=' mt-3'>
                                    <Text placeholder="[champ pour l'adresse de facturation]" required={true} label={'Adresse de facturation'}></Text>
                                </div>
                                <div className="flex flex-row mt-3">
                                    <Text placeholder='[champ pour la ville]' required={true} label={'Ville'}></Text>
                                    <div className="flex ml-3">
                                        <Text placeholder='[sélectionner le pays]' required={true} label={'Pays'}></Text>
                                    </div>
                                </div>    
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
       </div>
    );
};

export default FormaulairePayement;