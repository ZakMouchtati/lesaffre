import { useState } from 'react';
import Modal from './Modal'
import axios from 'axios';
import tombola from "../assets/CREMAI TOMBO.jpg";
const Form = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [success,setSuccess] = useState(false)

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
        setSuccess(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const leads  = {
            fullName:e.target.fullName.value,
            phone:e.target.phone.value,
            email:e.target.email.value,
            jobTitle:e.target.jobTitle.value,
            company:e.target.company.value,
            product:e.target.product.value
        }

        axios.post(`${import.meta.env.VITE_BACK_END_URL}/leads`,{...leads})
        .then(res => {
            console.log(res)
            setSuccess(true)
        })
        .catch(err => console.log(err))

    }
  return (
    <div>
        <button onClick={openModal}  className="bg-main text-blue rounded-2xl py-3 font-semibold px-12 text-xl uppercase">
            Remplir le <br />Fourmulaire Visiteur
        </button>
        <Modal isOpen={isOpen} onClose={closeModal} className={success ? "form-success" : ""}>

            {success  ? ( 
                <div className='hizdhzd'>
                    <img src={tombola} alt="" />
                </div>
            ) :
            (
                <form onSubmit={handleSubmit} className='form'>
                    <div className="my-3">
                        <label htmlFor="fullName" className="block text-sm font-medium leading-6 text-gray-900">
                            الاسم الكامل
                        </label>
                        <div className="relative mt-2 rounded-md shadow-sm">
                            <input
                            type="text"
                            name="fullName"
                            id="fullName"
                            className="block w-full rounded-md border-0 py-1.5 pr-4 pl-20 text-gray-900 ring-1 ring-inset ring-gray-300"
                            placeholder="الاسم الكامل"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <div className="my-3">
                            <label htmlFor="company" className="block text-sm font-medium leading-6 text-gray-900">
                            اسم الشركة
                            </label>
                            <div className="relative mt-2 rounded-md shadow-sm">
                                <input
                                type="text"
                                name="company"
                                id="company"
                                className="block w-full rounded-md border-0 py-1.5 pr-4 pl-20 text-gray-900 ring-1 ring-inset ring-gray-300"
                                placeholder="اسم الشركة"
                                />
                            </div>
                        </div>
                        <div className="my-3">
                            <label htmlFor="jobTitle" className="block text-sm font-medium leading-6 text-gray-900">
                            وظيفة
                            </label>
                            <div className="relative mt-2 rounded-md shadow-sm">
                                <input
                                type="text"
                                name="jobTitle"
                                id="jobTitle"
                                className="block w-full rounded-md border-0 py-1.5 pr-4 pl-20 text-gray-900 ring-1 ring-inset ring-gray-300"
                                placeholder="وظيفة"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                        <div className="my-3">
                            <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                            هاتف    
                            </label>
                            <div className="relative mt-2 rounded-md shadow-sm">
                                <input
                                type="text"
                                name="phone"
                                id="phone"
                                className="block w-full rounded-md border-0 py-1.5 pr-4 pl-20 text-gray-900 ring-1 ring-inset ring-gray-300"
                                placeholder="هاتف"
                                />
                            </div>
                        </div>

                        <div className="my-3">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            بريد إلكتروني
                            </label>
                            <div className="relative mt-2 rounded-md shadow-sm">
                                <input
                                type="text"
                                name="email"
                                id="email"
                                className="block w-full rounded-md border-0 py-1.5 pr-4 pl-20 text-gray-900 ring-1 ring-inset ring-gray-300"
                                placeholder="بريد إلكتروني"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="my-3">
                        <label htmlFor="product" className="block text-sm font-medium leading-6 text-gray-900">
                        تم استخدام منتج Lesaffre
                        </label>
                        <div className="relative mt-2 rounded-md shadow-sm">
                            <input
                            type="text"
                            name="product"
                            id="product"
                            className="block w-full rounded-md border-0 py-1.5 pr-4 pl-20 text-gray-900 ring-1 ring-inset ring-gray-300"
                            placeholder="تم استخدام منتج Lesaffre"
                            />
                        </div>
                    </div>
                    <button className="bg-blue text-white w-full my-3 rounded-xl py-1 font-semibold px-6 text-xl uppercase">
                        حفظ المعلومات   
                    </button>
                </form>
            ) }
            
        </Modal>
    </div>
  )
}

export default Form