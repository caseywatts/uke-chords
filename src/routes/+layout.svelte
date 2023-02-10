<script>
  import "../app.css";
  import { createParamsStringStore } from "../lib/URLSearchParamsStore"
  const layout = createParamsStringStore("layout");

  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';

  inject({ mode: dev ? 'development' : 'production' });
</script>

<div class="p-2 bg-slate-100 flex flex-grow justify-between">
  <div></div>
  <div>
    <h1 class="text-center text-2xl ">UkeChords.xyz
      {#if ["accordion", "fifths"].includes($layout)}(Accordion Layout){/if}
      <span class="pl-4 text-lg">by <a class="text-blue-500 underline" href="https://social.coop/@heycaseywattsup">@heycaseywattsup</a></span>
    </h1>  
  </div>
  <a href="/about" class="text-lg p-1 text-blue-500 underline">how to use</a>
</div>
<slot />