import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function PaymentMethods() {
    return (
        <div className="space-y-6">
            <h2 className="text-xl font-bold">Select Payment Method</h2>

            <Card className="bg-[#1a1f2e] border-blue-500/30">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">💳</div>
                        <div>
                            <div className="font-bold">Credit Card</div>
                            <div className="text-sm text-gray-400">Stripe Secure Checkout</div>
                        </div>
                    </div>
                    <input type="radio" name="payment" defaultChecked className="w-5 h-5 accent-blue-500" />
                </div>
                <p className="text-sm text-gray-500 mb-4">
                    Pay securely with Visa, Mastercard, Amex. Instant activation.
                </p>
                <div className="flex gap-2">
                    <span className="bg-white/5 px-2 py-1 rounded text-xs">Visa</span>
                    <span className="bg-white/5 px-2 py-1 rounded text-xs">Mastercard</span>
                    <span className="bg-white/5 px-2 py-1 rounded text-xs">Apple Pay</span>
                </div>
            </Card>

            <Card className="opacity-75 hover:opacity-100 transition-opacity">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400">₿</div>
                        <div>
                            <div className="font-bold">Crypto</div>
                            <div className="text-sm text-gray-400">Bitcoin, ETH, USDT</div>
                        </div>
                    </div>
                    <input type="radio" name="payment" className="w-5 h-5 accent-orange-500" />
                </div>
                <p className="text-sm text-gray-500">
                    Pay anonymously with Cryptocurrency. 5% Discount included.
                </p>
            </Card>

            <Button fullWidth variant="primary" className="py-3 text-lg">
                Proceed to Payment
            </Button>
        </div>
    );
}
