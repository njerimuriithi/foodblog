<template>
<div class="homeheader">
  <div class="btn  btn-lg ">
      <button >Subscribe</button>
  </div>

  <div class="position-relative top-20 start-50 translate-middle fs-4">
<h1><span style="color:#c0e218">Kayl</span>FoodBlog</h1>
  </div>
  
  <div class="icons d-flex position-relative top-10 end-0">
    <i class="fab fa-facebook"></i>
    <i class="fab fa-twitter"></i>
    <i class="fab fa-youtube"></i>
    <i class="fab fa-instagram-square"></i>
    <i class="fas fa-envelope"></i>


  </div>
</div>
<Homepage></Homepage>
</template>

  
<script>
  import Homepage from '@/components/Homepage.vue'

export default {
  name:"homepage",
  components:{
    Homepage
  }


}
</script>

<style>
.homeheader{
    font-family: 'Just Another Hand', cursive;
}
h1{
    font-size: 80px;
}
button{
  font-size: 40px;
}
</style>