import { Fragment } from "react";
import { useState } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  let selectedIndex = 0;
  // hook *tells data that it can
  const [selectedIndex, setSelectedIndex] = useState(-1);
  arr[0];
  arr[1];
  return (
    <Fragment>
      <h1>List</h1>
      {items.length === 0 && <p>No Item Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              selectedIndex = index;
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;

// import { Fragment } from "react";

// function ListGroup() {
//     const items = [
//         "New York",
//         "San Francisco",
//         "Tokyo",
//         "London,"
//         "Paris"
//     ];

//     items.map(item => <li>{item}</li>)
//   return (
//     <Fragment>
//         <h1>List</h1>
//     <ul className="list-group">
//       <li className="list-group-item">An item</li>
//       <li className="list-group-item">A second item</li>
//       <li className="list-group-item">A third item</li>
//       <li className="list-group-item">A fourth item</li>
//       <li className="list-group-item">And a fifth one</li>
//     </ul>
//     </Fragment>
//   );
// }
// export default ListGroup;

// import { Fragment } from "react";

// function ListGroup() {
//     const items = [ "New York","San Francisco", "Tokyo", "London," "Paris" ];

//     items.map(item => <li>{item}</li>)
//   return (
//     <Fragment>
//         <h1>List</h1>
//     <ul className="list-group">

//     {items.map((item) => (
//     <li key={item}>{item}</li>
//     ))}

//     </ul>
//     </Fragment>
//   );
// }
// export default ListGroup;
