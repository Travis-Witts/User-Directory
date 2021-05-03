import List from './List'
import search from '../utils'

let employees = search()

function ListContainer() {
  return (
<List employees={employees}></List>
  );
}

export default ListContainer;
