<template>
  <nav class="navigation">
      <ul class="navigation__list">
          <li><router-link to="/download-image">Download Image</router-link></li>
          <li><router-link to="/download-pdf">Download PDF</router-link></li>
      </ul>
  </nav>
</template>

<script>
export default {

};
</script>

<style lang="scss">
.navigation {
    width: 100%;
    border-bottom: solid 1px #484F66;
    display: flex;
    justify-content: center;
    align-items: center;

    &__list {
        list-style-type: none;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: stretch;
        flex-wrap: wrap;

        @media only screen and (min-width: 767px) {
            justify-content: flex-start;
        }

        li {
            margin-right: 10px;
            display: inline-block;

            a {
                display: block;
                padding: 10px;
                text-decoration: none;

                &:hover {
                    background: #E1BE68;
                    color: #fff;
                }
            }
        }

        li:first-child {
            padding-left: 0;
        }
    }

    .router-link-active {
        background: #E1BE68;
        color: #fff;
    }
}
</style>
