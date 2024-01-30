import './App.css';
import rocketImg from './Assests/rocket.png';
import SignUp from './Components/SignUp';

function App() {
  return (
         <div className='container mt-3'>
        <div className="row">
          <div className="col-md-5">
            <SignUp />
          </div>
          <div className="col-md-7">
            <img className="img-fluid w-100" src={rocketImg} alt="Rocket img" />
          </div>
        </div>
      </div>
  );
}
export default App;
