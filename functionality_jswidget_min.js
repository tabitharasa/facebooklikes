javascript:(function()%20{function%20simulateMouseover(node,%20callback)%20{%20var%20evt%20=%20new%20MouseEvent('mouseover')%20node.dispatchEvent(evt);%20callback();}function%20setGrandchild()%20{%20grandchild%20=%20notifsFlyout.childNodes[2].firstChild.firstChild.firstChild;}var%20notifsCountVal%20=%20document.getElementById('notificationsCountValue');var%20notifsCountNode%20=%20notifsCountVal.firstChild;var%20notifsCount%20=%20Number(notifsCountNode.nodeValue);var%20grandchild;if%20(notifsCount%20>%200)%20{%20var%20newNotifsCount%20=%20notifsCount;%20var%20jewel%20=%20document.getElementById('fbNotificationsJewel');%20var%20notifsFlyout%20=%20document.getElementById('fbNotificationsFlyout');%20simulateMouseover(jewel,%20setGrandchild);%20var%20count%20=%200;%20while%20(grandchild%20==%20undefined%20&&%20count%20<%201000)%20{%20setGrandchild();%20count++;%20}%20var%20jewelItems%20=%20grandchild.firstChild.firstChild.firstChild.firstChild.childNodes;%20for%20(var%20i%20=%200;%20i%20<%20jewelItems.length;%20i++)%20{%20var%20node%20=%20jewelItems[i];%20var%20dataGt%20=%20(node.attributes['data-gt']%20!=%20undefined)%20?%20JSON.parse(node.attributes['data-gt'].nodeValue)%20:%20{};%20if%20(node.classList.contains('jewelItemNew')%20&&%20dataGt.hasOwnProperty('notif_type'))%20{%20if%20(dataGt['notif_type']%20==%20'like'%20||%20dataGt['notif_type']%20==%20'feedback_reaction_generic')%20{%20alert('removing%20jewelItemNew%20class');%20node.classList.remove('jewelItemNew');%20alert('decrementing%20newNotifsCount');%20newNotifsCount--;%20}%20}%20}%20if%20(newNotifsCount%20!=%20notifsCount)%20{%20if%20(newNotifsCount%20==%200)%20{%20alert('removing%20hasNew%20class');%20jewel.classList.remove('hasNew');%20alert('adding%20hidden_elem%20class%20to%20notificationsCountValue%20elem');%20notifsCountVal.classList.add('hidden_elem');%20}%20else%20if%20(newNotifsCount%20>%200)%20{%20alert('changing%20notifs%20count%20val');%20notifsCountNode.nodeValue%20=%20newNotifsCount;%20}%20}}})();