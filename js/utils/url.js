/* URL related utility functions.
*/

function getURLParamValue (param_name) {
    var param_value = new RegExp('[\?&]' + param_name + '=([^&#]*)').exec(window.location.href);
    if (param_value === null){
       return null;
    }
    else{
       return param_value[1];
    }
}
