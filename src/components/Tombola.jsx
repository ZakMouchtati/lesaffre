import { useQuery } from "react-query"
import logo from "../assets/blue-lesaffre.png"
import offre from "../assets/offre.png"
import { useState } from "react"
import "../styles/loader.css"
import laptop from "../assets/laptop-giveway.png"
import axios from 'axios'

const Tombola = () => {
    const [tomobolaRun,setTombolaRun] = useState(false)
    const [winner,setWinner] = useState("")
    const [gifts,setGifts] = useState("")
    const [randomNumber,setRandomNumber] = useState(1)

    const { isLoading, error, data } = useQuery('leads', () =>
        fetch(`${import.meta.env.VITE_BACK_END_URL}/leads`).then(res =>
        res.json()
        )
    )

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    const handleSort = () => {
        setTombolaRun(true)
        
        
        setInterval(() => {
            let randomNumber = Math.floor(Math.random() * data.leads.length -1) + 1;
            setRandomNumber(randomNumber)
        }, 300);

        setTimeout(()=>{
            axios.get(`${import.meta.env.VITE_BACK_END_URL}/get-winner`)
            .then(res => {
                console.log(res)
                setWinner(res.data.gift.full_name)
                setGifts(res.data.gift.name)
            })
            .catch(err => console.log(err))
        },5000)
    }

    const handleReload = () => {
        setWinner("")
        setTombolaRun(false)
    }

  return (
    <div className="home">
        <div className="container mx-auto px-5">
            {winner ? (
                <div className="h-screen flex items-center justify-center">
                    <div>
                        <h1 className="text-center text-4xl text-white font-bold mb-5">
                            <span className="block">
                                Félicitation Mr {winner}
                            </span>
                        </h1>
                        <h2 className="text-center text-4xl text-white font-bold mt-12">
                            Vous avez gagné un cadeau
                        </h2>
                        <span className="bg-white text-4xl font-semibold text-center text-blue block mt-12 px-5 py-2 rounded-xl">
                            {gifts}
                        </span>
                        <button onClick={handleReload} className="mt-5 bg-white py-2 font-bold uppercase text-xl w-full rounded-lg text-blue">
                            ReLancer le tirage
                        </button>
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-2 items-center">
                <div className="text-center mb-12">
                    <div className="py-6 flex justify-center">
                        <img src={logo} alt="les affre" className="!h-28" />
                    </div>
                    <div className="title">
                        <h1 className="text-7xl font-bold text-main uppercase">
                            Tombola
                        </h1>
                        <div className="text-white text-4xl font-semibold flex flex-col gap-5 mt-5">
                            <p>
                                Tombola Spéciale Cremai 
                            </p>
                        </div>
                        <div className="offre">
                            <img src={offre} width={"90%"} alt="" />
                        </div>
                    </div>
                </div>
                <div className="my-12">
                    <div className="w-3/4 mx-auto">
                        {tomobolaRun ?(
                            <div className="relative">
                                <div className="loader">Loading...</div>
                                <span className="user-name absolute text-white text-xl">
                                    {data.leads[randomNumber].full_name}
                                </span>
                            </div>
                        ) : (
                            <>
                            <h2 className="uppercase py-5 text-center bg-white text-blue font-bold text-2xl mb-3">
                                Liste participants
                            </h2>
                            <div className="!h-96 overflow-y-auto">
                                <table className="w-full table-auto bg-white rounded-lg">
                                    <tbody className="text-center">
                                        {data.leads.map(({id,full_name}) => (
                                            <tr key={id}>
                                                <td className="block border-b text-blue border-blue py-3 my-1 font-semibold">
                                                    {full_name}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <button onClick={handleSort} className="mt-5 bg-white py-2 font-bold uppercase text-xl w-full rounded-lg text-blue">
                                Lancer le tirage
                            </button>
                        </>
                        )}
                    </div>
                </div>
            </div>
            )}
        </div>
    </div>
  )
}

export default Tombola