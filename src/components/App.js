import OpenIssueIcon from './OpenIssueIcon';
import CloseIssueIcon from './CloseIssueIcon';
import IssueList from './IssueList';

function App() {
  return (
    <div className="container">
      <div className="box">
        <div className="box-header">
          <div data-testid="open-issues" className="open-issues">
            <OpenIssueIcon /> Open
          </div>
          <div data-testid="close-issues" className="close-issues">
            <CloseIssueIcon /> Closed
          </div>
        </div>

        <IssueList />
      </div>
    </div>
  );
}

export default App;
