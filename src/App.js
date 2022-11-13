import './App.css';
import Addtask from './component/Addtask/Addtask';
import ListTask from './component/ListTask/ListTask';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='todo-app' >
      <Addtask />
      <ListTask />
    </div>
  );
}

export default App;
