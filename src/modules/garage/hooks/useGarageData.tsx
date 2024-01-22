import { Pageable, PagedList } from '@/base/service/common';
import { SocketContext } from '@/base/store/context/SocketContext'
import { GarageAdmin } from '@/types/@autoaid/entity/garage';
import { PaginationState, SortingState } from '@tanstack/react-table';
import React, { useContext, useEffect, useState } from 'react'
enum GarageAdminReceiveEvent{
	GARAGE_ADMIN_LIST = "GARAGE_ADMIN_LIST"

}

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
	const [totalRows, setTotalrows] = useState(0)
	useEffect(()=>{
		socket.on("JOIN", (msg)=>{
			console.log(msg);
			
		})
		socket.on(GarageAdminReceiveEvent.GARAGE_ADMIN_LIST, (result:PagedList<GarageAdmin>)=>{
			setData(result.rows)
			// setPagination({
			// 	pageIndex : result.pagination.page, 
			// 	pageSize : result.pagination.pageSize
			// })
			setTotalrows(result.pagination?.totalItems??0)
		})

		socket.emit(GarageAdminReceiveEvent.GARAGE_ADMIN_LIST)
		console.log({socket});
		socket.emit("JOIN","123")
		return ()=>{
			socket.off("JOIN")
			socket.off(GarageAdminReceiveEvent.GARAGE_ADMIN_LIST)
		}
	},[])
	useEffect(()=>{
		console.log(sortState);
		
		const pageable  = {
			page: pagination.pageIndex+1 ?? 1,
			pageSize : pagination?.pageSize ?? 25,
			sort : sortState?.map(ss => ({
				by: ss.id,
				direction: ss.desc ? "desc" : "asc"
			}),
			)??[],
			keyword
		} as Pageable
		
		socket.emit(GarageAdminReceiveEvent.GARAGE_ADMIN_LIST, pageable)
	},[pagination, sortState, keyword])
	return (
	{
		garageRows:data,
		// pagination,
		setPagination,
		totalRows,
		setKeyword,
		setSortState,
		setId
	}
	)
}

export default useGarageData
