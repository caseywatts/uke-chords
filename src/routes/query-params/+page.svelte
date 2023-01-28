<script>
  import { createParamsStringStore, createParamsBooleanStore, createParamsArrayStore } from "../../lib/URLSearchParamsStore"

  const title = createParamsStringStore("title");
  const showOrder = createParamsBooleanStore("showOrder");
  const chords = createParamsArrayStore("chords");
</script>

<label>
  Title
  <input bind:value={$title}>
</label>
<label>
  Show Chord Order
  <input type=checkbox bind:checked={$showOrder}>
</label>
<label>
  Chords
  <select multiple bind:value={$chords} style="width: 100px;">
    <option value="F">F</option>
    <option value="C">C</option>
    <option value="G">G</option>
    <option value="D">D</option>
    <option value="A">A</option>
  </select>
</label>