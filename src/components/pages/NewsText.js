import { useEffect, useState } from "react";

const NewsText = ({text}) =>{
  const [html, setHtml] = useState("")
  useEffect(() => {
    setHtml(text)
  }, [html])
  return(
      <div dangerouslySetInnerHTML={{__html: html}}></div>
  )
}

export default NewsText
