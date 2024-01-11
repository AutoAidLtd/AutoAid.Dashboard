import React from "react"
import {io} from "socket.io-client"

const WS_URL = "ws://localhost:4000"
export const socket = io(WS_URL)
export const SocketContext = React.createContext(socket);

