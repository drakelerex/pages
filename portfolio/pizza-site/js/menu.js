var modalInfoWarning = '<div class="modal fade" id="myModal"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Info</h4><button type="button" class="close" data-dismiss="modal">&times;</button></div><div class="modal-body">This site is not a real pizzaria, it is a portfolio webpage</div><div class="modal-footer"><button type="button" class="btn btn-danger" data-dismiss="modal">Close</button></div>'
$("#modalInfoWarning").prepend(modalInfoWarning);
$(window).on('load',function(){
  $('#myModal').modal('show');
});