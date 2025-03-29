"use client"

import { useSelector } from "react-redux"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RootState } from "@/lib/store/store"
import {
  BarChart,
  LineChart,
  AreaChart,
  Bar,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

export function QueryResults() {
  const { currentQuery, currentResult, loading, error } = useSelector((state: RootState) => state.query)

  if (loading) {
    return <LoadingState />
  }

  if (error) {
    return (
      <Card className="bg-destructive/10 border-destructive">
        <CardContent className="pt-6">
          <p className="text-destructive font-medium">Error: {error}</p>
        </CardContent>
      </Card>
    )
  }

  if (!currentQuery) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        <p>Enter a query to see results</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium mb-2">Query</h3>
        <p className="text-muted-foreground">{currentQuery}</p>
      </div>

      <div>
        <h3 className="font-medium mb-2">Response</h3>
        <p>{currentResult?.text}</p>
      </div>

      {currentResult?.data && (
        <div>
          <h3 className="font-medium mb-2">Visualization</h3>
          <Tabs defaultValue="bar">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="bar">Bar Chart</TabsTrigger>
              <TabsTrigger value="line">Line Chart</TabsTrigger>
              <TabsTrigger value="area">Area Chart</TabsTrigger>
            </TabsList>
            <TabsContent value="bar" className="pt-4">
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={currentResult.data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
            <TabsContent value="line" className="pt-4">
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={currentResult.data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
            <TabsContent value="area" className="pt-4">
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={currentResult.data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="value" fill="#8884d8" stroke="#8884d8" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  )
}

function LoadingState() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium mb-2">Processing your query...</h3>
        <div className="flex items-center space-x-4">
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-[250px]" />
        </div>
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-[300px]" />
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
      <Skeleton className="h-[200px] w-full rounded-xl" />
    </div>
  )
}

