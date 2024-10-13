import Table from "../component/Table";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { expandAll } from "../features/workOrder";
import Other from "../component/Other";

function Overview() {
  const loc = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getBorderColor = (path) => {
    const pathArr = loc.pathname.split("/");
    if (path.includes(pathArr[pathArr.length - 1]))
      return "#000";
    else return "#efefef";
  };

  const handleExpandAll = (val) => {
    dispatch(expandAll({value: val}));
  }

  return (
    <div className="sm:p-[50px] p-[20px]">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-2.5 items-center">
          <svg
            className="rotate-90"
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 10L12 15L17 10"
              stroke="#000000"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h1 className="font-semibold text-lg">Create Workorder</h1>
        </div>
        <div>
          <button className="px-[50px] py-3 bg-[#2be7cb] shadow-lg shadow-[#2be7cb] rounded-md text-white">Save</button>
        </div>
      </div>
      <div className="flex flex-row justify-between mt-[50px]">
        <div className="flex flex-row ">
        <button
          onClick={() => navigate("/")}
          className="w-[200px] border-b-[2px] border-solid py-3"
          style={{
            borderColor: getBorderColor(["overview", ""]),
          }}
        >
          <h1 className="text-center">Overview</h1>
        </button>
        <button
          onClick={() => {
            navigate("/other");
            console.log("Hello World");
          }}
          className="w-[200px] border-b-[2px] border-solid  py-3"
          style={{
            borderColor: getBorderColor(["other"]),
          }}
        >
          <h1 className="text-center">Other</h1>
        </button>
        </div>
        <div className="flex flex-row gap-2.5">
            <button onClick={() => handleExpandAll(true)} className="px-[10px] bg-[#2be7cb] shadow-lg rounded-md text-white">Expand All</button>
            <button onClick={() => handleExpandAll(false)} className="px-[10px] bg-[#2be7cb] shadow-lg rounded-md text-white">Collapse All</button>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Table />} />
        <Route
          path="/other"
          element={<Other/>}
        />
      </Routes>
    </div>
  );
}

export default Overview;
