import React from "react";

const Modal = ({ listing, closeModal }) => {
  return (
    <div className="modal fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-content bg-white p-4 max-w-md mx-auto rounded shadow-lg">
        <button
          onClick={closeModal}
          className="modal-close absolute top-0 right-0 m-4"
        >
          &times;
        </button>
        <img
          src={listing.imageUrl}
          alt={listing.title}
          className="w-full h-48 object-cover mb-4"
        />
        <h2 className="text-xl font-bold mb-2">{listing.title}</h2>
        <p className="text-gray-700 mb-2">{listing.location}</p>
        <p className="text-green-600 font-semibold mb-2">{`\u20A6${listing.price}`}</p>
        <p className="text-gray-800">{listing.description}</p>
      </div>
    </div>
  );
};

export default Modal;
