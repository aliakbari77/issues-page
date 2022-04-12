import OpenIssueIcon from './OpenIssueIcon';
import CloseIssueIcon from './CloseIssueIcon';
import IssueList from './IssueList';
import {useState} from 'react'
import { useEffect } from 'react';

const filters = {
  'open-issues': 1,
  'close-issues': 2
}

function App() {
  const [issuesFilter, setIssuesFilter] = useState(0)
  
  const handleButton = (e) => {
    const {testid} = e.currentTarget.dataset
    setIssuesFilter(filters[testid])
    console.log(issuesFilter);
  }
  
  return (
    <div className="container">
      <div className="box">
        <div className="box-header" >
          <div data-testid="open-issues" className="open-issues" onClick={handleButton}>
            <OpenIssueIcon /> Open
          </div>
          <div data-testid="close-issues" className="close-issues" onClick={handleButton}>
            <CloseIssueIcon /> Closed
          </div>
        </div>

        <IssueList issuesFilter={issuesFilter}/>
      </div>
    </div>
  );
}

export default App;
