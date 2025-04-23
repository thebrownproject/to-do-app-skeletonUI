<script lang="ts">
  import { Heart as IconHeart } from "lucide-svelte";
</script>

<h1>Welcome to SvelteKit!</h1>
<p>
  Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the
  documentation
</p>

<div class="text-primary-700 text-2xl font-bold">
  If you see this styled, Skeleton is working 🎉
</div>

<div class="flex items-center gap-4">
  <!-- A simple icon badge -->
  <span class="badge-icon preset-filled">
    <IconHeart size={16} />
  </span>
  <!-- A standard badge -->
  <span class="badge preset-filled">Badge</span>
  <!-- A badge + icon -->
  <span class="badge preset-filled">
    <IconHeart size={16} />
    <span>Badge</span>
  </span>
</div>

<div class="space-y-4">
  <div class="flex gap-4">
    <span class="badge preset-filled-primary-500">Badge</span>
    <span class="badge preset-tonal-primary">Badge</span>
    <span class="badge preset-outlined-primary-500">Badge</span>
  </div>
  <div class="flex gap-4">
    <span class="badge preset-filled-secondary-500">Badge</span>
    <span class="badge preset-tonal-secondary">Badge</span>
    <span class="badge preset-outlined-secondary-500">Badge</span>
  </div>
  <div class="flex gap-4">
    <span class="badge preset-filled-tertiary-500">Badge</span>
    <span class="badge preset-tonal-tertiary">Badge</span>
    <span class="badge preset-outlined-tertiary-500">Badge</span>
  </div>
  <div class="flex gap-4">
    <span class="badge preset-filled-success-500">Badge</span>
    <span class="badge preset-tonal-success">Badge</span>
    <span class="badge preset-outlined-success-500">Badge</span>
  </div>
  <div class="flex gap-4">
    <span class="badge preset-filled-warning-500">Badge</span>
    <span class="badge preset-tonal-warning">Badge</span>
    <span class="badge preset-outlined-warning-500">Badge</span>
  </div>
  <div class="flex gap-4">
    <span class="badge preset-filled-error-500">Badge</span>
    <span class="badge preset-tonal-error">Badge</span>
    <span class="badge preset-outlined-error-500">Badge</span>
  </div>
  <div class="flex gap-4">
    <span class="badge preset-filled-surface-500">Badge</span>
    <span class="badge preset-tonal-surface">Badge</span>
    <span class="badge preset-outlined-surface-500">Badge</span>
  </div>
</div>

<a
  href="#"
  class="card preset-filled-surface-100-900 border-[1px] border-surface-200-800 card-hover divide-surface-200-800 block max-w-md divide-y overflow-hidden"
>
  <header>
    <img class="aspect-[21/9] w-full grayscale hue-rotate-90" alt="banner" />
  </header>

  <article class="space-y-4 p-4">
    <div>
      <h2 class="h6">Announcements</h2>
      <h3 class="h3">Skeleton is Awesome</h3>
    </div>
    <p class="opacity-60">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
      aspernatur provident eveniet eligendi cumque consequatur tempore sint nisi
      sapiente. Iste beatae laboriosam iure molestias cum expedita architecto
      itaque quae rem.
    </p>
  </article>

  <footer class="flex items-center justify-between gap-4 p-4">
    <small class="opacity-60">By Alex</small>
    <small class="opacity-60">On {new Date().toLocaleDateString()}</small>
  </footer>
</a>

<form class="mx-auto w-full max-w-md space-y-4">
  <input type="text" class="input" placeholder="Enter name" />
  <!-- --- -->
  <label class="label">
    <span class="label-text">Number</span>
    <input type="number" class="input" placeholder="Enter Age" />
  </label>
  <!-- --- -->
  <label class="label">
    <span class="label-text">Password</span>
    <input type="password" class="input" placeholder="Enter Password" />
  </label>
  <!-- --- -->
  <label class="label">
    <span class="label-text">Phone Number</span>
    <input type="tel" class="input" placeholder="ex: 214-555-1234" />
  </label>
  <!-- --- -->
  <label class="label">
    <span class="label-text">Search</span>
    <input type="search" class="input" placeholder="Search..." />
  </label>
</form>

<form class="mx-auto w-full max-w-md space-y-4">
  <!-- Date Picker -->
  <label class="label">
    <span class="label-text">Date</span>
    <input class="input" type="date" />
  </label>
  <!-- File Input -->
  <label class="label">
    <span class="label-text">File Input</span>
    <input class="input" type="file" />
  </label>
  <!-- Range -->
  <label class="label">
    <span class="label-text">Range</span>
    <input class="input" type="range" value="75" max="100" />
  </label>
  <!-- Progress -->
  <label class="label">
    <span class="label-text">Progress</span>
    <progress class="progress" value="50" max="100"></progress>
  </label>
  <!-- Color -->
  <!-- TODO: convert to mini-component for reactive value -->
  <div class="grid grid-cols-[auto_1fr] gap-2">
    <input class="input" type="color" value="#bada55" />
    <input class="input" type="text" value="#bada55" readonly tabindex="-1" />
  </div>
</form>
