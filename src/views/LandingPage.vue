<template>
  <div class="landing-page">
    <!-- Header -->
    <header class="header">
      <div class="header-content">
        <h1 class="text-4xl font-bold">Conecta, Crece y Transforma: Mentoría, Comunidades y Oportunidades para tu Futuro</h1>
        <p class="text-lg mt-2">Tu puente hacia el crecimiento y las grandes oportunidades.</p>
      </div>
    </header>


    <!-- Footer -->
    <footer class="bg-[#373a6b] text-center py-6">
      <p class="text-sm">© 2025 Impulsa tu Futuro. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
};
</script>

<style>
body {
  margin: 0;
  font-family: 'Open Sans', sans-serif;
}

.landing-page {
  background-image: url('@/assets/fondo.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 60vh;
  background: rgba(0, 0, 0, 0.5); /* Dark overlay */
}

.header-content {
  max-width: 800px;
}

.header h1 {
  font-size: 2.5rem;
}

.header p {
  font-size: 1.25rem;
}
</style>