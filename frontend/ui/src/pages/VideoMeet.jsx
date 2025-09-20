import React, { useRef, useState } from 'react'


const server_url = 'http://localhost:3000'

var connections={};

const peerConfigConnections = {
    "iceserver" :[
        {"urls": "stun.stun.l.google.com:19302"}
    ]
}
export default function VideoMeet() {
    var socketRef = useRef();
    let socketIdRef = useRef();
    let localVideoRef = useRef();
    
    let [videoAvailable,setVideoAvailable] = useState(true);
    let [audioAvailable,setAudioAvailable] = useState(true);
    let [video,setVideo] = useState();
    let [audio,setaudio] = useState();
    let [screen,setScreen] = useState();
    let [showModal,setModal] = useState();
    let [screenAvailable,setScreenAvailable] = useState();
    let [messages,setMessages] = useState([]);
    let [message,setMessage] = useState("");
    let [newMessage , setNewMessage] = useState(0);
    let [askForUsername,setAskForUsername] = useState(true);
    let [username , setUsername] = useState("");
    const videoref = useRef([]);
    let [videos,setVideos] = useState([])
  return (
    <div>
        {askForUsername===true?
            <div>

            </div>
            :<>
                
            </>

         }
    </div>
  )
}
