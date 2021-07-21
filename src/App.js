import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import ContactCard from './Component/ContactCard/contactCard';
import Header from './Component/Header/header';
import './App.css'

function App() {
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(8);
  const [list, setList] = useState("sites")
  const [pageCount, setPageCount] = useState(0)

  useEffect(()=>{
    getData()
  },[list])

  const getData = async() => {
      const res = await axios.get(`https://tracktik-challenge.staffr.com/${list}`)
      const data = res.data;
                const slice = data.slice(offset, offset + perPage)
                // const postData = slice.map(pd => <div key={pd.id}>
                //     <p>{pd.title}</p>
                //     <img src={pd.thumbnailUrl} alt=""/>
                // </div>)
                setData(slice)
                setPageCount(Math.ceil(data.length / perPage))
  }
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1)
};
const handalChange = (e) =>{
  console.log(e)
  setList(e)
}

 useEffect(() => {
   getData()
 }, [offset])

  return (
    <div className="App">
        <Header/>
        <div>
  <div className="dropdown">
    <select name="one" className="dropdown-select" value = {list} onChange={(e) =>handalChange(e.target.value)}>
      <option value="">Select…</option>
      <option value="sites">sites</option>
      <option value="clients">clients</option>
      <option value="version">version</option>
      <option value="me">me</option>

    </select>
  </div>
  </div>
    <input type="text" placeholder="Search.." name="search2" className ="inputstyle"></input>
  

    {console.log(data)}
    {(data || []).map((listItem) => (
       
       <div className='card' key={listItem.id}>
      <ContactCard
        image={listItem.images[0]}
              contactTitle={listItem.title}
              contactAddress={listItem.address.city}
              shortDesc={listItem.address.country}
              contactData={listItem}
      />
      </div>
      ))}
       <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
        </div>
  );
}

export default App;
