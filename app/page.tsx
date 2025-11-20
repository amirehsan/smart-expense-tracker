import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const features = [
    {
      title: "Bank Integration",
      description: "Connect your bank accounts securely with Plaid for automatic transaction syncing",
    },
    {
      title: "Smart Budgeting",
      description: "Set budgets by category and track your spending with real-time alerts",
    },
    {
      title: "Financial Goals",
      description: "Create savings goals and track your progress toward financial freedom",
    },
    {
      title: "Detailed Analytics",
      description: "Visualize your spending patterns with charts and insights",
    },
    {
      title: "Transaction Management",
      description: "Categorize, search, and manage all your transactions in one place",
    },
    {
      title: "Reports & Exports",
      description: "Generate detailed reports and export your financial data",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <h1 className="text-2xl font-bold">Smart Expense Tracker</h1>
          <div className="flex gap-4">
            <Link href="/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Take Control of Your Finances
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          Track expenses, manage budgets, and achieve your financial goals with our powerful personal finance management tool.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link href="/signup">
            <Button size="lg" className="w-full sm:w-auto">
              Start Free Today
            </Button>
          </Link>
          <Link href="/login">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Sign In
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h3 className="mb-12 text-center text-3xl font-bold">
          Everything You Need to Manage Your Money
        </h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-muted/40 py-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="mb-4 text-3xl font-bold">Ready to Get Started?</h3>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Join today and start tracking your expenses like a pro. It's free to get started.
          </p>
          <Link href="/signup">
            <Button size="lg">Create Your Free Account</Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 Smart Expense Tracker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
