import React, {useState} from "react";

const Land = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleInputChange = (e) => {
      setSearchQuery(e.target.value);
    };

  return (
    <div>Land</div>
  )
}

export default Land