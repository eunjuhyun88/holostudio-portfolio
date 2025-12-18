import React from 'react';

export default function VideoBackground() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover opacity-60"
            >
                <source src="https://base44.app/api/apps/6942a6bbf2c58576b46b84ee/files/public/6942a6bbf2c58576b46b84ee/3c7b41d48_original-75b3a2bd34c935bf3ccc7eb77f73f772.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-[#050505]/40 backdrop-blur-[1px]" />
        </div>
    );
}