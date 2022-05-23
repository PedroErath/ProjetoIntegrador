import PushNotification from "react-native-push-notification"
let navegador;
class Notificacao {

    setNavegador(novoConteudo) {
        navegador = novoConteudo
    }

    criarCanal = () => {
        PushNotification.createChannel(
            {
                channelId: "channel-id", // (required)
                channelName: "My channel", // (required)
                channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
                playSound: false, // (optional) default: true
                soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
                //importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
                vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
            },
            (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
        );
    }

    configurar = () => {
        PushNotification.configure({
            onRegister: function (token) {
                console.log("[NotificationManager] onRegister token:", token);
            },
            onNotification: function (notification) {
                console.log("[NotificationManager] onNotification:", notification);
                navegador.navigate("Detalhes") //Redirecionamento ao clicar na notificação
            },
            onAction: function (notification) {
                console.log("ACTION:", notification.action)
            }
        })
    }

    buildAndroidNotification = (id, title, message, data = {}, options = {}) => {
        return {
            id: id,
            autoCancel: true,
            channelId: "channel-id",
            largeIcon: options.largeIcon || "ic_launcher",
            smallIcon: options.smallIcon || "ic_launcher",
            bigText: message || '',
            subText: title || '',
            vibrate: options.vibrate || false,
            vibration: options.vibration || 300,
            priority: options.priority || "high",
            importance: options.importance || "high",
            data: data
        }
    }

    showNotification = (id, title, message, data = {}, options = {}) => {
        PushNotification.localNotification({
            /* Propriedades do Android */
            ...this.buildAndroidNotification(id, title, message, data, options),

            /* Propriedades do Android e iOS */
            title: title || "",
            message: message || "",
            playSound: options.playSound || false,
            soundName: options.soundName || 'default',
            userInteraction: false
        })
    }

    cancelAllLocalNotification = () => {
        PushNotification.cancelAllLocalNotifications();
    }

    agendarNotificacao() {
        PushNotification.localNotificationSchedule({
            //... You can use all the options from localNotifications
            id: 2,
            channelId: 'channel-id',
            title: 'Ja deixou seu FEEDBACK?',
            message: "Acesse o App da DOCE SABOR e deixe seu feedback dos nossos doces, caso não tenha provado, peça ja o seu!!!", // (required)
            date: new Date(Date.now() + 5 * 1000), // in 5s
            allowWhileIdle: false, // (optional) set notification to work while on doze, default: false
            repeatTime: 180 * 1000,
            repeatType: 'time'
        });
    }

}

export const notificationManager = new Notificacao();