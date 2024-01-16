import { SocketContext } from '@/base/store/context/SocketContext'
import { PaginationState, SortingState } from '@tanstack/react-table';
import React, { useContext, useEffect, useState } from 'react'

const useGarageData = () => {
	const socket = useContext(SocketContext)
	const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 25,
  });
  const [sortState, setSortState] = useState<SortingState>([]);
  const [keyword, setKeyword] = useState<string>();
  const [id,setId] = useState<string>();
	const [data, setData] = useState<any>([])
	useEffect(()=>{
		socket.on("JOIN", (msg)=>{
			console.log(msg);
			
		})
		console.log({socket});
		socket.emit("JOIN","123")
	},[])
	return (
		
		<div>useGarageData</div>
	)
}

export default useGarageData
