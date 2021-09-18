import React,{Component} from 'react'
import {PropChart} from "../utils/DeveloperDAOChart";
import data from "../../data/props.json";
import Logo from "../icons/Logo";
import {Link} from "react-router-dom";

export function Nav() {
    return (
        <nav class="container mb-4 mt-4">
            <div class="row">
                <div class="col-lg-6 text-left" id="Logo">
                    <Logo /><Link to="/"><b>Developer DAO NFT Stats</b></Link>
                </div>
                <div class="col-lg-6 d-flex justify-content-end align-items-center">
                    <Link to="/" className="mr-4 d-inline-block">Stats</Link>
                    <Link to="/token-finder" className="mr-4 d-inline-block">Token Finder</Link>
                </div>
            </div>
        </nav>
    )
}

export class Content extends Component{
    constructor(props) { // Init props and state
        super(props);

        
        this.properties = {
            "Operative system": data[0].os,
            "Text editor": data[0].textEditor,
            "Clothing": data[0].clothing,
            "Programming language": data[0].language,
            "Industry": data[0].industry,
            "Location": data[0].location,
            "Mind": data[0].mind
        }

        this.state = {title: "Operative system", data: data[0].os}
        this.switch = this.switch.bind(this);
    }

    switch(event){
        this.setState({
            title: event.target.value, 
            data: this.properties[event.target.value]
        })
    }

    render(){
        return (
            <div class="container">
                <div class="col-lg-12 text-left">
                    <select onChange={this.switch} className="form-control mb-4">
                    {Object.entries(this.properties).map(([value, array]) => {
                        return (
                            <option value={value}>{value}</option>
                        )
                    })}
                    </select>
                </div>
                <div class="row">
                    <PropChart title={this.state.title} data={this.state.data} />
                </div>
            </div>
        )
    }
}

export function Footer() {
    return (
        <div class="container mt-5 mb-4 text-left text-muted">
            <a href="https://github.com/jsgm/developer-dao-nft-react-stats">Github</a> | <a href="https://developersdao.com">Developers DAO</a> | Data from <a href="https://developerdao.vercel.app/">developerdao.vercel.app</a>
        </div>
    )
}

