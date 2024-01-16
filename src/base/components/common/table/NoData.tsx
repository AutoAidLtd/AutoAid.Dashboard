// import { Box } from "@mui/system"



const NoData = ({noOfRows}:{noOfRows: number}) => {
  return (
    // <Box component={"p"} sx={{
    //   padding: "1rem",
    //   width: "100%"
    // }} display={"flex"} justifyContent={"center"} alignItems={"center"}>NoData</Box>
    <>
    <tr>
    <td rowSpan={noOfRows}>
	    No data
    </td>
    </tr>
    </>
  )
}

export default NoData
