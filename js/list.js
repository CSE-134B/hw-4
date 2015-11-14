function showMsg(element){
            var msgElement = (element.parentNode.parentNode.getElementsByClassName("message"))[0];
            // alert(msgElement.innerHTML);
            msgElement.style.visibility="visible";
        }

        function deleteHabit(element){
            var child = element.parentNode.parentNode;
            var parent = child.parentNode;
            parent.removeChild(child);
        }