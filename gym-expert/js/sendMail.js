(function ($) {
  async function submitInfoToEmailAPI(event) {
    event.preventDefault();

    const URL = 'https://api.maxfit7.com/contact-us';

    const nameInput = $('input[name="username"]');
    const emailInput = $('input[name="email"]');
    const subjectInput = $('input[name="subject"]');
    const messageTextarea = $('textarea[name="message"]');

    const name = nameInput.val();
    // const NameRegex = /[A-Za-z]{1}[A-Za-z]/;
    // if (!NameRegex.test(name)) {
    //   alert('Name can not less than 2 char');
    //   return;
    // }

    const email = emailInput.val();
    // var RegexEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
    // if (!RegexEmail.test(email)) {
    //   alert('Please enter valid email address');
    //   return;
    // }

    const subject = subjectInput.val();
    const desc = messageTextarea.val();
    const data = {
      name,
      email,
      subject,
      desc,
    };

    try {
      const response = await fetch(URL, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      });

      const { statusCode } = await response.json();

      if (statusCode === 200) {
        console.log('Mail Sent');
      }

      nameInput.val('');
      emailInput.val('');
      subjectInput.val('');
      messageTextarea.val('');
    } catch (error) {
      console.log(error);
    }
  }

  $(document).ready(function () {
    const form = $('#btn-contact-us-submit');
    const btn = $('#btn-contact-us-submit');
    btn.click(submitInfoToEmailAPI);
  });
})(window.jQuery);
