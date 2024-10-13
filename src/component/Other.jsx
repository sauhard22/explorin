import { useEffect } from "react"


const Other = () => {

    useEffect(() => {
        console.log("Hello World");
    }, [])

  return (
    <div className="mt-10">
        <h1>Other</h1>
        <h1>Hello World</h1>
    </div>
  )
}

export default Other