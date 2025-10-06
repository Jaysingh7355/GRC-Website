
"use client";

import {
  FiUser,
  FiMail,
  FiPhone,
  FiMessageSquare,
  FiCalendar,
  FiCheckCircle,
  FiClock,
} from "react-icons/fi";

import { useEffect, useState } from "react";
import axios from "axios";
import { Phone } from "lucide-react";

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
   const [inquiries, setInquiries] = useState<Inquiry[]>([])

const [loading, setLoading] = useState(true)
 
   useEffect(()=>{
    const Iquiries = async () => {
     try {
      const res = await axios.get("/api/Inquiry");
      const data = res.data;
      setInquiries(res.data.data);
     } catch (error) {
      console.log("error featching api", error) 
     }finally{
      setLoading(false)
     }
    }
    Iquiries()
   },[]) 

   console.log(inquiries)

  return (
    <>
      <div className="min-h-screen bg-gray-50 p-6">
        {/* Header */}
        <header className="mb-8 flex-1/2 justify-center items-center">
          <h1 className="text-3xl font-bold text-blue-800 ">Admin Dashboard</h1>
          <p className="text-gray-600">Manage customer inquiries</p>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                <FiMail size={20} />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Total Inquiries</p>
                <p className="text-2xl font-bold">{inquiries.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-amber-100 text-amber-600">
                <FiClock size={20} />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Pending</p>
                <p className="text-2xl font-bold">{20}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 text-green-600">
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
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <FiUser className="inline mr-1" /> Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <FiMail className="inline mr-1" /> Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <FiPhone className="inline mr-1" /> Phone
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <FiMessageSquare className="inline mr-1" /> Message
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <FiCalendar className="inline mr-1" /> Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {inquiries&&inquiries.map((inq) => (
                  
                  <tr key={inq.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {inq.name  }
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{inq.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{inq.phone}</div>
                    </td>
                    <td className="px-6 py-4 max-w-xs">
                      <div className="text-sm text-gray-900 truncate">
                        {inq.message}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {12}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">                      
                      <span
                        className={`px-2 py-1 text-xs rounded-full font-medium ${
                          inq.status === "pending"
                            ? "bg-amber-100 text-amber-800"
                            : "bg-green-100 text-green-800"
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
    </>
  );
}
