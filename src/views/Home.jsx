import logo from "../assets/rafiaa/logo.png"
import Catalogue from "../components/Catalogue"
import Form from "../components/Form"
import banner from "../assets/rafiaa/bande.png"
import products from "../assets/rafiaa/offre.png"
const Home = () => {
  return (
    <div className="home">
        {/* <img src={banner} /> */}
        <div className="flex items-center">
            <div className="container mx-auto">
                <div className="logo flex justify-center py-6">
                   <img src={logo} alt="les affre" className="!h-24" />
               </div>
               <div className="logo flex justify-center py-6">
                   <img src={banner} alt="les affre" className="!h-24" />
               </div>
                {/*
                <div className="title my-12">
                    <h1 className="text-4xl font-bold text-main text-center uppercase">
                        Bienvenue Chez Lesaffre
                    </h1>
                </div> */}
                <div className="mb-12">
                    <div className=" flex gap-5 justify-center">
                       <Catalogue />
                        <Form />
                    </div>
                </div>
                <div className="logo flex justify-center py-6">
                   <img src={products} alt="les affre" />
               </div>
                
                {/* <footer className="flex justify-center">
                    <img src={footer} alt="" className="img-footer"/>
                </footer> */}
            </div>
        </div>
    </div>
  )
}

export default Home