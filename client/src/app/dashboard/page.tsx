import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
// import { signOut } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';

const DashboardPage = async() => {
    const session = await getServerSession(authOptions);
    return (
        <div className="flex w-full flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        {session?.user && (
          <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full text-center">
            <Image
              alt="profileImage"
              width={120}
              height={120}
              src={session?.user?.image || "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"}
              className="mx-auto rounded-full border-4 border-gray-200"
            />
      
            <h1 className="text-3xl font-bold mt-4 text-gray-800">
              Welcome, {session.user.name}
            </h1>
      
            <p className="text-lg text-gray-600 mt-2">
              You are logged in as <span className="font-medium text-gray-900">{session.user.email}</span>
            </p>
      
            {/* <button
              onClick={() => signOut()}
              className="mt-6 px-5 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition"
            >
              Sign Out
            </button> */}
          </div>
        )}
      </div>
      
    );
};

export default DashboardPage;