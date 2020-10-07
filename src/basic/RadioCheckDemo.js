import React, { Component } from 'react';

class RadioCheckDemo extends Component {
    state = {
        gender: 'male',
        like:{
            male: false,
            female: false
        }

    }


    onChangeGender = (e) =>{
        this.setState({
            gender: e.target.value,
        })
    }
    onChangeLike = (e) =>{
        const key = e.target.value;
        this.setState((state)=>({
            like:{
                ...state.like, 
                [key]: !state.like[key]
            }
        }))
    }

    render() {
        const {gender, like} = this.state

        return (
            <div>
            <div>
                Your gender: 
                <input type="radio" value="male" onChange={this.onChangeGender} checked={gender === 'male'}/>
                <label>Male</label>
                <input type="radio" value="female" onChange={this.onChangeGender} checked={gender === 'female'}/>
                <label>Female</label>
            </div>
            <div>
                Your Like: 
                <input type="checkbox" value="male" onChange={this.onChangeLike} checked={like.male}/>
                <label>Male</label>
                <input type="checkbox" value="female" onChange={this.onChangeLike} checked={like.female}/>
                <label>Female</label>
            </div>
            <pre>{JSON.stringify(this.state, null, 2)}</pre>
            </div>
        );
    }
}

export default RadioCheckDemo;