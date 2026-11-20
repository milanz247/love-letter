# A Little Letter

An illustrated, personal invitation to coffee. Edit **lib/letter.ts** for both names, the greeting (use {name} for the recipient), paragraphs and invitation. Leave contact and music empty to omit those controls. For a music track, place it under public/audio and use a path such as /audio/song.mp3. Playback requires an explicit click.

Run `npm install`, then `npm run dev` and open http://localhost:3000. Check with `npm run lint`, `npx tsc --noEmit` and `npm run build`.

Choices live only in component memory and reset on refresh. Choosing one sends no message. An optional contact link opens only when the reader follows it. Fonts and artwork are local. Page metadata is neutral and requests no indexing. **Noindex does not make a public URL private**: anyone with the URL can read the letter.
