import React, { useState } from 'react';
import Modal from './Modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Open Modal
      </button>
      <Modal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
