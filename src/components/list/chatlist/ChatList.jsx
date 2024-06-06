import { useState } from 'react'
import './chatlist.css'

const ChatList = () => {
    const [addMode, setAddMode] = useState(false)
    
    return (
        <div className="chatlist">
            <div className="search">
                <div className="searchbar">
                    <img src='./search.png' />
                    <input type='text' placeholder='search...' />
                </div>
                <img 
                    src={addMode? './minus.png': "./plus.png"} 
                    className='add'
                    onClick={()=>setAddMode(prev=> !prev)}
                    />
            </div>

            {/* chat items */}
            <div className="item">
                <img src='./avatar.png' alt=''/>
                <div className="texts">
                    <span>John Doe</span>
                    <p>Hello</p>
                </div>
            </div>

            <div className="item">
                <img src='./avatar.png' alt=''/>
                <div className="texts">
                    <span>John Doe</span>
                    <p>Hello</p>
                </div>
            </div>

            <div className="item">
                <img src='./avatar.png' alt=''/>
                <div className="texts">
                    <span>John Doe</span>
                    <p>Hello</p>
                </div>
            </div>

            <div className="item">
                <img src='./avatar.png' alt=''/>
                <div className="texts">
                    <span>John Doe</span>
                    <p>Hello</p>
                </div>
            </div>
        </div>
    )
}

export default ChatList