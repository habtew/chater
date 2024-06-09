import { useState } from 'react'
import './chat.css'
import EmojiPicker from 'emoji-picker-react'

const Chat = () => {
    const [open, setOpen] = useState(false)
    const [text, setText] = useState('')
    
    const handleEmoji = (event) => {
        setText(prev => prev + event.emoji)
        setOpen(false)
    }
    console.log(text)
    return (
        <div className="chat">
            <div className="top">
                <div className="user">
                    <img src='./avatar.png' alt='' />
                    <div className="texts">
                        <span>John Doe</span>
                        <p>john doe is software developer</p>
                    </div>
                </div>
                <div className="icons">
                    <img src='./phone.png' alt='' />
                    <img src='./video.png' alt='' />
                    <img src='./info.png' alt='' />
                </div>
            </div>
            <div className="center">
                {/* message */}
                <div className="message">
                    <img src='./avatar.png' alt='' />
                    <div className="texts">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Animi est possimus maxime? Architecto quisquam perferendis 
                            autem nihil dolor, unde placeat aliquid! Aspernatur nesciunt possimus 
                            architecto recusandae hic veritatis ea officia!
                        </p>
                        <span>1 minutes ago</span>
                    </div>
                </div>
                {/* own message  */}
                <div className="message own">
                    <div className="texts">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Animi est possimus maxime? Architecto quisquam perferendis 
                            autem nihil dolor, unde placeat aliquid! Aspernatur nesciunt possimus 
                            architecto recusandae hic veritatis ea officia!
                        </p>
                        <span>1 minutes ago</span>
                    </div>
                </div>
                {/* message */}
                <div className="message">
                    <img src='./avatar.png' alt='' />
                    <div className="texts">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Animi est possimus maxime? Architecto quisquam perferendis 
                            autem nihil dolor, unde placeat aliquid! Aspernatur nesciunt possimus 
                            architecto recusandae hic veritatis ea officia!
                        </p>
                        <span>1 minutes ago</span>
                    </div>
                </div>
                {/* own message  */}
                <div className="message own">
                    <div className="texts">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Animi est possimus maxime? Architecto quisquam perferendis 
                            autem nihil dolor, unde placeat aliquid! Aspernatur nesciunt possimus 
                            architecto recusandae hic veritatis ea officia!
                        </p>
                        <span>1 minutes ago</span>
                    </div>
                </div>
                {/* message */}
                <div className="message">
                    <img src='./avatar.png' alt='' />
                    <div className="texts">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Animi est possimus maxime? Architecto quisquam perferendis 
                            autem nihil dolor, unde placeat aliquid! Aspernatur nesciunt possimus 
                            architecto recusandae hic veritatis ea officia!
                        </p>
                        <span>1 minutes ago</span>
                    </div>
                </div>
                {/* own message  */}
                <div className="message own">
                    <div className="texts">
                        <img src='https://images.pexels.com/photos/6284716/pexels-photo-6284716.jpeg' alt='' />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Animi est possimus maxime? Architecto quisquam perferendis 
                            autem nihil dolor, unde placeat aliquid! Aspernatur nesciunt possimus 
                            architecto recusandae hic veritatis ea officia!
                        </p>
                        <span>1 minutes ago</span>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="icons">
                    <img src='./img.png' alt='' />
                    <img src='./camera.png' alt='' />
                    <img src='./mic.png' alt='' />
                </div>
                <input 
                    type="text" 
                    className='input' 
                    placeholder='type your message...'
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                    />
                <div className="emoji">
                    <img 
                        src='./emoji.png' 
                        alt=''
                        onClick={() => setOpen(prevState => !prevState)}
                        />
                    <div className="picker">
                        <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
                    </div>
                </div>
                <button className='sendButton'>send</button>
            </div>
        </div>
    )
}

export default Chat