import React from 'react';
import AidGuardianScanner from './AidGuardianScanner';
import AidGuardianDashboard from './AidGuardianDashboard';

export default function AidGuardianDemo() {
    return (
        <div className="space-y-8 flex flex-col h-full">
            <div className="flex-1 min-h-[500px]">
                <AidGuardianScanner />
            </div>
            <div className="flex-1 min-h-[800px]">
                <AidGuardianDashboard />
            </div>
        </div>
    );
}