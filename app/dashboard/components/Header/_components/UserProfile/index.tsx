interface UserProfileProps {
  name?: string
  role?: string
  imageUrl?: string
}

const UserProfile: React.FC<UserProfileProps> = ({
  name = "Majd Malki",
  role = "Product Manager",
  imageUrl = "/person.png",
}) => {
  return (
    <div className="flex items-center bg-gray-100 rounded-full p-2 cursor-pointer">
      <img
        src={imageUrl}
        alt={`${name} profile`}
        className="w-8 h-8 rounded-full mr-2"
      />
      <div>
        <span className="text-gray-700 font-semibold">{name}</span>
        <p className="text-xs text-gray-500">{role}</p>
      </div>
    </div>
  )
}

export default UserProfile
