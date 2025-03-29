// Generate mock data for charts based on the query
export function generateMockResponse(query) {
  const lowercaseQuery = query.toLowerCase()

  // Different chart data based on query keywords
  let data = []
  let text = ""

  if (lowercaseQuery.includes("sales") || lowercaseQuery.includes("revenue")) {
    text = "Total sales increased by 15% in Q4 compared to Q3. The strongest growth was in the Technology category."
    data = [
      { name: "Q1", value: 4000 },
      { name: "Q2", value: 3000 },
      { name: "Q3", value: 5000 },
      { name: "Q4", value: 5750 },
    ]
  } else if (lowercaseQuery.includes("product") || lowercaseQuery.includes("category")) {
    text = "Product category analysis shows Technology leads with 40% of total revenue, followed by Furniture at 30%."
    data = [
      { name: "Technology", value: 4000 },
      { name: "Furniture", value: 3000 },
      { name: "Office Supplies", value: 2000 },
      { name: "Services", value: 1000 },
    ]
  } else if (lowercaseQuery.includes("compare") || lowercaseQuery.includes("performance")) {
    text = "This month's performance is up 12% compared to last month. Customer acquisition cost decreased by 5%."
    data = [
      { name: "Jan", value: 2400 },
      { name: "Feb", value: 1398 },
      { name: "Mar", value: 3200 },
      { name: "Apr", value: 3580 },
      { name: "May", value: 4000 },
      { name: "Jun", value: 3500 },
    ]
  } else {
    text =
      "Based on your query, I found that overall business metrics are trending positively with a 8% year-over-year growth."
    data = [
      { name: "Metric 1", value: 2400 },
      { name: "Metric 2", value: 4200 },
      { name: "Metric 3", value: 3800 },
      { name: "Metric 4", value: 3200 },
      { name: "Metric 5", value: 4800 },
    ]
  }

  return {
    text,
    data,
  }
}

