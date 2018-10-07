<template lang="pug">
  section#contact
    #google-map(ref="gmap")
    .contact-wrapper
      .container
        .row
          .col-sm-4.col-sm-offset-8
            .contact-form
              h3 Kontakt
              address
                strong KinderStärken Jena e.V.
                br
                |  Am Steiger 6
                br
                |  07743 Jena
                br
              form#main-contact-form(name='contact-form', method='post', action='#')
                .form-group
                  input.form-control(type='text', name='name', placeholder='Name', required='' )
                .form-group
                  input.form-control(type='email', name='email', placeholder='eMail', required='')
                .form-group
                  input.form-control(type='text', name='subject', placeholder='Betreff', required='')
                .form-group
                  textarea.form-control#message(rows='8', placeholder='Nachricht', required='')
              button.btn.btn-primary(type="submit") Nachricht senden
</template>

<script>
export default {
  mounted() {
    // return {
    //   center : {lat:50.932230, lng: 11.582},
    //   markers: [
    //     { position: {lat: 11.582, lng: 11.582}}
    //   ]
    // }
    const ourPosition = new google.maps.LatLng('50.932230','11.582');
    this.map = new google.maps.Map(this.$refs.gmap, {
      zoom: 17,
      scrollwheel: false,
      center: ourPosition,
    });
  }
}
</script>

<style>
#google-map {
  height: 650px;
}
</style>

