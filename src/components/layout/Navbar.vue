<script setup></script>

<template>
  <section class="p-0 text-center w-full shadow-md">
    <header class="container mx-auto px-6">
      <nav>
        <ul class="text-left ml-8 flex items-center">
          <li>
            <router-link
              class="underline--indigo underline-on-hover inline-block mr-6 p-5 hover:cursor-pointer hover:bg-slate-50"
              to="/accueil"
              active-class="nav--active"> <!-- Permet d'ajouter une classe lorsque le path actuel correspond au path du roter-link: sélectionne dans la navbar la page sur laquelle on se trouve -->
              Accueil
            </router-link>
          </li>
          <li>
            <router-link
              class="underline-on-hover inline-block mr-6 p-5 hover:cursor-pointer hover:bg-slate-50"
              to="/ajout-livre"
              active-class="nav--active">
              Ajouter un livre
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
  </section>
</template>

<style>
    .nav--active {
        border-bottom-color: var(--indigo);
    }
</style>
