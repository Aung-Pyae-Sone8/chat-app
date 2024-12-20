import { useState } from "react"
import "./chat.css"
import EmojiPicker from "emoji-picker-react"

const Chat = () => {

    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");

    const handleEmoji = e => {
        setText((prev) => prev + e.emoji)
        setOpen(false);
    }

    // console.log(text);

    return (
        <div className="chat">
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>Jhon Dow</span>
                        <p>Lorem ipsum dolor, sit amet.</p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" alt="" />
                    <img src="./video.png" alt="" />
                    <img src="./info.png" alt="" />
                </div>
            </div>

            <div className="center">
                <div className="message own">
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id optio a assumenda ea itaque totam alias atque recusandae nesciunt quam consequuntur architecto, nihil quo, necessitatibus officia eligendi omnis sequi perspiciatis.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id optio a assumenda ea itaque totam alias atque recusandae nesciunt quam consequuntur architecto, nihil quo, necessitatibus officia eligendi omnis sequi perspiciatis.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id optio a assumenda ea itaque totam alias atque recusandae nesciunt quam consequuntur architecto, nihil quo, necessitatibus officia eligendi omnis sequi perspiciatis.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id optio a assumenda ea itaque totam alias atque recusandae nesciunt quam consequuntur architecto, nihil quo, necessitatibus officia eligendi omnis sequi perspiciatis.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id optio a assumenda ea itaque totam alias atque recusandae nesciunt quam consequuntur architecto, nihil quo, necessitatibus officia eligendi omnis sequi perspiciatis.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id optio a assumenda ea itaque totam alias atque recusandae nesciunt quam consequuntur architecto, nihil quo, necessitatibus officia eligendi omnis sequi perspiciatis.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <img src="./avatar.png" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id optio a assumenda ea itaque totam alias atque recusandae nesciunt quam consequuntur architecto, nihil quo, necessitatibus officia eligendi omnis sequi perspiciatis.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
            </div>

            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" alt="" />
                    <img src="./camera.png" alt="" />
                    <img src="./mic.png" alt="" />
                </div>
                <input type="text" value={text} name="" id="" placeholder="Type a message..." onChange={(e) => setText(e.target.value)}/>
                <div className="emoji">
                    <img src="./emoji.png" alt="" onClick={() => setOpen((prev) => !prev)}/>
                    <div className="picker">
                        <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
                    </div>
                </div>
                <button className="sendButton">Send</button>
            </div>
        </div>
    )
}

export default Chat