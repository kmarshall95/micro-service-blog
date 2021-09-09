import React ,{useState} from 'react';
import axios from 'axios';

//create and export a functional component in React
const App = () => {
    const [title, setTitle] = useState('');
    
    //handles form event chnages.
    const onSubmit = async (event) => {
        //prevent default form submit action
        event.preventDefault();

        //make request to post microservice
        await axios.post('http://localhost:4000/posts', {
            title
        });

        //resets input value
        setTitle('');
    };
    
    return (
        <div>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>Title</label>
                {/* two way property binding */}
                <input value={title} onChange={e => setTitle(e.target.value)} className="form-control"/>
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    </div>
    );
};

export default App;