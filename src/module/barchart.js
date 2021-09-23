import * as React from "react";
import * as d3 from "d3-scale";

// type DataItem = {
//   name: string;
//   value: number;
//   color: string;
// };

// type ChartProps = {
//   data: DataItem[];
// };

// type BarProps = {
//   width: number;
//   label: string;
//   color: string;
// };

const Bar = ({ width, label, color }) => (
  <div
    style={ {
      display: "flex",
      maxWidth: "300px"
    } }
  >
    <div style={ { width: "50px", textAlign: "left" } }>{ label }</div>
    <div
      style={ { width: `${width}px`, height: "12px", backgroundColor: color } }
    />
  </div>
);

function BarChart(props) {
  
  return (
    <div
      style={ {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      } }
    >
      <h4>Run民立場投票</h4>
      <div>
        {
          Array.isArray(props.data) ? props.data.map(i => (
            <Bar
              width={ i.value }
              label={ i.name }
              key={ i.name }
              color={ String(i.color) }
            />
          )) : <></>
        }
      </div>
    </div>
  );
};

export default BarChart;
