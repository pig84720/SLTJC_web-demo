<template>
  <div class="body">
    <img
      class="text"
      src="https://i.ibb.co/CtT65D0/Pngtree-hand-drawn-pigeon-pigeon-pattern-3837347.png"
      alt
    />
    <div class="Carousel_container">
      <Carousel autoplay :autoplay-speed="timeOut" v-model="value2" loop class="Carousel">
        <CarouselItem>
          <img
            class="background"
            src="https://www.10wallpaper.com/wallpaper/1366x768/2003/Aurora_Borealis_Coastline_2019_Nature_Scenery_Photo_1366x768.jpg"
            alt
          />
        </CarouselItem>
        <CarouselItem>
          <img
            class="background"
            src="https://www.10wallpaper.com/wallpaper/1366x768/2003/Riisitunturi_Winter_Finland_2020_Nature_Scenery_Photo_1366x768.jpg"
            alt
          />
        </CarouselItem>
        <CarouselItem>
          <img
            class="background"
            src="https://www.10wallpaper.com/wallpaper/1366x768/2003/Autumn_blue_sky_lake_2020_Nature_Scenery_Photo_1366x768.jpg"
            alt
          />
        </CarouselItem>
        <CarouselItem>
          <img
            class="background"
            src="https://www.10wallpaper.com/wallpaper/1366x768/2003/Purple_Lavender_Field_2020_Nature_Scenery_Photo_1366x768.jpg"
            alt
          />
        </CarouselItem>
      </Carousel>
    </div>
  </div>
</template>

<style scoped>
.body {
  position: relative;
  width: 100%;
  height: auto;
}
.text {
  z-index: 3;
  width: 30%;
  height: auto;
  position: absolute;
  top: 60%;
  left: 70%;
  transform: translate(-50%, -50%);
}
.Carousel_container {
  z-index: 2;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  width: 100%;
  height: 81vh;
  overflow: hidden;
}
.Carousel {
  z-index: -1;
  width: 80%;
}
.background {
  width: 100%;
  height: auto;
}
</style>>

<script>
export default {
  data() {
    return {
      value2: 0,
      timeOut: 7000
    };
  }
};
</script>