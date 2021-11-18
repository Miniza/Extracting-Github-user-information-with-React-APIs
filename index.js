 const {useState, useEffect} = React;

const App = () => {
  return(
    <div>
  <h4>Search a user Github Repo</h4>
  <SearchRepo />
     </div>
  ) 
} 
const SearchRepo = () => {
  const [searchrepo,  setSearchRepo] =        useState("");
  const [list, setList] = useState([]);
  const handleChange = e => {
    setSearchRepo(e.target.value) 
  } 
  const handleClick = () => {
 axios.get(`https://api.github.com/users/${searchrepo}/repos`).then(response=>
      setList(response.data))
       setSearchRepo("")
  }
  console.log(searchrepo)
  return(
    <>
    <input type="text" value = {searchrepo} onChange={handleChange} />
      <button onClick ={handleClick}>Search</button>
   <ListRepo list = {list} />
    </>
  ) 
}
   const ListRepo = (props) => {
   const { list } = props;
   
   return(
   <ul>{list.map(item=>{return(<li key={item.id} >{item.name}</li>)})}</ul>
 ) 
 }
ReactDOM.render(<App />, document.getElementById("root")) 
root")) 
