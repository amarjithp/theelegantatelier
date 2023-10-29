import Body from "./components/Body";
import Header from "./components/Header";


export default function Home() {
  return (
    <>
      <div className="m-5 lg:m-14 lg:mt-8">
        <Header />
        <Body />
      </div>
    </>
  )
}