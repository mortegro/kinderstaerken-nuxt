<template lang="pug">
  section#contact
    .contact-wrapper
      .container(style="background-image: url('images/contact.jpg');background-size: contain;background-repeat:round;")
        .row(style="margin-bottom: 150px")
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

}
</script>

<style scoped>
.contact-wrapper {
  background: #dddddd
}
</style>

