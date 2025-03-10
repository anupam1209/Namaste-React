import Header from "./Header";
import Body from "./Body";

const AppLayout = () => {
  return (
    <div className="App">
      {/* <h2>This is AppLayout Component</h2>
        <p>this is the topmost component</p> */}
      <Header />
      <Body />
    </div>
  );
};

export default AppLayout;
