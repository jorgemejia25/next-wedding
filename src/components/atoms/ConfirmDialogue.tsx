import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

type ConfirmDialogueProps = {
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  isOpen: boolean;
  confirmButtonClass?: string;
  confirmButtonLabel?: string;
  cancelButtonLabel?: string;
};

const ConfirmDialogue: React.FC<ConfirmDialogueProps> = ({
  title,
  message,
  onConfirm,
  onCancel,
  isOpen,
  confirmButtonClass = "bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2",
  confirmButtonLabel = "Confirm",
  cancelButtonLabel = "Cancel",
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const dialogueVariants = {
    hidden: { y: "-50%", opacity: 0 },
    visible: { y: "0%", opacity: 1 },
  };

  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  const handleConfirm = () => {
    onConfirm();
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    onCancel();
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center z-50"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 w-96"
              variants={dialogueVariants}
            >
              <h2 className="text-lg font-bold mb-4">{title}</h2>
              <p className="text-gray-700 mb-4">{message}</p>
              <div className="flex justify-end">
                <button className={confirmButtonClass} onClick={handleConfirm}>
                  {confirmButtonLabel}
                </button>
                <button
                  className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
                  onClick={handleCancel}
                >
                  {cancelButtonLabel}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ConfirmDialogue;
