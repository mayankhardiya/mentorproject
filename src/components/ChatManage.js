import React, { Component }  from 'react';
import { Chat, Channel, ChannelList, Window } from 'stream-chat-react';
import { ChannelHeader, MessageList } from 'stream-chat-react';
import { MessageInput, Thread } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';

import 'stream-chat-react/dist/css/index.css';

var url_string = window.location.href;
 var urls = new URL(url_string);
 var tokens = urls.searchParams.get("streamtoken");
 var userid = urls.searchParams.get("uname");

const chatClient = new StreamChat('g8yfg5w2yd32');
const userToken = tokens;
// alert(userToken);

if(userToken){
  chatClient.setUser(
  {
    id: userid,
    name: '',
    image: 'https://getstream.io/random_svg/?id=holy-mud-2&name=Holy+mud'
  },
  userToken,
)
} else {


}


const filters = { type: 'public'};
//your room
// .equal("invite", to:"accepted") | .equal("created_by_id", to: User.current.id)
//invite
//(.equal("type", to: "mentorprivate") & .equal("invite", to:"pending"))
//(.equal("type", to: "mentorpublic") & .notIn("members", [User.current.id]))
//public
//equal("type", to: "public")
const sort = { last_message_at: -1 };
const channels = chatClient.queryChannels(filters, sort);

 class ChatManage extends Component {
  constructor() {
  super()

   this.state = {
    tokendata : ""
   };
    
}

componentDidMount() {

// document.title = 'Content Page | DBC'
const id = this.props.location.search;
this.setState({tokendata:id})
// console.log(id, 'hgffgh')
}


  render() {
    // console.log(this.props.location.search);


    return (
      <div className="container">   
         <h1 className="text-center make" style={{background: "#007bff",color: "white"}}>TradeTips</h1>         
        <div className="row">
          <div className="col-md-3">
     <nav id="sidebar" class="sidebar-wrapper">
      <div class="sidebar-content">
         <div class="sidebar-menu">
           <ul style={{background: "#007bff",height: "300px"}}>
            <li class="sidebar-dropdown" style={{padding: "10px" , display: "inherit"}}>
              <a href={`/home${this.state.tokendata}`}>
                &nbsp;
                <span style={{color: "white"}}><b>Dashboard</b></span>
              </a>              
            </li>            
            <li style={{padding: "10px", display: "inherit"}}>
              <a href={`/tip${this.state.tokendata}`}>
               &nbsp;
                <span style={{color: "white"}}><b>Make a Tip</b></span>
              </a>
            </li>
            <li style={{padding: "10px", display: "inherit"}}>
              <a href={`/chatmanage${this.state.tokendata}`}>
               &nbsp;
                <span style={{color: "white"}}><b>Chat Managment</b></span>
              </a>
            </li>
            <li style={{padding: "10px", display: "inherit"}}>
              <a href="/">
               &nbsp;
                <span style={{color: "white"}}><b>Logout</b></span>
              </a>
            </li>
          </ul>
        </div>
        </div>
      </nav>
          </div>
          <div className="col-md-9 mt-5 mx-auto">
          <nav className="navbar navbar-expand-lg ">
        <div className="collapse navbar-collapse justify-content-md-left"
            id="navbarsExample10">        
          <ul className="navbar-nav">
            <li className="nav-item">
               <a href={`/yourroom${this.state.tokendata}`} className="nav-link">
                Your Rooms
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Invitation
              </a>
            </li>
            <li className="nav-item active" style={{background: "#007bff"}}>
              <a href={`/chatmanage${this.state.tokendata}`} className="nav-link" style={{color: "#fff"}}>
                Public Chat
              </a>
            </li>
          </ul>
        </div>
      </nav>
  <Chat client={chatClient} theme={'messaging light'}>
    <ChannelList
      filters={filters}
      sort={sort}
    />
    <Channel>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>

          </div>
        </div>
      </div>
    )
  }
}

export default ChatManage  