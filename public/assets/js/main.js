$(document).ready(function() {
  AOS.init({
    duration: 900,
    easing: 'ease-out-cubic',
    once: true,
    offset: 120
  });

  function updateDateTime() {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const now = new Date();
      const formattedDate = now.toLocaleDateString('en-US', options);

      $('#datetime').html(
          '<i class="bi bi-calendar3 me-2"></i>' + 
          formattedDate +
          '<i class="bi bi-geo-alt-fill ms-2"></i>' + " Indonesia"
      );
  }

  // Update saat page load
  updateDateTime();

  // Opsional: update setiap 1 menit
  setInterval(updateDateTime, 60000);
});