import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function UsersPage() {
    const users = [
        { id: 1001, name: "John Doe", email: "john@example.com", status: "Active", plan: "12 Months" },
        { id: 1002, name: "Jane Smith", email: "jane@test.com", status: "Expired", plan: "1 Month" },
        { id: 1003, name: "Bob Wilson", email: "bob@demo.com", status: "Active", plan: "6 Months" },
    ];

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">User Management</h1>
                <Button variant="primary" className="text-sm">Add New User</Button>
            </div>

            <Card className="overflow-hidden p-0">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-gray-800 bg-black/20">
                            <th className="p-4 text-gray-400 font-medium">ID</th>
                            <th className="p-4 text-gray-400 font-medium">Name</th>
                            <th className="p-4 text-gray-400 font-medium">Email</th>
                            <th className="p-4 text-gray-400 font-medium">Status</th>
                            <th className="p-4 text-gray-400 font-medium">Plan</th>
                            <th className="p-4 text-gray-400 font-medium">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} className="border-b border-gray-800 hover:bg-white/5">
                                <td className="p-4 text-gray-300">#{user.id}</td>
                                <td className="p-4 font-medium">{user.name}</td>
                                <td className="p-4 text-gray-400">{user.email}</td>
                                <td className="p-4">
                                    <span className={`px-2 py-1 rounded text-xs ${user.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                                        {user.status}
                                    </span>
                                </td>
                                <td className="p-4">{user.plan}</td>
                                <td className="p-4">
                                    <span className="text-blue-400 cursor-pointer text-sm">Edit</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>
        </div>
    );
}
