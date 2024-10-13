import TableRow from "./TableRow";
import { data as initialData } from "../constants";
import { useState } from "react";

export default function Table() {
  const [data, setData] = useState(initialData); 

  const selectData = (obj, selected) => {
    obj.selected = selected
    for(let i = 0;i < obj.subPackages.length;i++){
      selectData(obj.subPackages[i], selected);
    }
    return obj;
  }

  const updateData = (id, arr, selected) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === id) {
        arr[i] = selectData(arr[i], selected);
      }
      else {
        updateData(id, arr[i].subPackages, selected); 
      }
    }
  };
  

  const handleSelect = (id, selected) => {
    const tempArr = [...data];
    updateData(id, tempArr, selected);
    setData(tempArr);
  };
  
  
  return (
    <div className="">
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5">
              <table className="min-w-full">
                <thead className="bg-blue-100">
                  <tr>
                    <th scope="col" className="w-[700px] py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      <div className="flex flex-row gap-[20px]">
                        <input className="rounded-md border border-solid border-gray-400 w-[20px] h-[20px]" />
                        <h1>Packages</h1>
                      </div>
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Rate <span className="text-xs italic text-gray-500">(in sqft.)</span></th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Total</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"></th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {data.map((person) => (
                    <TableRow data={person} key={person.id} margin={false} depth={0} onSelect={handleSelect} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
