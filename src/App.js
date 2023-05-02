import "./App.css";
import Hotel from "./Component/Hotel";
import HotelData from "./Component/HotelData";

function App() {
  return (
    <>
    <div className="container">
      <h1 className="heading">Hotel Rooms</h1>
      {HotelData.map((values)=>{
        return(
          <>
          <Hotel 
          imgsrc={values.imgsrc} 
          title = {values.title}
          text={values.text}
          btnText={values.btnText}

          />
          </>
        )
      })}
    </div>
    </>
     
 )    
}

export default App;

