import useInfiniteScroll from '../hooks/useInfiniteScroll';
import Loading from './Loading';
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import IssueItem from './IssueItem';

function IssueList() {
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);
  const [items, setItems] = useState([])

  useEffect( async () => {
    const {data: items} = await axios.get("http://localhost:9000/issues")
    setItems(items)
    console.log(items);
  })

   async function fetchMoreListItems() {
    if (isFetching){
      const {data: newItems} = await axios.get("http://localhost:9000/issues?page=2&issuesFilter=0")
      setItems(items => [...items, newItems])
    }
  }

  fetchMoreListItems()
  return (
    <React.Fragment>

      <div className="issues" data-testid="issues">
        {items.map((item, i) => <IssueItem key={i} issue={item}/>)}
      </div>
      {(items.length == 0) && <Loading />}
    </React.Fragment>
    
  );
}

export default IssueList;
