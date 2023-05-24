import logo from "../assets/logo-lesaffre.png"
import Catalogue from "../components/Catalogue"
import Form from "../components/Form"
import footer from "../assets/footer.png"

const Home = () => {
  return (
    <div className="home">
        <div className="flex items-center">
            <div className="container mx-auto">
                <div className="logo flex justify-center py-6">
                    <img src={logo} alt="les affre" className="!h-24" />
                </div>
                <div className="title my-12">
                    <h1 className="text-4xl font-bold text-main text-center uppercase">
                        Bienvenue Chez le Lesaffre
                    </h1>
                </div>
                <div className="my-20 ">
                    <div className=" flex gap-5 justify-center">
                       <Catalogue />
                        <Form />
                    </div>
                </div>
                <footer className="flex justify-center">
                    <img src={footer} alt="" className="img-footer"/>
                </footer>
            </div>
        </div>
    </div>
  )
}

export default Home