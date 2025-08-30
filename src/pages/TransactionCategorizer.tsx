import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Upload, 
  PieChart, 
  Coffee, 
  Car, 
  ShoppingBag, 
  Home, 
  Gamepad2, 
  HeartHandshake,
  TrendingUp,
  Calendar
} from "lucide-react";

const mockCategories = [
  { name: "Food & Dining", amount: 12450, icon: Coffee, color: "bg-red-100 text-red-600" },
  { name: "Transportation", amount: 8200, icon: Car, color: "bg-blue-100 text-blue-600" },
  { name: "Shopping", amount: 15600, icon: ShoppingBag, color: "bg-purple-100 text-purple-600" },
  { name: "Bills & Utilities", amount: 6750, icon: Home, color: "bg-orange-100 text-orange-600" },
  { name: "Entertainment", amount: 4300, icon: Gamepad2, color: "bg-green-100 text-green-600" },
  { name: "Healthcare", amount: 3200, icon: HeartHandshake, color: "bg-pink-100 text-pink-600" },
];

const TransactionCategorizer = () => {
  const [transactionData, setTransactionData] = useState("");
  const [hasData, setHasData] = useState(false);

  const handleAnalyze = () => {
    if (transactionData.trim()) {
      setHasData(true);
    }
  };

  const totalAmount = mockCategories.reduce((sum, cat) => sum + cat.amount, 0);

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Transaction Categorizer
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Upload your UPI transaction data and get intelligent categorization with spending insights.
          </p>
        </div>

        {!hasData ? (
          /* Upload Section */
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-card">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2">
                  <Upload className="h-6 w-6" />
                  Upload Transaction Data
                </CardTitle>
                <CardDescription>
                  Paste your UPI transaction history or upload a file to get started.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="file-upload">Upload File (CSV, Excel, or Text)</Label>
                  <Input 
                    id="file-upload" 
                    type="file" 
                    accept=".csv,.xlsx,.txt"
                    className="mt-2"
                  />
                </div>
                
                <div className="text-center text-muted-foreground">
                  <span>or</span>
                </div>

                <div>
                  <Label htmlFor="transaction-data">Paste Transaction Data</Label>
                  <Textarea
                    id="transaction-data"
                    placeholder="Paste your UPI transaction history here. Include details like date, amount, merchant, and transaction ID..."
                    value={transactionData}
                    onChange={(e) => setTransactionData(e.target.value)}
                    rows={8}
                    className="mt-2"
                  />
                </div>

                <Button 
                  onClick={handleAnalyze} 
                  className="w-full" 
                  size="lg"
                  disabled={!transactionData.trim()}
                >
                  Analyze Transactions
                  <TrendingUp className="ml-2 h-4 w-4" />
                </Button>

                <div className="text-sm text-muted-foreground text-center">
                  <p>🔒 Your data is processed locally and never stored on our servers.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          /* Dashboard Section */
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Summary Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">Total Spending</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">₹{totalAmount.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">This month</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{mockCategories.length}</div>
                  <div className="text-sm text-muted-foreground">Identified</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">Avg. Transaction</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">₹{Math.round(totalAmount / 45).toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">45 transactions</div>
                </CardContent>
              </Card>
            </div>

            {/* Category Breakdown */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Categories List */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PieChart className="h-5 w-5" />
                    Spending by Category
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockCategories.map((category) => {
                      const percentage = (category.amount / totalAmount) * 100;
                      const Icon = category.icon;
                      
                      return (
                        <div key={category.name} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg ${category.color}`}>
                              <Icon className="h-4 w-4" />
                            </div>
                            <span className="font-medium">{category.name}</span>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold">₹{category.amount.toLocaleString()}</div>
                            <div className="text-sm text-muted-foreground">{percentage.toFixed(1)}%</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Visual Chart Placeholder */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Monthly Trends
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gradient-hero rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <PieChart className="h-12 w-12 text-primary mx-auto mb-3" />
                      <p className="text-muted-foreground">Interactive charts coming soon</p>
                      <p className="text-sm text-muted-foreground">Detailed spending analytics and trends</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => setHasData(false)} variant="outline">
                Upload New Data
              </Button>
              <Button>
                Export Report
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionCategorizer;