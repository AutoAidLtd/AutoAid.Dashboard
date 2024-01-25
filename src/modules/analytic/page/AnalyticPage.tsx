import { DatePicker } from '@mui/lab';
import React, { useState } from 'react'

import AnalyticsCard01 from '../components/AnalyticsCard01';
import AnalyticsCard02 from '../components/AnalyticsCard02';
import AnalyticsCard03 from '../components/AnalyticsCard03';
import AnalyticsCard04 from '../components/AnalyticsCard04';
import AnalyticsCard05 from '../components/AnalyticsCard05';
import AnalyticsCard06 from '../components/AnalyticsCard06';
import AnalyticsCard07 from '../components/AnalyticsCard07';
import AnalyticsCard08 from '../components/AnalyticsCard08';
import AnalyticsCardCustomerAge from '../components/AnalyticsCardCustomerAge';
import AnalyticsCard10 from '../components/AnalyticsCardCustomerGender';
import AnalyticsCard11 from '../components/AnalyticsCard11';

const AnalyticPage = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      {/* <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        {/* <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Page header */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
            
              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-gray-800 font-bold">Analytics ✨</h1>
              </div>
          
              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                  
                {/* Datepicker built with flatpickr */}
                <DatePicker align="right" />
                  
              </div>
            
            </div>            
            
            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">

              {/* Line chart (Analytics) */}
              <AnalyticsCard01 />
              {/*  Line chart (Active Users Right Now) */}
              <AnalyticsCard02 />
              {/* Stacked bar chart (Acquisition Channels) */}
              <AnalyticsCard03 />
              {/* Horizontal bar chart (Audience Overview) */}
              <AnalyticsCard04 />
              {/* Report card (Top Channels) */}
              <AnalyticsCard05 />
              {/* Report card (Top Pages) */}
              <AnalyticsCard06 />
              {/* Report card (Top Countries) */}
              <AnalyticsCard07 />
              {/* Doughnut chart (Sessions By Device) */}
              <AnalyticsCard08 />
              {/* Doughnut chart (Visit By Age Category) */}
              <AnalyticsCardCustomerAge />
              {/* Polar chart (Sessions By Gender) */}
              <AnalyticsCard10 />
              {/* Table (Top Products) */}
              <AnalyticsCard11 />

            </div>

          </div>
        </main>

      </div>

    </div>
  );
}

export default AnalyticPage
