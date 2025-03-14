import { Menu } from "lucide-react";
import { CATEGORIES } from "@/constants/categories";
import { useProjectStore } from "@/store/useProjectStore";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const { isSidebarCollapsed, toggleSidebar, filters, toggleCategory } =
    useProjectStore();

  return (
    <div
      className={`fixed top-0 left-0 h-screen transition-all duration-300 ease-in ${
        isSidebarCollapsed ? "w-16" : "w-16 md:w-64 md:bg-white"
      }`}
    >
      {!isSidebarCollapsed && <div className="modal" onClick={toggleSidebar} />}
      <div className="relative flex h-full flex-col border-r border-gray-100 bg-white/50 backdrop-blur-sm">
        <button
          onClick={toggleSidebar}
          className="absolute hidden md:block -right-3 top-4 rounded-full bg-white p-1 shadow-sm hover:shadow-md transition-shadow"
        >
          <Menu className="h-4 w-4 text-gray-600" />
        </button>
        <div className="p-4">
          <h2
            className={` font-bold text-xl text-gray-900 ${
              isSidebarCollapsed ? "hidden" : "hidden md:block"
            }`}
          >
            Categorías
          </h2>
        </div>
        <nav className="flex-1 space-y-1 p-1 flex flex-col justify-between">
          <div>
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => toggleCategory(category.id)}
                className={`w-full flex justify-start items-center space-x-3 px-3 py-2 rounded-md transition-opacity duration-300 ease-in ${
                  filters.selectedCategory === category.id
                    ? "bg-gray-50 text-gray-900"
                    : "text-gray-600 hover:bg-gray-50/50"
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                {!isSidebarCollapsed && (
                  <span className="hidden md:block">{category.name}</span>
                )}
              </button>
            ))}
          </div>

          {/* Sección de Inicio alineada con las categorías */}
          <Link to="/" className="mt-auto">
            <div className="flex items-center m-[-8px] py-2 rounded-md transition-colors hover:bg-gray-50/50">
              <img
                className={`h-7 w-7 mb-4 ${
                  isSidebarCollapsed
                    ? "bg-gray-900 border-gray-00 rounded-lg w-[2rem] h-[2rem] pr-[0.65rem] p-[0.50rem] md:ml-[0.8rem] mx-auto"
                    : "mx-auto md:mx-0 md:ml-6"
                }`}
                src={
                  isSidebarCollapsed
                    ? "/icons/white-cropped.svg"
                    : "/icons/back-cropped.svg"
                }
                alt="volver"
              />
              {!isSidebarCollapsed && (
                <p className="text-3xl leading-none font-outfit mb-4 ml-1 font-semibold text-gray-900 hidden md:block">
                  Home
                </p>
              )}
            </div>
          </Link>
        </nav>
      </div>
    </div>
  );
};
