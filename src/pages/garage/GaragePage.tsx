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
	useGarageData()
	const {t} = useTranslation()
	return (
		<MainCard content={false}> 
			<QuickTable<GarageAdmin>
			totalRows={100}
			columns={columns}
			data={[]}
			/>
		</MainCard>
	)
}

export default GaragePage
