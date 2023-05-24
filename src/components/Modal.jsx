
function Modal({ isOpen, onClose,children,className }) {
  return (
    <div className={`${isOpen ? '' : 'hidden'}  fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex flex-col justify-center`}>
      <div className="modal-container mx-auto p-2 bg-white rounded-lg shadow-lg z-50 w-3/4 relative">
        <div className={`flex justify-end cursor-pointer mb-2 mt-3 ${className} closeModal`} onClick={onClose} >
            <span className="material-symbols-outlined">close</span>
        </div>
        <div className="mb-4">
            {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
