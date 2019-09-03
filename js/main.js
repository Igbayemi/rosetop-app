    
        

    //update this with your js_form selector
    
    var form_id_js = "javascript_form";

    var data_js = {
        "access_token": "g3erzgq915tviedew0y70rdo"
    };

    function js_onSuccess() {
        // remove this to avoid redirect
        window.location = window.location.pathname + "";
    }

    function js_onError(error) {
        // remove this to avoid redirect
        alert('sucessfull')
    }

    var sendButton = document.getElementById("js_send");

    function js_send() {
        sendButton.value='Sending…';
        sendButton.disabled=true;
        var request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (request.readyState == 4 && request.status == 200) {
                js_onSuccess();
            } else
            if(request.readyState == 4) {
                js_onError(request.response);
            }
        };
         var subject= "RoseTop Customer Request"
         var name= document.querySelector('#name').value
         var email= document.querySelector('#email').value
        var date= document.querySelector('#date').value
        var engineType= document.querySelector('#engineType').value;
        var serviceType = document.querySelector('#serviceType').value;
        var location = document.querySelector('#location').value;
        var comment = document.querySelector('#comment').value;

        data_js['subject'] = subject;
        data_js['text'] ="NAME:- "+ name + "\n \n EMAIL:- " + email + "\n \n DATE:- " + date + "\n \n ENGINE TYPE:- "  + engineType + "\n \n SERVICE TYPE:- " + serviceType + "\n \n LOCATION:- " + location
        + "\n \n COMMENT:- " + comment;
        var params = toParams(data_js);

        request.open("POST", "https://postmail.invotes.com/send", true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        request.send(params);

        return false;
    }

    sendButton.onclick = js_send;

    function toParams(data_js) {
        var form_data = [];
        for ( var key in data_js ) {
            form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
        }

        return form_data.join("&");
    }

    var js_form = document.getElementById(form_id_js);
    js_form.addEventListener("submit", function (e) {
        e.preventDefault();
    });