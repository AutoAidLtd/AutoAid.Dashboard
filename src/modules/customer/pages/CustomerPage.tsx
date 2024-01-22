import React from 'react'
import useCustomerTable from '../hooks/useCustomerTable'
import useGarageData from '@/modules/garage/hooks/useGarageData'
import { useTranslation } from 'react-i18next'
import MainCard from '@ui/MainCard'
import QuickTable from '@ui/common/table/QuickTable'
import { CustomerAdmin } from '@/types/@autoaid/entity/customer'
import useCustomerData from '../hooks/useCustomerData'



const CustomerPage = () => {

	const {columns} = useCustomerTable()
	const {customerRows,setPagination,totalRows, setKeyword} =useCustomerData()
	const {t} = useTranslation()
	return (
		<MainCard content={false}>
			<QuickTable<CustomerAdmin>
			totalRows={totalRows}
			columns={columns}
			data={customerRows??[]}
			onSearchKeywordChange={(k)=>setKeyword(k)}
			addButton={{
				isShown:true,
				buttonContentLangKey: "add_garage",
				addButtonHandler: ()=> {console}
			}}
			onPaginationChange={(pagination)=>setPagination(pagination)}
			/>
		</MainCard>
	)
	return (
		<div>CustomerPage</div>
	)
}

export default CustomerPage
