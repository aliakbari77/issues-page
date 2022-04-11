import useInfiniteScroll from '../hooks/useInfiniteScroll';
import Loading from './Loading';
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import IssueItem from './IssueItem';

function IssueList() {
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);
  const [items, setItems] = useState([])
  const [page, setPage] = useState(1)

  useEffect( async () => {
    console.log("use effect started.", page)
    console.log(isFetching)
    const {data: newItems} = await axios.get(`http://localhost:9000/issues?page=${page}&issuesFilter=0`)
    console.log(newItems)
    setPage(page + 1)
    setItems(items => items.concat(newItems))
    
    setIsFetching(false)   
    if (newItems == [] ) return
    // let page = 1
    // setIsFetching(isFetching)
    // console.log(isFetching)
    // if (!isFetching){
    //   const {data: initItems} = await axios.get(`http://localhost:9000/issues?page=${page}&issuesFilter=0`)
    //   setItems(initItems)
    //   console.log(initItems, page) 
    // } 
    // page = page + 1
    // if (isFetching){
    //   console.log("new page => ", page)
    //   const {data: newItems} = await axios.get(`http://localhost:9000/issues?page=${page}&issuesFilter=0`)
    //   setItems(oldItems => oldItems.concat(newItems))
    // }
    // page = page + 1
    // console.log(items);
  }, [isFetching])

  function fetchMoreListItems(){
    return page
  }

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
