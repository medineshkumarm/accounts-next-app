import React from "react";
import { createTransaction } from "./_actions/actions";
import NavBar1 from "@/components/nav-bars/nav-bar-variants";
import MoneyCard from "@/components/money-card";
import DefaultTable from "@/components/tables/default-table";
import TableTabs from "@/components/table-tabs";
import AreaChartComponent from "@/components/charts/area-charts";
import {
  StackedBarChartComponent,
  StackedBarChartComponent2,
} from "@/components/charts/bar-charts";
import SimpleLineChartComponent from "@/components/charts/line-charts";
import SimplePieChartComponent from "@/components/charts/pie-charts";
import { VerticalBarChartComponent } from "@/components/charts/composite-charts";
export default function page() {
  return (
    <>
      <NavBar1 />
  
      <div className="grid grid-cols-1 md:grid-cols-2 m-2 md:m-10 gap-4">
        <div className="flex flex-col items-center justify-center border border-slate-900 bg-slate-900/50 rounded-xl  h-[400px]">
          <h3 className="text-2xl font-semibold">Area Chart</h3>
          <AreaChartComponent />
        </div>
        <div className="flex flex-col items-center justify-center border border-slate-900 bg-slate-900/50 rounded-xl   h-[400px]">
          <h3 className="text-2xl font-semibold">Area Chart</h3>
          <StackedBarChartComponent />
        </div>
        <div className="flex flex-col items-center justify-center border border-slate-900 bg-slate-900/50 rounded-xl   h-[400px]">
          <h3 className="text-2xl font-semibold">Area Chart</h3>
          <SimplePieChartComponent />
        </div>
        <div className="flex flex-col items-center justify-center border border-slate-900 bg-slate-900/50 rounded-xl   h-[400px]">
          <h3 className="text-2xl font-semibold">Area Chart</h3>
          <SimpleLineChartComponent />
        </div>
        <div className="flex flex-col items-center justify-center border border-slate-900 bg-slate-900/50 rounded-xl   h-[400px]">
          <h3 className="text-2xl font-semibold">Area Chart</h3>
          <VerticalBarChartComponent />
        </div>
      </div>
      {/* <div className="m-10">
        <Toast />
      </div> */}
    </>
  );
}
