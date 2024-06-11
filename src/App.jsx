import { useState } from "react";
import demos from "./data/demos";


export default function App() {
  const [selectedDemo, setSelectedDemo] = useState(null);

  const selectDemo = async (file) => {
    const Demo = await importDemo(file);
    const DemoComponent ;
  };

  return (
    <div>
      <div>
        <h1>React Lazy load explained</h1>

        <div>
          {demos.map((demo)=>{
              <button
              key={demo.name}
               onClick={() => selectDemo(demo.file)}>
                {demo.name}
                </button>

            })}
        </div>

        <div>
         {selectedDemo}
        </div>
      </div>
    </div>
  );
}
