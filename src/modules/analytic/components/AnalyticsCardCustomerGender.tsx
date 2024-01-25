/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useContext, useEffect, useMemo, useState } from 'react';
import PolarChart from '@/modules/dashboard/components/charts/PolarChart';

// Import utilities
import { tailwindConfig, hexToRGB } from '@/modules/dashboard/utils/Utils';
import { SocketContext } from '@/base/store/context/SocketContext';
import { useTranslation } from 'react-i18next';

function AnalyticsCardCustomerGender() {

	const EVENT_NAME = "ANALYTIC_GENDER";
  const socket = useContext(SocketContext);
  const [customerGender, setCustomerGender] = useState<
    { label: string; value: number }[]
  >([]);
	const {t} = useTranslation()
  useEffect(() => {
    socket.on(EVENT_NAME, (data) => {
      setCustomerGender(data);
    });
    socket.emit(EVENT_NAME);
    return () => {
      socket.off(EVENT_NAME);
    };
  }, []);
 
	const chartData = useMemo(()=>{
		if(customerGender?.length > 0){
			return {
				labels: customerGender?.map(cg => cg.label),
				datasets: [
					{
						label: 'Sessions By Gender',
						data: customerGender?.map(cg => cg.value),
						backgroundColor: [
							// @ts-ignore
							`rgba(${hexToRGB(tailwindConfig().theme.colors.indigo?.[500] ?? '')}, 0.8)`,
							// @ts-ignore
							`rgba(${hexToRGB(tailwindConfig().theme.colors?.['light-blue']?.[400] ?? '')}, 0.8)`,
							// @ts-ignore
							`rgba(${hexToRGB(tailwindConfig().theme.colors.green?.[500] ?? '')}, 0.8)`,
						],
						hoverBackgroundColor: [
							// @ts-ignore
							`rgba(${hexToRGB(tailwindConfig().theme.colors.indigo?.[600] ?? '')}, 0.8)`,
							// @ts-ignore
							`rgba(${hexToRGB(tailwindConfig().theme.colors?.['light-blue']?.[500] ?? '')}, 0.8)`,
							// @ts-ignore
							`rgba(${hexToRGB(tailwindConfig().theme.colors.green?.[600] ?? '')}, 0.8)`,
						],
						// @ts-ignore
						hoverBorderColor: tailwindConfig().theme.colors.white ?? '',
					},
				],
			};
		}
	},[customerGender])

	return (
		<div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-gray-200">
			<header className="px-5 py-4 border-b border-gray-100">
				<h2 className="font-semibold text-gray-800">Sessions By Gender</h2>
			</header>
			{/* Chart built with Chart.js 3 */}
			{/* Change the height attribute to adjust the chart height */}
			{
				chartData &&
				<PolarChart data={chartData} width={389} height={260} />
			}
		</div>
	);
}

export default AnalyticsCardCustomerGender;
