import React from "react"
import {io} from "socket.io-client"

const WS_URL = "wss://autoaid.wyvernp.id.vn"
export const socket = io(WS_URL)
export const SocketContext = React.createContext(socket);

