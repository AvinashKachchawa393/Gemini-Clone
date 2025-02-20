import  { React,useContext, useState } from "react";
import "./Sidebar.css";
import { Context } from "../../context/Context";
const Sidebar = () => {
    let [extended, setExtended] = useState(false);
    let { onSent, prevPrompts, setRecentPrompt,newChat } = useContext(Context);

    return (
        <>
            <div className="sidebar">
                <div className="top">
                    <img className="menu" onClick={() => setExtended(prev => !prev)} src="https://static.vecteezy.com/system/resources/previews/019/858/703/non_2x/menu-flat-color-outline-icon-free-png.png" alt="menu-icon" />
                    <div onClick={()=>newChat()} className="new-chat">
                        <img src="https://icon-library.com/images/black-plus-icon/black-plus-icon-24.jpg" alt="plus icon image" />
                        {extended ? <p>New Chat</p> : null}

                    </div>
                    {extended ?
                        <div className="recent">
                            <p className="recent-title">Recent</p>

                            {/* {prevPromots.map((item,index)=>{
                                return (
                                    <div className="recent-entry">
                                        <img src="https://static.vecteezy.com/system/resources/previews/010/789/574/original/message-icon-isolated-on-transparent-background-png.png" alt="message icon image" />
                                        <p>{item} ...</p>
                                    </div>
                                );
                            })} */}
                            {prevPrompts?.map((item, index) => (
                                <div key={index} className="recent-entry">
                                    <img src="https://static.vecteezy.com/system/resources/previews/010/789/574/original/message-icon-isolated-on-transparent-background-png.png" alt="message icon image" />
                                    <p>{item.slice(0,18)} ...</p>
                                </div>
                            ))}


                        </div>
                        : null}

                </div>
                <div className="bottom">
                    <div className="bottom-item recent-entry">
                        <img src="https://www.pngplay.com/wp-content/uploads/12/Black-Question-mark-Transparent-Background.png" alt="question icon" />
                        {extended ? <p>Help</p> : null}
                    </div>
                    <div className="bottom-item recent-entry">
                        <img src="https://cdn-icons-png.flaticon.com/512/798/798695.png" alt="activity icon" />
                        {extended ? <p>Activity</p> : null}
                    </div>
                    <div className="bottom-item recent-entry">
                        <img src="https://static-00.iconduck.com/assets.00/settings-icon-1964x2048-8nigtrtt.png" alt="setting icon" />
                        {extended ? <p>Settings</p> : null}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;