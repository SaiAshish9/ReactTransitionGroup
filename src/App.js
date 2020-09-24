// import React, { useState } from "react";
// import { Container, ListGroup, Button } from "react-bootstrap";
// import { CSSTransition, TransitionGroup } from "react-transition-group";

// import "./App.css";

// function TodoList() {
//   const [items, setItems] = useState([
//     { id: 1, text: "Buy eggs" },
//     { id: 2, text: "Pay bills" },
//     { id: 3, text: "Invite friends over" },
//     { id: 4, text: "Fix the TV" },
//   ]);
//   return (
//     <Container style={{ marginTop: "2rem" }}>
//       <ListGroup style={{ marginBottom: "1rem" }}>
//         <TransitionGroup className="todo-list">
//           {items.map(({ id, text }) => (
//             <CSSTransition key={id} timeout={500} classNames="item">
//               <ListGroup.Item>
//                 <Button
//                   className="remove-btn"
//                   variant="danger"
//                   size="sm"
//                   onClick={() =>
//                     setItems((items) => items.filter((item) => item.id !== id))
//                   }
//                 >
//                   &times;
//                 </Button>
//                 {text}
//               </ListGroup.Item>
//             </CSSTransition>
//           ))}
//         </TransitionGroup>
//       </ListGroup>
//       <Button
//         onClick={() => {
//           const text = prompt("Enter some text");
//           if (text) {
//             setItems((items) => [...items, { id: uuid(), text }]);
//           }
//         }}
//       >
//         Add Item
//       </Button>
//     </Container>
//   );
// }

// export default TodoList

// import React from "react";
// import { Transition } from "react-transition-group";

// const duration = 3000;

// const defaultStyle = {
//   transition: `opacity ${duration}ms ease-in-out`,
//   opacity: 0,
// };

// const transitionStyles = {
//   entering: { opacity: 1, fontSize: 2 },
//   entered: { opacity: 1 },
//   exiting: { opacity: 0 },
//   exited: { opacity: 0 },
// };

// const Fade = ({ in: inProp }) => (
//   <Transition in={inProp} timeout={duration}>
//     {(state) => (
//       <div
//         style={{
//           ...defaultStyle,
//           ...transitionStyles[state],
//         }}
//       >
//         I'm a fade Transition!
//       </div>
//     )}
//   </Transition>
// );

// export default () => <Fade in />;

import React, { useState } from "react";
import { ScrollPercentage } from "react-scroll-percentage";
import "./App.css";
import {
  Transition,
  CSSTransition,
  SwitchTransition,
} from "react-transition-group";
// TransitionGroup

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const Component = () => {
  return (
    <ScrollPercentage>
      {({ percentage, ref, entry }) => (
        <div ref={ref} style={{ minHeight: "420vh", color: "#fff" }}>
          <div
            style={{
              height: "10vh",
              width: "100vw",
              background: percentage > 0.2 && "red",
              position: "fixed",
              top: 0,
            }}
          ></div>
          <h2
            style={{
              position: "relative",
              zIndex: 1,
              paddingTop: "10vh",
              color: percentage > 0.2 ? "#fff" : "#000",
            }}
          >
            {`Percentage scrolled: ${percentage.toPrecision(2)}%.`}
            <Transition in={percentage > 0.2} timeout={duration}>
              {(state) => (
                <div
                  style={{
                    ...defaultStyle,
                    ...transitionStyles[state],
                  }}
                >
                  I'm a fade Transition!
                </div>
              )}
            </Transition>
          </h2>
          <CSSTransition
            in={percentage > 0.2}
            timeout={200}
            classNames="my-node"
          >
            <div style={{ color: "#fff" }}>
              {"I'll receive my-node-* classes"}
            </div>
          </CSSTransition>
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={percentage > 0.2 ? "Goodbye, world!" : "Hello, world!"}
              addEndListener={(node, done) =>
                node.addEventListener("transitionend", done, false)
              }
              classNames="fade"
            >
              <button>
                {percentage > 0.2 ? "Goodbye, world!" : "Hello, world!"}
              </button>
            </CSSTransition>
          </SwitchTransition>
        </div>
      )}
    </ScrollPercentage>
  );
};
export default Component;

// {
//   routes.map(({ path, Component }) => (
//     <Route key={path} exact path={path}>
//       {({ match }) => (
//         <CSSTransition
//           in={match != null}
//           timeout={300}
//           classNames="page"
//           unmountOnExit
//         >
//           <div className="page">
//             <Component />
//           </div>
//         </CSSTransition>
//       )}
//     </Route>
//   ));
// }
