<script lang="ts" setup>
import Swal from "sweetalert2";
import type { About } from "~/misc/types";
import errorImage from "@/assets/images/error.png"

const defaultImage = "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg"

definePageMeta({
    middleware: ["auth"],
});

const { getAboutByID, } = useAbout();
const { public: publicCtx } = useRuntimeConfig()
const abouts = ref<About>({
    id: '',
    about_detail: '',
    about_img: '',
})

onMounted(async () => {
    abouts.value = await getAboutByID({ id: 'DEFAULT' })
})
</script>

<template>
    <div class="about mt-16  ">
        <v-row id="about" class="d-flex justify-center">
            <h1 class="text-txtcolor font-weight-bold">About</h1>
            <h1 class="ml-3 font-weight-bold">Us</h1>
        </v-row>
        <v-col cols="12" class="d-flex justify-center">
            <v-row cols="12" class="about-us ">
                <v-row cols="12" class="d-flex justify-center">
                    <v-col cols="8" lg="8" id="about-info" class="pt-16 ">
                        <v-row class="align-center" style="position: relative;">
                            <v-icon class=" text-greenblue " style="position: absolute; top: 0.4em; left: -0.9em;">mdi-36px
                                mdi-checkbox-marked-circle-outline</v-icon>

                            <span class="text-greenblue text-h1 px-2 font-weight-bold ">10 years experience</span>
                        </v-row>
                        <v-col class="containner ">
                            <div class="text-h4 pt-2 font-weight-regular" style="white-space: pre-line;">{{
                                abouts.about_detail }} </div>
                        </v-col>
                    </v-col>
                    <v-col cols="4" lg="4" class="about-image-containner  w-100 h-100 my-6 d-flex align-center ">
                        <v-img class="about-img  align-center justify-center d-block w-100"
                            :src="`${abouts.about_img ? `${publicCtx.apiBaseUrl}${abouts.about_img}` : defaultImage}`" cover
                            alt="about">
                            <template v-slot:error>
                                <v-img :src="errorImage" cover alt="error"></v-img>
                            </template>
                        </v-img>
                    </v-col>
                </v-row>
            </v-row>
        </v-col>
    </div>
</template>

<style scoped>
.about-us {
    margin: 0 5%;
    z-index: 4;
}

.about-image-containner {
    max-width: 25em;
    min-width: 25em;
    max-height: 25em;
    min-height: 20em;
}

#about,
#about-info {
    font-family: "Outfit", sans-serif;
}

@media only screen and (max-width: 600px) {
    .about-image-containner {
        max-width: 20em;
        min-width: 18em;
        max-height: 25em;
        min-height: 20em;
    }

    .about-us {
        margin: 0 !important;
    }
}
</style>