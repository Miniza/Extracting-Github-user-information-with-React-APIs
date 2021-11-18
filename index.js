 const {useState, useEffect} = React;

  const App = () => {
  const [resources, setResources] = useState('repos');
  const [value, setValue] = useState('Miniza');
  const [list, setList] = useState([]);
 
  useEffect(()=>{
  fetch(`https://api.github.com/users/${value}/${resources}`)
  .then(response => response.json())
  .then(data => setList(data));


  },[resources])
    
  if(list == "") return `0 ${resources}`;
  
  return(
  <>
      <input type="text" value={value}  onChange = {e=>setValue(e.target.value)} />
      <hr></hr> 
      <button onClick = {() => setResources("following")}>Following</button>
      <button onClick = {() => setResources("followers")}>Followers</button>
      <button onClick = {() => setResources("repos")}>Repos</button> 
      <hr></hr>
      <h4>{resources}</h4>
      <ul>{list.map(item=>{return(<pre>{JSON.stringify(item)}</pre>)})}</ul>
 </>
    
  )
                                  
 }

ReactDOM.render(<App />, document.getElementById('root'))
