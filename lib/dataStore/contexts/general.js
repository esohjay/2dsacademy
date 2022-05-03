// import React, { useState, useContext, createContext } from "react";

// const GeneralContext = createContext();

// const GeneralProvider = ({ children }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };
//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <GeneralContext.Provider
//       value={{
//         isModalOpen,
//         openModal,
//         closeModal,
//       }}
//     >
//       {children}
//     </GeneralContext.Provider>
//   );
// };

// export const useGeneralContext = () => {
//   return useContext(GeneralContext);
// };

// export { GeneralContext, GeneralProvider };
