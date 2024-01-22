import { SocketContext } from "@/base/store/context/SocketContext"
import useGarageData from "@/modules/garage/hooks/useGarageData"
import useGarageTable from "@/modules/garage/hooks/useGarageTable"
import { GarageAdmin } from "@/types/@autoaid/entity/garage"
import MainCard from "@ui/MainCard"
import QuickTable from "@ui/common/table/QuickTable"
import { isEmpty } from "lodash"
import { useContext } from "react"
import { useTranslation } from "react-i18next"


const GaragePage = () => {
	const {columns} = useGarageTable()
	const {garageRows,setPagination,totalRows, setKeyword,setSortState} =useGarageData()
	const {t} = useTranslation()
	return (
		<MainCard content={false}>
			<QuickTable<GarageAdmin>
			totalRows={totalRows}
			columns={columns}
			data={garageRows??[]}
			addButton={{
				isShown:true,
				buttonContentLangKey: "add_garage",
				addButtonHandler: ()=> {console}
			}}
			onSortByChange={(sort)=>setSortState(isEmpty(sort)?[] :sort)}
			onSearchKeywordChange={(kw)=>setKeyword(kw)}
			onPaginationChange={(pagination)=>setPagination(pagination)}
			/>
		</MainCard>
	)
}

export default GaragePage
