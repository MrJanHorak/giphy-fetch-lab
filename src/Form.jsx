import React, {useState} from 'react';


function Form(props) {
  const [gifSearch, setGifSearch] = useState('')

  const handleSubmit = e => {
    console.log('handleSubmit clicked');
    e.preventDefault();
    props.handleSubmit(gifSearch)
    setGifSearch('')
  };

  const handleChange = e => {
    console.log('handleChange clicked');
    const search =  e.target.value
    setGifSearch(search)
  };
  const refreshPage = ()=>{
    window.location.reload();
  }
    return (
      <>
        <form onSubmit={handleSubmit}>
          
          <input
            id="gifSearch"
            type="text"
            value={gifSearch}
            placeholder='type of giphy'
            onChange={handleChange}
          />
          <input type="submit" value="Go Fetch" />
          < button onClick={refreshPage}> Refresh Page</button>
        </form>
      </>
    );
}

export default Form;