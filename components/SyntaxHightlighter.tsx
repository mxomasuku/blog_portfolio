"use client";


import Prism from "prismjs";

import { useEffect } from "react";

//theme
import "prismjs/themes/prism-twilight.css"

//languages
import  "prismjs/components/prism-dart";
import  "prismjs/components/prism-typescript";
import  "prismjs/components/prism-javascript";
import  "prismjs/components/prism-json";

//tools
import "prismjs/plugins/toolbar/prism-toolbar.min.css";
import "prismjs/plugins/toolbar/prism-toolbar.min";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min";




export default function SyntaxHightlighter ({
    
    children,
}: {children: React.ReactNode}) {

    useEffect(() => {
 Prism.highlightAll();
}, [])


  return (
    <div>{children}</div>
  )
}

