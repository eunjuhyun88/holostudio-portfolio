import React, { useState, useRef } from 'react';
import { base44 } from "@/api/base44Client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Upload, Box, Trash2, ExternalLink } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useLanguage } from '@/components/LanguageContext';
import ModelViewer from '@/components/showcase/ModelViewer.jsx';
import Background3D from '@/components/Background3D';
import CosmicBackground from '@/components/CosmicBackground';
import MouseGlowText from '@/components/MouseGlowText';
import ScrambleText from '@/components/ScrambleText';
import DigitalDataBackground from '@/components/DigitalDataBackground';

export default function Showcase3D() {
    const { language } = useLanguage();
    const queryClient = useQueryClient();
    const [selectedModel, setSelectedModel] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadForm, setUploadForm] = useState({
        name: '',
        description: '',
        file: null
    });

    // Fetch Models
    const { data: models = [], isLoading } = useQuery({
        queryKey: ['3d-models'],
        queryFn: () => base44.entities.ThreeDModel.list('-created_date'),
    });

    // Create Model Mutation
    const createModelMutation = useMutation({
        mutationFn: async (data) => {
            // 1. Upload file
            const uploadRes = await base44.integrations.Core.UploadFile({
                file: data.file
            });
            
            // 2. Determine type
            const filename = data.file.name.toLowerCase();
            let type = 'gltf';
            if (filename.endsWith('.obj')) type = 'obj';
            if (filename.endsWith('.glb')) type = 'glb';
            if (filename.endsWith('.mp4')) type = 'mp4';
            if (filename.endsWith('.mov')) type = 'mov';

            // 3. Create Entity
            return base44.entities.ThreeDModel.create({
                name: data.name,
                description: data.description,
                file_url: uploadRes.file_url,
                file_type: type
            });
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['3d-models']);
            setIsUploading(false);
            setUploadForm({ name: '', description: '', file: null });
        }
    });

    // Delete Mutation
    const deleteMutation = useMutation({
        mutationFn: (id) => base44.entities.ThreeDModel.delete(id),
        onSuccess: (deletedId) => {
            queryClient.invalidateQueries(['3d-models']);
            if (selectedModel?.id === deletedId) {
                setSelectedModel(null);
            }
        }
    });



    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setUploadForm({ ...uploadForm, file: e.target.files[0] });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!uploadForm.file || !uploadForm.name) return;
        createModelMutation.mutate(uploadForm);
    };

    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-indigo-500/30">
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-black">
                {/* Digital Data Rain Background */}
                <div className="absolute inset-0 z-0">
                    <DigitalDataBackground opacity={0.8} speed={0.8} fontSize={20} color="#818cf8" />
                </div>

                <div className="absolute inset-0 opacity-20"><CosmicBackground /></div>
                <div className="absolute inset-0 opacity-90"><Background3D /></div>
                
                {/* Sci-Fi Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
                
                {/* HUD Corners */}
                <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-white/10 rounded-tl-3xl m-8" />
                <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-white/10 rounded-tr-3xl m-8" />
                <div className="absolute bottom-0 left-0 w-32 h-32 border-l border-b border-white/10 rounded-bl-3xl m-8" />
                <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-white/10 rounded-br-3xl m-8" />
            </div>

            <main className="relative z-10 pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 md:px-12 max-w-[1600px] mx-auto">
                <div className="text-center mb-12 sm:mb-16 relative">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block mb-3 sm:mb-4 px-2 sm:px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-[10px] sm:text-xs font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase"
                    >
                        {language === 'en' ? 'Metaverse Asset Protocol' : '메타버스 자산 프로토콜'}
                    </motion.div>
                    
                    <MouseGlowText 
                        as={motion.h1}
                        glowColor="rgba(99, 102, 241, 0.8)"
                        secondaryGlowColor="rgba(168, 85, 247, 0.5)"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-6 sm:mb-8 uppercase px-2"
                    >
                        Digital <span className="text-indigo-500">Artifacts</span>
                    </MouseGlowText>

                    <p className="text-sm sm:text-base md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed font-mono px-4">
                        <ScrambleText speed={30} revealSpeed={0.4} delay={500}>
                            {language === 'en' 
                                ? 'Secure, decentralized visualization for high-fidelity 3D assets. Verify provenance and inspect spatial metadata in real-time.' 
                                : '고화질 3D 자산을 위한 안전한 탈중앙화 시각화. 실시간으로 출처를 확인하고 공간 메타데이터를 검사하세요.'}
                        </ScrambleText>
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 min-h-[500px] sm:min-h-[600px] lg:h-[calc(100vh-400px)]">
                    
                    {/* Sidebar / List */}
                    <div className="lg:col-span-4 flex flex-col gap-6 h-full">
                        {/* Upload Card - Styled as Minting Interface */}
                        <div className="bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                            
                            {!isUploading ? (
                                <div className="text-center py-4">
                                    <div className="w-16 h-16 rounded-full bg-white/5 mx-auto flex items-center justify-center mb-4 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                                        <Box className="w-8 h-8 text-indigo-400" />
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">{language === 'en' ? 'Register Asset' : '자산 등록'}</h3>
                                    <p className="text-sm text-neutral-500 mb-6 px-4">
                                        {language === 'en' ? 'Upload 3D files to the decentralized registry.' : '탈중앙화 레지스트리에 3D 파일을 업로드합니다.'}
                                    </p>
                                    <Button 
                                        onClick={() => setIsUploading(true)}
                                        className="w-full h-12 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-base font-bold tracking-wide shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] transition-all"
                                    >
                                        <Plus className="w-5 h-5 mr-2" />
                                        {language === 'en' ? 'Mint Asset' : '자산 민팅'}
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-lg">{language === 'en' ? 'New Asset' : '새 자산'}</h3>
                                        <span className="text-xs font-mono text-indigo-400 animate-pulse">● NETWORK ACTIVE</span>
                                    </div>
                                    
                                    <div className="space-y-2">
                                        <Label className="text-xs uppercase tracking-wider text-neutral-500">Asset Name</Label>
                                        <Input 
                                            value={uploadForm.name}
                                            onChange={(e) => setUploadForm({...uploadForm, name: e.target.value})}
                                            className="bg-black/40 border-white/10 focus:border-indigo-500/50 h-11"
                                            placeholder="e.g. Cyber_Artifact_01"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-xs uppercase tracking-wider text-neutral-500">Description</Label>
                                        <Input 
                                            value={uploadForm.description}
                                            onChange={(e) => setUploadForm({...uploadForm, description: e.target.value})}
                                            className="bg-black/40 border-white/10 focus:border-indigo-500/50 h-11"
                                            placeholder="Optional metadata..."
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-xs uppercase tracking-wider text-neutral-500">Payload (GLTF/GLB/OBJ)</Label>
                                        <div className="relative group/file">
                                            <Input 
                                                type="file"
                                                accept=".gltf,.glb,.obj,.mp4,.mov"
                                                onChange={handleFileChange}
                                                className="bg-black/40 border-white/10 cursor-pointer h-24 pt-8 text-center text-transparent file:hidden"
                                            />
                                            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                                                <Upload className="w-6 h-6 text-neutral-500 mb-2 group-hover/file:text-indigo-400 transition-colors" />
                                                <span className="text-xs text-neutral-400 group-hover/file:text-white transition-colors">
                                                    {uploadForm.file ? uploadForm.file.name : (language === 'en' ? 'Drop file or click' : '파일 드롭 또는 클릭')}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 pt-2">
                                        <Button type="button" variant="ghost" onClick={() => setIsUploading(false)} className="flex-1 hover:bg-white/5">
                                            Cancel
                                        </Button>
                                        <Button 
                                            type="submit" 
                                            disabled={createModelMutation.isPending || !uploadForm.file}
                                            className="flex-1 bg-indigo-600 hover:bg-indigo-500 font-bold"
                                        >
                                            {createModelMutation.isPending ? 'Minting...' : 'Deploy'}
                                        </Button>
                                    </div>
                                </form>
                            )}
                        </div>

                        {/* Models List - Styled as Asset Registry */}
                        <div className="flex-1 overflow-y-auto pr-2 space-y-3 custom-scrollbar">
                            <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-4 flex items-center justify-between">
                                <span>Registry ({models.length})</span>
                                <span>Recent</span>
                            </div>

                            {models.length === 0 && !isLoading && (
                                <div className="text-center py-12 text-neutral-600 border border-dashed border-white/10 rounded-3xl">
                                    <Box className="w-12 h-12 mx-auto mb-3 opacity-30" />
                                    <p className="text-sm">No artifacts found.</p>
                                </div>
                            )}
                            
                            {models.map(model => (
                                <motion.div 
                                    key={model.id}
                                    onClick={() => setSelectedModel(model)}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ duration: 0.2 }}
                                    className={`group p-4 rounded-2xl border transition-all cursor-pointer relative backdrop-blur-sm ${
                                        selectedModel?.id === model.id 
                                        ? 'bg-indigo-500/10 border-indigo-500/50 shadow-[0_0_20px_rgba(99,102,241,0.1)]' 
                                        : 'bg-[#0A0A0A]/60 border-white/5 hover:bg-white/5 hover:border-white/20'
                                    }`}
                                >
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold border ${
                                                selectedModel?.id === model.id ? 'bg-indigo-500 text-white border-indigo-400' : 'bg-white/5 text-neutral-400 border-white/10'
                                            }`}>
                                                {model.file_type.toUpperCase().substring(0,3)}
                                            </div>
                                            <div>
                                                <h3 className={`font-bold text-sm mb-0.5 ${selectedModel?.id === model.id ? 'text-white' : 'text-neutral-300'}`}>{model.name}</h3>
                                                <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-500 uppercase">
                                                    <span>#{model.id.substring(0,6)}</span>
                                                    <span className="w-1 h-1 rounded-full bg-neutral-600" />
                                                    <span>{new Date(model.created_date).toLocaleDateString()}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-8 w-8 text-neutral-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/5"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                if(confirm('Burn this asset?')) deleteMutation.mutate(model.id);
                                            }}
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </Button>
                                    </div>
                                    
                                    {/* Active Indicator */}
                                    {selectedModel?.id === model.id && (
                                        <motion.div 
                                            layoutId="activeIndicator"
                                            className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-indigo-500 rounded-r-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                        />
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Viewer Area - Holographic Style */}
                    <div className="lg:col-span-8 h-full min-h-[500px] relative">
                        {/* Decorative Scanner Lines */}
                        <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-3xl z-0">
                            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-indigo-500/30 rounded-tl-xl" />
                            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-indigo-500/30 rounded-tr-xl" />
                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-indigo-500/30 rounded-bl-xl" />
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-indigo-500/30 rounded-br-xl" />
                        </div>

                        {selectedModel ? (
                            <motion.div 
                                key={selectedModel.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                className="h-full flex flex-col gap-4 relative z-10 p-1"
                            >
                                <div className="flex-1 rounded-2xl overflow-hidden bg-black/40 relative group">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05),transparent)] pointer-events-none" />
                                    <ModelViewer 
                                        url={selectedModel.file_url} 
                                        type={selectedModel.file_type} 
                                    />
                                    
                                    {/* Overlay Info */}
                                    <div className="absolute top-4 left-4 pointer-events-none">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs font-mono text-indigo-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                                            LIVE RENDER
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="bg-[#0A0A0A]/80 border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center backdrop-blur-xl gap-4">
                                    <div>
                                        <div className="flex items-center gap-3 mb-1">
                                            <h2 className="text-2xl font-bold tracking-tight">{selectedModel.name}</h2>
                                            <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-indigo-500/30 text-indigo-400 bg-indigo-500/5">VERIFIED</span>
                                        </div>
                                        <div className="flex items-center gap-4 text-sm text-neutral-400 font-mono">
                                            <span>ID: {selectedModel.id}</span>
                                            <span className="text-neutral-600">|</span>
                                            <span>SIZE: UNKNOWN</span>
                                        </div>
                                        {selectedModel.description && <p className="text-neutral-400 text-sm mt-2 max-w-xl">{selectedModel.description}</p>}
                                    </div>
                                    <div className="flex gap-3">
                                        <a href={selectedModel.file_url} target="_blank" rel="noopener noreferrer">
                                            <Button variant="outline" className="gap-2 border-white/10 bg-white/5 hover:bg-white/10 text-white h-11 px-6">
                                                <ExternalLink className="w-4 h-4" /> Export
                                            </Button>
                                        </a>
                                        <Button className="bg-indigo-600 hover:bg-indigo-500 h-11 px-6 shadow-[0_0_20px_rgba(79,70,229,0.3)]">
                                            Details
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <div className="h-full rounded-3xl bg-[#0A0A0A]/40 border border-white/5 flex flex-col items-center justify-center text-neutral-500 gap-6 border-dashed relative overflow-hidden">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.03),transparent)]" />
                                <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center border border-white/5 relative">
                                    <div className="absolute inset-0 rounded-full border border-indigo-500/20 animate-ping opacity-20" />
                                    <Box className="w-10 h-10 text-neutral-600" />
                                </div>
                                <div className="text-center relative z-10">
                                    <p className="text-xl font-bold text-neutral-300 mb-2">Awaiting Input</p>
                                    <p className="text-sm font-mono text-neutral-600 uppercase tracking-widest">Select an artifact from registry</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}