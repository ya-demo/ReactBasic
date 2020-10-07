import React, { Component } from 'react';

class UploadDemo extends Component {

    state ={
        img:'',
        file: null,
    };

    onChange = (e) =>{
        const file = e.target.files.item(0);
        const fileReader = new FileReader();
        fileReader.addEventListener('load', this.fileLoad);
        fileReader.readAsDataURL(file);
        this.setState({
            file
        })
    }
    submit = (e) => {
        //json base64
        //axios.post('/img', {img: this.state.img});
        
        //multipart
        const form = new FormData();
        form.append(this.state.file);
        axios.post('/img', {form});
    }    
    fileLoad = e =>{
        this.setState({
            img: e.target.result //base64格式
        })
    }
    render() {
        return (
            <div>
                <input type="file" onChange={this.onChange}/>
                <img width="100%" src={this.state.img}/>
                <button onClick={this.submit}>Submit</button>
            </div>
        );
    }
}

export default UploadDemo;