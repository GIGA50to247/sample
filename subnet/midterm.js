$(document).ready(function(){
    $("#mask_slash").change(function(){
        var pinili = $(this).prop('selectedIndex');
        $("#mask_ip").prop('selectedIndex', pinili);
        $("#number_of_hosts").prop('selectedIndex', pinili);
        });
     $("#mask_ip").change(function(){
        var pinili2 =$(this).prop('selectedIndex');
        $("#mask_slash").prop('selectedIndex', pinili2);
        $("#number_of_hosts").prop('selectedIndex', pinili2);
        });
     $("#number_of_hosts").change(function(){
        var pinili3 =$(this).prop('selectedIndex');
        $("#mask_slash").prop('selectedIndex', pinili3);
        $("#mask_ip").prop('selectedIndex', pinili3);
        });
});