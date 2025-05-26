import React, { useState} from 'react';

const App = () => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [lyrics, setLyrics] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchedSong, setSearchedSong] = useState({ title, artist} | null);

  const fetchLyrics = async (event) => {
    event.preventDefault();
    if (!title.trim() || !artist.trim()) {
      setError('Judul lagu dan nama penyanyi harus diisi.');
      setLyrics(null);
      setSearchedSong(null);
      return;
    }

    setLoading(true);
    setError(null);
    setLyrics(null);
    setSearchedSong({ title, artist });

    try {
      const response = await fetch(`https://api.lyrics.ovh/v1/${encodeURIComponent(artist)}/${encodeURIComponent(title)}`);
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Lirik tidak ditemukan.');
        }
        throw new Error(`Gagal mengambil lirik: ${response.statusText}`);
      }
      const data = await response.json();
      if (data.lyrics) {
        setLyrics(data.lyrics);
      } else {
        setLyrics(''); // Indicates lyrics not found specifically for this song
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Terjadi kesalahan yang tidak diketahui.');
      }
      setLyrics(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
    <div className="bg-slate-800 p-6 sm:p-8 rounded shadow-2xl w-full max-w-lg transition-all duration-300 ease-in-out">
      <header className="mb-6 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-sky-400">Pencari Lirik Lagu</h1>
        <p className="text-sm text-slate-400 mt-1">Temukan lirik lagu favoritmu!</p>
      </header>

      <form onSubmit={fetchLyrics} className="space-y-4 mb-6">
        <div>
          <label htmlFor="songTitle" className="block text-sm font-medium text-slate-300 mb-1">
            Judul Lagu
          </label>
          <input
            type="text"
            id="songTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Contoh: Bohemian Rhapsody"
            aria-label="Judul Lagu"
            className="w-full p-3 bg-slate-700 border border-slate-600 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-colors text-slate-100 placeholder-slate-500"
          />
        </div>
        <div>
          <label htmlFor="artistName" className="block text-sm font-medium text-slate-300 mb-1">
            Nama Penyanyi
          </label>
          <input
            type="text"
            id="artistName"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            placeholder="Contoh: Queen"
            aria-label="Nama Penyanyi"
            className="w-full p-3 bg-slate-700 border border-slate-600 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-colors text-slate-100 placeholder-slate-500"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          aria-live="polite"
          className="w-full p-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-md transition-colors duration-150 disabled:bg-slate-600 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {loading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Mencari...
            </>
          ) : (
            'Cari Lirik'
          )}
        </button>
      </form>

      {error && (
        <div role="alert" className="mt-6 p-4 bg-red-500/20 border border-red-700 text-red-300 rounded-md text-center">
          <p className="font-semibold">Oops! Terjadi Kesalahan</p>
          <p>{error}</p>
        </div>
      )}

      <section aria-live="polite">
        {lyrics === null && !loading && !error && !searchedSong && (
           <div className="mt-6 p-6 bg-slate-700/50 rounded-md text-center text-slate-400">
             <p>Masukkan judul lagu dan nama penyanyi di atas, lalu klik "Cari Lirik".</p>
           </div>
        )}
        {searchedSong && !loading && lyrics !== null && (
          <div className="mt-6 p-4 sm:p-6 bg-slate-700 rounded-md overflow-auto h-64 shadow">
            <h2 className="text-xl sm:text-2xl font-semibold text-sky-400 mb-3">
              Lirik untuk <span className="italic">"{searchedSong.title}"</span> oleh <span className="italic">{searchedSong.artist}</span>
            </h2>
            {lyrics === '' ? (
              <p className="text-slate-400">Lirik tidak ditemukan untuk lagu ini.</p>
            ) : (
              <pre className="lyrics-container text-sm sm:text-base text-slate-300 leading-relaxed font-sans">{lyrics}</pre>
            )}
          </div>
        )}
      </section>
       <footer className="mt-4 text-center text-xs text-slate-500">
        <p>Lirik disediakan oleh <a href="https://lyrics.ovh" target="_blank" rel="noopener noreferrer" className="underline hover:text-sky-400">lyrics.ovh</a></p>
      </footer>
    </div>
    </div>
  );
};

export default App;