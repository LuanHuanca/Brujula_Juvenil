import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import AlianzasPage from '../views/AlianzasPage.vue'
import TalleresPage from '../views/TalleresPage.vue'
import VoluntariadosPage from '../views/VoluntariadosPage.vue'
import BecasPage from '../views/BecasPage.vue'
import ComunidadesPage from '../views/ComunidadesPage.vue'
import CarrerasPage from '../views/CarrerasPage.vue'

const routes = [
  { path: '/', component: LandingPage },
  { path: '/alianzas', component: AlianzasPage },
  { path: '/talleres', component: TalleresPage },
  { path: '/voluntariados', component: VoluntariadosPage },
  { path: '/becas', component: BecasPage },
  { path: '/comunidades', component: ComunidadesPage },
  { path: '/carreras', component: CarrerasPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router