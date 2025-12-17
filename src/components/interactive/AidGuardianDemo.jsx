import React from 'react';
import AidGuardianScanner from './AidGuardianScanner';
import AidGuardianDashboard from './AidGuardianDashboard';

export default function AidGuardianDemo() {
    return (
        <div className="space-y-12">
            <AidGuardianScanner />
            <AidGuardianDashboard />
        </div>
    );
}