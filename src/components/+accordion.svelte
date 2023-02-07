<script>
import chords from "../uke-chords.json";
const chordNames = Object.keys(chords);
const chordScaleC = ["C", "Dm", "Em", "F", "G", "Am", "Bm"];
const chordScaleAm = ["Am", "Bm", "C", "Dm", "Em", "F", "G"];
const chordScale = chordScaleAm;
const chordScaleNumbersMajor = ["I", "ii", "iii", "IV", "V", "vi", "vii°"];
const chordScaleNumbersMinor = ["i", "ii°", "III", "iv", "v", "VI", "VII"];
const chordScaleNumbers = chordScaleNumbersMinor
</script>

<div class="grid grid-cols-9 text-lg">
  {#each chordNames as chordName, i}
    <div class="relative m-6 p-5 w-16 text-center bg-slate-200 rounded-full aspect-square flex items-center justify-center">
      {#if chordScale.includes(chordName)}
        <div class="absolute font-semibold -top-6 -left-5 bg-blue-200 py-2 px-3 rounded-full aspect-square border-4 border-white">
          {chordScaleNumbers[chordScale.indexOf(chordName)]}
        </div>
      {/if}
      {chordName}
    </div>
  {/each}
</div>