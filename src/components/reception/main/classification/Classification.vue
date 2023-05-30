<template>
    <div class="tags-panel">
        <ul class="tags-lines">
            <li class="tags-line" v-for="(item,index ) in tag_data.class_data">
                <ul class="tag">
                    <li>
                        <b>{{ item.title }}</b>
                    </li>
                    <li v-for="(item1,index1) in item.context" :class="{ active:isActive(index,index1)}" @click="setActive(index,index1)">
                        {{ item1 }}
                    </li>
                </ul>
            </li>
        </ul>
    </div>
    <div class="tag-data">
        <div>
            <div class="tag-data-list">
                <div v-for="movie in tag_data.movies" :key="movie.id" class="tag-data-movie-card">
                    <img src="../../../../assets/movie/fb73869a3390fa281e395ba5f89fe7142e4ab.jpg" alt="海报">
                    <h3>{{ movie.title }}</h3>
                    <p>{{ movie.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {reactive, ref} from "vue";
import Header from "@/components/reception/main/Header/Header.vue";
const activeIndex = ref([0,1])
const setActive = (index,index1)=>{
    activeIndex.value[0]=index
    activeIndex.value[1]=index1
}
const isActive = (index,index1)=> index === activeIndex.value[0] && index1 === activeIndex.value[1];
const tag_data = reactive({
    class_data:[
        {
            title:"类型:",
            context:[
                "全部","爱情","悬疑","全部","爱情","悬疑","恐怖","全部","爱情","悬疑","恐怖","全部","爱情","悬疑","恐怖","全部","爱情","悬疑","恐怖","全部","爱情","悬疑","恐怖","全部","爱情","悬疑","恐怖"
            ]
        },
        {
            title:"类型:",
            context:[
                "全部","爱情","悬疑","恐怖"
            ]
        }
    ],
    movies: [
        {
            id:1,
            poster:"",
            title:"铃芽之旅",
            description:"新海诚"
        },
        {
            id:2,
            poster:"",
            title:"铃芽之旅",
            description:"新海诚"
        },
        {
            id:3,
            poster:"",
            title:"铃芽之旅",
            description:"新海诚"
        },
        {
            id:4,
            poster:"",
            title:"铃芽之旅",
            description:"新海诚"
        },
        {
            id:5,
            poster:"",
            title:"铃芽之旅",
            description:"新海诚"
        },
        {
            id:6,
            poster:"",
            title:"铃芽之旅",
            description:"新海诚"
        },
        {
            id:7,
            poster:"",
            title:"铃芽之旅",
            description:"新海诚"
        },
        {
            id:8,
            poster:"",
            title:"铃芽之旅",
            description:"新海诚"
        },
        {
            id:9,
            poster:"",
            title:"铃芽之旅",
            description:"新海诚"
        },
        {
            id:10,
            poster:"",
            title:"铃芽之旅",
            description:"新海诚"
        }
    ],
});

</script>
<style>
.tags-lines{
    padding: 0;
}
.tags-panel{
    display: flex;
    align-items: center;
    border: aliceblue 2px solid;
}
.tags-panel ul{
    display: flex; /* 将列表容器设置为 flex 容器 */
    list-style: none; /* 隐藏原本的列表标记 */
    align-items: center;
    flex-wrap: wrap;
}
.tags-line ul{
    padding: 10px;
}
.tag li{
    margin-right: 20px;
    cursor: pointer;
}
.tag{
    font-size: 20px;
}
.tag-data{

}
.tag-data-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
}
.tag-data-movie-card{
    display: flex;
    flex-direction: column;
    width: 300px;
    background-color: #f5f5f5;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.3s ease-out;
}
.tag-data-movie-card:hover {
    transform: translateY(-5px);
}
.tag-data-movie-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.tag-data-movie-card h3 {
    margin: 1rem;
}

.tag-data-movie-card p {
    margin: 0 1rem 1rem;
}
.active{
    color: red;
}
</style>
