import { PagedList } from '@/base/service/common';
import { SocketContext } from '@/base/store/context/SocketContext';
import { PaginationState, SortingState } from '@tanstack/react-table';
import React, { useContext, useEffect, useState } from 'react'

type Props = {}
enum GarageAdminReceiveEvent{
	GARAGE_ADMIN_LIST = "GARAGE_ADMIN_LIST"

}

const useCustomerData = (props: Props) => {
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
	return (
	{
		garageRows:data,
		// pagination,
		setPagination,
		totalRows
	}
	)
}

export default useCustomerData
