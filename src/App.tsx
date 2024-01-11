import { RouterProvider } from 'react-router-dom'
import { router } from './route/Route'
import { useContext, useEffect } from 'react'
import { SocketContext } from '@/base/store/context/SocketContext'
function App() {
	const socket = useContext(SocketContext);
	useEffect(()=>{
		if(!socket?.connected){
			socket?.connect()
			socket.once("connected",()=>{
				console.log("Socket connected");
			})
			socket.on("connect",()=>{
				console.log("Socket connect");
			})
		}
		return ()=>{
			if(socket?.connected){
				socket?.disconnect()
			}
		}
	},[socket])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
