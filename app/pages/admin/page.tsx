'use client';

import {
    FiUser,
    FiMail,
    FiPhone,
    FiMessageSquare,
    FiCalendar,
    FiCheckCircle,
    FiClock,
} from 'react-icons/fi';

import { useEffect, useState } from 'react';
import axios from 'axios';

type Inquiry = {
    id: string;
    name: string;
    email: string;
    message: string;
    phone?: string;
    status?: string;
    date?: Date;
};

export default function Admin() {
    const [inquiries, setInquiries] = useState<Inquiry[]>([]);


    useEffect(() => {
        const Iquiries = async () => {
            try {
                const res = await axios.get('/api/Inquiry');
                // const data = res.data;
                setInquiries(res.data.data);
            } catch (error) {
                console.log('error featching api', error);
            }
        };
        Iquiries();
    }, []);

    console.log(inquiries);

    return (
        <>
            (
            <div className="min-h-screen bg-gray-50 p-6">
                {/* Header */}
                <header className="mb-8 flex-1/2 items-center justify-center">
                    <h1 className="text-3xl font-bold text-blue-800">Admin Dashboard</h1>
                    <p className="text-gray-600">Manage customer inquiries</p>
                </header>

                {/* Stats Cards */}
                <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                    <div className="rounded-lg bg-white p-6 shadow">
                        <div className="flex items-center">
                            <div className="rounded-full bg-blue-100 p-3 text-blue-600">
                                <FiMail size={20} />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm text-gray-500">Total Inquiries</p>
                                <p className="text-2xl font-bold">{inquiries.length}</p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg bg-white p-6 shadow">
                        <div className="flex items-center">
                            <div className="rounded-full bg-amber-100 p-3 text-amber-600">
                                <FiClock size={20} />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm text-gray-500">Pending</p>
                                <p className="text-2xl font-bold">{20}</p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg bg-white p-6 shadow">
                        <div className="flex items-center">
                            <div className="rounded-full bg-green-100 p-3 text-green-600">
                                <FiCheckCircle size={20} />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm text-gray-500">Resolved</p>
                                <p className="text-2xl font-bold">{20}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Inquiry Table */}
                <div className="overflow-hidden rounded-lg bg-white shadow">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                        <FiUser className="mr-1 inline" /> Name
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                        <FiMail className="mr-1 inline" /> Email
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                        <FiPhone className="mr-1 inline" /> Phone
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                        <FiMessageSquare className="mr-1 inline" /> Message
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                        <FiCalendar className="mr-1 inline" /> Date
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {inquiries &&
                                    inquiries.map((inq) => (
                                        <tr key={inq.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm font-medium text-gray-900">
                                                    {inq.name}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                    {inq.email}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                    {inq.phone}
                                                </div>
                                            </td>
                                            <td className="max-w-xs px-6 py-4">
                                                <div className="truncate text-sm text-gray-900">
                                                    {inq.message}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-500">{12}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span
                                                    className={`rounded-full px-2 py-1 text-xs font-medium ${
                                                        inq.status === 'pending'
                                                            ? 'bg-amber-100 text-amber-800'
                                                            : 'bg-green-100 text-green-800'
                                                    }`}
                                                >
                                                    {inq.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            )
        </>
    );
}
