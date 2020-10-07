import React, { Component } from 'react';

const relations = [
    {label:'父', value:1} ,
    {label:'母', value:2} ,
    {label:'子', value:3} ,
    {label:'女', value:4}
]

class DropdownDemo extends Component {
    state = {
        rel: `${relations[0].value}`
    }
    onChange = (e) =>{
        this.setState({
            rel: e.target.value,
        })
    }
    render() {
        const {rel} = this.state;
        return (
            <div>
                <select value={rel} onChange={this.onChange}>
                    {relations.map((relation)=>(
                        <option value={relation.value} key={relation.value}>{relation.label}</option>
                    ))}
                </select>
                    <h1>
                        {
                            // console.log(relations.find((r) => `${r.value}` === rel).label)
                            relations.find((r) => `${r.value}` === rel).label
                        }
                    </h1>
            </div>
        );
    }
}

export default DropdownDemo;