// import React from "react";
// import Card from "./card";

// const Grid = ({ items }) => {
//   return (
//     <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//       {Array.from({ length: items }).map((_, i) => (
//         <Card key={i}>
//           <div className="p-4">Item {i + 1}</div>
//         </Card>
//       ))}
//     </div>
//   );
// };

// export default Grid;

import React from "react";
import Card from "./card";
import data from "../../data.json"; // Adjust the path if needed

function Grid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {data.map((item) => (
        <Card key={item.id}>
          <div className="flex flex-col items-center">
            <img
              src={item.image}
              alt={item.title}
              className="rounded-lg mb-2 w-full h-40 object-cover"
            />
            <p className="text-center">{item.title}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default Grid;
