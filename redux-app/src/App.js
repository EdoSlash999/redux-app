import SongDetail from "./components/SongDetail";
import SongList from "./components/SongList";
const App = () => {
  return (
    <div className='container'>
      <div className='left'>
        <SongList />
      </div>
      <div className='rightDtl'>
        <SongDetail />
      </div>
    </div>
  );
};

export default App;
