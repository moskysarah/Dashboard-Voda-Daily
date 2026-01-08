interface HeaderProps {
  onToggleSidebar: () => void;
}

export default function Header({ onToggleSidebar }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#FFFF] dark:bg-gray-900 border-b  border-[#E63948] p-4 z-50">
      <div className="flex items-center justify-between">
        <button
          onClick={onToggleSidebar}
          className="md:hidden p-2 text-white hover:bg-[#2C2F33] rounded"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="flex items-center ">

                 <div className="w-10 h-10 rounded-full object-cover bg-red-600">
                      <span className="text-white flex items-center justify-center py-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </span>
                 </div>
              
               <h3 className="text-gray-600 font-medium ml-2">Sarah skipper</h3>
        </div>
      </div>
    </header>
  )
}
