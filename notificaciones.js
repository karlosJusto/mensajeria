// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional



  
  var firebaseConfig = {
  apiKey: "AIzaSyAGxfWhsmI3-XMIkhChEIzX0bBm1YEP28s",
  authDomain: "superpollo-app.firebaseapp.com",
  projectId: "superpollo-app",
  storageBucket: "superpollo-app.appspot.com",
  messagingSenderId: "276249857637",
  appId: "1:276249857637:web:eed28f628e4cd2ef7d808c",
  measurementId: "G-TF7P4TGCLB"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  function requestPermission() {
    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        // TODO(developer): Retrieve a registration token for use with FCM.
        // In many cases once an app has been granted notification permission,
        // it should update its UI reflecting this.
        resetUI();
      } else {
        console.log('Unable to get permission to notify.');
      }
    });
  }

  /*const messaging =firebase.messaging();
 



  window.onload=function(){
    pedirPermiso();
    document.getElementById("autorizar").addEventListener('click',function(){
        pedirPermiso();
    });
    let enableForegroundNotification=true;
    messaging.onMessage(function(payload){
        console.log("mensaje recibido");
        if(enableForegroundNotification){
            const {title, ...options}=JSON.parse(payload.data.notification);
            navigator.serviceWorker.getRegistrations().then( registration =>{
                registration[0].showNotification(title, options);
            });
        }
    });

    function pedirPermiso(){
        messaging.requestPermission()
        .then(function(){
            console.log("Se han aceptado las notificaciones");
            hideAlert();
            return messaging.getToken();
        }).then(function(token){
            console.log(token);
            guardarToken(token);
        }).catch(function(err){
            console.log('No se ha recibido el permiso');
            showAlert();
        });
    }

   
  /*  function guardarToken(token){
        var formData=new FormData();
        formData.append('token',token);
        axios.post('./php/guardarToken.php',formData).then( respuesta=>{
            console.log(respuesta);
        }).catch( e=>{
            console.log(e);
        });
    }
    function showAlert(){
        document.querySelector("#alertaError").classList.remove('d-none');
    }
    function hideAlert(){
        document.querySelector("#alertaError").classList.add('d-none');
    }
  }*/