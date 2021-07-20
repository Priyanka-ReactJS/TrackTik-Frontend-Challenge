import React, { useState, useEffect, Suspense } from 'react';
import './App.css';
import ContactCard from './Component/ContactCard/contactCard';
import Header from './Component/Header/header';
import useFetch from './utility';

//https://tracktik-challenge.staffr.com/sites

function App() {
  const [count, setCount] = useState(0);

  const [list, setList] = useState("sites")
  const { data, loading } = useFetch(`https://tracktik-challenge.staffr.com/${list}`);
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

  const fetchData = () => {
		// setTimeout(async () => {
		// 	const result = await fetch(`https://tracktik-challenge.staffr.com/${list}`);
		// 	const data = await result.json();
			setPage(page + 1);
			setListItems(() => {
				return [...listItems, ...data];
			});
		// }, 1000);
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
    <>
    {listItems.map((listItem) => (
				<div className='card' key={listItem.id}>
					<Suspense fallback={<img src={list.images} alt='Avatar' style={{ width: '50%' }} />}>
						<ContactCard
              image={listItem.images[0]}
              contactTitle={listItem.title}
              contactAddress={listItem.address.city}
              shortDesc={listItem.address.country}
              contactData={listItem}
            />
					</Suspense>
				</div>
			))}
			{isFetching && <h1>Fetching more list items...</h1>}
    </>
  );
}
export default App;
