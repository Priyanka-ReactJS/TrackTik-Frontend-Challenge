import React, {useEffect, useState } from 'react';
import './App.css';
import ContactCard from './Component/ContactCard/contactCard';
import Header from './Component/Header/header';
import useFetch from './utility';

//https://tracktik-challenge.staffr.com/sites

function App() {
  const [count, setCount] = useState(0);

  const [list, setList] = useState("sites")
  // const { data, loading } = useFetch(`https://tracktik-challenge.staffr.com/${list}`);
  const [listItems, setListItems] = useState([]);
	const [isFetching, setIsFetching] = useState(false);
	const [page, setPage] = useState(1);

  useEffect(() => {
		fetchData();
		window.addEventListener('scroll', handleScroll);
	}, []);

	const handleScroll = () => {
		if (
			Math.ceil(window.innerHeight + document.documentElement.scrollTop) !== document.documentElement.offsetHeight ||
			isFetching
		)
			return;
		setIsFetching(true);
		console.log(isFetching);
	};

  const fetchData = async () => {
		setTimeout(async () => {
			const result = await fetch(`https://tracktik-challenge.staffr.com/${list}`);
			const data = await result.json();
			setPage(page + 1);
			setListItems(() => {
				return [...listItems, ...data];
			});
		}, 1000);
	};

	useEffect(() => {
		if (!isFetching) return;
		fetchMoreListItems();
	}, [isFetching]);

	const fetchMoreListItems = () => {
		fetchData();
		setIsFetching(false);
	};  
    return (
    <div className="App">
    <Header/>
      {(listItems || []).map((list) => {
        return (
          <React.Fragment key={list.contactTitle}>
          
            {/* <ContactCard
              image={list.images[0]}
              contactTitle={list.title}
              contactAddress={list.address.city}
              shortDesc={list.address.country}
              contactData={list}
            /> */}
          </React.Fragment>
        );
      })}
    </div>
  );
}
export default App;
