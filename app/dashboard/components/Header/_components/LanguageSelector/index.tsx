const LanguageSelector: React.FC = () => {
  return (
    <div className="flex items-center bg-gray-100 rounded-full p-2 cursor-pointer">
      <img
        src="/flag.png"
        alt="US Flag"
        className="w-5 h-5 rounded-full mr-2"
      />
      <span className="text-gray-600">ENG</span>
      <span className="ml-1 text-gray-500" aria-label="Language Selector">
        ▼
      </span>
    </div>
  )
}

export default LanguageSelector
