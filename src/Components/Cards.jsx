import { Link } from "react-router-dom"
import { FaArrowDown, FaArrowUp } from 'react-icons/fa6'
import { useState } from "react"

const Cards = ({ cards }) => {

    const [display, setDisplay] = useState(false)

    function displayFull(){
        setDisplay(prev => !prev)
    }

    return (
        <div>
            <section className="py-4">
            <div className="container-xl lg:container m-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md transform hover:scale-101 transition duration-300 ease-in-out">
                        <div className="flex row justify-between">
                            <h2 className="text-2xl font-bold text-teal-800">Item Seekers</h2>
                            {display ? 
                            <>
                            <button>
                                <FaArrowUp 
                                size={18} 
                                onClick={() => displayFull()}
                                className="mt-1"/>
                            </button>
                            </> 
                            : 
                            <>
                            <button>
                                <FaArrowDown 
                                size={18} 
                                onClick={() => displayFull()}
                                className="mt-1"/>
                            </button>
                            </>
                            }
                        </div>
                        {display ? 
                            <>
                                <div>
                                    <p className="mt-2 mb-4">
                                        Discover what is waiting for you today.
                                    </p>
                                    <Link
                                    to="/items"
                                    className="inline-block bg-violet-700 text-white rounded-lg px-4 py-2 hover:bg-indigo-400"
                                    >
                                    View Items
                                    </Link>
                                </div>
                            </>
                        : ""}
                    </div>
                    <div className="bg-indigo-100 p-6 rounded-lg shadow-md transform hover:scale-101 transition duration-300 ease-in-out">
                        <div className="flex row justify-between">
                            <h2 className="text-2xl font-bold text-teal-800">Sellers</h2>
                            {display ? 
                            <>
                            <button>
                                <FaArrowUp 
                                size={18} 
                                onClick={() => displayFull()}
                                className="mt-1"/>
                            </button>
                            </> 
                            : 
                            <>
                            <button>
                                <FaArrowDown 
                                size={18} 
                                onClick={() => displayFull()}
                                className="mt-1"/>
                            </button>
                            </>
                            }
                        </div>                    
                        {display ? 
                        <>
                            <p className="mt-2 mb-4">
                                Turn ypu products into profit today.
                            </p>
                            <Link to="/add-item"
                            className="inline-block bg-violet-700 text-white rounded-lg px-4 py-2 hover:bg-indigo-400"
                            >
                            Add Item
                            </Link>
                        </> : ""}
                    </div>
                </div>
            </div>
            </section>
        </div>
    )
}

export default Cards