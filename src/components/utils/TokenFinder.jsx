import React, {Component,Fragment} from 'react'
import data from "../../data/props.json";
import developerTokens from "../../data/developers.json";
import Select from 'react-select';

export class TokenFinderBox extends Component{
    constructor(props) { // Init props and state
        super(props);
        this.state = { };
        this.chooseProps = this.chooseProps.bind(this);

        /* Title => Data */
        this.properties = {
            "Operative system": data[0].os,
            "Text editor": data[0].textEditor,
            "Clothing": data[0].clothing,
            "Programming language": data[0].language,
            "Industry": data[0].industry,
            "Location": data[0].location,
            "Mind": data[0].mind
        }
    }

    chooseProps(field, options){
        /* Title => Property name */    
        let propertiesSlugs = {
            "Operative system": "os",
            "Text editor": "textEditor",
            "Clothing": "clothing",
            "Programming language": "language",
            "Industry": "industry",
            "Location": "location",
            "Mind": "mind"
        }

        let optionsValues = []
        options.forEach((value) => {
            optionsValues.push(value.value)
        })

        this.setState({ 
            [propertiesSlugs[field]]: optionsValues
        })
    }

    render(){
        return (
            <div class="container">
                <div class="row">
                    <div class="col-lg-3">
                        <div class="card mb-4">
                            <div class="card-body">
                                <h2>Filters</h2>
                                {Object.entries(this.properties).map(([value, array]) => {
                                    return (
                                        <div key={value} className="mt-4">
                                            <b>{value}</b>
                                            <Select
                                                onChange={(result)=>this.chooseProps(value, result)}
                                                closeMenuOnSelect={false}
                                                isMulti
                                                options={array}
                                                name={value}
                                            />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-9">
                        <TokenFindersRender filters={this.state} />
                    </div>
                </div>
            </div>
        )
    }
}

export const multiFilter = (arr, filters) => {
    const filterKeys = Object.keys(filters);
    return arr.filter(eachObj => {
      return filterKeys.every(eachKey => {
        if (!filters[eachKey].length) {
          return true; // passing an empty filter means that filter is ignored.
        }
        return filters[eachKey].includes(eachObj[eachKey]);
      });
    });
  };

function TokenFindersRender({ filters }){
    
    const filtered = multiFilter(developerTokens, filters);

    if(filtered.length === 8000){
        return (   
            <div class="alert alert-danger" role="alert">
                Select the filters to see the tokens ID.
            </div>
        )        
    }
    if(filters.length===0 || filtered.length === 0){
        return (   
            <div class="alert alert-danger" role="alert">
                Not lucky this time! There are not results for the filters you set.
            </div>
        )
    }
    return (

            <Fragment>
                <div class="alert alert-primary" role="alert">
                    There are <b>{filtered.length}</b> tokens matching your filters.
                </div>
                <div class="row">
                    {filtered.map((item) => {
                        return (
                            <div class="col-lg-3" key={item.id}><div class="token" onClick={(e) => {
                                e.preventDefault();
                                window.open('https://developerdao.com/?id='+item.id, '_blank').focus();
                            }}>#{item.id}</div></div>
                        )
                    })}
                </div>
            </Fragment>
    )
}