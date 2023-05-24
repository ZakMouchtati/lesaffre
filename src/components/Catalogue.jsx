import { useState } from 'react';
import Modal from './Modal'
import { LazyVideo } from 'react-lazy-media'
import videoCatalogue from "../assets/new new - HD 720p.webm"

const Catalogue = () => {
    const [isOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
  return (
    <div>
        <button onClick={openModal}  className="bg-main text-blue rounded-2xl py-3 font-semibold px-20 text-xl uppercase">
            Découvrir <br /> Notre catalogue 
        </button>
        <Modal isOpen={isOpen} onClose={closeModal}>
            <div className='hizdhzd'>
                <LazyVideo 
                    src={videoCatalogue} 
                    preload='true'
                    autoplay='true'
                    controls
                />
            </div>
        </Modal>
    </div>
  )
}

export default Catalogue