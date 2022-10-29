import Banner from "./Banner";
import Item from "./Item";
import "./Body.css";
// class Body extends React.Component {
//   render() {
//     return (
//       <div>
//         <Banner />
//         <Item />
//       </div>
//     );
//   }
// }
function Body() {
  return (
    <div>
      <Banner />
      <Item />
    </div>
  );
}

export default Body;
