// Curious jQuery, Agular does not like jQuery??
// Need to change this to work with Updates and new Manual requests!!!

$('#addUpdate').submit(function (e) {
    $('.alert.alert-danger').hide();
    if (!$('select#updater').val() || !$('input#chapter').val() || !$('select#section').val() || !$('textarea#update').val()) {
      if ($('.alert.alert-danger').length) {
        $('.alert.alert-danger').show();
      } else {
        $(this).prepend('<div role="alert" class="alert alert-danger">Missed reauired field, please try again</div>');
      }
      return false;
    }
  });