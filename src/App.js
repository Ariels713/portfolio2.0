import GlobalStyles from "./GlobalStyles";
import Navigation from "./components/navigation/Navigation";
import MainContainer from "./components/body/MainContainer";
function App() {
  return (
    <>
      <Navigation />
      <MainContainer />
      <GlobalStyles />
    </>
  );
}

export default App;

// @media (min-width: 550px) {
//   /* Tablets */
// }
// @media (min-width: 1100px) {
//   /* Laptop */
// }
// @media (min-width: 1500px) {
//   /* Desktop */
// }
