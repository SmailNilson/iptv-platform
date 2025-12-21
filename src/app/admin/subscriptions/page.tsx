import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function SubscriptionsPage() {
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Subscription Plans</h1>
                <Button variant="primary" className="text-sm">Create Plan</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {['1 Month', '6 Months', '12 Months'].map((plan) => (
                    <Card key={plan}>
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-xl font-bold">{plan}</h3>
                                <span className="text-sm text-gray-400">Standard Package</span>
                            </div>
                            <div className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">Active</div>
                        </div>

                        <div className="space-y-2 mb-6">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-400">Price USD</span>
                                <span>$14.99</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-400">Line Duration</span>
                                <span>30 Days</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-400">Connections</span>
                                <span>1</span>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <Button variant="secondary" fullWidth className="text-sm">Edit</Button>
                            <Button variant="outline" fullWidth className="text-sm">Disable</Button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
