import { Frown, Power } from 'lucide-react';
import { Quit } from '../../wailsjs/runtime/runtime';

interface ShutdownModalProps {
    t: any;
    onClose: () => void;
}

export const ShutdownModal = ({ t, onClose }: ShutdownModalProps) => {
    return (
        <div className="absolute inset-0 z-100 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center animate-in fade-in zoom-in duration-200">
            <Frown size={48} className={`${t.accent} mb-4`} />
            <h2 className={`text-2xl font-bold mb-2 ${t.base}`}>Are you sure?</h2>
            <p className={`text-sm mb-8 ${t.muted}`}>Do you really want to quit YAMW?</p>
            
            <button 
                onClick={() => Quit()}
                className={`w-24 h-24 rounded-full bg-red-500/20 hover:bg-red-500/40 border-2 border-red-500 flex items-center justify-center transition-all hover:scale-110 mb-8 cursor-pointer shadow-[0_0_30px_rgba(239,68,68,0.3)]`}
            >
                <Power size={48} className="text-red-500" />
            </button>
            
            <button 
                onClick={onClose}
                className={`px-6 py-2 rounded-full border ${t.border} ${t.muted} hover:${t.base} ${t.bgHover} transition-colors cursor-pointer`}
            >
                Cancel
            </button>
        </div>
    );
};
