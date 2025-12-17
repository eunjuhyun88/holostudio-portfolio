import React from 'react';
import { Button } from "@/components/ui/button";
import { Mail, MapPin, MessageSquare, ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl mx-auto text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Let's Build the Future</h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                    We're always looking for partners, investors, and builders who share our vision for a trusted, autonomous future.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-slate-50 p-8 rounded-2xl border border-slate-200"
                >
                    <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 flex-shrink-0">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900">Email</h3>
                                <p className="text-slate-600">contact@holostudio.ai</p>
                                <p className="text-slate-600">invest@holostudio.ai</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 flex-shrink-0">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900">Headquarters</h3>
                                <p className="text-slate-600">Seoul, South Korea</p>
                                <p className="text-slate-600">Singapore (Global Office)</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                        <h3 className="font-bold mb-4">Connect on Social</h3>
                        <div className="flex gap-4">
                            <Button variant="outline" className="rounded-full">Twitter / X</Button>
                            <Button variant="outline" className="rounded-full">LinkedIn</Button>
                            <Button variant="outline" className="rounded-full">Discord</Button>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg"
                >
                    <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">First Name</label>
                                <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Last Name</label>
                                <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Email</label>
                            <input type="email" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Subject</label>
                            <select className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all">
                                <option>Investment Inquiry</option>
                                <option>Partnership Proposal</option>
                                <option>Product Demo</option>
                                <option>General Inquiry</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Message</label>
                            <textarea rows="4" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"></textarea>
                        </div>
                        <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white h-12 rounded-lg text-base font-medium">
                            Send Message <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}