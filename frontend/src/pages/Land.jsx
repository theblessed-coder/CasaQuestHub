import React, {useState} from "react";

const Land = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleInputChange = (e) => {
      setSearchQuery(e.target.value);
    };

     const landListings = [
       {
         id: 1,
         title: "",
         location: "",
         price: "",
         description: "",
         imageUrl: "",
       },

       {
         id: 2,
         title: "",
         location: "",
         price: "",
         description: "",
         imageUrl: "",
       },

       {
         id: 3,
         title: "",
         location: "",
         price: "",
         description: "",
         imageUrl: "",
       },

       {
         id: 4,
         title: "",
         location: "",
         price: "",
         description: "",
         imageUrl: "",
       },

       {
         id: 5,
         title: "",
         location: "",
         price: "",
         description: "",
         imageUrl: "",
       },

       {
         id: 6,
         title: "",
         location: "",
         price: "",
         description: "",
         imageUrl: "",
       },

       {
         id: 7,
         title: "",
         location: "",
         price: "",
         description: "",
         imageUrl: "",
       },

       {
         id: 8,
         title: "",
         location: "",
         price: "",
         description: "",
         imageUrl: "",
       },

       {
         id: 9,
         title: "",
         location: "",
         price: "",
         description: "",
         imageUrl: "",
       },

       {
         id: 10,
         title: "",
         location: "",
         price: "",
         description: "",
         imageUrl: "",
       },
     ];
    
  return (
    <div>Land</div>
  )
}

export default Land