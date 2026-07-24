import { dto } from "../../wailsjs/go/models";
import { CoverImage } from "./CoverImage";
import { formatDuration } from "../utils/time";

interface SongListProps {
    songs: dto.Song[];
    activeSongId: string | null;
    isPlaying: boolean;
    loading: boolean;
    t: any;
    onPlaySong: (song: dto.Song) => void;
}

export const SongList = ({ songs, activeSongId, isPlaying, loading, t, onPlaySong }: SongListProps) => {
    if (loading) {
        return (
            <div className={`flex flex-col items-center justify-center h-full gap-3 ${t.muted} animate-pulse`}>
                <p className="text-xl">LOADING...</p>
            </div>
        );
    }

    if (songs.length === 0) {
        return (
            <div className={`flex flex-col items-center justify-center h-full ${t.muted}`}>NO SONGS FOUND</div>
        );
    }

    return (
        <>
            {songs.map((song) => {
                const isActive = song.id === activeSongId;
                return (
                    <div 
                        key={song.id} 
                        className={`flex items-center gap-3 p-1.5 rounded cursor-pointer transition-all ${
                            isActive ? `${t.bgActive} ${t.borderActive}` : `${t.bgHover} border-transparent`
                        } border`}
                        onClick={() => onPlaySong(song)}
                    >
                        <CoverImage id={song.id} className="w-10 h-10 object-cover shrink-0 rounded-sm shadow-sm" t={t} />
                        <div className="flex flex-col min-w-0 flex-1 justify-center">
                            <div className="truncate text-lg leading-none mb-1">
                                {isPlaying && isActive ? "▶ " : ""}{song.title || "Unknown"}
                            </div>
                            <div className={`truncate text-sm opacity-70 leading-none ${t.muted}`}>
                                {song.artist || "Unknown"}
                            </div>
                        </div>
                        <span className="text-sm shrink-0 opacity-80 px-1">
                            {formatDuration(song.duration)}
                        </span>
                    </div>
                );
            })}
        </>
    );
};
