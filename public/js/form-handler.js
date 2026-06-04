// Web3Forms submission handler for contact form and quote form
(function () {
  var cfg = window.__KADA_FORM_CONFIG || {};
  var endpoint = atob(cfg.e || '');
  var apiKey = atob(cfg.k || '');

  function setupForm(formId, successId, errorId, btnId, emailSubject) {
    var form = document.getElementById(formId);
    if (!form) return;

    var successDiv = document.getElementById(successId);
    var errorDiv = document.getElementById(errorId);
    var submitBtn = document.getElementById(btnId);
    if (!successDiv || !errorDiv || !submitBtn) return;

    var originalBtnHTML = submitBtn.innerHTML;
    var sendingText = form.getAttribute('data-sending-text') || 'Gönderiliyor...';

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      successDiv.classList.add('hidden');
      errorDiv.classList.add('hidden');

      submitBtn.disabled = true;
      submitBtn.innerHTML =
        '<svg class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">' +
        '<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>' +
        '<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>' +
        '</svg> ' + sendingText;

      var formData = new FormData(form);
      formData.append('access_key', apiKey);
      formData.append('subject', emailSubject);

      fetch(endpoint, {
        method: 'POST',
        body: formData,
      })
        .then(function (response) { return response.json(); })
        .then(function (data) {
          if (data.success) {
            successDiv.classList.remove('hidden');
            form.reset();
          } else {
            errorDiv.classList.remove('hidden');
          }
        })
        .catch(function () {
          errorDiv.classList.remove('hidden');
        })
        .finally(function () {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnHTML;
        });
    });
  }

  // Contact form
  setupForm(
    'contact-form',
    'contact-success',
    'contact-error',
    'contact-submit-btn',
    'KADA Radyatör - Yeni İletişim Formu'
  );

  // Quote form
  setupForm(
    'quote-request-form',
    'quote-success',
    'quote-error',
    'quote-submit-btn',
    'KADA Radyatör - Yeni Teklif Talebi'
  );
})();
