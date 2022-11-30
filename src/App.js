import Profile from './profile/Profile';
import img from './profile/photo.jpg';
import './App.css';

function App() {
  const fullName="Hachem Barhoumi";
  const bio= "holder of a degree in computer science and a degree in fullstack js, Passionate about web development. Self-taught and curious.";
  const profession="Web Developer";
  const stylePhoto={height: "400px", borderRadius: "5%" , marginLeft: "40px"};
  const styleName={color: "#d81159", fontSize: "40px", padding: "20px 0", fontFamily: "Lucida Handwriting"};
  const styleProf={color: "#50514f", fontSize: "40px", paddingBottom: "20px", fontStyle: "italic", fontFamily: "Brush Script MT"};
  const styleBio={color: "#1b4965", fontSize: "20px", paddingBottom: "100px", fontFamily: "Georgia"};
  const handleName=()=>{
    alert(fullName)
  }
  return (
    <div>
      <Profile fullName={fullName}
                profession={profession} 
                bio={bio}
                stylePhoto={stylePhoto} 
                styleName={styleName}
                styleProf={styleProf}
                styleBio= {styleBio}
                handleName={handleName}>
                {img}
      </Profile>
    </div>
  );
}

export default App;
