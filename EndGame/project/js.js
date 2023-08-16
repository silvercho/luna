function page(page){
  var searchDateType = $("#searchDateType").val();
  var searchSellStatus = $("#searchSellStatus").val();
  var searchBy = $("#searchBy").val();
  var searchQuery = $("#searchQuery").val();

  location.href="/admin/items/" + page + "?searchDateType=" +searchDateType
  + "&searchSellStatus=" + searchSellStatus
  + "&searchBy=" + searchBy
  + "&searchQuery=" + searchQuery; 

<div th:with="start=${(items.number/maxPage)*maxPage + 1}, 
      end=(${(items.totalPages == 0) ? 1 : (start + (maxPage - 1) < items.totalPages ? start + (maxPage - 1) : items.totalPages)})" >
            <ul class="pagination justify-content-center">
                
            </ul>
            
        </div>
  