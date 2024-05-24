import InputBox from "./components/InputBox"

export default function App() {
  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat" style={{backgroundImage :`url(https://store-images.s-microsoft.com/image/apps.3790.13746602931236419.ec145616-d3b2-4fef-b955-55708f912cfd.44b1adcc-6220-448a-ada7-ec31717c5e62?mode=scale&q=90&h=1080&w=1920)`}}>
      {/* <h1>Hello </h1> */}
      <InputBox />
    </div>
  )
}