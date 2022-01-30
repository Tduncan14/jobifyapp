
import Landing from './pages/Landing';


function App() {
  return (

    <main>
      <nav>
        <img src={logo} alt="jobify" className="logo"/>
      </nav>

      <div className="container page">
        <div className="info">
          <h1>Job<span>Tracking</span> App</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi debitis velit aliquid error vitae eligendi delectus maxime soluta est labore beatae molestias repudiandae provident et quas nemo, minima vel consectetur.
          Aut quisquam architecto aspernatur! Harum velit enim quo, et, veniam consectetur corrupti beatae pariatur rerum accusamus esse quisquam laboriosam aperiam nemo, eaque rem qui quis iste aut provident nostrum. Debitis!
        </p>

        <button className="btn btn-hero">Login/Register</button>
        </div>
          <img src={main} alt="job hunt" className="img"/>
      </div>
    </main>
  

  );
}

export default App;
