"use client"

import { useDispatch, useSelector } from "react-redux"
import { rerunQuery, clearHistory, setQueryResult } from "@/lib/store/query-slice"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Clock, Trash2 } from "lucide-react"
import { AppDispatch } from "@/lib/store/store"
import { RootState } from "@/lib/store/store"

interface HistoryItem {
  query: string
  result: any
  timestamp: number
}

export function QueryHistory({ onSelectQuery }: { onSelectQuery?: () => void }) {
  const dispatch = useDispatch<AppDispatch>()
  const { history, loading } = useSelector((state: RootState) => state.query)

  const handleRerunQuery = (query: string) => {
    dispatch(rerunQuery(query))

    // Find the query in history and simulate the API call
    const historyItem = history.find((item: HistoryItem) => item.query === query)
    if (historyItem) {
      // Simulate API delay
      setTimeout(() => {
        dispatch(
          setQueryResult({
            query: historyItem.query,
            response: historyItem.result,
          }),
        )
      }, 1000)
    }

    if (onSelectQuery) onSelectQuery()
  }

  const handleClearHistory = () => {
    dispatch(clearHistory())
  }

  if (history.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        <p>No query history yet</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-medium">Previous Queries</h3>
        <Button variant="outline" size="sm" onClick={handleClearHistory} disabled={loading}>
          <Trash2 className="h-4 w-4 mr-2" />
          Clear
        </Button>
      </div>

      <ScrollArea className="h-[300px]">
        <div className="space-y-2">
          {history.map((item: HistoryItem, index: number) => (
            <div
              key={index}
              className="flex items-start p-3 rounded-md border hover:bg-accent cursor-pointer"
              onClick={() => handleRerunQuery(item.query)}
            >
              <Clock className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0 text-muted-foreground" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{item.query}</p>
                <p className="text-xs text-muted-foreground truncate">{new Date(item.timestamp).toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
} 