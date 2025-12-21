import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function Dashboard() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-8 text-[var(--text-primary)]">Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <Card>
                    <h3 className="text-gray-400 text-sm mb-2">Subscription Status</h3>
                    <div className="text-2xl font-bold text-[var(--success)] mb-1">Active</div>
                    <p className="text-sm text-gray-500">Expires in 28 days</p>
                </Card>

                <Card>
                    <h3 className="text-gray-400 text-sm mb-2">Current Plan</h3>
                    <div className="text-2xl font-bold text-white mb-1">12 Months Premium</div>
                    <div className="text-sm text-[var(--accent-1)] cursor-pointer">Upgrade</div>
                </Card>

                <Card>
                    <h3 className="text-gray-400 text-sm mb-2">Quick Actions</h3>
                    <div className="flex gap-2 mt-2">
                        <Button variant="secondary" className="text-sm py-2 px-4">Renew</Button>
                        <Button variant="outline" className="text-sm py-2 px-4">Get Support</Button>
                    </div>
                </Card>
            </div>

            <h2 className="text-xl font-bold mb-4 text-[var(--text-primary)]">Access Credentials</h2>
            <Card className="max-w-2xl">
                <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center border-b border-[var(--glass-border)] pb-4">
                        <div className="text-gray-400">Username</div>
                        <div className="md:col-span-2 text-white font-mono bg-[rgba(0,0,0,0.3)] p-2 rounded">user_12345</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center border-b border-[var(--glass-border)] pb-4">
                        <div className="text-gray-400">Password</div>
                        <div className="md:col-span-2 text-white font-mono bg-[rgba(0,0,0,0.3)] p-2 rounded">••••••••••</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                        <div className="text-gray-400">Host URL</div>
                        <div className="md:col-span-2 text-white font-mono bg-[rgba(0,0,0,0.3)] p-2 rounded">http://line.TVhost.com:80</div>
                    </div>
                </div>

                <div className="mt-6 flex justify-end">
                    <Button variant="primary">Download M3U Playlist</Button>
                </div>
            </Card>
        </div>
    );
}
