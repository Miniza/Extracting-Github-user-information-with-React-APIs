 const {useState} = React;

const App = () => {
  return(
     <div>
  <SearchRepo />
     </div>
  )
}

  const SearchRepo = () => {
  const [searchrepo, setSearchrepo] = useState("");
  const [list, setList] = useState([]);
  const client = axios.create({baseURL:`https://api.github.com/users/${searchrepo}/repos`});
 
  const handleChange = e => {
    setSearchrepo(e.target.value);
  }
  const handleClick = () => {
      async function getRepo(){
      const response = await client.get("");
      setList(response.data);
      setSearchrepo("");
    }
    getRepo();
  }
  return(
    <>
  <div>
    <input type="text" value = {searchrepo} onChange={handleChange} />
     <button onClick={handleClick}>Search</button>
  </div>
      <ListRepo list = {list} />
    </>
  )
}
  
  const ListRepo = ({list}) => {
    return(
    <ul>{list.map(item=>{return(<li key={item.id}>{item.name}</li>)
        })}</ul>
    )
  }
  
  ReactDOM.render(<App />, document.getElementById("root"))
