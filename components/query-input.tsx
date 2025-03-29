"use client"

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { submitQuery } from "@/lib/store/query-slice"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import { AppDispatch } from "@/lib/store/store"
import { ChangeEvent, FormEvent } from "react"

interface QueryState {
  loading: boolean
  history: Array<{
    query: string
    result: any
    timestamp: number
  }>
}

export function QueryInput() {
  const [inputValue, setInputValue] = useState("")
  const [error, setError] = useState("")
  const dispatch = useDispatch<AppDispatch>()
  const { loading } = useSelector((state: { query: QueryState }) => state.query)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!inputValue.trim()) {
      setError("Please enter a query")
      return
    }

    setError("")
    dispatch(submitQuery(inputValue))
    setInputValue("")
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    if (error) setError("")
  }

  const suggestions = [
    "What were the total sales last quarter?",
    "Show me revenue by product category",
    "Compare this month's performance to last month",
  ]

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          value={inputValue}
          onChange={handleChange}
          placeholder="Ask a question about your business data..."
          className="flex-1"
          disabled={loading}
        />
        <Button type="submit" disabled={loading}>
          {loading ? "Processing..." : "Ask"}
        </Button>
      </form>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="flex flex-wrap gap-2">
        {suggestions.map((suggestion) => (
          <Button
            key={suggestion}
            variant="outline"
            size="sm"
            onClick={() => setInputValue(suggestion)}
            disabled={loading}
            className="text-xs"
          >
            {suggestion}
          </Button>
        ))}
      </div>
    </div>
  )
}

