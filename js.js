/* onload to run the function after loading the page */
window.onload = function () {
/*to add new class "completed" in "ul" to style it with the bar*/

$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});
/* delate il when x is clicked*/
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove()
    });
    event.stopPropagation();
});
/*add li to the list by pressing enter keyword ===13 */
$("input[type='text'").keypress(function (event){
    if(event.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        $(".to-do").append("<li> " + todoText +  "<span><em class = 'remove'>X</em></span></li>")
    }
});
}
