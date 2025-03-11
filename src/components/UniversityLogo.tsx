// import React from "react";

// const UniversityLogo: React.FC = () => {
//   return (
//     <div className="flex flex-col items-center">
//       <div className="bg-white rounded-full p-2 w-20 h-20 flex items-center justify-center">
//         <img
//           src="gandhinagaruni.png"
//           alt="University Logo"
//           className="w-full h-full object-contain"
//         />
//       </div>
//       <div className="text-white text-xs font-semibold mt-1">
//         <p></p>
//         <p className="text-[10px]"></p>
//       </div>
//     </div>
//   );
// };

// export default UniversityLogo;

// import React from "react";

// const UniversityLogo: React.FC = () => {
//   return (
//     <div className="flex flex-col items-center">
//       <div className="p-2 w-20 h-20 flex items-center justify-center">
//         <img
//           src="gandhinagaruni.png"
//           alt="University Logo"
//           className="w-full h-full object-contain"
//         />
//       </div>
//     </div>
//   );
// };

// export default UniversityLogo;

import React from "react";

const UniversityLogo: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="p-2 w-36 h-36 flex items-center justify-right ml-4">
        {" "}
        {/* Adjust size smoothly */}
        <img
          src="gandhinagaruni.png"
          alt="University Logo"
          className="w-36 h-36 object-contain mix-blend-screen backdrop-blur-md"
        />
      </div>
    </div>
  );
};

export default UniversityLogo;
