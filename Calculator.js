$("#num1").on('click', function (){
    $("#inputBox").val($("#inputBox").val() + '1');
})

$("#num2").on('click', function (){
    $("#inputBox").val($("#inputBox").val() + '2');
})

$("#num3").on('click', function (){
    $("#inputBox").val($("#inputBox").val() + '3');
})

$("#num4").on('click', function (){
    $("#inputBox").val($("#inputBox").val() + '4');
})

$("#num5").on('click', function (){
    $("#inputBox").val($("#inputBox").val() + '5');
})

$("#num6").on('click', function (){
    $("#inputBox").val($("#inputBox").val() + '6');
})

$("#num7").on('click', function (){
    $("#inputBox").val($("#inputBox").val() + '7');
})

$("#num8").on('click', function (){
    $("#inputBox").val($("#inputBox").val() + '8');
})

$("#num9").on('click', function (){
    $("#inputBox").val($("#inputBox").val() + '9');
})

$("#zero").on('click', function (){
    $("#inputBox").val($("#inputBox").val() + '0');
})

$("#dzero").on('click', function (){
    $("#inputBox").val($("#inputBox").val() + '00');
})

$("#dot").on('click', function (){
    $("#inputBox").val($("#inputBox").val() + '.');
})

$("#module").on('click', function (){
    $("#inputBox").val($("#inputBox").val() + '%');
})

$("#divide").on('click', function (){
    $("#inputBox").val($("#inputBox").val() + '/');
})

$("#mult").on('click', function (){
    $("#inputBox").val($("#inputBox").val() + '*');
})

$("#subs").on('click', function (){
    $("#inputBox").val($("#inputBox").val() + '-');
})

$("#add").on('click', function (){
    $("#inputBox").val($("#inputBox").val() + '+');
})

$("#del").on('click', function () {
    const Value = $("#inputBox").val();
    $("#inputBox").val(Value.slice(0, -1));
});

$("#clear").on('click', function () {
    $("#inputBox").val('');
});

$("#equal").on('click', function () {
    let value = $("#inputBox").val();
        $("#inputBox").val(eval(value));
});