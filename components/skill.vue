<script lang="ts" setup>
import type { Skill, SkillList } from "~~/misc/types"
import errorImage from "@/assets/images/error.png"
const defaultImage = "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg"

definePageMeta({ middleware: ["auth"] });
const { public: publicCtx } = useRuntimeConfig()

const { getSkillClientBy } = useSkill();
const { getSkillListClientBy } = useSkillList();
const skill = ref<Skill[]>([]);
const skill_list = ref<SkillList[]>([]);

onMounted(async () => {
    try {
        const params = new URLSearchParams(window.location.search);
        const query: { [key: number | string]: string } = {};

        for (const [key, value] of params) {
            query[key] = value;
        }

        const skill_result = await getSkillClientBy({ skill_id: query.id });
        skill.value = skill_result.docs;
        const skill_list_result = await getSkillListClientBy({ skill_list_id: query.id });
        skill_list.value = skill_list_result.docs;
    } catch (e) {
        console.log(e)
    }
})
</script>

<template>
    <div id="skill" class="pb-16">
        <v-row class="skill d-flex justify-center py-10">
            <h1 class="font-weight-bold">Our</h1>
            <h1 class="ml-3 text-txtcolor font-weight-bold">Skill</h1>
        </v-row>
        <v-col>
            <v-row class=" d-flex justify-space-evenly  h-100" v-if="skill.length > 0 && skill_list.length > 0">
                <circle-sm style="position: absolute; right: 40%;" />
                <circle-xs style="position: absolute; right: 35%;" />
                <div class="skill-item">
                    <div class="circle-img d-block w-100">
                        <div class="skill-box w-100 h-100 d-flex justify-center align-center">
                            <div class="above-circle d-flex justify-space-between">
                                <div
                                    class="circle-sm-1 rounded-circle d-flex flex-column justify-center align-center pt-3 ">
                                    <v-img class="skill-img d-block w-100"
                                        :src="`${skill_list[0].skill_list_img ? `${publicCtx.apiBaseUrl}${skill_list[0].skill_list_img}` : defaultImage}`"
                                        cover alt="skill_list">
                                        <template v-slot:error>
                                            <v-img :src="errorImage" cover alt="error"></v-img>
                                        </template>
                                    </v-img>
                                    <p>{{ skill_list[0].skill_list_detail }}</p>
                                </div>
                                <div
                                    class="circle-sm-2 rounded-circle d-flex flex-column justify-center align-center pt-3 ">
                                    <v-img class="skill-img d-block w-100"
                                        :src="`${skill_list[1].skill_list_img ? `${publicCtx.apiBaseUrl}${skill_list[1].skill_list_img}` : defaultImage}`"
                                        cover alt="skill_list">
                                        <template v-slot:error>
                                            <v-img :src="errorImage" cover alt="error"></v-img>
                                        </template>
                                    </v-img>
                                    <p>{{ skill_list[1].skill_list_detail }}</p>
                                </div>
                            </div>
                            <h2 class="pb-16" id="frontend">{{ skill[0].skill_name }}</h2>
                            <div class="middle-circle d-flex justify-space-between">
                                <div
                                    class="circle-sm-3 rounded-circle d-flex flex-column justify-center align-center pt-3 ">
                                    <v-img class="skill-img d-block w-100"
                                        :src="`${skill_list[2].skill_list_img ? `${publicCtx.apiBaseUrl}${skill_list[2].skill_list_img}` : defaultImage}`"
                                        cover alt="skill_list">
                                        <template v-slot:error>
                                            <v-img :src="errorImage" cover alt="error"></v-img>
                                        </template>
                                    </v-img>
                                    <p>{{ skill_list[2].skill_list_detail }}</p>
                                </div>
                                <div
                                    class="circle-sm-4 rounded-circle d-flex flex-column justify-center align-center pt-3 ">
                                    <v-img class="skill-img d-block w-100"
                                        :src="`${skill_list[3].skill_list_img ? `${publicCtx.apiBaseUrl}${skill_list[3].skill_list_img}` : defaultImage}`"
                                        cover alt="skill_list">
                                        <template v-slot:error>
                                            <v-img :src="errorImage" cover alt="error"></v-img>
                                        </template>
                                    </v-img>
                                    <p>{{ skill_list[3].skill_list_detail }}</p>
                                </div>
                            </div>
                            <div class="under-circle d-flex justify-space-between">
                                <div
                                    class="circle-sm-5 rounded-circle d-flex flex-column justify-center align-center pt-3 ">
                                    <v-img class="skill-img d-block w-100"
                                        :src="`${skill_list[4].skill_list_img ? `${publicCtx.apiBaseUrl}${skill_list[4].skill_list_img}` : defaultImage}`"
                                        cover alt="skill_list">
                                        <template v-slot:error>
                                            <v-img :src="errorImage" cover alt="error"></v-img>
                                        </template>
                                    </v-img>
                                    <p>{{ skill_list[4].skill_list_detail }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="skill-item">
                    <div class="circle-img d-block w-100 d-flex justify-center align-center">
                        <div class="skill-box w-100 h-100 d-flex justify-center align-center ">
                            <div class="above-circle d-flex justify-space-between">
                                <div
                                    class="circle-sm-1 rounded-circle d-flex flex-column justify-center align-center pt-3 ">
                                    <v-img class="skill-img d-block w-100"
                                        :src="`${skill_list[5].skill_list_img ? `${publicCtx.apiBaseUrl}${skill_list[5].skill_list_img}` : defaultImage}`"
                                        cover alt="skill_list">
                                        <template v-slot:error>
                                            <v-img :src="errorImage" cover alt="error"></v-img>
                                        </template>
                                    </v-img>
                                    <p>{{ skill_list[5].skill_list_detail }}</p>
                                </div>
                                <div
                                    class="circle-sm-2 rounded-circle d-flex flex-column justify-center align-center pt-3 ">
                                    <v-img class="skill-img d-block w-100"
                                        :src="`${skill_list[6].skill_list_img ? `${publicCtx.apiBaseUrl}${skill_list[6].skill_list_img}` : defaultImage}`"
                                        cover alt="skill_list">
                                        <template v-slot:error>
                                            <v-img :src="errorImage" cover alt="error"></v-img>
                                        </template>
                                    </v-img>
                                    <p>{{ skill_list[6].skill_list_detail }}</p>
                                </div>
                            </div>
                            <h2 class="pb-16" id="backend">{{ skill[1].skill_name }}</h2>
                            <div class="middle-circle d-flex justify-space-between">
                                <div
                                    class="circle-sm-3 rounded-circle d-flex flex-column justify-center align-center pt-3 ">
                                    <v-img class="skill-img d-block w-100"
                                        :src="`${skill_list[7].skill_list_img ? `${publicCtx.apiBaseUrl}${skill_list[7].skill_list_img}` : defaultImage}`"
                                        cover alt="skill_list">
                                        <template v-slot:error>
                                            <v-img :src="errorImage" cover alt="error"></v-img>
                                        </template>
                                    </v-img>
                                    <p>{{ skill_list[7].skill_list_detail }}</p>
                                </div>
                                <div
                                    class="circle-sm-4 rounded-circle d-flex flex-column justify-center align-center pt-3 ">
                                    <v-img class="skill-img d-block w-100"
                                        :src="`${skill_list[8].skill_list_img ? `${publicCtx.apiBaseUrl}${skill_list[8].skill_list_img}` : defaultImage}`"
                                        cover alt="skill_list">
                                        <template v-slot:error>
                                            <v-img :src="errorImage" cover alt="error"></v-img>
                                        </template>
                                    </v-img>
                                    <p>{{ skill_list[8].skill_list_detail }}</p>
                                </div>
                            </div>
                            <div class="under-circle d-flex justify-space-between">
                                <div
                                    class="circle-sm-5 rounded-circle d-flex flex-column justify-center align-center pt-3 ">
                                    <v-img class="skill-img d-block w-100"
                                        :src="`${skill_list[9].skill_list_img ? `${publicCtx.apiBaseUrl}${skill_list[9].skill_list_img}` : defaultImage}`"
                                        cover alt="skill_list">
                                        <template v-slot:error>
                                            <v-img :src="errorImage" cover alt="error"></v-img>
                                        </template>
                                    </v-img>
                                    <p>{{ skill_list[9].skill_list_detail }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="skill-item ">
                    <div class="circle-img d-block w-100 d-flex justify-center align-center">
                        <div class="skill-box  w-100 h-100 d-flex justify-center align-center ">
                            <div class="above-circle d-flex justify-space-between">
                                <div
                                    class="circle-sm-1 rounded-circle d-flex flex-column justify-center align-center pt-3 ">
                                    <v-img class="skill-img d-block w-100"
                                        :src="`${skill_list[10].skill_list_img ? `${publicCtx.apiBaseUrl}${skill_list[10].skill_list_img}` : defaultImage}`"
                                        cover alt="skill_list">
                                        <template v-slot:error>
                                            <v-img :src="errorImage" cover alt="error"></v-img>
                                        </template>
                                    </v-img>
                                    <p>{{ skill_list[10].skill_list_detail }}</p>
                                </div>
                                <div
                                    class="circle-sm-2 rounded-circle d-flex flex-column justify-center align-center pt-3 ">
                                    <v-img class="skill-img d-block w-100"
                                        :src="`${skill_list[11].skill_list_img ? `${publicCtx.apiBaseUrl}${skill_list[11].skill_list_img}` : defaultImage}`"
                                        cover alt="skill_list">
                                        <template v-slot:error>
                                            <v-img :src="errorImage" cover alt="error"></v-img>
                                        </template>
                                    </v-img>
                                    <p>{{ skill_list[11].skill_list_detail }}</p>
                                </div>
                            </div>
                            <h2 class="pb-16" id="database">{{ skill[2].skill_name }}</h2>
                            <div class="middle-circle d-flex justify-space-between">
                                <div
                                    class="circle-sm-3 rounded-circle d-flex flex-column justify-center align-center pt-3 ">
                                    <v-img class="skill-img d-block w-100"
                                        :src="`${skill_list[12].skill_list_img ? `${publicCtx.apiBaseUrl}${skill_list[12].skill_list_img}` : defaultImage}`"
                                        cover alt="skill_list">
                                        <template v-slot:error>
                                            <v-img :src="errorImage" cover alt="error"></v-img>
                                        </template>
                                    </v-img>
                                    <p>{{ skill_list[12].skill_list_detail }}</p>
                                </div>
                                <div
                                    class="circle-sm-4 rounded-circle d-flex flex-column justify-center align-center pt-3 ">
                                    <v-img class="skill-img d-block w-100"
                                        :src="`${skill_list[13].skill_list_img ? `${publicCtx.apiBaseUrl}${skill_list[13].skill_list_img}` : defaultImage}`"
                                        cover alt="skill_list">
                                        <template v-slot:error>
                                            <v-img :src="errorImage" cover alt="error"></v-img>
                                        </template>
                                    </v-img>
                                    <p>{{ skill_list[13].skill_list_detail }}</p>
                                </div>
                            </div>
                            <div class="under-circle d-flex justify-space-between">
                                <div
                                    class="circle-sm-5 rounded-circle d-flex flex-column justify-center align-center pt-3 ">
                                    <v-img class="skill-img d-block w-100"
                                        :src="`${skill_list[14].skill_list_img ? `${publicCtx.apiBaseUrl}${skill_list[14].skill_list_img}` : defaultImage}`"
                                        cover alt="skill_list">
                                        <template v-slot:error>
                                            <v-img :src="errorImage" cover alt="error"></v-img>
                                        </template>
                                    </v-img>
                                    <p>{{ skill_list[14].skill_list_detail }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </v-row>
            <v-row class=" d-flex justify-space-evenly " v-if="skill.length > 0 && skill_list.length > 0"
                style="position: relative;">
                <div class="skill-item">
                    <div class="circle-img d-block w-100 d-flex justify-center align-center">
                        <div class="skill-box w-100 h-100 d-flex justify-center align-center ">
                            <div class="above-circle d-flex justify-space-between">
                                <div
                                    class="circle-sm-1 rounded-circle d-flex flex-column justify-center align-center pt-3 ">
                                    <v-img class="skill-img d-block w-100"
                                        :src="`${skill_list[15].skill_list_img ? `${publicCtx.apiBaseUrl}${skill_list[15].skill_list_img}` : defaultImage}`"
                                        cover alt="skill_list">
                                        <template v-slot:error>
                                            <v-img :src="errorImage" cover alt="error"></v-img>
                                        </template>
                                    </v-img>
                                    <p>{{ skill_list[15].skill_list_detail }}</p>
                                </div>
                                <div
                                    class="circle-sm-2 rounded-circle d-flex flex-column justify-center align-center pt-3 ">
                                    <v-img class="skill-img d-block w-100"
                                        :src="`${skill_list[16].skill_list_img ? `${publicCtx.apiBaseUrl}${skill_list[16].skill_list_img}` : defaultImage}`"
                                        cover alt="skill_list">
                                        <template v-slot:error>
                                            <v-img :src="errorImage" cover alt="error"></v-img>
                                        </template>
                                    </v-img>
                                    <p>{{ skill_list[16].skill_list_detail }}</p>
                                </div>
                            </div>
                            <h2 class="pb-16" id="framework">{{ skill[3].skill_name }}</h2>
                            <div class="middle-circle d-flex justify-space-between">
                                <div
                                    class="circle-sm-3 rounded-circle d-flex flex-column justify-center align-center pt-3 ">
                                    <v-img class="skill-img d-block w-100"
                                        :src="`${skill_list[17].skill_list_img ? `${publicCtx.apiBaseUrl}${skill_list[17].skill_list_img}` : defaultImage}`"
                                        cover alt="skill_list">
                                        <template v-slot:error>
                                            <v-img :src="errorImage" cover alt="error"></v-img>
                                        </template>
                                    </v-img>
                                    <p>{{ skill_list[17].skill_list_detail }}</p>
                                </div>
                                <div
                                    class="circle-sm-4 rounded-circle d-flex flex-column justify-center align-center pt-3 ">
                                    <v-img class="skill-img d-block w-100"
                                        :src="`${skill_list[18].skill_list_img ? `${publicCtx.apiBaseUrl}${skill_list[18].skill_list_img}` : defaultImage}`"
                                        cover alt="skill_list">
                                        <template v-slot:error>
                                            <v-img :src="errorImage" cover alt="error"></v-img>
                                        </template>
                                    </v-img>
                                    <p>{{ skill_list[18].skill_list_detail }}</p>
                                </div>
                            </div>
                            <div class="under-circle d-flex justify-space-between">
                                <div
                                    class="circle-sm-5 rounded-circle d-flex flex-column justify-center align-center pt-3 ">
                                    <v-img class="skill-img d-block w-100"
                                        :src="`${skill_list[19].skill_list_img ? `${publicCtx.apiBaseUrl}${skill_list[19].skill_list_img}` : defaultImage}`"
                                        cover alt="skill_list">
                                        <template v-slot:error>
                                            <v-img :src="errorImage" cover alt="error"></v-img>
                                        </template>
                                    </v-img>
                                    <p>{{ skill_list[19].skill_list_detail }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <circle-sm style="position: absolute; left: 30%;" />
                <circle-xs style="position: absolute; left: 29%;" />
                <div class=" skill-item ">
                    <div class=" circle-img d-block w-100 d-flex justify-center align-center">
                        <div class="skill-box w-100 h-100 d-flex justify-center align-center ">
                            <div class="above-circle d-flex justify-space-between">
                                <div
                                    class="circle-sm-1 rounded-circle d-flex flex-column justify-center align-center pt-3 ">
                                    <v-img class="skill-img d-block w-100"
                                        :src="`${skill_list[20].skill_list_img ? `${publicCtx.apiBaseUrl}${skill_list[20].skill_list_img}` : defaultImage}`"
                                        cover alt="skill_list">
                                        <template v-slot:error>
                                            <v-img :src="errorImage" cover alt="error"></v-img>
                                        </template>
                                    </v-img>
                                    <p>{{ skill_list[20].skill_list_detail }}</p>
                                </div>
                                <div
                                    class="circle-sm-2 rounded-circle d-flex flex-column justify-center align-center pt-3 ">
                                    <v-img class="skill-img d-block w-100"
                                        :src="`${skill_list[21].skill_list_img ? `${publicCtx.apiBaseUrl}${skill_list[21].skill_list_img}` : defaultImage}`"
                                        cover alt="skill_list">
                                        <template v-slot:error>
                                            <v-img :src="errorImage" cover alt="error"></v-img>
                                        </template>
                                    </v-img>
                                    <p>{{ skill_list[21].skill_list_detail }}</p>
                                </div>
                            </div>
                            <h2 class="pb-16" id="infrastructure">{{ skill[4].skill_name }}</h2>
                            <div class="middle-circle d-flex justify-space-between">
                                <div
                                    class="circle-sm-3 rounded-circle d-flex flex-column justify-center align-center pt-3 ">
                                    <v-img class="skill-img d-block w-100"
                                        :src="`${skill_list[22].skill_list_img ? `${publicCtx.apiBaseUrl}${skill_list[22].skill_list_img}` : defaultImage}`"
                                        cover alt="skill_list">
                                        <template v-slot:error>
                                            <v-img :src="errorImage" cover alt="error"></v-img>
                                        </template>
                                    </v-img>
                                    <p>{{ skill_list[22].skill_list_detail }}</p>
                                </div>
                                <div
                                    class="circle-sm-4 rounded-circle d-flex flex-column justify-center align-center pt-3 ">
                                    <v-img class="skill-img d-block w-100"
                                        :src="`${skill_list[23].skill_list_img ? `${publicCtx.apiBaseUrl}${skill_list[23].skill_list_img}` : defaultImage}`"
                                        cover alt="skill_list">
                                        <template v-slot:error>
                                            <v-img :src="errorImage" cover alt="error"></v-img>
                                        </template>
                                    </v-img>
                                    <p>{{ skill_list[23].skill_list_detail }}</p>
                                </div>
                            </div>
                            <div class="under-circle d-flex justify-space-between">
                                <div
                                    class="circle-sm-5 rounded-circle d-flex flex-column justify-center align-center pt-3 ">
                                    <v-img class="skill-img d-block w-100"
                                        :src="`${skill_list[24].skill_list_img ? `${publicCtx.apiBaseUrl}${skill_list[24].skill_list_img}` : defaultImage}`"
                                        cover alt="skill_list">
                                        <template v-slot:error>
                                            <v-img :src="errorImage" cover alt="error"></v-img>
                                        </template>
                                    </v-img>
                                    <p>{{ skill_list[24].skill_list_detail }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </v-row>
        </v-col>
    </div>
</template>

<style scoped>
.skill,
.circle-sm-1 p,
.circle-sm-2 p,
.circle-sm-3 p,
.circle-sm-4 p,
.circle-sm-5 p {
    font-family: "Outfit", sans-serif;
    font-size: 14px;
}

.skill-box {
    min-width: 350px;
    min-height: 350px;
}

.circle-img {
    background-image: url("../assets/images/Circle.png");
    min-width: 337px;
    min-height: 323px;
    position: relative;
}

.skill-img {
    max-width: 40px;
    max-height: 40px;
}

.circle-sm-1 {
    position: absolute;
    width: 85px;
    height: 85px;
    top: 0;
    left: 9%;
}

.circle-sm-2 {
    position: absolute;
    width: 85px;
    height: 85px;
    top: 0;
    right: 13%;
}

.circle-sm-3 {
    position: absolute;
    width: 85px;
    height: 85px;
    bottom: 33%;
    left: 0;
}

.circle-sm-4 {
    position: absolute;
    width: 85px;
    height: 85px;
    right: 4%;
    bottom: 33%;
}

.circle-sm-5 {
    position: absolute;
    width: 85px;
    height: 85px;
    bottom: 8%;
    left: 48%;
    transform: translate(-50%);
}
</style>