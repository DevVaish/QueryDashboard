"use client";

import { useState } from "react";
import { QueryInput } from "@/components/query-input";
import { QueryResults } from "@/components/query-results";
import { QueryHistory } from "@/components/query-history-component";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("results");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-700" : "bg-gradient-to-r from-[#6a11cb] to-[#2575fc] h-screen"
      }`}
    >
      {/* Header Section */}
      <div className="p-10 text-center relative">
        <h1 className="text-3xl md:text-4xl font-extrabold">
          <span className={darkMode ? "text-white" : "text-white"}>Data Query </span>
          <span className="text-orange-500">Dashboard</span>
        </h1>
        <p className={`text-lg ${darkMode ? "text-gray-300" : "text-white"}`}>
          Ask questions about your business data in natural language
        </p>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-200 text-gray-800 shadow-md hover:bg-gray-300 transition flex items-center justify-center"
        >
          {darkMode ? (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Query Card */}
          <div className="lg:col-span-2 relative -top-10">
            <Card className={`h-full ${darkMode ? "bg-gray-200" : "bg-gray-100"} shadow-2xl rounded-lg transform hover:scale-[1.02] transition duration-300`}>
              <CardHeader className="pb-2">
                <CardTitle className="text-gray-800 text-xl">Query Your Data</CardTitle>
              </CardHeader>
              <CardContent>
                <QueryInput />

                <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
                  <TabsList className="grid w-full grid-cols-2 bg-gray-200 rounded-md">
                    <TabsTrigger value="results">Results</TabsTrigger>
                    <TabsTrigger value="history">Query History</TabsTrigger>
                  </TabsList>
                  <TabsContent value="results" className="mt-4">
                    <QueryResults />
                  </TabsContent>
                  <TabsContent value="history" className="mt-4">
                    <QueryHistory onSelectQuery={() => setActiveTab("results")} />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Query History Sidebar */}
          <div className="hidden lg:block relative -top-10">
            <Card className={`h-full ${darkMode ? "bg-gray-200" : "bg-gray-100"} shadow-2xl rounded-lg transform hover:scale-[1.02] transition duration-300`}>
              <CardHeader>
                <CardTitle className="text-gray-800 text-xl">Query History</CardTitle>
              </CardHeader>
              <CardContent>
                <QueryHistory onSelectQuery={() => {}} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

