import React from 'react';
import dot from '../assets/doted.svg';
import human from '../assets/human.svg';
import Text from '../components/inputs/Text';
import Email from '../components/inputs/Email';
import Button from '../components/btn/Boutton';

const Footer: React.FC = () => {
    return (
        <div className=' h-screen  flex flex-row pt-11 over '>
            <div className=" flex flex-col absolute left-20 items-center">
                <div className=" z-10 flex  flex-col  border-2 px-5 py-6 rounded-lg  border-black"> 
                    <div className="flex flex-row justify-center">
                        <span className=' uppercase pt-5 font-semibold text-3xl'>Contactez-nous</span>
                    </div>
                    <div className="flex w-full justify-center my-8">
                        <span className=' border-b w-24 border-black'></span>
                    </div>
                    <div className="flex flex-row "> 
                            <Text label={'Nom'} required={true} placeholder={'[champ pour le nom]'} value={''} style_={{}} onChange={function (event: React.ChangeEvent<HTMLInputElement>): void {
                            throw new Error('Function not implemented.');
                        } }></Text>   
                            <div className=' ml-2'> 
                                <Email  label={' Email'} placeholder={'[champ pour le mail]'} value={''} onChange={function (event: React.ChangeEvent<HTMLInputElement>): void {
                                throw new Error('Function not implemented.');
                            } } ></Email> 
                            </div>
                    </div> 
                    <div className="flex flex-col mt-4">
                        <span className=' font-medium ml-3'>Objet de votre demande </span>
                        <Text placeholder="[champ pour l'Objet de votre demande]" label={''} value={''} style_={{}} onChange={function (event: React.ChangeEvent<HTMLInputElement>): void {
                            throw new Error('Function not implemented.');
                        } }></Text>
                    </div>  
                    <div className="flex flex-col mt-4">
                        <span className=' font-medium ml-3'>Message </span>
                        <textarea className="p-2 border border-gray-400 rounded w-full" name="" id="" cols={30} rows={5}></textarea>
                    </div> 
                    <div className=' mt-4'>
                        <Button type='primary-b' > ENVOYER</Button>
                    </div>
                </div> 
                <div className=" z-0 w-11/12 box_shasdow2_ h-2 -mt-3 bg-tranparent"></div>

            </div>
            <div className=' flex'>
                <img className=' w-2/3 right-0 absolute' src={dot} alt="" />
                <img className=' w-2/6 right-24 top-24  absolute' src={human} alt="" />

            </div>
            <div className=" absolute right-24 items-center -bottom-5  flex flex-col">
                <span className=' font-semibold text-3xl'>TITRE</span>
                <span className=' text-center w-96  text-sm mt-5'>
                Nous proposons une large gamme de formations pour répondre aux besoins spécifiques de nos clients. Que vous soyez une entreprise ou un particulier, nous avons des formations adaptées à votre profil et à vos objectifs. Nous proposons des formations en ligne, en présentiel ou en blended learning     </span>
            </div>

        </div>
    );
};

export default Footer;