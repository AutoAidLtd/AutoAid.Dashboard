import { Pageable, PagedList } from '@/base/service/common';
import { SocketContext } from '@/base/store/context/SocketContext';
import { CustomerAdmin } from '@/types/@autoaid/entity/customer';
import { PaginationState, SortingState } from '@tanstack/react-table';
import React, { useContext, useEffect, useState } from 'react'
enum CustomerAdminReceiveEvent {
  GET_LIST= "CUSTOMER_GET_LIST",
  DELETE_USER = "CUSTOMER_DEL_USER",
  DETAIL_USER = "CUSTOMER_DETAIL_USER"
}
enum CustomerAdminEmitEvent {
  GET_LIST= "CUSTOMER_GET_LIST",
  DELETE_USER = "CUSTOMER_DEL_USER",
  DETAIL_USER = "CUSTOMER_DETAIL_USER"
}

const useCustomerData = () => {
	const socket = useContext(SocketContext)
	const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 25,
  });
  const [sortState, setSortState] = useState<SortingState>([]);
  const [keyword, setKeyword] = useState<string>();
  const [id,setId] = useState<string>();
	const [data, setData] = useState<CustomerAdmin[]>([])
	const [totalRows, setTotalrows] = useState(0)
	useEffect(()=>{
		socket.on("JOIN", (msg)=>{
			console.log(msg);
			
		})
		socket.on(CustomerAdminReceiveEvent.GET_LIST, (result:PagedList<CustomerAdmin>)=>{
			setData(result.rows)
			// setPagination({
			// 	pageIndex : result.pagination.page, 
			// 	pageSize : result.pagination.pageSize
			// })
			setTotalrows(result.pagination?.totalItems??0)
		})

		socket.emit(CustomerAdminReceiveEvent.GET_LIST)
		console.log({socket});
		// socket.emit("JOIN","123")
		return ()=>{
			// socket.off("JOIN")
			socket.off(CustomerAdminEmitEvent.GET_LIST)
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
		
		socket.emit(CustomerAdminEmitEvent.GET_LIST, pageable)
	},[pagination, sortState, keyword])

	return (
	{
		customerRows:data,
		// pagination,
		setPagination,
		totalRows,
		setKeyword
	}
	)
}

export default useCustomerData
