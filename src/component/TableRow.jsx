import PropTypes from "prop-types";
import { useState } from "react";

const TableRow = ({ data, margin, depth, onSelect }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(() => !open);
  };

  const getGap = (index) => {
    if (index === 0) return 70;
    else return 70 + 40 * index;
  };

  const handleInputChange = () => {
    console.log(!data.selected);
    onSelect(data.id, !data.selected);
  };

  return (
    <>
      <tr>
        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
          <div
            style={{
              marginLeft: `${margin}px`,
              position: "relative",
            }}
            className="flex flex-row gap-[20px]"
          >
            {margin > 0 && (
              <>
                <div
                  style={{
                    width: "30px",
                    height: "1px",
                    backgroundColor: "#ccc",
                    position: "absolute",
                    left: "-30px",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                />
              </>
            )}
            {margin > 0 && (
              <>
                <div
                  style={{
                    width: "1px",
                    height: "40px",
                    backgroundColor: "#ccc",
                    position: "absolute",
                    left: "-30px",
                    bottom: "10px",
                  }}
                />
              </>
            )}

            {margin > 0 && (
              <>
                {Array(depth)
                  .fill(0)
                  .map((item, index) => {
                    return (
                      <div
                        key={index}
                        style={{
                          width: "1px",
                          height: "70px",
                          backgroundColor: "#ccc",
                          position: "absolute",
                          left: `-${getGap(index)}px`,
                          bottom: "-5px",
                        }}
                      ></div>
                    );
                  })}
              </>
            )}
            <input
              type="checkbox"
              checked={data.selected}
              onChange={handleInputChange}
              className="rounded-[15px] shadow border border-solid border-gray-400 w-[20px] h-[20px]"
            />
            <h1>{data.packageName}</h1>
          </div>
        </td>
        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {data.rate}
        </td>
        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {data.total}
        </td>
        <td
         
          className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
        >
          {!open ? 
          (data.subPackages.length > 0 && <button onClick={handleOpen}>
            {depth === 0 ? <svg
            fill="#5ffae3"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 0 45.402 45.402"
          >
            <g>
              <path
                d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141
		c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27
		c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435
		c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"
              />
            </g>
          </svg> : 
           <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M7 10L12 15L17 10" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
           </svg>}
          </button>)
          :
          (data.subPackages.length > 0 && <button onClick={handleOpen}>
          {depth === 0 ? <svg
            fill="#5ffae3"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 0 459.313 459.314"
          >
            <g>
              <path
                d="M459.313,229.648c0,22.201-17.992,40.199-40.205,40.199H40.181c-11.094,0-21.14-4.498-28.416-11.774
		C4.495,250.808,0,240.76,0,229.66c-0.006-22.204,17.992-40.199,40.202-40.193h378.936
		C441.333,189.472,459.308,207.456,459.313,229.648z"
              />
            </g>
          </svg> : 
          <svg className="rotate-180" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 10L12 15L17 10" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          }
          </button>)}
        </td>
      </tr>
      {open &&
        data.subPackages.map((item) => {
          return (
            <TableRow
              onSelect={onSelect}
              data={item}
              key={item.id}
              margin={margin + 40}
              depth={depth + 1}
            />
          );
        })}
    </>
  );
};

TableRow.propTypes = {
  data: PropTypes.object.isRequired,
  margin: PropTypes.number,
  isLastChild: PropTypes.bool,
  depth: PropTypes.number,
  onSelect: PropTypes.func,
};

TableRow.defaultProps = {
  margin: 0,
  isLastChild: false,
};

export default TableRow;
