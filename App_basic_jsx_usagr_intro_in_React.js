import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const reactElement = (<h1 id="reactElement" className="heading" tabIndex="1">I am a plain react element using JSX</h1>);


//React Functional component you can use either way in below for creating React Functional component

// const HeadingComponent = () => (
//       <h1 id="comp" className="heading" tabIndex="1">I am a React Functional component</h1>
// );

const HeadingComponent = () => {
     return  <h1 id="comp" className="heading" tabIndex="1">I am a React Functional component</h1>
};

// const HeadingComponent = () => <h1 id="comp" className="heading" tabIndex="1">I am a React Functional component</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(reactElement);

//< /> tags should be used to render React Functional components then only bebel will understand it as a React Functional component
// root.render(<HeadingComponent />);

const Title =() => (<h1>I am a title comp using JSX</h1>);
const el1 = (<h1>I am a el1 comp using JSX</h1>);
const el2 = (
  <div>
  <h1>I am a el2 comp using JSX</h1>
            {el1}
            </div>
          );
const HeadComp = () => 
(
  <div id ="container">
    <Title/>
    {Title()}
    <Title></Title>
    {el2}
    <h1>I am a Head comp using JSX</h1>
  </div>
)
const el3 = (<div>
  <h1>I am a el3</h1>
  <HeadComp/>

  </div>
  

)

//root.render(el3); //Rendering element which has component inside
root.render(<HeadComp/>); //Rendering component which has element inside