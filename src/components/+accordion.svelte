<script>
import chords from "../uke-chords.json";
const chordNames = Object.keys(chords);
const chordScaleC = ["C", "Dm", "Em", "F", "G", "Am", "Bm"];
const chordScaleAm = ["Am", "Bm", "C", "Dm", "Em", "F", "G"];
const chordScaleNumbersMajor = ["I", "ii", "iii", "IV", "V", "vi", "vii°"];
const chordScaleNumbersMinor = ["i", "ii°", "III", "iv", "v", "VI", "VII"];
const chordScaleTypesMajor = ["", "", "m", "", "", "m", "m"];
const chordScaleTypesMinor = ["m", "m", "", "m", "m", "", ""];


const scaleName = "F" // (major)

const scaleForScaleName = function (scaleName) {
  const lettersForScale = function (startingNote) {
    const allLettersLooping = ["A", "B", "C", "D", "E", "F", "G", "A", "B", "C", "D", "E", "F", "G"]
    const arrayStartIndex = allLettersLooping.indexOf(startingNote);
    return allLettersLooping.slice(arrayStartIndex).slice(0,7)
  }

  const letters = lettersForScale(scaleName);
  
  const scale = letters.map((letter, i) => {
    if (scaleName.includes('m')) { // if minor
      return letter + chordScaleTypesMinor[i];
    } else { // major
      return letter + chordScaleTypesMajor[i];
    }
  })

  return scale
}


const getScaleWithNumbers = function(scaleName) {
  const chordScaleNumbersMajor = ["I", "ii", "iii", "IV", "V", "vi", "vii°"];
  const chordScaleNumbersMinor = ["i", "ii°", "III", "iv", "v", "VI", "VII"];

  const chordScale = scaleForScaleName(scaleName)
  let chordScaleNumbers = []
  if (scaleName.includes('m')) { // if minor
    chordScaleNumbers = chordScaleNumbersMinor;
  } else { // major
    chordScaleNumbers = chordScaleNumbersMajor;
  }
  return {chordScale, chordScaleNumbers}
}

const {chordScale, chordScaleNumbers} = getScaleWithNumbers("F")

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