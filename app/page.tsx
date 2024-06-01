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
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function page() {
  return (
    <>
      <NavBar1 />
      <div className="w-screen h-1/2 flex flex-col gap-2 items-center justify-center p-10">
        <div className="text-center ">
          <h1 className="text-5xl  md:text-6xl font-bold leading-relaxed ">
            Hi, there 👋
          </h1>
          <h2 className="text-3xl md:text-4xl font-extrabold text-pretty text-green-500">
            Welcome to Accounts apps,a place to manage all your shop{"'"}s
            cashflow
          </h2>
          <Button variant="default" size="sm" className="mt-4 mb-2">
            <Link href="/auth/login">Click here to login </Link>
          </Button>
          <p className="text-red-600 text-sm">only admin can access the app others can view it</p>
        </div>
        <div>
          <h2 className="font-semibold text-lg underline ">Features include</h2>
          <ul className="font-medium leading-loose ml-4">
            <li>1. Form to enter your daily data</li>
            <li>2. Table to view all your entries</li>
            <li>
              3. Cards to show your total revenues on monthly ,weekly and daily
              basis
            </li>
            <h2 className="font-semibold text-lg underline mb-1">
              Other Features
            </h2>
            <span className=" font-semibold text-xl bg-orange-400 text-white px-1 rounded-md m-2">
              Coming soon ...{" "}
            </span>
            <ul className="ml-4">
              <li>
                1. Download your datas as excel file, pdfs and other formats
              </li>
              <li>2. Charts to visualise your revenues and profits</li>
              <li>3. User settings to add new information about your shops </li>
            </ul>
          </ul>
        </div>
      </div>
      <h2 className="text-4xl font-bold text-center text-amber-300 px-2 ">
        Let{"'s"} have a sneaky peek around upcoming features
      </h2>
      <p className="text-lg font-medium text-center px-2 ">
        <span className="text-lg md:text-xl font-semibold text-yellow-300 mr-2">
          Pro tip:
        </span>
        Charts will have a better view in dark mode
      </p>
      <div className="grid lg:grid-cols-1 md:grid-cols-2  m-2 gap-4">
        <div className="flex flex-col items-center justify-center border border-slate-900 bg-slate-900/50 rounded-xl  h-[400px] m-1">
          <h3 className="text-2xl font-semibold pb-2">Area Chart</h3>
          <AreaChartComponent />
        </div>
        <div className="flex flex-col items-center justify-center border border-slate-900 bg-slate-900/50 rounded-xl   h-[400px] m-1">
          <h3 className="text-2xl font-semibold">Stacked Bar Chart</h3>
          <StackedBarChartComponent />
        </div>
        <div className="flex flex-col items-center justify-center border border-slate-900 bg-slate-900/50 rounded-xl   h-[400px] m-1">
          <h3 className="text-2xl font-semibold">Pie Chart</h3>
          <SimplePieChartComponent />
        </div>
        <div className="flex flex-col items-center justify-center border border-slate-900 bg-slate-900/50 rounded-xl   h-[400px] m-1">
          <h3 className="text-2xl font-semibold">Line Chart</h3>
          <SimpleLineChartComponent />
        </div>
        <div className="flex flex-col items-center justify-center border border-slate-900 bg-slate-900/50 rounded-xl   h-[400px] m-1">
          <h3 className="text-2xl font-semibold pb-2">Vertical Bar Chart</h3>
          <VerticalBarChartComponent />
        </div>
      </div>
    </>
  );
}
