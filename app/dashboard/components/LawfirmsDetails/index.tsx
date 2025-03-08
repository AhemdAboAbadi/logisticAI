import {Star, MapPin} from "lucide-react"

interface LawFirmDetailsProps {
  name?: string
  rating?: number
  logoUrl?: string
  description?: string
  address?: string
  mapImageUrl?: string
}

const LawFirmDetails: React.FC<LawFirmDetailsProps> = ({
  name = "Tran & Sorelle",
  rating = 4.5,
  logoUrl = "/t.s.png",
  description = "Eva Icons Is A Pack Of More Than 480 Beautifully Crafted Open Source Icons For Common Actions And Items. Download Our Set On The Desktop To Use Them In Your Digital Products For Web, IOS And Android. Compatible With",
  address = "C/ De Ganduxer, 70, Sarrià-Sant Gervasi, 08021 Barcelona, Spain",
  mapImageUrl = "/map.png",
}) => {
  return (
    <div className="bg-white rounded-2xl p-6 space-y-4 w-1/2">
      {/* Header with Logo and Rating */}
      <div className="flex items-center space-x-4">
        <img
          src={logoUrl}
          alt={`${name} Logo`}
          className="w-[80px] h-[80px] rounded-lg object-cover"
        />
        <div>
          <h2 className="pb-[15px]">{name}</h2>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400" fill="gold" />
            <span className="text-sm bg-gray-100 px-2 py-1 rounded-full">
              {rating} Rating
            </span>
          </div>
        </div>
      </div>

      <hr className="my-5 border-gray-200" />

      {/* Brief Description */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="my-[10px]">Brief Description</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>

      {/* Address */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="my-[10px]">Address</h3>
        <p className="text-sm text-gray-600">{address}</p>
      </div>

      {/* Map Location */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="my-[10px]">Map Location</h3>
        <div className="relative">
          <img
            src={mapImageUrl}
            alt="Map Location"
            className="w-full h-[117px] rounded-lg object-cover"
          />
          <button className="absolute bottom-4 right-4 bg-teal-500 text-white px-4 rounded-full shadow-lg flex items-center p-3">
            <span>View Map</span>
            <MapPin className="w-4 h-4" />
            {/* <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9l6 6-6 6M6 15l6-6 6 6"></path>
            </svg> */}
          </button>
        </div>
      </div>
    </div>
  )
}

export default LawFirmDetails
