import React, { useState } from 'react';
import { 
    BarChart, Bar, LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell 
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUp, ArrowDown, Activity, Users, DollarSign, Shield, Zap, Database, Trophy, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

// --- Mock Data Generators ---

const generateTimeSeries = (points, base, variance) => 
    Array.from({ length: points }, (_, i) => ({
        name: `Day ${i + 1}`,
        value: Math.floor(base + Math.random() * variance - variance / 2),
        value2: Math.floor((base * 0.6) + Math.random() * (variance * 0.5))
    }));

const aidGuardianData = {
    metrics: [
        { label: "Total Scans (24h)", value: "2.4M", change: "+12%", icon: Activity, trend: "up" },
        { label: "Threats Blocked", value: "14.2K", change: "-5%", icon: Shield, trend: "down" },
        { label: "Avg Latency", value: "8ms", change: "-2ms", icon: Zap, trend: "up" }, // "up" here means good (improvement)
        { label: "Uptime", value: "99.99%", change: "0%", icon: Database, trend: "neutral" }
    ],
    volumeData: generateTimeSeries(14, 150000, 30000),
    riskData: [
        { name: 'Safe', value: 85, color: '#10b981' },
        { name: 'Spam', value: 10, color: '#f59e0b' },
        { name: 'NSFW', value: 3, color: '#f43f5e' },
        { name: 'Malicious', value: 2, color: '#6366f1' }
    ]
};

const playArtsData = {
    metrics: [
        { label: "Assets Anchored", value: "842K", change: "+24%", icon: Database, trend: "up" },
        { label: "Value Routed", value: "$4.2M", change: "+8%", icon: DollarSign, trend: "up" },
        { label: "Active Nodes", value: "1,204", change: "+15", icon: Activity, trend: "up" },
        { label: "Attestations", value: "5.1M", change: "+32%", icon: Shield, trend: "up" }
    ],
    anchoringData: generateTimeSeries(14, 5000, 1000),
    valueData: generateTimeSeries(14, 25000, 5000)
};

const elememetalData = {
    metrics: [
        { label: "Daily Battles", value: "85K", change: "+45%", icon: Trophy, trend: "up" },
        { label: "Active Players", value: "12.5K", change: "+12%", icon: Users, trend: "up" },
        { label: "Market Vol", value: "145 ETH", change: "+5%", icon: DollarSign, trend: "up" },
        { label: "Cards Minted", value: "240K", change: "+8%", icon: Zap, trend: "up" }
    ],
    retentionData: [
        { name: 'D1', value: 65 }, { name: 'D7', value: 42 }, { name: 'D30', value: 28 }, { name: 'D90', value: 15 }
    ],
    sessionData: generateTimeSeries(14, 45, 10) // Mins played
};

const stockhooData = {
    metrics: [
        { label: "Signals Issued", value: "128", change: "+4", icon: Activity, trend: "up" },
        { label: "Win Rate", value: "68%", change: "+2%", icon: TrendingUp, trend: "up" },
        { label: "Zone Accuracy", value: "92%", change: "+1%", icon: Zap, trend: "up" },
        { label: "Active Users", value: "3.4K", change: "+15%", icon: Users, trend: "up" }
    ],
    performanceData: generateTimeSeries(14, 100, 20), // ROI relative index
    zoneData: generateTimeSeries(14, 85, 10) // Accuracy %
};


// --- Components ---

const MetricCard = ({ metric, color }) => {
    const Icon = metric.icon;
    const isPositive = metric.trend === 'up';
    const trendColor = isPositive ? 'text-green-500' : metric.trend === 'down' ? 'text-red-500' : 'text-neutral-500';
    
    // Custom color mapping for trend indicators based on context (e.g. latency down is good)
    // For simplicity, using simple mapping.

    return (
        <Card className="bg-black/20 border-white/10 backdrop-blur-sm hover:border-white/20 transition-colors">
            <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <div className={`p-2 rounded-lg bg-${color}-500/10 text-${color}-400`}>
                        <Icon className="w-5 h-5" />
                    </div>
                    <div className={`flex items-center text-xs font-bold ${trendColor} bg-white/5 px-2 py-1 rounded-full`}>
                        {metric.change.startsWith('+') ? <ArrowUp className="w-3 h-3 mr-1" /> : <ArrowDown className="w-3 h-3 mr-1" />}
                        {metric.change}
                    </div>
                </div>
                <div className="text-3xl font-bold text-white mb-1">{metric.value}</div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider font-medium">{metric.label}</div>
            </CardContent>
        </Card>
    );
};

export default function AnalyticsDashboard({ type, theme = "indigo" }) {
    const [activeTab, setActiveTab] = useState("overview");

    let data, color;
    switch(type) {
        case 'aidguardian': data = aidGuardianData; color = "indigo"; break;
        case 'playarts': data = playArtsData; color = "lime"; break;
        case 'elememetal': data = elememetalData; color = "orange"; break;
        case 'stockhoo': data = stockhooData; color = "emerald"; break;
        default: data = aidGuardianData; color = "indigo";
    }

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-[#0A0A0A] border border-white/10 p-3 rounded-xl shadow-xl">
                    <p className="text-white text-xs font-bold mb-1">{label}</p>
                    {payload.map((entry, index) => (
                        <p key={index} style={{ color: entry.color }} className="text-xs font-mono">
                            {entry.name}: {entry.value}
                        </p>
                    ))}
                </div>
            );
        }
        return null;
    };

    return (
        <div className="w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {data.metrics.map((m, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <MetricCard metric={m} color={color} />
                    </motion.div>
                ))}
            </div>

            <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
                <div className="flex justify-between items-center mb-6">
                    <TabsList className="bg-black/20 border border-white/10">
                        <TabsTrigger value="overview" className="data-[state=active]:bg-white/10">Overview</TabsTrigger>
                        <TabsTrigger value="trends" className="data-[state=active]:bg-white/10">Trends</TabsTrigger>
                    </TabsList>
                </div>

                <TabsContent value="overview" className="space-y-4">
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="md:col-span-2 bg-black/20 border-white/10 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="text-sm font-medium text-neutral-400 uppercase tracking-wider">
                                    {type === 'aidguardian' ? 'Analysis Volume' : 
                                     type === 'playarts' ? 'Value Routing Volume' : 
                                     type === 'elememetal' ? 'Player Activity' : 'Signal Performance'}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="h-[300px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={type === 'aidguardian' ? data.volumeData : type === 'playarts' ? data.valueData : type === 'elememetal' ? data.sessionData : data.performanceData}>
                                        <defs>
                                            <linearGradient id="colorMain" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor={`var(--color-${color})`} stopOpacity={0.3}/>
                                                <stop offset="95%" stopColor={`var(--color-${color})`} stopOpacity={0}/>
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                                        <XAxis dataKey="name" stroke="#666" fontSize={10} tickLine={false} axisLine={false} />
                                        <YAxis stroke="#666" fontSize={10} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
                                        <Tooltip content={<CustomTooltip />} />
                                        <Area 
                                            type="monotone" 
                                            dataKey="value" 
                                            stroke={type === 'aidguardian' ? '#6366f1' : type === 'playarts' ? '#84cc16' : type === 'elememetal' ? '#f97316' : '#10b981'} 
                                            fillOpacity={1} 
                                            fill="url(#colorMain)" 
                                            strokeWidth={2}
                                        />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>

                        <Card className="bg-black/20 border-white/10 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="text-sm font-medium text-neutral-400 uppercase tracking-wider">
                                    {type === 'aidguardian' ? 'Risk Distribution' : 
                                     type === 'playarts' ? 'Asset Types' : 
                                     type === 'elememetal' ? 'Retention Rates' : 'Zone Accuracy'}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="h-[300px] flex items-center justify-center">
                                {type === 'aidguardian' ? (
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie
                                                data={data.riskData}
                                                innerRadius={60}
                                                outerRadius={80}
                                                paddingAngle={5}
                                                dataKey="value"
                                            >
                                                {data.riskData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                                ))}
                                            </Pie>
                                            <Tooltip content={<CustomTooltip />} />
                                        </PieChart>
                                    </ResponsiveContainer>
                                ) : (
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={type === 'elememetal' ? data.retentionData : data.volumeData.slice(0, 5)}>
                                            <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                                            <XAxis dataKey="name" stroke="#666" fontSize={10} tickLine={false} axisLine={false} />
                                            <Tooltip content={<CustomTooltip />} />
                                            <Bar dataKey="value" fill={type === 'playarts' ? '#84cc16' : type === 'elememetal' ? '#f97316' : '#10b981'} radius={[4, 4, 0, 0]} />
                                        </BarChart>
                                    </ResponsiveContainer>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
                
                <TabsContent value="trends" className="h-[350px]">
                    <Card className="bg-black/20 border-white/10 backdrop-blur-sm h-full">
                         <CardHeader>
                            <CardTitle className="text-sm font-medium text-neutral-400 uppercase tracking-wider">Historical Trends</CardTitle>
                        </CardHeader>
                        <CardContent className="h-[280px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={type === 'aidguardian' ? data.volumeData : data.anchoringData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                                    <XAxis dataKey="name" stroke="#666" fontSize={10} tickLine={false} axisLine={false} />
                                    <YAxis stroke="#666" fontSize={10} tickLine={false} axisLine={false} />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Line type="monotone" dataKey="value" stroke={type === 'aidguardian' ? '#6366f1' : '#84cc16'} strokeWidth={2} dot={false} />
                                    <Line type="monotone" dataKey="value2" stroke="#666" strokeWidth={2} strokeDasharray="5 5" dot={false} />
                                </LineChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}