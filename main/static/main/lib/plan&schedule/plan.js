    $(document).ready(function(){
        $(".add-row").click(function(){
            var prodid = $("#prodid").val();
            var versionid = $("#versionid").val();
            var status = $("#status").val();
            var description = $("#description").val();
            var planstart = $("#planstart").val();
            var planend = $("#planend").val();
            var crwhenid = $("#crwhenid").val();
            var crbyid = $("#crbyid").val();
            var approved = $("#approved").val();
            var markup = "<tr><td>" + prodid + "</td><td>" + versionid + "</td><td>" + status+ "</td><td>"+ description+"</td><td>" + planstart + "</td><td>" + planend + "</td><td>" + crwhenid + "</td><td>" + crbyid + "</td><td>" + approved + "</td></tr>";
            $("#customtable tbody").append(markup);
        });
        
        
		
        $(".delete-row").click(function(){
            $("#customtable tbody").remove();
                    $('#container1').hide();
            document.getElementById("prodid").value = "" ;
            document.getElementById("crwhenid").value = "" ;
            document.getElementById("versionid").value = "" ;
            document.getElementById("crbyid").value = "" ;
            document.getElementById("status").value = "" ;
            document.getElementById("approved").value = "" ;
            document.getElementById("description").value = "" ;
            document.getElementById("approvid").value = "" ;
            document.getElementById("planstart").value ="" ;
            document.getElementById("planend").value = "" ;
        });
    });

    $(document).ready(function() {
  $("#customtable").on('mouseover','tr', function(e) {
    $(this).css("cursor", "pointer");
  });
  $("#customtable").on('click','tr', function (e) {
    var clickedCell = $(e.target).closest("tr");
     document.getElementById("opid").setAttribute('value',clickedCell.find('td:eq(0)').text());
     document.getElementById("verid").setAttribute('value',clickedCell.find('td:eq(1)').text());
     document.getElementById("stat").setAttribute('value',clickedCell.find('td:eq(2)').text());
     document.getElementById("desc").setAttribute('value',clickedCell.find('td:eq(3)').text());
     document.getElementById("plans").setAttribute('value',clickedCell.find('td:eq(4)').text());
     document.getElementById("plane").setAttribute('value',clickedCell.find('td:eq(5)').text());
     document.getElementById("createwhen").setAttribute('value',clickedCell.find('td:eq(6)').text());
     document.getElementById("createby").setAttribute('value',clickedCell.find('td:eq(7)').text());
     document.getElementById("approvby").setAttribute('value',clickedCell.find('td:eq(8)').text());
     $("#container1").show();
  });
});
  
  /*$(document).ready(function() {
  $("#customtable1").on('mouseover','tr', function(e) {
    $(this).css("cursor", "pointer");
  });
  $("#customtable1").on('click','tr', function (e) {
    var clickedCell = $(e.target).closest("tr");
     document.getElementById("opid").setAttribute('value',clickedCell.find('td:eq(1)').text());
     document.getElementById("verid").setAttribute('value',clickedCell.find('td:eq(2)').text());
     document.getElementById("stat").setAttribute('value',clickedCell.find('td:eq(3)').text());
     document.getElementById("desc").setAttribute('value',clickedCell.find('td:eq(4)').text());
     document.getElementById("plans").setAttribute('value',clickedCell.find('td:eq(5)').text());
     document.getElementById("plane").setAttribute('value',clickedCell.find('td:eq(6)').text());
     document.getElementById("createwhen").setAttribute('value',clickedCell.find('td:eq(7)').text());
     document.getElementById("createby").setAttribute('value',clickedCell.find('td:eq(8)').text());
     document.getElementById("approvby").setAttribute('value',clickedCell.find('td:eq(9)').text());
     $("#container1").show();
  });
});*/
  
  function validate() {
    x=document.getElementById("opid")
    x.disabled = !x.disabled;
    x=document.getElementById("verid")
    x.disabled = !x.disabled;
    x=document.getElementById("stat")
    x.disabled = !x.disabled;
    x=document.getElementById("desc")
    x.disabled = !x.disabled;
    x=document.getElementById("plans")
    x.disabled = !x.disabled;
    x=document.getElementById("plane")
    x.disabled = !x.disabled;
    x=document.getElementById("createwhen")
    x.disabled = !x.disabled;
    x=document.getElementById("createby")
    x.disabled = !x.disabled;
    x=document.getElementById("approvby")
    x.disabled = !x.disabled;
}