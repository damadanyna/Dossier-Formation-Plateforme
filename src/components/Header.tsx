import logo from '../assets/logo.svg'

const Header=()=>{
    const items_=[
        {
            label:'Service',
            url:'/'
        },
        {
            label:'Tarif',
            url:'/tarif'
        },
        {
            label:'Chiffre Cle',
            url:'/chiffre_cle'
        },
        {
            label:'Contacte',
            url:'/contacte'
        }
    ]
    return(
        <div className=" text-white w-full flex flex-row  bg-white justify-center ">
            <div className="flex bg-black" >
                <div className=" bg-white w-7 rounded1_"></div>
            </div>
            <div className="flex px-16 py-5 items-center w-9/12 bg-black rounded_ flex-row justify-between"> 
                <div className="flex flex-row">
                    <img src={logo} alt="logo" className=" w-9"/>
                    <div className="flex uppercase ml-1 text-xs font-extrabold flex-col">
                        <span className=" relative mt-1">dossier</span>
                        <span className=" ml-3 -m-1 ">formation</span>
                    </div>
                </div>
                <div className="flex flex-row font-semibold text-sm">
                    {items_.map((item,index)=>(
                        <div key={index}>
                            <span className=" mx-7">{item.label}</span>
                        </div>
                    ))

                    }
                </div>
            </div>       
            <div className="flex bg-black" >
                <div className=" bg-white w-7 rounded2_"></div>
            </div>
        </div>
    )
}

export default Header;