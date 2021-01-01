<template>
    <div class="home-cars">
        <div class=" d-flex justify-content-center">
            <!-- title -->
            <ul class="nav mt-4">
                <li class="nav-item">
                    <div class="pointer  nav-link">
                        <router-link :to="{ name: 'cars'}">
                            AUTOS
                        </router-link>
                    </div>
                </li>
                <li class="nav-item">
                    <div class="pointer  nav-link">
                        <router-link :to="{ name: 'suv'}">
                            SUV
                        </router-link>
                    </div>
                </li>
                <li class="nav-item">
                    <div class="pointer  nav-link">
                        <router-link :to="{ name: 'comercial'}">
                            COMERCIAL
                        </router-link>
                    </div>
                </li>
                <li class="nav-item">
                    <div class="pointer  nav-link">
                        <router-link :to="{ name: 'camiones'}">
                                CAMIONES
                        </router-link>
                    </div>
                </li>
                <li class="nav-item">
                    <div class="pointer  nav-link" >
                        <router-link :to="{ name: 'buses'}">
                                BUSES
                        </router-link>
                    </div>
                </li>
            </ul>
            <!-- Carousel -->
        </div>
    </div>
</template>