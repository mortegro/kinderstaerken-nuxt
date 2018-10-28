<template lang="pug">
div
  section#get-in-touch
    .container
      .section-header
        h2.section-title.text-center.wow.fadeInDown Kontakt aufnehmen
        p.text-center.wow.fadeInDown
          | Für weitere Informationen, Anregungen o.ä. können Sie gern persönlich mit uns Kontakt aufnehmen.
  section#contact
    img.w-100(src="images/contact.jpg")
    #form.container
      .row
        .col-md-5.ml-auto.contact-form
          h3 Kontakt
          address
            strong KinderStärken Jena e.V.
            br
            |  Am Steiger 6
            br
            |  07743 Jena
            br
          form#main-contact-form(name='contact-form', method='post', action='https://formspree.io/kinderstaerken@gmail.com')
            .form-group
              input.form-control(type='text', name='name', placeholder='Ihr Name', required='' )
            .form-group
              input.form-control(type='email', name='_replyto', placeholder='Ihre eMail-Adresse', required='')
            .form-group
              input.form-control(type='text', name='subject', placeholder='Betreff', required='')
            .form-group
              textarea.form-control#message(rows='8', placeholder='Nachricht', required='')
            .form-group
              input(type="hidden", name="_language", value="de")
              input.btn.btn-primary(type="submit", value="Nachricht senden")
</template>

<style scoped>

#get-in-touch {
  padding: 100px 0 50px;
  background-image: -webkit-gradient(linear, left top, right top, from(#2caab3), to(#2c8cb3));
  background-image: linear-gradient(90deg, #2caab3 0%, #2c8cb3 100%);
  color: #fff;
}

#get-in-touch h1,
#get-in-touch h2 {
  color: #fff;
}

img {
  position: absolute;
  top: 0;
}

#form {
  margin-top: 80px;
  margin-bottom: 120px;
}


</style>
