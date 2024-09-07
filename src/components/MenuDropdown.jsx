import { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const LocationDropdown = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleItemClick = (url) => {
    window.open(url, "_blank");
  };

  const locationKey = Object.keys(data)[0];
  const locations = data[locationKey];

  return (
    <div
      ref={dropdownRef}
      className="relative inline-block text-left text-black mx-auto md:mx-0 font-pops"
    >
      <div
        className="flex justify-between items-center cursor-pointer rounded-md w-[160px] border-2 p-2 border-black"
        onClick={toggleDropdown}
      >
        <span className="mr-2 text-xs md:text-md text-black font-semibold">
          {locationKey}
        </span>
        {isOpen ? (
          <FaChevronUp className="fill-black" />
        ) : (
          <FaChevronDown className="fill-black" />
        )}
      </div>
      {isOpen && (
        <ul className="absolute mt-2 bg-white rounded-md z-10 text-sm min-w-fit w-[160px]">
          {locations.map((location, index) => (
            <li
              key={index}
              className="px-4 py-0.5 hover:bg-gray-100 rounded-md font-medium w-full hover:cursor-pointer"
              onClick={() => handleItemClick(location.url)}
            >
              {location.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocationDropdown;
