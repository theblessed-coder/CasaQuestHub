const NewListing = () => {
  return (
      <>
        <h3 className="text-2xl font-bold mb-4">New Listing</h3>
        <hr className="mb-4"/>
        <div className="w-full mb-12 bg-white md:flex p-2 md:p-4 shadow hover:shadow-xl relative">

          <h4 className="absolute top-0 right-0 py-2 px-4 bg-yellow-500">SALE</h4>
          {/* New Listing left */}
          <div className="w-full md:w-1/2">
            <img className="w-full md:w-11/12" src="./images/new-listing.png" alt="newly built duplex house" />
          </div>
          
          {/* New Listing right */}
          <div className="md:w-1/2 my-4 md:my-8 relative z-0">
            
            <div className="flex items-end justify-between md:justify-normal">
              <h3 className="mr-6 text-2xl">Duplex</h3>
              <h3 className="font-medium text-3xl md:text-4xl text-yellow-500">N35,000,000</h3>
            </div>
            <p className="text-gray-500 mb-8 mb:mb-14">No. 7 Ademola Crescent, Ilupeju, Lagos</p>
            
            <div className="flex">
              <div>
                <p className="text-gray-500">500sqm</p>
                <p className="text-gray-500 my-4 md:my-8">4 Bedrooms</p>
                <p className="text-gray-500">5 Bathrooms</p>
              </div>
              <div className="border border-r-1 mx-10"></div>
              <div>
                <p className="text-gray-500">3 Parking Spaces</p>
                <p className="text-gray-500 my-4 md:my-8">Playground</p>
                <p className="text-gray-500">5 Bathrooms</p>
              </div>
            </div>
          </div>

        </div>
      </>
  );
}

export default NewListing;