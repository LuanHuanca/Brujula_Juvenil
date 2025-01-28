<template>
  <nav>
    <div class="nav-container">
      <div class="logo">
        <img src="@/assets/logo.png" alt="Logo" />
      </div>
      <ul class="nav-links">
        <li><router-link to="/alianzas">Alianzas</router-link></li>
        <li><router-link to="/talleres">Talleres</router-link></li>
        <li><router-link to="/voluntariados">Voluntariados</router-link></li>
        <li><router-link to="/becas">Becas</router-link></li>
        <li><router-link to="/comunidades">Comunidades</router-link></li>
        <li><router-link to="/carreras">Carreras</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
nav {
  background-color: transparent;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  padding: 1rem;
  z-index: 10;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo img {
  height: 50px;
}

.nav-links {
  list-style-type: none;
  display: flex;
  gap: 15px;
  margin: 0;
  padding: 0;
}

.nav-links li {
  margin: 0;
}

.nav-links a {
  text-decoration: none;
  color: white;
}

.nav-links a:hover {
  text-decoration: underline;
}
</style>