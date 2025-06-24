import { useState } from "react";
import Editor from "./Editor";
import Preview from "./Preview";

export default function App() {
  const [html, setHtml] = useState("<h1>Hello World</h1>");
  const [css, setCss] = useState("h1 { color: blue; }");
  const [js, setJs] = useState("console.log('Hello from JS');");

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 p-2 space-y-3 bg-gray-100 overflow-auto">
        <Editor language="html" value={html} onChange={setHtml} />
        <Editor language="css" value={css} onChange={setCss} />
        <Editor language="javascript" value={js} onChange={setJs} />
      </div>
      <div className="w-full md:w-1/2 h-full p-2">
        <Preview html={html} css={css} js={js} />
      </div>
    </div>
  );
}

