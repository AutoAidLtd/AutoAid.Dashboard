/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useContext, useEffect, useMemo, useState } from "react";
import DoughnutChart from "@/modules/dashboard/components/charts/DoughnutChart";

// Import utilities
import { tailwindConfig } from "@/modules/dashboard/utils/Utils";
import { SocketContext } from "@/base/store/context/SocketContext";
import { useTranslation } from "react-i18next";

function AnalyticsCardCustomerAge() {

  const EVENT_NAME = "ANALYTIC_AGE";
  const socket = useContext(SocketContext);
  const [customerAge, setCustomerAge] = useState<
    { label: string; value: number }[]
  >([]);
	const {t} = useTranslation()
  useEffect(() => {
    socket.on(EVENT_NAME, (data) => {
      setCustomerAge(data);
    });
    socket.emit(EVENT_NAME);
    return () => {
      socket.off(EVENT_NAME);
    };
  }, []);
  const chartData = useMemo(() => {
    const labels = customerAge.map((ca) => ca.label);
    const data = customerAge.map((ca) => ca.value);

    if (customerAge?.length > 0) {
      return {
        labels,
        datasets: [
          {
            label: "Visit By Age Category",
            data,
            backgroundColor: [
              //@ts-ignore
              tailwindConfig().theme.colors.indigo?.[500] ?? "#6366F1",
              //@ts-ignore
              tailwindConfig().theme.colors?.["light-blue"]?.[400] ?? "#38BDF8",
              //@ts-ignore
              tailwindConfig().theme.colors.red[500],
              //@ts-ignore
              tailwindConfig().theme.colors.green[500],
            ],
            hoverBackgroundColor: [
              //@ts-ignore
              tailwindConfig().theme.colors.indigo[600],
              //@ts-ignore
              tailwindConfig().theme.colors?.["light-blue"]?.[500] ?? "#0EA5E9",
              //@ts-ignore
              tailwindConfig().theme.colors.red[600],
              //@ts-ignore
              tailwindConfig().theme.colors.green[600],
            ],
            //@ts-ignore
            hoverBorderColor: tailwindConfig().theme.colors.white,
          },
        ],
      };
    } else {
      return null;
    }
  }, [customerAge]);

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-gray-200">
      <header className="px-5 py-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800">{t("analytic_customer_age")}</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      {chartData && <DoughnutChart data={chartData} width={389} height={260} />}
    </div>
  );
}

export default AnalyticsCardCustomerAge;
