 const {useState, useEffect} = React;

  const App = () => {
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);
  
  useEffect(()=>{
   fetch('https://api.github.com/users/Miniza/following')
  .then(response => response.json())
  .then(data => setList(data));


  },[])
  
  return(
  <>
      <ul>{list.map(item=>{return(<pre>{JSON.stringify(item)}</pre>)})}</ul>
  </>
  )
                                  
}

ReactDOM.render(<App/>, document.getElementById('root'))
