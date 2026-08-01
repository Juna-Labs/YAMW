import { Palette, Settings, Power, Minus } from 'lucide-react';
import { WindowMinimise } from '../wailsjs/runtime/runtime';
import { themes } from './constants/themes';
import { SetupForm } from './components/SetupForm';
import { SongList } from './components/SongList';
import { MiniPlayer } from './components/MiniPlayer';
import { PlayerOverlay } from './components/PlayerOverlay';
import { ShutdownModal } from './components/ShutdownModal';
import { useAppLogic } from './hooks/useAppLogic';

function App() {
    const {
        isConfigured, showSettings, setShowSettings, showShutdownModal, setShowShutdownModal, currentTheme, setCurrentTheme, showThemePicker, setShowThemePicker,
        songs, setSongs, loading, activeSongId, currentTime, isPlaying, setIsPlaying, isPlayerOpen, setIsPlayerOpen, loopMode, setLoopMode,
        isMix, setIsMix, volume, setVolume, showVolume, setShowVolume, showLyrics, isLyricsLoading, lyricsData,
        audioRef, activeSong, handlePlaySong, handleToggleLyrics, playNext, playPrevious, togglePlayPause,
        handleTimeUpdate, handleEnded, handleSeek, handleSetupSuccess, fetchSongs
    } = useAppLogic();

    const t = themes[currentTheme];

    if (isConfigured === false) {
        return (
            <div className={`w-76.5 h-96 bg-slate-950/90 backdrop-blur-md border ${t.border} shadow-2xl flex flex-col overflow-hidden ${t.base} [--wails-draggable:drag] relative rounded-xl mx-auto ${t.selection} text-lg`}>
                <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.8)_50%)] bg-size-[100%_4px] z-50"></div>
                <header className={`px-3 py-2 border-b ${t.border} flex justify-between items-center bg-black/40 shrink-0 select-none`}>
                    <span className="text-xl font-bold tracking-wider">YAMW.exe</span>
                    <span className="text-sm tracking-widest opacity-70">SETUP</span>
                </header>
                <main className="flex-1 overflow-y-auto hide-scrollbar [--wails-draggable:no-drag] z-10 flex flex-col">
                    <SetupForm t={t} isOverlay={false} onSuccess={handleSetupSuccess} />
                </main>
            </div>
        );
    }

    return (
        <div className={`w-76.5 h-96 bg-slate-950/90 backdrop-blur-md border ${t.border} shadow-2xl flex flex-col overflow-hidden ${t.base} [--wails-draggable:drag] relative rounded-xl mx-auto ${t.selection} text-lg`}>
            {showSettings && <SetupForm t={t} isOverlay={true} onClose={() => setShowSettings(false)} onSuccess={handleSetupSuccess} />}
            {showShutdownModal && <ShutdownModal t={t} onClose={() => setShowShutdownModal(false)} />}
            <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.8)_50%)] bg-size-[100%_4px] z-50"></div>

            <audio 
                ref={audioRef} 
                onTimeUpdate={handleTimeUpdate} 
                onEnded={handleEnded} 
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                autoPlay
            />

            <header className={`px-3 py-2 border-b ${t.border} flex justify-between items-center bg-black/40 shrink-0 select-none`}>
                <span className="text-xl font-bold tracking-wider">YAMW.exe</span>
                
                <div className="flex items-center gap-3 [--wails-draggable:no-drag]">
                    <span className={`text-sm tracking-widest ${isPlaying ? `animate-pulse ${t.accent}` : 'opacity-70'}`}>
                        {isPlaying ? 'PLAYING' : 'READY'}
                    </span>
                    
                    <div className="relative flex items-center">
                        <button 
                            onClick={() => setShowThemePicker(!showThemePicker)}
                            className={`${t.muted} hover:${t.base} transition-colors cursor-pointer`}
                        >
                            <Palette size={16} />
                        </button>
                        {showThemePicker && (
                            <div className={`absolute right-0 top-full mt-2 p-3 bg-slate-950 border ${t.border} rounded-lg shadow-2xl z-50 grid grid-cols-3 gap-3 w-30`}>
                                {Object.keys(themes).map(key => (
                                    <button 
                                        key={key} 
                                        onClick={() => { setCurrentTheme(key); setShowThemePicker(false); }}
                                        className={`w-6 h-6 shrink-0 rounded-full ${themes[key].dot} border-2 ${currentTheme === key ? 'border-white' : 'border-transparent'} hover:scale-110 transition-transform cursor-pointer`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                    <button 
                        onClick={() => setShowSettings(true)}
                        className={`${t.muted} hover:${t.base} transition-colors cursor-pointer ml-1`}
                    >
                        <Settings size={16} />
                    </button>
                    <button 
                        onClick={() => WindowMinimise()}
                        className={`${t.muted} hover:${t.base} transition-colors cursor-pointer`}
                        title="Minimize"
                    >
                        <Minus size={16} />
                    </button>
                    <button 
                        onClick={() => setShowShutdownModal(true)}
                        className={`${t.muted} hover:text-red-500 transition-colors cursor-pointer ml-1`}
                        title="Quit YAMW"
                    >
                        <Power size={16} />
                    </button>
                </div>
            </header>
            
            <main className={`flex-1 overflow-y-auto p-2 space-y-1 hide-scrollbar [--wails-draggable:no-drag] z-10 ${activeSong ? 'pb-16' : ''}`}>
                <SongList 
                    songs={songs}
                    setSongs={setSongs}
                    activeSongId={activeSongId}
                    isPlaying={isPlaying}
                    loading={loading}
                    t={t}
                    onPlaySong={handlePlaySong}
                    onLoadMore={fetchSongs}
                />
            </main>

            {activeSong && (
                <MiniPlayer 
                    activeSong={activeSong}
                    t={t}
                    isPlayerOpen={isPlayerOpen}
                    isPlaying={isPlaying}
                    setIsPlayerOpen={setIsPlayerOpen}
                    togglePlayPause={togglePlayPause}
                />
            )}

            {activeSong && (
                <PlayerOverlay 
                    t={t}
                    activeSong={activeSong}
                    isPlayerOpen={isPlayerOpen}
                    setIsPlayerOpen={setIsPlayerOpen}
                    showLyrics={showLyrics}
                    isLyricsLoading={isLyricsLoading}
                    lyricsData={lyricsData}
                    currentTime={currentTime}
                    isPlaying={isPlaying}
                    isMix={isMix}
                    loopMode={loopMode}
                    volume={volume}
                    showVolume={showVolume}
                    setShowVolume={setShowVolume}
                    setVolume={setVolume}
                    setIsMix={setIsMix}
                    setLoopMode={setLoopMode}
                    handleSeek={handleSeek}
                    togglePlayPause={togglePlayPause}
                    playNext={playNext}
                    playPrevious={playPrevious}
                    onToggleLyrics={handleToggleLyrics}
                />
            )}
        </div>
    );
}

export default App;