import {
  LanguageSelector,
  NotificationBell,
  UserProfile,
  SearchBar,
} from "./_components"

const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-between bg-white py-[30px] pr-[44px]">
      <SearchBar />
      <div className="flex items-center space-x-4 ">
        <LanguageSelector />
        <NotificationBell />
        <UserProfile />
      </div>
    </div>
  )
}

export default Header
