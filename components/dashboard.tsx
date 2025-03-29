export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("results");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-700" : "bg-gradient-to-r from-[#6a11cb] to-[#2575fc]"
      }`}
    >
      {/* Header Section */}
      <div className="p-10 text-center relative">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white">
          <span>Data Query </span>
          <span className="text-orange-500">Dashboard</span>
        </h1>
        <p className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
          Ask questions about your business data in natural language
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Query Card */}
          <div className="lg:col-span-2 relative -top-10">
            <Card className={`h-full ${darkMode ? "bg-gray-200" : "bg-gray-100"} shadow-2xl rounded-lg`}>
              <CardHeader className="pb-2">
                <CardTitle className="text-white text-xl">Query Your Data</CardTitle>
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
        </div>
      </div>
    </div>
  );
}
