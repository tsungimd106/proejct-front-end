import React, { useState } from 'react';
import "../css/module/accordion.css"

function CAccordion(data){

    let indexPlus;
    // let data = [{ "title": "職位", "description": "我是貓咪" }]
    const [active, setActive] = useState(0);
    console.log(data)
   
    const eventHandler = (e, index) => {
        console.log("enter here")
        console.log(index)
        e.preventDefault();
        setActive(index);
    }

    const indexCount = (index) => {
        indexPlus = index + 1;
        return indexPlus;
    }

    return (
        <div>
            <form>
                { data.map((tab, index) => (
                    <div key={ index }>
                        <h3>
                            <button
                                onClick={ (e) => eventHandler(e, index) }
                                className={ active === index ? 'active' : 'inactive' }
                                aria-expanded={ active === index ? 'true' : 'false' }
                                aria-controls={ 'sect-' + indexCount(index) }
                                aria-disabled={ active === index ? 'true' : 'false' }
                                tabIndex={ indexCount(index) }
                            >
                                <span className="title-wrapper">{ tab.title }
                                    <span className={ active === index ? 'plus' : 'minus' }></span>
                                </span>
                            </button>
                        </h3>
                        <div id={ 'sect-' + indexCount(index) } className={ active === index ? 'panel-open' : 'panel-close' }>
                            { tab.description }
                        </div>
                    </div>
                ))
                }
            </form>
        </div>
    );
}

class Test extends React.Component {
    render() {
        let indexPlus;
        let data = [{ "title": "職位", "description": "我是貓咪" }]
        let [active, setActive] = useState(1);

        let eventHandler = (e, index) => {
            e.preventDefault();
            setActive(index);
        }

        let indexCount = (index) => {
            indexPlus = index + 1;
            return indexPlus;
        }

        return (
            <div>
                <form>
                    { data.map((tab, index) => (
                        <div key={ index }>
                            <h3>
                                <button
                                    onClick={ (e) => eventHandler(e, index) }
                                    className={ active === index ? 'active' : 'inactive' }
                                    aria-expanded={ active === index ? 'true' : 'false' }
                                    aria-controls={ 'sect-' + indexCount(index) }
                                    aria-disabled={ active === index ? 'true' : 'false' }
                                    tabIndex={ indexCount(index) }
                                >
                                    <span className="title-wrapper">{ tab.title }
                                        <span className={ active === index ? 'plus' : 'minus' }></span>
                                    </span>
                                </button>
                            </h3>
                            <div id={ 'sect-' + indexCount(index) } className={ active === index ? 'panel-open' : 'panel-close' }>
                                { tab.description }
                            </div>
                        </div>
                    ))
                    }
                </form>
            </div>
        );
    }
}

export { CAccordion, Test };