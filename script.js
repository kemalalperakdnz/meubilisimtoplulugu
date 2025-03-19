(function() {
    
    emailjs.init("YOUR_PUBLIC_KEY");
})();


function sendWelcomeEmail(userEmail, userName) {
    const templateParams = {
        to_name: userName,
        to_email: userEmail,
        from_name: "MEÜ Bilişim Topluluğu",
        subject: "MEÜ Bilişim Topluluğu'na Hoş Geldiniz!",
        message: `Merhaba ${userName},

MEÜ Bilişim Topluluğu'na hoş geldiniz! 

Topluluğumuza katıldığınız için teşekkür ederiz. Sizinle birlikte teknoloji ve bilişim alanında birçok etkinlik, workshop ve projede bir araya geleceğiz.

Yaklaşan etkinliklerimiz ve duyurularımız hakkında bilgi almak için sosyal medya hesaplarımızı takip edebilirsiniz.

İyi günler dileriz!

Saygılarımızla,
MEÜ Bilişim Topluluğu Ekibi`
    };

    return emailjs.send('default_service', 'template_id', templateParams)
        .then(function(response) {
            console.log('Email başarıyla gönderildi!', response.status, response.text);
            return true;
        }, function(error) {
            console.error('Email gönderimi başarısız:', error);
            return false;
        });
}
function sendEventRegistrationEmail(userEmail, userName, eventName, eventDate) {
    const templateParams = {
        to_name: userName,
        to_email: userEmail,
        from_name: "MEÜ Bilişim Topluluğu",
        subject: "Etkinlik Kaydınız Alındı",
        message: `Merhaba ${userName},

"${eventName}" etkinliğine kayıt olduğunuz için teşekkür ederiz.

Etkinlik Detayları:
- Etkinlik: ${eventName}
- Tarih: ${eventDate}

Etkinlik yaklaştıkça size hatırlatma emaili göndereceğiz.

Herhangi bir sorunuz olursa bize ulaşmaktan çekinmeyin.

İyi günler dileriz!

Saygılarımızla,
MEÜ Bilişim Topluluğu Ekibi`
    };

    return emailjs.send('default_service', 'template_id', templateParams)
        .then(function(response) {
            console.log('Etkinlik kaydı emaili gönderildi!', response.status, response.text);
            return true;
        }, function(error) {
            console.error('Email gönderimi başarısız:', error);
            return false;
        });
}