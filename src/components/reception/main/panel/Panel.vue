<template>
  <div class="Panel-bg">
    <div v-for="item in props.movie">
      <div class="panel-header">
          <div class="left"><h1>{{ item.Title }}</h1></div>
          <div class="right"><h3>全部</h3></div>
      </div>
      <div class="movie-list">
        <div v-for="movie in item.Data" :key="movie.Id" class="movie-card" @click="Details(movie.Id)">
            <img :src="movie.Poster" alt="海报">
            <h3>{{ movie.Title }}</h3>
            <p>{{ movie.Description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import router from "@/router";
export default {
    props:{
        movie:{
            type:Array,
        }
    },
    setup(props){
        const Details = (movie_id)=> {
            router.push({
                path: "/details",
                query: {
                    movie_id: movie_id,
                }
            })
        };
        return{
            Details,
            props
        }
    }
};

</script>

<style scoped>
.Panel-bg{
    margin-top: 20px;
}
.panel-header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    margin: 10px 0 10px 0;
}

.movie-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 1rem;
}
.movie-card:hover {
    transform: translateY(-10px);
}

.movie-card {
    display: flex;
    flex-direction: column;
    width: 300px;
    background-color: #f5f5f5;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.3s ease-out;
    margin: 0 20px 10px 0;
}

.movie-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.movie-card h3 {
    margin: 1rem;
}

.movie-card p {
    margin: 0 1rem 1rem;
}
</style>