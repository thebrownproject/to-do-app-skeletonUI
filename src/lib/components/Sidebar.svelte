<script>
  // Category list sidebar
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import { categories } from "$lib/stores/categoryStore";
  import { createCategory } from "$lib/services/categoryService";
  import { getCategoryByID } from "$lib/services/categoryService";
  import { updateCategory } from "$lib/services/categoryService";
  import { deleteCategory } from "$lib/services/categoryService";

  let categoryList = $state($categories);
</script>

<div class="sidebar">
  <h2>Categories</h2>
  <ul>
    {#each categoryList as category (category.id)}
      <li>{category.name}</li>
    {/each}
  </ul>
</div>
