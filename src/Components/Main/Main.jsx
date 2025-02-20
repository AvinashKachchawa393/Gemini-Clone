import React, { useContext } from "react";
import './Main.css';
import { Context } from "../../context/Context";

const Main = () => {

    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input, prevPrompts}= useContext(Context);

    return (
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src="https://www.pngmart.com/files/23/Profile-PNG-Photo.png" alt="profile icon" />
            </div>
            <div className="main-container">
                {!showResult
                ?<><div className="greet">
                <p><span>Hello Dev.</span></p>
                <p>How I can help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest Beautiful place to see on upcoming road trip</p>
                    <img src="https://www.freeiconspng.com/uploads/compass-icon-22.png" alt="compas icon" />
                </div>
                <div className="card">
                    <p>Briefly summarize this concept: urban planning </p>
                    <img src="https://cdn-icons-png.freepik.com/512/69/69172.png" alt="Bulb icon" />
                </div>
                <div className="card">
                    <p>Brainstorm team bonding activites for our work retreat</p>
                    <img src="https://icon-library.com/images/message-icon-png/message-icon-png-1.jpg" alt="Message icon" />
                </div>
                <div className="card">
                    <p>Improve the readability of the following code</p>
                    <img src="https://static.vecteezy.com/system/resources/previews/010/332/153/original/code-flat-color-outline-icon-free-png.png" alt="code icon" />
                </div>
            </div></>
                :<div className="result">
                    <div className="result-title">
                        <img src="https://www.pngmart.com/files/23/Profile-PNG-Photo.png" alt="usericon" />
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data">
                        <img src="https://th.bing.com/th/id/OIP.rMnE1cbeT1880MlBWzyamQHaHa?rs=1&pid=ImgDetMain" alt="gemini icon image" />
                        {loading?
                        <div className="loader">
                            <hr />
                            <hr />
                            <hr />
                        </div>
                        :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                        }
                        
                    </div>
                </div>
                }

                
                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" onChange={(e)=>setInput(e.target.value)} value={input} placeholder="Enter a prompt here" />
                        <div>
                            <img src="https://icons.iconarchive.com/icons/praveen/minimal-outline/512/gallery-icon.png" alt="Gallery icon" />
                            <img src="https://static.vecteezy.com/system/resources/previews/018/723/663/non_2x/microphone-button-icon-on-transparent-background-free-png.png" alt="mic icon" />
                           {input? <img onClick={()=>onSent()} src="https://static-00.iconduck.com/assets.00/send-icon-2048x1863-u8j8xnb6.png" alt="send icon" /> :null}
                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini may dispaly inaccurate information info. including about people, so double check it's response. your privacy and Gemini app
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Main;