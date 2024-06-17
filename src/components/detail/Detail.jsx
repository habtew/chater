import './detail.css'

const Detail = () => {
    return (
        <div className="detail">
            <div className="user">
                <img src="./avatar.png" alt="" />
                <h2>Jen Doe</h2>
                <p>Lorem, ipsum dolor sit amet.</p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>chat settings</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Privacy % help</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared photos</span>
                        <img src="./arrowDown.png" alt="" />
                    </div>
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://images.unsplash.com/photo-1718556256225-82afc1b30580?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                <span>photo_2024.png</span>
                            </div>
                            <img src="./download.png" alt="" />
                        </div>

                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://images.unsplash.com/photo-1718556256225-82afc1b30580?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                <span>photo_2024.png</span>
                            </div>
                            <img src="./download.png" alt="" />
                        </div>

                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://images.unsplash.com/photo-1718556256225-82afc1b30580?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                <span>photo_2024.png</span>
                            </div>
                            <img src="./download.png" alt="" />
                        </div>

                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://images.unsplash.com/photo-1718556256225-82afc1b30580?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                <span>photo_2024.png</span>
                            </div>
                            <img src="./download.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <button>Block User</button>
            </div>
        </div>
    )
}

export default Detail