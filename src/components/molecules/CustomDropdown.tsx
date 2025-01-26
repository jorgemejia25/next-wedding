import React, { useState } from "react";
import { motion, useAnimation, useCycle } from "framer-motion";

interface Option {
  value: string;
  label: string;
}

interface Props {
  options: Option[];
  defaultOption?: Option | null;
  handleChange?: (option: Option | null) => void;
}

const CustomDropdown: React.FC<Props> = ({
  options,
  defaultOption = null,
  handleChange,
}) => {
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const [isOpen, setIsOpen] = useState(false);

  const controls = useAnimation();
  const [x, cycleX] = useCycle("-100%", "0%");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);

    controls.start(isOpen ? "closed" : "open");
    cycleX();
  };

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
    if (handleChange) {
      handleChange(option);
    }
    setIsOpen(false);
  };

  return (
    <div className="custom-dropdown relative">
      <button
        onClick={toggleDropdown}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        {selectedOption ? selectedOption.label : "Select an option"}
      </button>
      <motion.ul
        className="absolute z-50 mt-1 w-full bg-white rounded-md shadow-lg max-h-56 overflow-y-auto"
        tabIndex={-1}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
        animate={controls}
        variants={{
          open: { opacity: 1, y: "0%" },
          closed: { opacity: 0, y: x },
        }}
        transition={{ duration: 0.2 }}
      >
        {isOpen &&
          options.map((option) => (
            <motion.li
              key={option.value}
              className="text-gray-900 cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-gray-50"
              onClick={() => handleSelect(option)}
              whileHover={{ backgroundColor: "#f5f5f5" }}
            >
              <span className="block truncate">{option.label}</span>
              {selectedOption?.value === option.value && (
                <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.293-9.707a1 1 0 00-1.414-1.414L10 10.586l-1.879-1.88a1 1 0 00-1.414 1.414l2.586 2.586a1 1 0 001.414 0l2.586-2.586a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              )}
            </motion.li>
          ))}
      </motion.ul>
    </div>
  );
};

export default CustomDropdown;
