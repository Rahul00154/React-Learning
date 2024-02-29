import { useState } from 'react';
import './App.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function App() {
  const [quill, setQuill] = useState('');

  //Html
  let data = `<p style="color:red;text-align:center; font-size:20px">dangerouslySetInnerHtml: It is a property that we can use on react application to progammatically set their content </p>`;

  /*
   * React knows that content set using dangerouslySetInnerHtml attribute is dynamic, and for children of that node it skips the comparison between virtual dom to gain some extra performance


  *** UseCases
     * when we need to set the HTML content of a DOM element is when we populate a <div> element with the data coming from a rich text editor
     * the output of that text editor come in form of html tags like p h1 strong b etc.
   */

  const getQuillData = (value) => {
    setQuill(value);
  };

  console.log(quill);

  return (
    <div className="App">
      {/* <div>{quill}</div> */}
      <div dangerouslySetInnerHTML={{ __html: quill }}></div>
      {/* <div dangerouslySetInnerHTML={{ __html: data }}></div>` */}
      {/* JSX
      <p style={{ color: 'red', textAlign: 'center', fontSize: '20px' }}>
        dangerouslySetInnerHtml: It is a property that we can use on react
        application to progammatically set their content{' '}
      {/* </p> */}
      <ReactQuill onChange={getQuillData} />
    </div>
  );
}

export default App;
