<script lang="ts" setup>
import Swal from "sweetalert2";
import type { Footer } from "~/misc/types";

definePageMeta({
    middleware: ["auth"],
});

const { getFooterByID } = useFooter();
const dialog = ref<{ show: boolean }>({ show: false })
const footer = ref<Footer>({
    id: '',
    footer_detail: '',
})

const icons = [
    'mdi-facebook',
    'mdi-facebook-messenger',
    'mdi-twitter',
]

const openFrom = () => {
    dialog.value.show = true
}

onMounted(async () => {
    footer.value = await getFooterByID({ id: 'DEFAULT' })
})
</script>

<template>
    <div id="footer">
        <v-row class="footer mt-16 px-10" style="position: relative;">
            <img class="footer-bg-0 d-block w-100 h-100" src="@/assets/images/footer/footer.png" alt="">
            <img class="footer-bg-1 w-100 h-100" src="@/assets/images/footer/footer.png" alt="">
            <img class="footer-bg-2 w-100 h-100" src="@/assets/images/footer/footer.png" alt="">
            <img class="footer-bg-3 w-100 h-100" src="@/assets/images/footer/footer.png" alt="">
            <img class="footer-bg-4 w-100 h-100" src="@/assets/images/footer/footer.png" alt="">
            <v-col class="pt-5 footer-info">
                <h2 class="my-10">Let's make your <span class="text-txtcolor px-1">Dream</span> come true</h2>
                <v-btn id="contact-us" class=" rounded-lg mb-16 bg-service_3 text-surface" @click="openFrom">
                    CONTACT US
                </v-btn>
            </v-col>
            <v-col class="footer-info d-flex flex-column align-end my-10 pr-7">
                <p class="py-1 text-txtcolor font-weight-bold"> support@revelsoft.co.th</p>
                <p class="fs-5 py-1 font-weight-bold">044-011-494</p>
                <v-row v-if="icons.length > 0" class="fs-6">
                    <!-- <v-btn v-for="icon in icons" :key="icon" class="rounded-circle bg-surface mx-2" :icon="icon"
                        variant="text"></v-btn> -->
                    <a class="icons rounded-circle bg-surface mx-2" href="https://www.facebook.com/revelsoft">
                        <v-icon>
                            {{ icons[0] }}
                        </v-icon>
                    </a>
                    <a class="icons rounded-circle bg-surface  mx-2" href="##">
                        <v-icon>
                            {{ icons[1] }}
                        </v-icon>
                    </a>
                    <a class="icons rounded-circle bg-surface  mx-2" href="##">
                        <v-icon>
                            {{ icons[2] }}
                        </v-icon>
                    </a>
                </v-row>
                <p class="py-1 font-weight-light">2023 All Rights Reserved by Revel Soft Inc. </p>
            </v-col>
        </v-row>
    </div>
    <div>
        <template>
            <popupform v-model="dialog" />
        </template>
    </div>
</template>

<style scoped>
.footer {
    font-family: "Outfit", sans-serif;
    padding-top: 5em;
}

.footer-bg-0 {
    object-fit: cover;
    position: absolute;
    overflow-x: hidden;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 7;
}

.footer-bg-1 {
    position: absolute;
    overflow-x: hidden;
    right: 50%;
    opacity: 0.3;
    bottom: 0;
    z-index: 7;
}

.footer-bg-2 {
    position: absolute;
    overflow-x: hidden;
    left: 50%;
    opacity: 0.3;
    bottom: 0;
    z-index: 7;
}

.footer-bg-3 {
    position: absolute;
    overflow-x: hidden;
    right: 25%;
    opacity: 0.3;
    bottom: 0;
    z-index: 7;
}

.footer-bg-4 {
    position: absolute;
    overflow-x: hidden;
    left: 25%;
    opacity: 0.3;
    bottom: 0;
}

.footer-info {
    z-index: 10;
}

.icons {
    padding: 0.5em;
    align-self: center;
}
</style>