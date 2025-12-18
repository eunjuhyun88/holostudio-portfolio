import React, { useState } from 'react';
import { base44 } from "@/api/base44Client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Upload, Box, Trash2, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from '@/components/LanguageContext';
import ModelViewer from '@/components/showcase/ModelViewer.jsx';
import Background3D from '@/components/Background3D';
import CosmicBackground from '@/components/CosmicBackground';

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
                <div className="absolute inset-0 opacity-30"><CosmicBackground /></div>
                <div className="absolute inset-0 opacity-90"><Background3D /></div>
            </div>

            <main className="relative z-10 pt-32 pb-24 px-6 md:px-12 max-w-[1600px] mx-auto">
                <div className="text-center mb-16">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase"
                    >
                        3D <span className="text-indigo-500">Showcase</span>
                    </motion.h1>
                    <p className="text-base md:text-xl text-neutral-400 max-w-2xl mx-auto">
                        {language === 'en' 
                            ? 'Upload, view, and interact with 3D assets directly in the browser. Supporting GLTF, GLB, and OBJ formats.' 
                            : '브라우저에서 직접 3D 자산을 업로드하고, 보고, 상호 작용하세요. GLTF, GLB 및 OBJ 형식을 지원합니다.'}
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 h-[calc(100vh-400px)] min-h-[600px]">
                    
                    {/* Sidebar / List */}
                    <div className="lg:col-span-4 flex flex-col gap-6 h-full">
                        {/* Upload Card */}
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
                            {!isUploading ? (
                                <Button 
                                    onClick={() => setIsUploading(true)}
                                    className="w-full h-12 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-base font-medium"
                                >
                                    <Plus className="w-5 h-5 mr-2" />
                                    {language === 'en' ? 'Upload New Model' : '새 모델 업로드'}
                                </Button>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="space-y-2">
                                        <Label>Name</Label>
                                        <Input 
                                            value={uploadForm.name}
                                            onChange={(e) => setUploadForm({...uploadForm, name: e.target.value})}
                                            className="bg-black/20 border-white/10"
                                            placeholder="My Awesome Model"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>File (GLTF, GLB, OBJ, MP4, MOV)</Label>
                                        <Input 
                                            type="file"
                                            accept=".gltf,.glb,.obj,.mp4,.mov"
                                            onChange={handleFileChange}
                                            className="bg-black/20 border-white/10 cursor-pointer"
                                        />
                                    </div>
                                    <div className="flex gap-2 pt-2">
                                        <Button type="button" variant="ghost" onClick={() => setIsUploading(false)} className="flex-1">
                                            Cancel
                                        </Button>
                                        <Button 
                                            type="submit" 
                                            disabled={createModelMutation.isPending || !uploadForm.file}
                                            className="flex-1 bg-indigo-600 hover:bg-indigo-500"
                                        >
                                            {createModelMutation.isPending ? 'Uploading...' : 'Upload'}
                                        </Button>
                                    </div>
                                </form>
                            )}
                        </div>

                        {/* Models List */}
                        <div className="flex-1 overflow-y-auto pr-2 space-y-3 custom-scrollbar">
                            {models.length === 0 && !isLoading && (
                                <div className="text-center py-12 text-neutral-500">
                                    <Box className="w-12 h-12 mx-auto mb-3 opacity-50" />
                                    <p>No models yet.</p>
                                </div>
                            )}
                            
                            {models.map(model => (
                                <div 
                                    key={model.id}
                                    onClick={() => setSelectedModel(model)}
                                    className={`group p-4 rounded-2xl border transition-all cursor-pointer relative ${
                                        selectedModel?.id === model.id 
                                        ? 'bg-indigo-600/20 border-indigo-500/50' 
                                        : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10'
                                    }`}
                                >
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-bold text-white mb-1">{model.name}</h3>
                                            <span className="text-xs font-mono px-2 py-0.5 rounded bg-black/30 text-neutral-400 uppercase">
                                                {model.file_type}
                                            </span>
                                        </div>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-8 w-8 text-neutral-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                if(confirm('Delete this model?')) deleteMutation.mutate(model.id);
                                            }}
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Viewer Area */}
                    <div className="lg:col-span-8 h-full min-h-[500px]">
                        {selectedModel ? (
                            <div className="h-full flex flex-col gap-4">
                                <div className="flex-1">
                                    <ModelViewer 
                                        url={selectedModel.file_url} 
                                        type={selectedModel.file_type} 
                                    />
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex justify-between items-center backdrop-blur-md">
                                    <div>
                                        <h2 className="text-xl font-bold">{selectedModel.name}</h2>
                                        {selectedModel.description && <p className="text-neutral-400 text-sm">{selectedModel.description}</p>}
                                    </div>
                                    <a href={selectedModel.file_url} target="_blank" rel="noopener noreferrer">
                                        <Button variant="outline" className="gap-2 border-white/10 bg-transparent hover:bg-white/5 text-white">
                                            <ExternalLink className="w-4 h-4" /> Download
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        ) : (
                            <div className="h-full rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-neutral-500 gap-4 border-dashed">
                                <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center">
                                    <Box className="w-10 h-10" />
                                </div>
                                <p className="text-lg">Select a model to view</p>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}