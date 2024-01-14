import React  from "react";
import "./styles.css"
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Section from "./Components/Section";
import sectionData from "./data/sectionData.json"
import Footer from "./Components/Footer";

const App = () => {
    return (
        <div>
            <Navbar/>
            <About/>
            {/* <Section
                title="Skills"
                content="skagdkasjhfgsa"
            /> */}

            {sectionData.map((item, index) => {
                return (<Section 
                    key={index}
                    title={item.title}
                    content={item.content}
                    />)
            })}
            <Footer/>
        </div>
    )
}

export default App