import { Card } from "@/components/ui/Card";

export default function AdminDashboard() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Admin Overview</h1>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <Card>
                    <div className="text-sm text-gray-400">Total Users</div>
                    <div className="text-2xl font-bold">1,234</div>
                </Card>
                <Card>
                    <div className="text-sm text-gray-400">Active Subscriptions</div>
                    <div className="text-2xl font-bold text-green-400">856</div>
                </Card>
                <Card>
                    <div className="text-sm text-gray-400">Revenue (Monthly)</div>
                    <div className="text-2xl font-bold text-blue-400">$12,450</div>
                </Card>
                <Card>
                    <div className="text-sm text-gray-400">Trials (Last 24h)</div>
                    <div className="text-2xl font-bold text-yellow-400">45</div>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                    <h2 className="text-lg font-bold mb-4">Recent Sales</h2>
                    <div className="space-y-3">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex justify-between border-b border-gray-800 pb-2">
                                <span>User_{1000 + i}</span>
                                <span className="text-green-400">+$14.99</span>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    );
}
