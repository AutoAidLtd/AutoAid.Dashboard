import { SocketContext } from "@/base/store/context/SocketContext"
import useGarageData from "@/modules/garage/hooks/useGarageData"
import useGarageTable from "@/modules/garage/hooks/useGarageTable"
import { GarageAdmin } from "@/types/@autoaid/entity/garage"
import MainCard from "@ui/MainCard"
import QuickTable from "@ui/common/table/QuickTable"
import { useContext } from "react"
import { useTranslation } from "react-i18next"


const GaragePage = () => {
	const {columns} = useGarageTable()
	const {garageRows,setPagination,totalRows} =useGarageData()
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
			onPaginationChange={(pagination)=>setPagination(pagination)}
			/>
		</MainCard>
	)
}

export default GaragePage
