import React, { useState } from 'react';
import TimeForm from '../components/ui/TimeForm';
import TimeChart from '../components/TimeChart';

const Home = () => {
    const [data, setData] = useState<{ activity: string; hours: number }[]>([]);

    const handleAdd = (activity: string, hours: number) => {
        setData(prev => [...prev, { activity, hours }]);
    };

    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100">
            <section className="w-full max-w-md p-6 bg-white shadow-xl rounded-2xl space-y-6">
                <h1 className="text-3xl font-extrabold text-center text-blue-700 tracking-tight">
                    Time Tracker
                </h1>
                <TimeForm onAdd={handleAdd} />
                <div className="bg-gray-50 rounded-lg p-4 shadow-inner">
                    <TimeChart data={data} />
                </div>
            </section>
        </main>
    );
};

export default Home;