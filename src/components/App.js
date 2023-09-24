import video from "../data/video.js";
import Header from "./Header";
import CommentList from "./CommentList";


function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Header videoData={video} />
      <CommentList comments={video.comments} />
    </div>

  );
}

export default App;
