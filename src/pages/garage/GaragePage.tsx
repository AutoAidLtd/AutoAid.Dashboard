import useGarageTable from "@/modules/garage/hooks/useGarageTable"
import MainCard from "@ui/MainCard"
import QuickTable from "@ui/common/table/QuickTable"


const GaragePage = () => {
	const {columns} = useGarageTable()
	return (
		<MainCard content={false}> 
		<QuickTable
		totalRows={100}
		columns={columns}
		data={[]}
		/>
		</MainCard>
	)
}

export default GaragePage
