import EventRegistrationForm from "./components/EventRegistrationForm";
import "./styles/EventRegistrationForm.css";

const styles = {
  textAlign: "center",
  margin: "80px 0px 30px 0px",
}

const App = () => {
  return (
    <div className="App">
      <h1 style={styles}>Event Registration Form</h1>
      <EventRegistrationForm />
    </div>
  );
};

export default App;
