import React from 'react';
import "../../css/main.css"

export default class MultiColorProgressBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const parent = this.props;
        const color = ["#eb4d4b", '#22a6b3', "#6ab04c"]

        let values = parent.readings && parent.readings.length && parent.readings.map(function (item, i) {
            if (item > 0) {
                return (
                    <div className="value" style={{ 'color': color[i], 'width': item + '%' }} key={i}>
                        <span>{item}%</span>
                    </div>
                )
            }
        }, this);

        let calibrations = parent.readings && parent.readings.length && parent.readings.map(function (item, i) {
            if (item > 0) {
                return (
                    <div className="graduation" style={{ 'color': color[i], 'width': item + '%' }} key={i}>
                        <span>|</span>
                    </div>
                )
            }
        }, this);

        let bars = parent.readings && parent.readings.length && parent.readings.map(function (item, i) {
            if (item > 0) {
                return (
                    <div className="bar" style={{ 'backgroundColor': color[i], 'width': item + '%' }} key={i} />
                )
            }
        }, this);

        let legends = parent.readings && parent.readings.length && parent.readings.map(function (item, i) {
            if (item > 0) {
                return (
                    <div className="legend" key={i} />
                )
            }
        }, this);

        return (
            <div className="multicolor-bar">
                <div className="values">
                    {values == '' ? '' : values}
                </div>
                <div className="scale">
                    {calibrations == '' ? '' : calibrations}
                </div>
                <div className="bars">
                    {bars == '' ? '' : bars}
                </div>
                <div className="legends">
                    {legends == '' ? '' : legends}
                </div>
            </div>
        );
    }
}