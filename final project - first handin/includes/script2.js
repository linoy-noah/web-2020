$(document).ready(function () {
  $(".del").click(function () {
    if (confirm("Are you sure you want to delete delivery?")==true)
      $(this).closest('tr').remove()
  });
});